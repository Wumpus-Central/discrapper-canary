i.d(e, { y: () => l, signatureMachine: () => o });
var r = i(768672),
    s = i(368499),
    n = i(288052),
    a = i(168056);
async function u(t, e) {
    let { image: i, type: s, sendBase64: a = !1 } = t,
        u = a ? n.t.addSignatureV2 : n.t.addSignature,
        o = await r.t.post(u, a ? { base64Image: i } : i, {
            signal: e,
            headers: { "Content-Type": a ? "application/json" : "image/jpeg" },
            query: { type: s },
        });
    if (!o.ok) throw Error(`POST ${u} failed: ${o.status} ${o.statusText}`);
    return o.data;
}
let o = (0, a.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        submitSignature: (0, a.a)(async ({ input: t, signal: e }) => {
            let { ...i } = t;
            return u(i, e);
        }),
    },
    actions: {
        setSignatureValidity: (0, a.r)(({ event: t }) => ({ isValid: t.isValid, error: void 0 })),
        assignImageForSubmit: (0, a.r)(({ event: t }) => ({ image: t.image, error: void 0 })),
        setSignatureSubmitResult: (0, a.r)(({ event: t }) => ({ signatureSubmitResult: t.output, error: void 0 })),
        setErrorFromInvoke: (0, a.r)(({ event: t }) => {
            let e = t.error;
            return { error: e instanceof Error ? e.message : "string" == typeof e ? e : "Something went wrong" };
        }),
        clearError: (0, a.r)({ error: () => void 0 }),
        resetContext: (0, a.r)({ isValid: () => !1, image: () => void 0, error: () => void 0 }),
    },
    guards: { canContinue: ({ context: t, event: e }) => t.isValid && "CONTINUE" === e.type && !!e.image },
}).createMachine({
    id: "signature",
    initial: "idle",
    context: ({ input: t }) => ({
        config: t.config,
        ...{ image: void 0, isValid: !1, error: void 0, signatureSubmitResult: void 0 },
    }),
    states: {
        idle: { on: { LOAD: "captureSignature" } },
        captureSignature: {
            on: {
                SIGNATURE_CHANGED: { actions: "setSignatureValidity" },
                CONTINUE: { target: "submittingSignature", guard: "canContinue", actions: "assignImageForSubmit" },
            },
        },
        submittingSignature: {
            invoke: {
                id: "submitSignature",
                src: "submitSignature",
                input: ({ context: t }) => ({
                    image: t.image,
                    type: t.config.type,
                    sendBase64: t.config.sendBase64 ?? !1,
                }),
                onDone: { target: "success", actions: "setSignatureSubmitResult" },
                onError: { target: "error", actions: "setErrorFromInvoke" },
            },
        },
        success: { after: { 3e3: "finished" } },
        finished: { type: "final" },
        error: {},
    },
});
function c(t) {
    let e = (0, s.o)(t.value);
    if (void 0 !== e)
        switch (e) {
            case "idle":
            case "captureSignature":
                return "eSign.writeSignature.default";
            case "submittingSignature":
                return "eSign.writeSignature.completed";
            case "success":
            case "finished":
                return "eSign.writeYourSignature.success";
            default:
                return;
        }
}
function g(t) {
    let { context: e } = t;
    return t.matches("idle")
        ? { status: "idle" }
        : t.matches("captureSignature")
          ? { status: "capture", title: e.config.title, subtitle: e.config.subTitle, canContinue: e.isValid }
          : t.matches("submittingSignature")
            ? { status: "submitting" }
            : t.matches("success")
              ? { status: "success" }
              : t.matches("finished")
                ? { status: "finished", result: e.signatureSubmitResult }
                : t.matches("error")
                  ? { status: "error", error: e.error ?? "Upload failed" }
                  : { status: "idle" };
}
function d({ actor: t, trackElementClicked: e }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
        setSignatureValid(e) {
            t.send({ type: "SIGNATURE_CHANGED", isValid: e });
        },
        submit(i) {
            e?.("continue"), t.send({ type: "CONTINUE", image: i });
        },
    };
}
function l(t) {
    return (0, a.l)({
        actor: (0, a.s)(o, { input: { config: t.config } }).start(),
        mapState: g,
        createApi: d,
        instrumentation: (0, s.s)(s.n.signature, { getEventScreenName: c }),
    });
}
