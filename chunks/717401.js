n.d(t, {
    YV: () => l,
    a5: () => d,
    cF: () => u,
    iE: () => o,
    id: () => c,
    tK: () => s
}),
    n(388685);
var r = n(192379),
    i = n(223143),
    a = n(286961);
function o() {
    let [e, t] = r.useState(),
        n = (0, a.Z)(),
        o = null == n ? void 0 : n.rewards,
        { purchases: s, hasPreviouslyFetched: l, fetchPurchasesError: c } = (0, i.c7)(),
        u = r.useRef(!1);
    return (
        r.useEffect(() => {
            l && !u.current && null != o && (t(null == c ? o.filter((e) => null == s.get(e.skuId)) : []), (u.current = !0));
        }, [o, s, l, c]),
        null != e ? e : void 0
    );
}
function s(e) {
    let { purchases: t } = (0, i.c7)();
    return null != e ? t.get(e) : null;
}
function l(e) {
    let t = new Map();
    return e.forEach((e) => t.set(e.skuId, e.assetId)), t;
}
function c(e, t, n) {
    let r = d(e),
        i = null != n && n.length > 1;
    return t && r && i;
}
function u(e, t, n) {
    let r = d(e);
    return null != n && 1 === n.length && r && t;
}
function d(e) {
    var t;
    let n = null == (t = (0, a.Z)()) ? void 0 : t.eligiblePlanIds;
    return null == n ? void 0 : n.includes(null == e ? void 0 : e.id);
}
