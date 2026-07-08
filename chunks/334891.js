a.d(e, { faceMatchMachine: () => d, I: () => m });
var r = a(209688),
    s = a(588233),
    n = a(171251),
    i = a(64755);
async function o(t) {
    let e = await r.t.post(
        n.t.getImagesV2,
        { images: ["croppedFace", "croppedIDFace", "croppedAuthenticationSelfie"] },
        { signal: t },
    );
    if (!e.ok) throw Error(`POST ${n.t.getImagesV2} failed: ${e.status} ${e.statusText}`);
    let a = e.data;
    return {
        idFace: a.croppedIDFace ?? null,
        selfie: a.croppedFace ?? a.croppedAuthenticationSelfie ?? null,
        secondIdFace: void 0,
    };
}
async function c(t) {
    let e = await r.t.get(n.t.getScore, { signal: t });
    if (!e.ok) throw Error(`GET ${n.t.getScore} failed: ${e.status} ${e.statusText}`);
    let a = e.data;
    return {
        matched: a.faceRecognition?.overall?.status === "OK" || (a.faceRecognition?.overall?.status !== "FAIL" && null),
        liveness: a.deepsight
            ? a.deepsight.multimodalIntelligence?.overall?.status === "OK"
            : a.liveness?.overall?.status === "OK",
    };
}
async function l(t) {
    let e = await r.t.post(n.t.getImagesSecondId, { images: ["croppedIDFace"] }, { signal: t });
    if (!e.ok) throw Error(`POST ${n.t.getImagesSecondId} failed: ${e.status} ${e.statusText}`);
    return { secondIdFace: e.data.croppedIDFace ?? null };
}
async function u(t, e) {
    let a = [o(e), c(e)];
    "secondId" === t.matchingType && a.push(l(e));
    let [r, s, n] = await Promise.all(a);
    return { images: { ...r, secondIdFace: n?.secondIdFace ?? null }, result: s };
}
let d = (0, i.t)({
    types: { context: {}, events: {}, input: {} },
    actors: { fetchData: (0, i.a)(async ({ input: t, signal: e }) => u(t.config, e)) },
    actions: {
        setData: (0, i.r)(({ event: t }) => {
            let e = t.output;
            return { images: e.images, result: e.result };
        }),
        setError: (0, i.r)(({ event: t }) => ({ error: String(t.error) })),
        clearError: (0, i.r)({ error: () => void 0 }),
        resetContext: (0, i.r)(({ context: t }) => ({ config: t.config, images: null, result: null, error: void 0 })),
    },
    guards: { isAnimationDisabled: ({ context: t }) => !0 === t.config.disableFaceMatchAnimation },
}).createMachine({
    id: "faceMatch",
    initial: "idle",
    context: ({ input: t }) => ({ config: t.config, images: null, result: null, error: void 0 }),
    states: {
        idle: { on: { LOAD: { target: "loading" } } },
        loading: {
            invoke: {
                id: "fetchData",
                src: "fetchData",
                input: ({ context: t }) => ({ config: t.config }),
                onDone: [
                    { target: "finished", guard: "isAnimationDisabled", actions: "setData" },
                    { target: "animating", actions: "setData" },
                ],
                onError: { target: "error", actions: "setError" },
            },
        },
        animating: { on: { ANIMATION_COMPLETE: { target: "result" } } },
        result: { on: { CONTINUE: { target: "finished" } } },
        finished: { type: "final" },
        error: { on: { RESET: { target: "idle", actions: "resetContext" } } },
    },
});
function g(t) {
    let { context: e } = t;
    return t.matches("idle")
        ? { status: "idle" }
        : t.matches("loading")
          ? { status: "loading" }
          : t.matches("animating")
            ? { status: "animating", images: e.images, result: e.result }
            : t.matches("result")
              ? { status: "result", images: e.images, result: e.result, matched: e.result.matched }
              : t.matches("finished")
                ? { status: "finished", matched: e.result?.matched ?? null }
                : t.matches("error")
                  ? { status: "error", error: e.error ?? "An error occurred" }
                  : { status: "idle" };
}
function f({ actor: t, trackElementClicked: e }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
        animationComplete() {
            t.send({ type: "ANIMATION_COMPLETE" });
        },
        continue() {
            e?.("continue"), t.send({ type: "CONTINUE" });
        },
        reset() {
            t.send({ type: "RESET" });
        },
    };
}
function m(t) {
    return (0, i.c)({
        actor: (0, i.s)(d, { input: { config: t.config } }).start(),
        mapState: g,
        createApi: f,
        instrumentation: (0, s.o)(s.n.faceMatch),
    });
}
