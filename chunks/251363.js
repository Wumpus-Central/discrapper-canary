n.d(t, { iU: () => _, n5: () => u, ow: () => c });
var i = n(91242),
    r = n(869146),
    a = n(484697),
    s = n(884868),
    l = n(192888),
    o = n(652215),
    d = n(165610);
function c(e, t) {
    let n = e?.querySelector("iframe");
    return null != n ? n : null == t ? null : document.querySelector(`[data-frame-id="${CSS.escape(t)}"] iframe`);
}
function u(e, t) {
    return (
        c(e, t) ??
        (function (e) {
            if (null == e || !r.A.getWindowOpen(o.MLl.ACTIVITY_POPOUT)) return null;
            let t = i.A.getMainFrame();
            return t?.id === e && (0, d.x1)(t) && null != t.data.iframeId ? (0, a.fl)(t.data.iframeId) : null;
        })(t)
    );
}
function _(e, t, n, i) {
    return (0, l.W)(
        e,
        "capture-now",
        { ...(null == n ? {} : { spec: n }), ...(null == i ? {} : { uploadToken: i }) },
        { id: t, timeoutMs: 15e3, retryMs: 400, sourceMatch: "origin", label: "capture-now" },
    ).then(
        (e) =>
            (console.debug("[conjure] preview frame answered capture", { id: t, phase: e.phase, code: e.code }),
            "accepted" === e.phase)
                ? { status: "accepted" }
                : { status: "failed", code: e.code, message: e.error },
        (e) => (e instanceof s.fq ? { status: "failed" } : { status: "unavailable" }),
    );
}
