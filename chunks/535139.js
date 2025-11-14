n.d(t, {
    F: () => u,
    r: () => c,
});
var r = n(647438),
    i = n(906555),
    a = n(812967),
    o = n(49012),
    s = n(491662),
    l = n(758677),
    c = (function (e) {
        return (e.RPC = "rpc"), (e.WEB = "web"), e;
    })({});
function u(e) {
    var t;
    let { allowedFlows: n = ["rpc", "web"] } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        c = (0, l.t)(e),
        u = (0, i.t)(null == c ? void 0 : c.id, "AUTHORIZE_REQUEST"),
        d = n.includes("rpc") && u,
        f = n.includes("web") && (null == c ? void 0 : c.connectionEntrypointUrl) != null,
        _ = d ? "rpc" : f ? "web" : null,
        p = d || f,
        { token: h, fetched: m } = (0, s.o)(
            null != (t = null == c ? void 0 : c.parentId) ? t : null == c ? void 0 : c.id,
        ),
        g = m && null != h;
    return {
        fetched: m,
        hasAlreadyLinked: g,
        canStartAuthorization: p,
        startAuthorization: r.useCallback(
            () =>
                null == c
                    ? null
                    : d
                      ? (a.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", (e) => e.socket.application.id === c.id, {}),
                        "rpc")
                      : f
                        ? ((0, o.q)({ href: c.connectionEntrypointUrl }), "web")
                        : null,
            [d, f, c],
        ),
        connectionApp: c,
        preferredFlow: _,
    };
}
