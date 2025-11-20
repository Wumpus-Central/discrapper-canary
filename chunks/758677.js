n.d(t, {
    j: () => s,
    t: () => l,
}),
    n(997841),
    n(388685);
var r = n(473749),
    i = n(95015),
    a = n(812206),
    o = n(981631);
function s(e) {
    var t, n, r, s, l;
    if (null == e) return null;
    if (
        (0, i.yE)(null != (t = e.flags) ? t : 0, o.udG.SOCIAL_LAYER_INTEGRATION) ||
        (0, i.yE)(null != (n = e.flags) ? n : 0, o.udG.SOCIAL_LAYER_INTEGRATION_LIMITED)
    )
        return e;
    for (let t of null != (r = e.linkedGames) ? r : []) {
        let e = a.Z.getApplication(t.id);
        if (
            null != e &&
            ((0, i.yE)(null != (s = e.flags) ? s : 0, o.udG.SOCIAL_LAYER_INTEGRATION) ||
                (0, i.yE)(null != (l = e.flags) ? l : 0, o.udG.SOCIAL_LAYER_INTEGRATION_LIMITED))
        )
            return e;
    }
    return null;
}
function l(e) {
    return r.useMemo(() => s(e), [e]);
}
