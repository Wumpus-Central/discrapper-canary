n.d(t, { F: () => i, x: () => r });
var l = n(940107);
function i(e, t) {
    let n = e?.querySelector("iframe");
    return null != n ? n : null == t ? null : document.querySelector(`[data-frame-id="${CSS.escape(t)}"] iframe`);
}
function r(e, t, n, i) {
    return (0, l.W)(
        e,
        "capture-now",
        { ...(null == n ? {} : { spec: n }), ...(null == i ? {} : { uploadToken: i }) },
        { id: t, timeoutMs: 8e3, retryMs: 400, sourceMatch: "origin", label: "capture-now" },
    ).then(
        (e) =>
            (console.debug("[vibegrations] preview frame answered capture", { id: t, phase: e.phase, code: e.code }),
            "accepted" === e.phase)
                ? { status: "accepted" }
                : { status: "failed", code: e.code, message: e.error },
        (e) => (e instanceof l.f ? { status: "failed" } : { status: "unavailable" }),
    );
}
