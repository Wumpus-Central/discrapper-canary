n.d(t, {
    Tl: () => _,
    YV: () => c,
    Yr: () => p,
    a5: () => f,
    cF: () => d,
    iE: () => o,
    id: () => u,
    tK: () => l,
    yX: () => s,
}),
    n(388685),
    n(361932),
    n(187205);
var r = n(647438),
    i = n(223143),
    a = n(347896);
function o() {
    let [e, t] = r.useState(),
        n = (0, a.Z)(),
        o = null == n ? void 0 : n.rewards,
        s = null == n ? void 0 : n.variants;
    null != s && (o = s.flatMap((e) => e.variants));
    let { purchases: l, hasPreviouslyFetched: c, fetchPurchasesError: u } = (0, i.c7)(),
        d = r.useRef(!1);
    return (
        r.useEffect(() => {
            c &&
                !d.current &&
                null != o &&
                (t(null == u ? o.filter((e) => null == l.get(e.skuId)) : []), (d.current = !0));
        }, [o, l, c, u]),
        null != e ? e : void 0
    );
}
function s() {
    var e;
    let t = (0, a.Z)();
    return null != (e = null == t ? void 0 : t.variants) ? e : void 0;
}
function l(e) {
    let { purchases: t } = (0, i.c7)();
    return null != e ? t.get(e) : null;
}
function c(e) {
    let t = new Map();
    return e.forEach((e) => t.set(e.skuId, e.assetId)), t;
}
function u(e, t, n) {
    let r = f(e),
        i = null != n && n.length >= 1;
    return t && r && i;
}
function d(e, t, n) {
    let r = f(e);
    return null != n && 1 === n.length && r && t;
}
function f(e) {
    var t;
    let n = null == (t = (0, a.Z)()) ? void 0 : t.eligiblePlanIds;
    return null == n ? void 0 : n.includes(null == e ? void 0 : e.id);
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 78.98;
    if (null == e) return;
    let n = Array.isArray(e) ? e : e.gradient,
        r = Array.isArray(e) || null == e.angle ? t : e.angle;
    return { background: "linear-gradient(".concat(r, "deg, ").concat(n.join(", "), ")") };
}
function p(e) {
    if (null != e)
        return {
            backgroundImage: "url(".concat(e, ")"),
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        };
}
