n.d(t, {
    F: () => d,
    r: () => u,
});
var r,
    i = n(647438),
    l = n(906555),
    o = n(812967),
    a = n(49012),
    s = n(491662),
    c = n(758677),
    u = (((r = {}).RPC = "rpc"), (r.WEB = "web"), r);
function d(e) {
    var t;
    let { allowedFlows: n = ["rpc", "web"] } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = (0, c.t)(e),
        u = (0, l.t)(null == r ? void 0 : r.id, "AUTHORIZE_REQUEST"),
        d = n.includes("rpc") && u,
        p = n.includes("web") && (null == r ? void 0 : r.connectionEntrypointUrl) != null,
        h = d || p,
        { token: f, fetched: g } = (0, s.o)(
            null != (t = null == r ? void 0 : r.parentId) ? t : null == r ? void 0 : r.id,
        );
    return {
        fetched: g,
        hasAlreadyLinked: g && null != f,
        canStartAuthorization: h,
        startAuthorization: i.useCallback(
            () =>
                null == r
                    ? null
                    : d
                      ? (o.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", (e) => e.socket.application.id === r.id, {}),
                        "rpc")
                      : p
                        ? ((0, a.q)({ href: r.connectionEntrypointUrl }), "web")
                        : null,
            [d, p, r],
        ),
        connectionApp: r,
    };
}
