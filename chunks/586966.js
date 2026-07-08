n.d(t, { dynamicFormsMachine: () => g, q: () => S });
var s = n(209688),
    r = n(588233),
    i = n(171251),
    a = n(64755),
    c = n(260872),
    u = n(165964);
async function o(e, t) {
    let n = `${i.t.moduleConfig}?id=${encodeURIComponent(e)}&moduleKey=DYNAMIC_FORMS`,
        r = await s.t.get(n, { signal: t });
    if (!r.ok) throw Error(`GET ${i.t.moduleConfig} failed: ${r.status} ${r.statusText}`);
    return r.data;
}
async function d(e, t) {
    let n = await s.t.post(
        i.t.dynamicFormsSubmitAnswer,
        { questionId: e.questionId, answerDetails: { singleAnswer: e.singleAnswer } },
        { signal: t },
    );
    if (!n.ok) throw Error(`POST ${i.t.dynamicFormsSubmitAnswer} failed: ${n.status} ${n.statusText}`);
    return n.data;
}
function l(e) {
    if (!e) return {};
    let t = {};
    for (let n of e.questions) (n.inputType ?? n.overrides) === "YESNO" && (t[n.questionId] = "NO");
    return t;
}
let g = (0, a.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        fetchScreens: (0, a.a)(async ({ input: e, signal: t }) => o(e.flowId, t)),
        submitScreenAnswers: (0, a.a)(async ({ input: e, signal: t }) => {
            let { screen: n, answers: s } = e;
            for (let e of n.questions) {
                let n = (function (e, t) {
                    switch (e) {
                        case "CPF":
                            return t.replace(/[-.]/g, "");
                        case "DATE":
                            return (0, u.t)(t).toString();
                        default:
                            return t;
                    }
                })(e.inputType ?? e.overrides ?? "TEXT", s[e.questionId] ?? "");
                try {
                    await d({ questionId: e.questionId, singleAnswer: n }, t);
                } catch {}
            }
            return { success: !0 };
        }),
    },
    actions: {
        setScreens: (0, a.r)(({ event: e }) => {
            let t = e.output.screens;
            return { screens: t, answers: l(t[0]) };
        }),
        setAnswer: (0, a.r)(({ context: e, event: t }) => {
            let n = e.screens[e.currentScreenIndex]?.questions.find((e) => e.questionId === t.questionId),
                s = n?.inputType ?? n?.overrides,
                r = { ...e.answerValidity };
            return (
                "CPF" === s && (r[t.questionId] = (0, c.t)(t.value)),
                { answers: { ...e.answers, [t.questionId]: t.value }, answerValidity: r }
            );
        }),
        setAnswerValidity: (0, a.r)(({ context: e, event: t }) => ({
            answerValidity: { ...e.answerValidity, [t.questionId]: t.isValid },
        })),
        advanceScreen: (0, a.r)(({ context: e }) => {
            let t = e.currentScreenIndex + 1;
            return { currentScreenIndex: t, answers: l(e.screens[t]), answerValidity: {} };
        }),
        markCompleted: (0, a.r)({ result: "completed" }),
        markSkipped: (0, a.r)({ result: "skipped" }),
    },
    guards: {
        hasPreloadedScreens: ({ context: e }) => (e.config.screens?.length ?? 0) > 0,
        hasFlowId: ({ context: e }) => !!e.config.flowId,
        isLastScreen: ({ context: e }) => e.currentScreenIndex >= e.screens.length - 1,
    },
}).createMachine({
    id: "dynamicForms",
    initial: "idle",
    context: ({ input: e }) => {
        let t = e.config.screens ?? [];
        return {
            config: e.config,
            screens: t,
            currentScreenIndex: 0,
            answers: l(t[0]),
            answerValidity: {},
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
            on: {
                ANSWER_CHANGED: { actions: "setAnswer" },
                ANSWER_VALIDITY_CHANGED: { actions: "setAnswerValidity" },
                SUBMIT: { target: "submitting" },
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
function f(e) {
    let { context: t } = e;
    if (e.matches("idle")) return { status: "idle" };
    if (e.matches("loadingScreens")) return { status: "loadingScreens" };
    if (e.matches("inputting")) {
        var n;
        let e = t.screens[t.currentScreenIndex],
            s = !Object.values(t.answerValidity).some((e) => !1 === e);
        return {
            status: "inputting",
            currentScreen: e,
            screenIndex: t.currentScreenIndex,
            totalScreens: t.screens.length,
            answers: t.answers,
            answerValidity: t.answerValidity,
            canSubmit:
                !!e &&
                ((n = t.answers),
                e.questions.every((e) => {
                    if (e.isOptional || (e.inputType ?? e.overrides) === "YESNO") return !0;
                    let t = n[e.questionId];
                    return void 0 !== t && "" !== t;
                })) &&
                s,
        };
    }
    if (e.matches("submitting")) {
        let e = t.screens[t.currentScreenIndex];
        return {
            status: "submitting",
            screenIndex: t.currentScreenIndex,
            totalScreens: t.screens.length,
            currentScreen: e,
            answers: t.answers,
            answerValidity: t.answerValidity,
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
function w({ actor: e }) {
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
        submit() {
            e.send({ type: "SUBMIT" });
        },
        close() {
            e.send({ type: "CLOSE" });
        },
    };
}
function S(e) {
    return (0, a.c)({
        actor: (0, a.s)(g, { input: { config: e.config } }).start(),
        mapState: f,
        createApi: w,
        instrumentation: (0, r.o)(r.n.forms),
    });
}
