n.d(t, {
    F: () => f,
    j: () => p,
}),
    n(997841),
    n(388685);
var r = n(647438),
    i = n(442837),
    l = n(384275),
    o = n(812206),
    a = n(812967),
    s = n(146219),
    c = n(881998),
    u = n(630388),
    d = n(981631);
function p(e) {
    var t, n, r, i, l;
    if (null == e) return null;
    if (
        (0, u.yE)(null != (t = e.flags) ? t : 0, d.udG.SOCIAL_LAYER_INTEGRATION) ||
        (0, u.yE)(null != (n = e.flags) ? n : 0, d.udG.SOCIAL_LAYER_INTEGRATION_LIMITED)
    )
        return e;
    for (let t of null != (r = e.linkedGames) ? r : []) {
        let e = o.Z.getApplication(t.id);
        if (
            null != e &&
            ((0, u.yE)(null != (i = e.flags) ? i : 0, d.udG.SOCIAL_LAYER_INTEGRATION) ||
                (0, u.yE)(null != (l = e.flags) ? l : 0, d.udG.SOCIAL_LAYER_INTEGRATION_LIMITED))
        )
            return e;
    }
    return null;
}
function f(e) {
    let t = r.useMemo(() => p(e), [e]),
        n = (0, s.t)(null == t ? void 0 : t.id, "AUTHORIZE_REQUEST"),
        { hasAlreadyLinked: o, authorizedAppsFetchState: u } = (0, i.cj)([c.Z], () => ({
            hasAlreadyLinked: null != c.Z.getNewestTokenForApplication(null == t ? void 0 : t.id),
            authorizedAppsFetchState: c.Z.getFetchState(),
        }));
    r.useEffect(() => {
        u === c.M.NOT_FETCHED && n && l.Z.fetch();
    }, [u, n]);
    let d = r.useCallback(() => {
        null != t && n && a.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", (e) => e.socket.application.id === t.id, {});
    }, [n, t]);
    return {
        canStartAuthorization: n,
        hasAlreadyLinked: o && u === c.M.FETCHED,
        startAuthorization: d,
    };
}
