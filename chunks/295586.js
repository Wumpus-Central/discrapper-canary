l(321073);
var r = l(73153),
    o = l(350172),
    u = l(730202),
    n = l(540737),
    c = l(821925);
let s = new Set(),
    i = new Set(),
    a = null,
    d = null,
    f = !1,
    h = !1;
function S(e) {
    let t = [];
    for (let l = 0; l < e.length; l += 100) t.push(e.slice(l, l + 100));
    return t;
}
function p() {
    a = null;
    let e = [...s];
    for (let t of (s.clear(), S(e))) (0, n.tu)({ skuIds: t });
}
function g() {
    d = null;
    let e = [...i],
        t = f,
        l = h;
    for (let r of (i.clear(), (f = !1), (h = !1), S(e)))
        (0, o._v)({
            collectionIds: r,
            includeUnpublishedCollections: t,
            includeUnpublishedProducts: t,
            includePricing: l,
        });
}
let _ = {
    requestProducts(e) {
        for (let t of e) "" !== t && "loading" !== c.A.getFetchStateForSku(t) && s.add(t);
        s.size > 0 && null == a && (a = setTimeout(p, 32));
    },
    requestCollections(e) {
        let { includeUnpublished: t = !1, includePricing: l = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        for (let t of e) {
            let e = "loading" === u.A.getFetchState(t) && (!l || u.A.hasPricingCoverage(t));
            "" === t || e || i.add(t);
        }
        (t && (f = !0), l && (h = !0), i.size > 0 && null == d && (d = setTimeout(g, 32)));
    },
    reset() {
        (s.clear(),
            i.clear(),
            (f = !1),
            (h = !1),
            null != a && (clearTimeout(a), (a = null)),
            null != d && (clearTimeout(d), (d = null)));
    },
};
(r.h.subscribe("LOGOUT", _.reset), l.d(t, {}, { p: _ }));
