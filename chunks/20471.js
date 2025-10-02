n.d(t, {
    FG: () => h,
    ju: () => f,
    ro: () => p,
}),
    n(997841),
    n(388685);
var r,
    i = n(647438),
    l = n(812206),
    o = n(812967),
    a = n(146219),
    s = n(630388),
    c = n(49012),
    u = n(491662),
    d = n(981631),
    p = (((r = {}).RPC = "rpc"), (r.WEB = "web"), r);
function f(e) {
    var t, n, r, i, o;
    if (null == e) return null;
    if (
        (0, s.yE)(null != (t = e.flags) ? t : 0, d.udG.SOCIAL_LAYER_INTEGRATION) ||
        (0, s.yE)(null != (n = e.flags) ? n : 0, d.udG.SOCIAL_LAYER_INTEGRATION_LIMITED)
    )
        return e;
    for (let t of null != (r = e.linkedGames) ? r : []) {
        let e = l.Z.getApplication(t.id);
        if (
            null != e &&
            ((0, s.yE)(null != (i = e.flags) ? i : 0, d.udG.SOCIAL_LAYER_INTEGRATION) ||
                (0, s.yE)(null != (o = e.flags) ? o : 0, d.udG.SOCIAL_LAYER_INTEGRATION_LIMITED))
        )
            return e;
    }
    return null;
}
function h(e) {
    let { allowedFlows: t = ["rpc", "web"] } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = i.useMemo(() => f(e), [e]),
        r = (0, a.t)(null == n ? void 0 : n.id, "AUTHORIZE_REQUEST"),
        l = t.includes("rpc") && r,
        s = t.includes("web") && (null == n ? void 0 : n.connectionEntrypointUrl) != null,
        d = l || s,
        { token: p, loading: h } = (0, u.o)(null == n ? void 0 : n.id, { disableFetch: !d });
    return {
        loading: h,
        hasAlreadyLinked: !h && null != p,
        canStartAuthorization: d,
        startAuthorization: i.useCallback(
            () =>
                null == n
                    ? null
                    : l
                      ? (o.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", (e) => e.socket.application.id === n.id, {}),
                        "rpc")
                      : s
                        ? ((0, c.q)({ href: n.connectionEntrypointUrl }), "web")
                        : null,
            [l, s, n],
        ),
        connectionApp: n,
    };
}
