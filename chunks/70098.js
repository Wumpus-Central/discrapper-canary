n.d(t, { q: () => E, dynamicFormsMachine: () => y });
var r = n(768672),
    s = n(368499),
    i = n(288052),
    a = n(168056),
    o = n(690769);
function c(e) {
    return e.inputType ?? e.overrides ?? "TEXT";
}
let d = { PHONE: "phone.invalidPhone", EMAIL: "verification.errors.emailInvalid", CPF: "dynamicForms.invalidCpf" };
function u(e) {
    return e.questions.map((e) => {
        let t, n, r;
        return {
            questionId: e.questionId,
            inputType: c(e),
            isOptional: e.isOptional ?? !1,
            validation:
                ((t = c(e)),
                (n = []),
                e.isOptional || n.push({ type: "required" }),
                (r = d[t]) && n.push({ type: "formatViaAnswerValidity", errorKey: r }),
                n),
        };
    });
}
let l = ({ value: e }) => (0 === e.trim().length ? "dynamicForms.fieldRequired" : void 0),
    f = ({ questionId: e, answerValidity: t }, n) => (!1 === t[e] ? n.errorKey : void 0),
    g = (e) => ("string" == typeof e ? e : String(e ?? ""));
function m(e, t) {
    for (let n of t) {
        let t = "required" === n.type ? l(e) : f(e, n);
        if (t) return t;
    }
}
async function p(e, t) {
    let n = `${i.t.moduleConfig}?id=${encodeURIComponent(e)}&moduleKey=DYNAMIC_FORMS`,
        s = await r.t.get(n, { signal: t });
    if (!s.ok) throw Error(`GET ${i.t.moduleConfig} failed: ${s.status} ${s.statusText}`);
    return s.data;
}
async function S(e, t) {
    let n = await r.t.post(
        i.t.dynamicFormsSubmitAnswer,
        { questionId: e.questionId, answerDetails: { singleAnswer: e.singleAnswer } },
        { signal: t },
    );
    if (!n.ok) throw Error(`POST ${i.t.dynamicFormsSubmitAnswer} failed: ${n.status} ${n.statusText}`);
    return n.data;
}
let w = (e, t) => {
        if (!e?.[t]) return e;
        let n = { ...e };
        return delete n[t], Object.keys(n).length > 0 ? n : void 0;
    },
    y = (0, a.t)({
        types: { context: {}, events: {}, input: {} },
        actors: {
            fetchScreens: (0, a.a)(async ({ input: e, signal: t }) => p(e.flowId, t)),
            submitScreenAnswers: (0, a.a)(async ({ input: e, signal: t }) => {
                let { screen: n, answers: r } = e;
                for (let e of n.questions) {
                    let n = (function (e, t) {
                        switch (e) {
                            case "CPF":
                                return t.replace(/[-.]/g, "");
                            case "DATE":
                                return (0, o.t)(t).toString();
                            default:
                                return t;
                        }
                    })(e.inputType ?? e.overrides ?? "TEXT", r[e.questionId] ?? "");
                    try {
                        await S({ questionId: e.questionId, singleAnswer: n }, t);
                    } catch {}
                }
                return { success: !0 };
            }),
        },
        actions: {
            setScreens: (0, a.r)(({ event: e }) => {
                let t = e.output.screens,
                    n = t[0];
                return { screens: t, answers: {}, currentScreenFields: n ? u(n) : [] };
            }),
            setAnswer: (0, a.r)(({ context: e, event: t }) => ({
                answers: { ...e.answers, [t.questionId]: t.value },
                validationErrors: w(e.validationErrors, t.questionId),
            })),
            setAnswerValidity: (0, a.r)(({ context: e, event: t }) => ({
                answerValidity: { ...e.answerValidity, [t.questionId]: t.isValid },
                validationErrors: w(e.validationErrors, t.questionId),
            })),
            validateFormField: (0, a.r)(({ context: e, event: t }) => {
                var n, r;
                let s;
                if ("VALIDATE_FIELD" !== t.type) return {};
                let i = (function (e, t, n, r) {
                    let s = n.find((e) => e.questionId === t);
                    if (s) return m({ value: g(e[t]), questionId: t, answerValidity: r }, s.validation);
                })(e.answers, t.questionId, e.currentScreenFields, e.answerValidity);
                return {
                    validationErrors:
                        ((n = e.validationErrors),
                        (r = t.questionId),
                        (s = { ...(n ?? {}) }),
                        i ? (s[r] = i) : delete s[r],
                        Object.keys(s).length > 0 ? s : void 0),
                };
            }),
            computeValidationResult: (0, a.r)(({ context: e }) => {
                var t, n, r;
                let s =
                    ((t = e.answers),
                    (n = e.currentScreenFields),
                    (r = e.answerValidity),
                    n.reduce((e, n) => {
                        let s = m(
                            { value: g(t[n.questionId]), questionId: n.questionId, answerValidity: r },
                            n.validation,
                        );
                        return s && (e[n.questionId] = s), e;
                    }, {}));
                return { validationErrors: Object.keys(s).length > 0 ? s : void 0 };
            }),
            advanceScreen: (0, a.r)(({ context: e }) => {
                let t = e.currentScreenIndex + 1,
                    n = e.screens[t];
                return {
                    currentScreenIndex: t,
                    answers: {},
                    answerValidity: {},
                    currentScreenFields: n ? u(n) : [],
                    validationErrors: void 0,
                };
            }),
            markCompleted: (0, a.r)({ result: "completed" }),
            markSkipped: (0, a.r)({ result: "skipped" }),
        },
        guards: {
            hasPreloadedScreens: ({ context: e }) => (e.config.screens?.length ?? 0) > 0,
            hasFlowId: ({ context: e }) => !!e.config.flowId,
            isLastScreen: ({ context: e }) => e.currentScreenIndex >= e.screens.length - 1,
            isScreenValid: ({ context: e }) => 0 === Object.keys(e.validationErrors ?? {}).length,
        },
    }).createMachine({
        id: "dynamicForms",
        initial: "idle",
        context: ({ input: e }) => {
            let t = e.config.screens ?? [],
                n = t[0];
            return {
                config: e.config,
                screens: t,
                currentScreenIndex: 0,
                answers: {},
                answerValidity: {},
                currentScreenFields: n ? u(n) : [],
                result: null,
            };
        },
        states: {
            idle: {
                on: {
                    LOAD: [
                        { target: "inputting", guard: "hasPreloadedScreens" },
                        { target: "loadingScreens", guard: "hasFlowId" },
                        { target: "misconfigured" },
                    ],
                },
            },
            loadingScreens: {
                invoke: {
                    id: "fetchScreens",
                    src: "fetchScreens",
                    input: ({ context: e }) => ({ flowId: e.config.flowId ?? "" }),
                    onDone: { target: "inputting", actions: "setScreens" },
                    onError: { target: "finished", actions: "markSkipped" },
                },
            },
            inputting: {
                initial: "editing",
                states: {
                    editing: {
                        on: {
                            ANSWER_CHANGED: { actions: "setAnswer" },
                            ANSWER_VALIDITY_CHANGED: { actions: "setAnswerValidity" },
                            VALIDATE_FIELD: { actions: "validateFormField" },
                            SUBMIT: { target: "validatingSubmit" },
                        },
                    },
                    validatingSubmit: {
                        entry: "computeValidationResult",
                        always: [{ guard: "isScreenValid", target: "#dynamicForms.submitting" }, { target: "editing" }],
                    },
                },
            },
            submitting: {
                invoke: {
                    id: "submitScreenAnswers",
                    src: "submitScreenAnswers",
                    input: ({ context: e }) => ({ screen: e.screens[e.currentScreenIndex], answers: e.answers }),
                    onDone: [
                        { target: "success", guard: "isLastScreen" },
                        { target: "inputting", actions: "advanceScreen" },
                    ],
                    onError: [
                        { target: "success", guard: "isLastScreen" },
                        { target: "inputting", actions: "advanceScreen" },
                    ],
                },
            },
            success: { after: { 3e3: { target: "finished", actions: "markCompleted" } } },
            finished: { type: "final" },
            misconfigured: { on: { CLOSE: { target: "closed" } } },
            closed: { type: "final" },
        },
    });
function I(e) {
    let t = (0, s.o)(e.value);
    if (void 0 !== t)
        switch (t) {
            case "inputting":
                return !(function (e) {
                    for (let t of Object.values(e)) if ("string" == typeof t && t.length > 0) return !0;
                    return !1;
                })(e.context.answers)
                    ? "forms.longform.default"
                    : "forms.longform.filled";
            case "success":
            case "finished":
                return "forms.success";
            default:
                return;
        }
}
function v(e) {
    let { context: t } = e;
    if (e.matches("idle")) return { status: "idle" };
    if (e.matches("loadingScreens")) return { status: "loadingScreens" };
    if (e.matches("inputting"))
        return {
            status: "inputting",
            currentScreen: t.screens[t.currentScreenIndex],
            screenIndex: t.currentScreenIndex,
            totalScreens: t.screens.length,
            answers: t.answers,
            answerValidity: t.answerValidity,
            validationErrors: t.validationErrors,
            canSubmit: 0 === Object.keys(t.validationErrors ?? {}).length,
        };
    if (e.matches("submitting")) {
        let e = t.screens[t.currentScreenIndex];
        return {
            status: "submitting",
            screenIndex: t.currentScreenIndex,
            totalScreens: t.screens.length,
            currentScreen: e,
            answers: t.answers,
            answerValidity: t.answerValidity,
            validationErrors: t.validationErrors,
        };
    }
    return e.matches("success")
        ? { status: "success" }
        : e.matches("finished")
          ? { status: "finished", result: t.result }
          : e.matches("misconfigured")
            ? { status: "misconfigured" }
            : e.matches("closed")
              ? { status: "closed" }
              : { status: "idle" };
}
function h({ actor: e, trackElementClicked: t }) {
    return {
        load() {
            e.send({ type: "LOAD" });
        },
        setAnswer(t, n) {
            e.send({ type: "ANSWER_CHANGED", questionId: t, value: n });
        },
        setAnswerValidity(t, n) {
            e.send({ type: "ANSWER_VALIDITY_CHANGED", questionId: t, isValid: n });
        },
        validateField(t) {
            e.send({ type: "VALIDATE_FIELD", questionId: t });
        },
        submit() {
            t?.("submit"), e.send({ type: "SUBMIT" });
        },
        close() {
            t?.("close"), e.send({ type: "CLOSE" });
        },
    };
}
function E(e) {
    return (0, a.l)({
        actor: (0, a.s)(y, { input: { config: e.config } }).start(),
        mapState: v,
        createApi: h,
        instrumentation: (0, s.s)(s.n.forms, { getEventScreenName: I }),
    });
}
