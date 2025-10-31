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
    let { allowedFlows: t = ["rpc", "web"] } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = (0, c.t)(e),
        r = (0, l.t)(null == n ? void 0 : n.id, "AUTHORIZE_REQUEST"),
        u = t.includes("rpc") && r,
        d = t.includes("web") && (null == n ? void 0 : n.connectionEntrypointUrl) != null,
        p = u || d,
        { token: h, fetched: f } = (0, s.o)(null == n ? void 0 : n.id);
    return {
        fetched: f,
        hasAlreadyLinked: f && null != h,
        canStartAuthorization: p,
        startAuthorization: i.useCallback(
            () =>
                null == n
                    ? null
                    : u
                      ? (o.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", (e) => e.socket.application.id === n.id, {}),
                        "rpc")
                      : d
                        ? ((0, a.q)({ href: n.connectionEntrypointUrl }), "web")
                        : null,
            [u, d, n],
        ),
        connectionApp: n,
    };
}
