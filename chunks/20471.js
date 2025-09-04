n.d(t, {
    F: () => d,
    j: () => c,
}),
    n(997841),
    n(388685);
var a = n(647438),
    r = n(812206),
    l = n(812967),
    i = n(146219),
    s = n(630388),
    o = n(981631);
function c(e) {
    var t, n, a, l, i;
    if (null == e) return null;
    if (
        (0, s.yE)(null != (t = e.flags) ? t : 0, o.udG.SOCIAL_LAYER_INTEGRATION) ||
        (0, s.yE)(null != (n = e.flags) ? n : 0, o.udG.SOCIAL_LAYER_INTEGRATION_LIMITED)
    )
        return e;
    for (let t of null != (a = e.linkedGames) ? a : []) {
        let e = r.Z.getApplication(t.id);
        if (
            null != e &&
            ((0, s.yE)(null != (l = e.flags) ? l : 0, o.udG.SOCIAL_LAYER_INTEGRATION) ||
                (0, s.yE)(null != (i = e.flags) ? i : 0, o.udG.SOCIAL_LAYER_INTEGRATION_LIMITED))
        )
            return e;
    }
    return null;
}
function d(e) {
    let t = a.useMemo(() => c(e), [e]),
        n = (0, i.t)(null == t ? void 0 : t.id, "AUTHORIZE_REQUEST");
    return {
        canStartAuthorization: n,
        startAuthorization: a.useCallback(() => {
            null != t &&
                n &&
                l.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", (e) => e.socket.application.id === t.id, {});
        }, [n, t]),
    };
}
