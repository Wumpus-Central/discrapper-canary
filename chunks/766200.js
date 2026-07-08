i.d(t, { Ni: () => o.n, ET: () => C, lv: () => o.t, noOpFlowModuleMachine: () => d }), i(209688);
var r = i(588233);
i(171251), i(886421), i(799201), i(401959);
var n = i(64755),
    o = i(711177);
function a(e) {
    return e.flow?.flowId;
}
function s(e, t) {
    let i = e.homeScreen?.visible === !0,
        r = t || i,
        n = void 0 !== e.steps ? e.steps.length + +!!r : void 0;
    if (i) return { key: "0:HOME", module: "HOME", payload: { moduleIndex: 0, totalModules: n } };
    if (void 0 === e.currentStep || "" === e.currentStep) return;
    let o = void 0 !== e.currentStepIndex ? e.currentStepIndex + +!!r : void 0;
    return { key: `${o ?? -1}:${e.currentStep}`, module: e.currentStep, payload: { moduleIndex: o, totalModules: n } };
}
let l = (0, n.i)(({ sendBack: e, input: t }) => {
    let { machine: i, config: r } = t;
    if (!i) return () => {};
    let o = (0, n.s)(i, { input: { config: r } }),
        a = o.subscribe({
            complete: () => {
                e({ type: "MODULE_COMPLETE" });
            },
            error: (t) => {
                e({ type: "MODULE_ERROR", error: t });
            },
        });
    return (
        o.start(),
        () => {
            a.unsubscribe(), o.stop();
        }
    );
});
var c = i(266561);
let d = (0, n.t)({}).createMachine({
    id: "noOpFlowModule",
    initial: "finished",
    states: { finished: { type: "final" } },
});
function u(e, t) {
    let i = { ...e?.configuration, ds: t?.ds };
    return e?.key === "ID" || e?.key === "TUTORIAL_ID" || e?.key === "SECOND_ID" || e?.key === "SELFIE"
        ? { ...i, ageAssurance: i.ageAssurance ?? t?.ageAssurance }
        : i;
}
function h(e, t) {
    return {
        flow: void 0,
        error: void 0,
        errorCode: void 0,
        steps: [],
        currentStepIndex: -1,
        currentStep: void 0,
        config: void 0,
        getFlow: e.getFlow,
        registeredModules: e.registeredModules,
        lazyRegisteredModules: e.lazyRegisteredModules,
        currentModuleMachine: void 0,
        getFinishStatus: e.getFinishStatus,
        enableHome: e.enableHome,
        finishStatus: void 0,
        isHomeContinueLoading: t,
    };
}
(0, n.t)({
    types: { context: {}, events: {}, input: {} },
    actors: { fetchFlow: (0, n.a)(async ({ input: e, signal: t }) => e.getFlow(t)) },
    actions: {
        resetContext: (0, n.r)(({ context: e }) => ({
            flow: void 0,
            error: void 0,
            steps: [],
            currentStepIndex: -1,
            currentStep: void 0,
            config: void 0,
            getFlow: e.getFlow,
        })),
        setFlowData: (0, n.r)(({ event: e }) => {
            let t = e.output;
            return {
                flow: t,
                steps: (t.flowModules ?? []).map((e) => e.key),
                currentStepIndex: (t.flowModules ?? []).length > 0 ? 0 : -1,
                currentStep: t.flowModules?.[0]?.key,
                config: t.flowModules?.[0]?.configuration,
            };
        }),
        setError: (0, n.r)(({ event: e }) => ({ error: String(e.error) })),
        incrementStep: (0, n.r)(({ context: e }) => {
            let t = e.currentStepIndex + 1,
                i = e.flow?.flowModules?.[t];
            return { currentStepIndex: t, currentStep: i?.key, config: i?.configuration };
        }),
        decrementStep: (0, n.r)(({ context: e }) => {
            let t = e.currentStepIndex - 1,
                i = e.flow?.flowModules?.[t];
            return { currentStepIndex: t, currentStep: i?.key, config: i?.configuration };
        }),
    },
    guards: {
        isLastStep: ({ context: e }) => e.currentStepIndex >= 0 && e.currentStepIndex === e.steps.length - 1,
        canGoNext: ({ context: e }) => e.currentStepIndex >= 0 && e.currentStepIndex < e.steps.length - 1,
        canGoPrev: ({ context: e }) => e.currentStepIndex > 0,
    },
}).createMachine({
    id: "flow",
    initial: "idle",
    context: ({ input: e }) => ({
        flow: void 0,
        error: void 0,
        steps: [],
        currentStepIndex: -1,
        currentStep: void 0,
        config: void 0,
        getFlow: e.getFlow,
    }),
    states: {
        idle: { on: { LOAD: { target: "loading", actions: "resetContext" } } },
        loading: {
            invoke: {
                id: "fetchFlow",
                src: "fetchFlow",
                input: ({ context: e }) => ({ getFlow: e.getFlow }),
                onDone: { target: "ready", actions: "setFlowData" },
                onError: { target: "error", actions: "setError" },
            },
            on: { CANCEL: { target: "idle", actions: "resetContext" } },
        },
        ready: {
            on: {
                NEXT_STEP: [
                    { target: "finished", guard: "isLastStep" },
                    { target: "ready", guard: "canGoNext", actions: "incrementStep" },
                ],
                PREV_STEP: { target: "ready", guard: "canGoPrev", actions: "decrementStep" },
                RESET: { target: "idle", actions: "resetContext" },
            },
        },
        finished: { on: { RESET: { target: "idle", actions: "resetContext" } } },
        error: { on: { RESET: { target: "idle", actions: "resetContext" } } },
    },
});
let p = new WeakSet(),
    f = { HOME_CONTINUE: { actions: "setHomeContinueLoading" } },
    m = (0, n.t)({
        types: { context: {}, events: {}, input: {} },
        actors: {
            fetchFlow: (0, n.a)(async ({ input: e, signal: t }) => e.getFlow(t)),
            notifyBackend: (0, n.a)(async ({ input: e, signal: t }) => await e.getFinishStatus(e.flowId, t)),
            runChildModule: l,
            resolveCurrentModuleMachine: (0, n.a)(async ({ input: e }) => {
                if (!e.moduleKey) return;
                let t = e.modules[e.moduleKey];
                if (t) return t;
                let i = e.lazyModules[e.moduleKey];
                if (!i) return;
                let r = await i();
                return r && "object" == typeof r && "default" in r && r.default ? r.default : r;
            }),
        },
        actions: {
            resetContext: (0, n.r)(({ context: e }) => h(e, !1)),
            resetContextForLoad: (0, n.r)(({ context: e }) => h(e, e.isHomeContinueLoading)),
            setHomeContinueLoading: (0, n.r)({ isHomeContinueLoading: !0 }),
            clearHomeContinueLoading: (0, n.r)({ isHomeContinueLoading: !1 }),
            setFlowData: (0, n.r)(({ event: e }) => {
                let t = e.output,
                    i = t.flowModules ?? [],
                    r = i[0],
                    n = u(r, t);
                return {
                    flow: t,
                    steps: i.map((e) => e.key),
                    currentStepIndex: i.length > 0 ? 0 : -1,
                    currentStep: r?.key,
                    config: n,
                    currentModuleMachine: void 0,
                };
            }),
            setError: (0, n.r)(({ event: e }) => {
                let t = e.error;
                return { error: t?.message ?? String(t), errorCode: t?.status };
            }),
            incrementStep: (0, n.r)(({ context: e }) => {
                let t = e.currentStepIndex + 1,
                    i = e.flow?.flowModules?.[t],
                    r = u(i, e.flow);
                return { currentStepIndex: t, currentStep: i?.key, config: r, currentModuleMachine: void 0 };
            }),
            setCurrentModuleMachine: (0, n.r)(({ event: e }) => ({ currentModuleMachine: e.output })),
            prefetchNextModule: ({ context: e }) => {
                !(function (e) {
                    let t = e.steps[e.currentStepIndex + 1];
                    if (!t) return;
                    let i = e.lazyRegisteredModules[t];
                    !i ||
                        p.has(i) ||
                        (p.add(i),
                        i().catch(() => {
                            p.delete(i);
                        }));
                })(e);
            },
            setFinishStatus: (0, n.r)(({ event: e }) => ({ finishStatus: e.output })),
        },
        guards: {
            isLastStep: ({ context: e }) => e.currentStepIndex >= 0 && e.currentStepIndex === e.steps.length - 1,
            canGoNext: ({ context: e }) => e.currentStepIndex >= 0 && e.currentStepIndex < e.steps.length - 1,
            shouldEnterHome: ({ context: e }) =>
                (function (e) {
                    if (!0 !== e.enableHome || e.flow?.disableLaunchScreen === !0 || !0 === e.isHomeContinueLoading)
                        return !1;
                    let t = +("REDIRECT_TO_MOBILE" === e.steps[0]);
                    return e.currentStepIndex === t;
                })(e),
            hasModule: ({ context: e, event: t }) => {
                if (!("output" in t)) return !1;
                let i = t.output.flowModules?.[0]?.key;
                return !!i && (null != e.registeredModules[i] || null != e.lazyRegisteredModules[i]);
            },
            hasCurrentModuleMachine: ({ event: e }) => "output" in e && null != e.output,
        },
    }).createMachine({
        id: "orchestratedFlow",
        initial: "idle",
        context: ({ input: e }) =>
            h(
                {
                    getFlow: e.getFlow,
                    registeredModules: e.modules ?? {},
                    lazyRegisteredModules: e.lazyModules ?? {},
                    getFinishStatus: e.getFinishStatus ?? c.t,
                    enableHome: !0 === e.enableHome,
                },
                !1,
            ),
        states: {
            idle: { on: { LOAD: { target: "loading", actions: "resetContextForLoad" }, ...f } },
            loading: {
                invoke: {
                    id: "fetchFlow",
                    src: "fetchFlow",
                    input: ({ context: e }) => ({ getFlow: e.getFlow }),
                    onDone: [
                        { target: "resolvingModule", guard: "hasModule", actions: "setFlowData" },
                        {
                            target: "error",
                            actions: (0, n.r)({
                                error: ({ event: e }) => {
                                    let t = e.output.flowModules?.[0]?.key;
                                    return t
                                        ? `No registered module found for: ${t}`
                                        : "No registered module found: flow has no modules";
                                },
                            }),
                        },
                    ],
                    onError: { target: "error", actions: "setError" },
                },
                on: { CANCEL: { target: "idle", actions: "resetContext" }, ...f },
            },
            resolvingModule: {
                invoke: {
                    id: "resolveCurrentModuleMachine",
                    src: "resolveCurrentModuleMachine",
                    input: ({ context: e }) => ({
                        moduleKey: e.currentStep,
                        modules: e.registeredModules,
                        lazyModules: e.lazyRegisteredModules,
                    }),
                    onDone: [
                        { target: "home", guard: "shouldEnterHome", actions: ["setCurrentModuleMachine"] },
                        {
                            target: "runningModule",
                            guard: "hasCurrentModuleMachine",
                            actions: ["setCurrentModuleMachine", "prefetchNextModule"],
                        },
                        {
                            target: "error",
                            actions: (0, n.r)(({ context: e }) => ({
                                error: e.currentStep
                                    ? `No registered module found for: ${e.currentStep}`
                                    : "No registered module found: flow has no modules",
                            })),
                        },
                    ],
                    onError: { target: "error", actions: "setError" },
                },
                on: { RESET: { target: "idle", actions: "resetContext" }, ...f },
            },
            home: {
                on: {
                    HOME_CONTINUE: {
                        target: "runningModule",
                        actions: ["clearHomeContinueLoading", "prefetchNextModule"],
                    },
                    RESET: { target: "idle", actions: "resetContext" },
                },
            },
            runningModule: {
                entry: "clearHomeContinueLoading",
                invoke: {
                    id: "currentModule",
                    src: "runChildModule",
                    input: ({ context: e }) => {
                        if (!e.currentStep) throw Error("No current step");
                        return { machine: e.currentModuleMachine, config: e.config };
                    },
                    onDone: [
                        { target: "completing", guard: "isLastStep" },
                        { target: "resolvingModule", actions: "incrementStep" },
                    ],
                    onError: { target: "error", actions: "setError" },
                },
                on: {
                    MODULE_COMPLETE: [
                        { target: "completing", guard: "isLastStep" },
                        { target: "resolvingModule", actions: "incrementStep" },
                    ],
                    MODULE_ERROR: {
                        target: "error",
                        actions: (0, n.r)(({ event: e }) => ({ error: String(e.error) })),
                    },
                    COMPLETE_FLOW: { target: "completing" },
                    RESET: { target: "idle", actions: "resetContext" },
                },
            },
            completing: {
                invoke: {
                    id: "notifyBackend",
                    src: "notifyBackend",
                    input: ({ context: e }) => ({ getFinishStatus: e.getFinishStatus, flowId: e.flow?.flowId }),
                    onDone: { target: "finished", actions: "setFinishStatus" },
                    onError: { target: "error", actions: "setError" },
                },
                on: { RESET: { target: "idle", actions: "resetContext" } },
            },
            finished: { on: { RESET: { target: "idle", actions: "resetContext" } } },
            error: { entry: "clearHomeContinueLoading", on: { RESET: { target: "idle", actions: "resetContext" } } },
        },
    });
function g(e, t) {
    let { value: i, context: r } = e,
        n = (function (e) {
            let { value: t } = e;
            return "idle" === t
                ? "idle"
                : "loading" === t || "resolvingModule" === t || "completing" === t || "object" == typeof t
                  ? "loading"
                  : "finished" === t
                    ? "finished"
                    : "error" === t
                      ? "error"
                      : "ready";
        })(e),
        o = (function (e, t, i, r) {
            let { enableHome: n } = r,
                o = e.context.flow?.disableLaunchScreen === !0,
                a = !0 === n && !1 === o,
                s = "finished" === t || "error" === t,
                l = "completing" === e.value,
                c = +("REDIRECT_TO_MOBILE" === e.context.steps[0]),
                d = e.context.currentStepIndex === c,
                u = "resolvingModule" === e.value && a && d,
                h = i || u,
                p = !1 === s && a && !1 === l,
                f = !!p && h,
                m = "ready" === t && !1 === f ? e.context.currentStep : void 0,
                g = p && !1 === e.context.isHomeContinueLoading && h;
            return {
                homeScreen: { visible: f, isContinueLoading: !s && e.context.isHomeContinueLoading },
                presentation: {
                    isAwaitingReady: "idle" === t || "loading" === t,
                    lazyModuleKey: m,
                    shouldPrefetchHome: g,
                },
            };
        })(e, n, "home" === i, t);
    if ("idle" === n) return { status: "idle", homeScreen: o.homeScreen, presentation: o.presentation };
    if ("loading" === n) return { status: "loading", homeScreen: o.homeScreen, presentation: o.presentation };
    if ("finished" === n)
        return {
            status: "finished",
            flow: r.flow ?? {},
            finishStatus: r.finishStatus ?? { redirectionUrl: "", action: "none", scoreStatus: "UNKNOWN" },
            homeScreen: o.homeScreen,
            presentation: o.presentation,
        };
    if ("error" === n)
        return {
            status: "error",
            error: r.error ?? "Unknown error",
            errorCode: r.errorCode,
            homeScreen: o.homeScreen,
            presentation: o.presentation,
        };
    let a = "runningModule" === i ? e.children.currentModule?.getSnapshot() : null;
    return {
        status: "ready",
        flow: r.flow ?? {},
        steps: r.steps,
        currentStepIndex: r.currentStepIndex,
        currentStep: r.currentStep,
        config: r.config,
        moduleState: a ?? null,
        homeScreen: o.homeScreen,
        presentation: o.presentation,
    };
}
function v(e, t, i) {
    return new Promise((r, n) => {
        let o = t(e.getSnapshot());
        if (i(o)) return void r();
        if ("error" === o.status) return void n(Error(o.error));
        if ("finished" === o.status) return void n(Error("Flow finished"));
        let a = e.subscribe(() => {
            let o = t(e.getSnapshot());
            i(o)
                ? (a.unsubscribe(), r())
                : "error" === o.status
                  ? (a.unsubscribe(), n(Error(o.error)))
                  : "finished" === o.status && (a.unsubscribe(), n(Error("Flow finished")));
        });
    });
}
function C(e) {
    let t = (0, n.s)(m, {
            input: {
                getFlow: e.getFlow ?? o.t,
                modules: e.modules,
                lazyModules: e.lazyModules,
                getFinishStatus: e.getFinishStatus,
                enableHome: e.enableHome,
            },
        }).start(),
        i = !0 === e.enableHome,
        l = { enableHome: i };
    return (function (e, t = {}) {
        let i,
            n,
            o = {
                clear: (n = (0, r.b)()).clear,
                emit(e) {
                    n.emit({ ...e, timestamp: (0, r.x)() });
                },
                subscribe: n.subscribe,
            },
            l = !1,
            c = !1,
            d = !1,
            u = !1,
            h = !1,
            p = !1,
            f = new Set();
        function m(e) {
            void 0 === i ||
                f.has(i.key) ||
                (f.add(i.key),
                o.emit({
                    type: "flow.module.completed",
                    interviewId: t.interviewId,
                    flowId: a(e),
                    module: i.module,
                    payload: i.payload,
                }));
        }
        let g = e.subscribe(function (e) {
                if ("idle" === e.status)
                    return void ((l = !1),
                    (c = !1),
                    (d = !1),
                    (u = !1),
                    (h = !1),
                    (p = !1),
                    (i = void 0),
                    (f = new Set()));
                if ("loading" === e.status && !1 === l) {
                    (l = !0), o.emit({ type: "flow.started", interviewId: t.interviewId });
                    return;
                }
                let r = e.flow;
                if ("ready" === e.status && void 0 !== r) {
                    let n,
                        l = { ...e, flow: r },
                        d = s(l, p);
                    if ((void 0 !== i && void 0 !== d && i.key !== d.key && m(l), !1 === c)) {
                        let e;
                        (c = !0),
                            o.emit({
                                type: "flow.ready",
                                interviewId: t.interviewId,
                                flowId: a(l),
                                payload:
                                    ((e = {
                                        flow: l.flow,
                                        steps: l.steps ?? [],
                                        currentStepIndex: l.currentStepIndex ?? -1,
                                    }),
                                    void 0 === l.currentStep ? e : { ...e, currentStep: l.currentStep }),
                            });
                    }
                    l.homeScreen?.visible === !0 && (p = !0),
                        void 0 === (n = s(l, p)) ||
                            (n.key !== i?.key &&
                                ((i = n),
                                o.emit({
                                    type: "flow.module.started",
                                    interviewId: t.interviewId,
                                    flowId: a(l),
                                    module: n.module,
                                    payload: n.payload,
                                })));
                    return;
                }
                if ("finished" === e.status && !1 === d) {
                    m(e);
                    let i = e.finishStatus;
                    (d = !0),
                        o.emit({
                            type: "flow.completed",
                            interviewId: t.interviewId,
                            flowId: a(e),
                            ...(void 0 !== i ? { payload: i } : {}),
                        });
                    return;
                }
                if ("error" === e.status && !1 === u) {
                    (u = !0),
                        o.emit({
                            type: "flow.error",
                            interviewId: t.interviewId,
                            flowId: a(e),
                            error: e.error ?? "Unknown error",
                        });
                    return;
                }
                "closed" === e.status &&
                    !1 === h &&
                    ((h = !0), o.emit({ type: "flow.closed", interviewId: t.interviewId, flowId: a(e) }));
            }),
            v = e.stop.bind(e),
            C = !1;
        return (
            Object.defineProperty(e, "subscribeFlowEvent", {
                configurable: !0,
                enumerable: !0,
                value: o.subscribe,
                writable: !0,
            }),
            Object.defineProperty(e, "stop", {
                configurable: !0,
                enumerable: !0,
                value() {
                    C || ((C = !0), g(), v());
                },
                writable: !0,
            }),
            e
        );
    })(
        (0, n.c)({
            actor: t,
            mapState: (e) => g(e, l),
            createApi: (e) =>
                (function ({ actor: e, getSnapshot: t, trackElementClicked: i }, r) {
                    let { enableHome: n } = r;
                    function o() {
                        return g(t(), { enableHome: n });
                    }
                    return {
                        load() {
                            e.send({ type: "LOAD" });
                        },
                        cancel() {
                            i?.("cancel"), e.send({ type: "CANCEL" });
                        },
                        reset() {
                            e.send({ type: "RESET" });
                        },
                        completeModule() {
                            i?.("completeModule"), e.send({ type: "MODULE_COMPLETE" });
                        },
                        completeFlow() {
                            i?.("completeFlow"), e.send({ type: "COMPLETE_FLOW" });
                        },
                        errorModule(t) {
                            e.send({ type: "MODULE_ERROR", error: t });
                        },
                        send(t) {
                            e.send(t);
                        },
                        get canNext() {
                            return (function () {
                                let e = t(),
                                    { currentStepIndex: i, steps: r } = e.context;
                                return "runningModule" === e.value && i >= 0 && i < r.length - 1;
                            })();
                        },
                        getModuleConfig: function (e) {
                            let i = t();
                            if ("runningModule" === i.value)
                                return i.context.flow?.flowModules.find((t) => t.key === e)?.configuration;
                        },
                        isModuleEnabled: function (e) {
                            let i = t();
                            return (
                                "runningModule" === i.value && !!i.context.flow?.flowModules.some((t) => t.key === e)
                            );
                        },
                        isAwaitingOrchestratorReady: () => o().presentation.isAwaitingReady,
                        waitForReady: async () =>
                            v(
                                e,
                                (e) => g(e, { enableHome: n }),
                                (e) => "ready" === e.status && !1 === e.presentation.isAwaitingReady,
                            ),
                        getLazyModuleKey: () => o().presentation.lazyModuleKey,
                        shouldRenderHomeScreen: () => o().homeScreen.visible,
                        async continueFromHome() {
                            let t = o();
                            if (t.homeScreen.visible) {
                                if ("ready" === t.status) {
                                    i?.("homeContinue"), e.send({ type: "HOME_CONTINUE" });
                                    return;
                                }
                                if (t.presentation.isAwaitingReady) {
                                    i?.("homeContinue"), e.send({ type: "HOME_CONTINUE" });
                                    try {
                                        await v(
                                            e,
                                            (e) => g(e, { enableHome: n }),
                                            (e) => "ready" === e.status && !1 === e.homeScreen.visible,
                                        );
                                    } catch {
                                        return;
                                    }
                                }
                            }
                        },
                    };
                })(e, { enableHome: i }),
        }),
    );
}
