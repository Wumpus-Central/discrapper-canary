n.d(t, { i: () => s, o: () => a });
var i = n(884868),
    r = n(192888);
function a(e, t) {
    let n = e?.querySelector("iframe");
    return null != n ? n : null == t ? null : document.querySelector(`[data-frame-id="${CSS.escape(t)}"] iframe`);
}
function s(e, t, n, a) {
    return (0, r.W)(
        e,
        "capture-now",
        { ...(null == n ? {} : { spec: n }), ...(null == a ? {} : { uploadToken: a }) },
        { id: t, timeoutMs: 15e3, retryMs: 400, sourceMatch: "origin", label: "capture-now" },
    ).then(
        (e) =>
            (console.debug("[vibegrations] preview frame answered capture", { id: t, phase: e.phase, code: e.code }),
            "accepted" === e.phase)
                ? { status: "accepted" }
                : { status: "failed", code: e.code, message: e.error },
        (e) => (e instanceof i.fq ? { status: "failed" } : { status: "unavailable" }),
    );
}
