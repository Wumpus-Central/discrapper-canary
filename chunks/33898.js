(a.r(e),
    a.d(e, {
        ID_FACE_EXTRACTION_SKIPPED_CODE: () => 4084,
        createFaceMatchManager: () => u,
        faceMatchMachine: () => c,
        isFaceExtractionSkippedError: () => o,
    }));
var s = a(41851),
    r = a(269882),
    i = a(528239),
    n = a(646613);
function o(t) {
    return !!t && "object" == typeof t && (4084 === t.status || t.data?.status === 4084);
}
let c = (0, n.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        fetchData: (0, n.a)(async ({ input: t, signal: e }) =>
            (async function (t, e) {
                await (async function (t, e) {
                    let a = "secondId" === t ? i.t.processFaceSecondId : i.t.processFace,
                        r = await s.t.post(a, {}, { query: { imageType: "selfie" }, signal: e });
                    if (!r.ok)
                        throw Object.assign(Error(`POST ${a} failed: ${r.status} ${r.statusText}`), {
                            status: r.status,
                            data: r.data,
                        });
                })(t.matchingType, e);
                let a = [
                    (async function (t) {
                        let e = await s.t.post(
                            i.t.getImagesV2,
                            { images: ["croppedFace", "croppedIDFace", "croppedAuthenticationSelfie"] },
                            { signal: t },
                        );
                        if (!e.ok) throw Error(`POST ${i.t.getImagesV2} failed: ${e.status} ${e.statusText}`);
                        let a = e.data;
                        return {
                            idFace: a.croppedIDFace ?? null,
                            selfie: a.croppedFace ?? a.croppedAuthenticationSelfie ?? null,
                            secondIdFace: void 0,
                        };
                    })(e),
                    (async function (t) {
                        let e = await s.t.get(i.t.getScore, { signal: t });
                        if (!e.ok) throw Error(`GET ${i.t.getScore} failed: ${e.status} ${e.statusText}`);
                        let a = e.data;
                        return {
                            matched:
                                a.faceRecognition?.overall?.status === "OK" ||
                                (a.faceRecognition?.overall?.status !== "FAIL" && null),
                            liveness: a.deepsight
                                ? a.deepsight.multimodalIntelligence?.overall?.status === "OK"
                                : a.liveness?.overall?.status === "OK",
                        };
                    })(e),
                ];
                "secondId" === t.matchingType &&
                    a.push(
                        (async function (t) {
                            let e = await s.t.post(i.t.getImagesSecondId, { images: ["croppedIDFace"] }, { signal: t });
                            if (!e.ok) throw Error(`POST ${i.t.getImagesSecondId} failed: ${e.status} ${e.statusText}`);
                            return { secondIdFace: e.data.croppedIDFace ?? null };
                        })(e),
                    );
                let [r, n, o] = await Promise.all(a);
                return { images: { ...r, secondIdFace: o?.secondIdFace ?? null }, result: n };
            })(t.config, e),
        ),
    },
    actions: {
        setData: (0, n.r)(({ event: t }) => {
            let e = t.output;
            return { images: e.images, result: e.result };
        }),
        setError: (0, n.r)(({ event: t }) => ({ error: String(t.error) })),
        clearError: (0, n.r)({ error: () => void 0 }),
        resetContext: (0, n.r)(({ context: t }) => ({ config: t.config, images: null, result: null, error: void 0 })),
    },
    guards: {
        isAnimationDisabled: ({ context: t }) => !0 === t.config.disableFaceMatchAnimation,
        isFaceExtractionSkipped: ({ event: t }) => o(t.error),
    },
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
                onError: [
                    { target: "finished", guard: "isFaceExtractionSkipped" },
                    { target: "error", actions: "setError" },
                ],
            },
        },
        animating: { on: { ANIMATION_COMPLETE: { target: "result" } } },
        result: { on: { CONTINUE: { target: "finished" } } },
        finished: { type: "final" },
        error: { on: { RESET: { target: "idle", actions: "resetContext" } } },
    },
});
function l(t) {
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
function d({ actor: t, trackElementClicked: e }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
        animationComplete() {
            t.send({ type: "ANIMATION_COMPLETE" });
        },
        continue() {
            (e?.("continue"), t.send({ type: "CONTINUE" }));
        },
        reset() {
            t.send({ type: "RESET" });
        },
    };
}
function u(t) {
    return (0, n.l)({
        actor: (0, n.s)(c, { input: { config: t.config } }).start(),
        mapState: l,
        createApi: d,
        instrumentation: (0, r.s)(r.n.faceMatch),
    });
}
