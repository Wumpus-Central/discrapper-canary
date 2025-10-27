n.d(t, {
    j: () => o,
    t: () => c,
}),
    n(997841),
    n(388685);
var r = n(647438),
    i = n(812206),
    a = n(630388),
    l = n(981631);
function o(e) {
    var t, n, r, o, c;
    if (null == e) return null;
    if (
        (0, a.yE)(null != (t = e.flags) ? t : 0, l.udG.SOCIAL_LAYER_INTEGRATION) ||
        (0, a.yE)(null != (n = e.flags) ? n : 0, l.udG.SOCIAL_LAYER_INTEGRATION_LIMITED)
    )
        return e;
    for (let t of null != (r = e.linkedGames) ? r : []) {
        let e = i.Z.getApplication(t.id);
        if (
            null != e &&
            ((0, a.yE)(null != (o = e.flags) ? o : 0, l.udG.SOCIAL_LAYER_INTEGRATION) ||
                (0, a.yE)(null != (c = e.flags) ? c : 0, l.udG.SOCIAL_LAYER_INTEGRATION_LIMITED))
        )
            return e;
    }
    return null;
}
function c(e) {
    return r.useMemo(() => o(e), [e]);
}
