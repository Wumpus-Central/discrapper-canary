"use strict";
n.d(t, { F: () => r, x: () => a });
var i = n(940107);
function r(e, t) {
    let n = e?.querySelector("iframe");
    return null != n ? n : null == t ? null : document.querySelector(`[data-frame-id="${CSS.escape(t)}"] iframe`);
}
function a(e, t, n, r) {
    return (0, i.W)(
        e,
        "capture-now",
        { ...(null == n ? {} : { spec: n }), ...(null == r ? {} : { uploadToken: r }) },
        { id: t, timeoutMs: 8e3, retryMs: 400, sourceMatch: "origin", label: "capture-now" },
    ).then(
        (e) =>
            (console.debug("[vibegrations] preview frame answered capture", { id: t, phase: e.phase, code: e.code }),
            "accepted" === e.phase)
                ? { status: "accepted" }
                : { status: "failed", code: e.code, message: e.error },
        (e) => (e instanceof i.f ? { status: "failed" } : { status: "unavailable" }),
    );
}
