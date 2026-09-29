n.d(t, { F: () => l, x: () => o });
var i = n(762399),
    r = n(940107);
function l(e, t) {
    let n = e?.querySelector("iframe");
    return null != n ? n : null == t ? null : document.querySelector(`[data-frame-id="${CSS.escape(t)}"] iframe`);
}
function o(e, t, n, l) {
    return (0, r.W)(
        e,
        "capture-now",
        { ...(null == n ? {} : { spec: n }), ...(null == l ? {} : { uploadToken: l }) },
        { id: t, timeoutMs: 8e3, retryMs: 400, sourceMatch: "origin", label: "capture-now" },
    ).then(
        (e) =>
            (console.debug("[vibegrations] preview frame answered capture", { id: t, phase: e.phase, code: e.code }),
            "accepted" === e.phase)
                ? { status: "accepted" }
                : { status: "failed", code: e.code, message: e.error },
        (e) => (e instanceof i.fq ? { status: "failed" } : { status: "unavailable" }),
    );
}
