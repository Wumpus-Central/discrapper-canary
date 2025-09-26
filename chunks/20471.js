n.d(t, {
    FG: () => O,
    ju: () => b,
    ro: () => m,
}),
    n(997841),
    n(388685);
var r,
    l = n(647438),
    i = n(442837),
    a = n(384275),
    o = n(812206),
    s = n(812967),
    c = n(146219),
    u = n(881998),
    d = n(630388),
    p = n(49012),
    f = n(981631),
    m = (((r = {}).RPC = "rpc"), (r.WEB = "web"), r);
function b(e) {
    var t, n, r, l, i;
    if (null == e) return null;
    if (
        (0, d.yE)(null != (t = e.flags) ? t : 0, f.udG.SOCIAL_LAYER_INTEGRATION) ||
        (0, d.yE)(null != (n = e.flags) ? n : 0, f.udG.SOCIAL_LAYER_INTEGRATION_LIMITED)
    )
        return e;
    for (let t of null != (r = e.linkedGames) ? r : []) {
        let e = o.Z.getApplication(t.id);
        if (
            null != e &&
            ((0, d.yE)(null != (l = e.flags) ? l : 0, f.udG.SOCIAL_LAYER_INTEGRATION) ||
                (0, d.yE)(null != (i = e.flags) ? i : 0, f.udG.SOCIAL_LAYER_INTEGRATION_LIMITED))
        )
            return e;
    }
    return null;
}
function O(e) {
    let { allowedFlows: t = ["rpc", "web"] } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = l.useMemo(() => b(e), [e]),
        r = (0, c.t)(null == n ? void 0 : n.id, "AUTHORIZE_REQUEST"),
        { hasAlreadyLinked: o, authorizedAppsFetchState: d } = (0, i.cj)([u.Z], () => ({
            hasAlreadyLinked: null != u.Z.getNewestTokenForApplication(null == n ? void 0 : n.id),
            authorizedAppsFetchState: u.Z.getFetchState(),
        })),
        f = t.includes("rpc") && r,
        m = t.includes("web") && (null == n ? void 0 : n.connectionEntrypointUrl) != null,
        O = f || m;
    l.useEffect(() => {
        d === u.M.NOT_FETCHED && O && a.Z.fetch();
    }, [d, O]);
    let y = l.useCallback(
        () =>
            null == n
                ? null
                : f
                  ? (s.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", (e) => e.socket.application.id === n.id, {}),
                    "rpc")
                  : m
                    ? ((0, p.q)({ href: n.connectionEntrypointUrl }), "web")
                    : null,
        [f, m, n],
    );
    return {
        loading: d !== u.M.FETCHED,
        canStartAuthorization: O,
        hasAlreadyLinked: o && d === u.M.FETCHED,
        startAuthorization: y,
        connectionApp: n,
    };
}
