n.d(t, {
    YV: () => l,
    a5: () => d,
    cF: () => c,
    iE: () => s,
    id: () => u,
    tK: () => o
}),
    n(47120);
var i = n(192379),
    r = n(223143),
    a = n(286961);
function s() {
    let [e, t] = i.useState(),
        n = (0, a.Z)(),
        s = null == n ? void 0 : n.rewards,
        { purchases: o, hasPreviouslyFetched: l, fetchPurchasesError: u } = (0, r.c7)(),
        c = i.useRef(!1);
    return (
        i.useEffect(() => {
            l && !c.current && null != s && (t(null == u ? s.filter((e) => null == o.get(e.skuId)) : []), (c.current = !0));
        }, [s, o, l, u]),
        null != e ? e : void 0
    );
}
function o(e) {
    let { purchases: t } = (0, r.c7)();
    return null != e ? t.get(e) : null;
}
function l(e) {
    let t = new Map();
    return e.forEach((e) => t.set(e.skuId, e.assetId)), t;
}
function u(e, t, n) {
    let i = d(e),
        r = null != n && n.length > 1;
    return t && i && r;
}
function c(e, t, n) {
    let i = d(e);
    return null != n && 1 === n.length && i && t;
}
function d(e) {
    var t;
    let n = null === (t = (0, a.Z)()) || void 0 === t ? void 0 : t.eligiblePlanIds;
    return null == n ? void 0 : n.includes(null == e ? void 0 : e.id);
}
