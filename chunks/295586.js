(r.d(t, { p: () => T }), r(321073));
var l = r(228366),
    o = r(350172),
    u = r(730202),
    n = r(540737),
    c = r(821925);
let s = new Set(),
    i = new Set(),
    a = null,
    d = null,
    f = !1,
    S = !1;
function h(e) {
    let t = [];
    for (let r = 0; r < e.length; r += 100) t.push(e.slice(r, r + 100));
    return t;
}
function _() {
    a = null;
    let e = [...s];
    for (let t of (s.clear(), h(e))) (0, n.tu)({ skuIds: t });
}
function E() {
    d = null;
    let e = [...i],
        t = f,
        r = S;
    for (let l of (i.clear(), (f = !1), (S = !1), h(e)))
        (0, o._v)({
            collectionIds: l,
            includeUnpublishedCollections: t,
            includeUnpublishedProducts: t,
            includePricing: r,
        });
}
let T = {
    requestProducts(e) {
        for (let t of e) "" !== t && "loading" !== c.A.getFetchStateForSku(t) && s.add(t);
        s.size > 0 && null == a && (a = setTimeout(_, 32));
    },
    requestCollections(e) {
        let { includeUnpublished: t = !1, includePricing: r = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        for (let t of e) {
            let e = "loading" === u.A.getFetchState(t) && (!r || u.A.hasPricingCoverage(t));
            "" === t || e || i.add(t);
        }
        (t && (f = !0), r && (S = !0), i.size > 0 && null == d && (d = setTimeout(E, 32)));
    },
    reset() {
        (s.clear(),
            i.clear(),
            (f = !1),
            (S = !1),
            null != a && (clearTimeout(a), (a = null)),
            null != d && (clearTimeout(d), (d = null)));
    },
};
l.h.subscribe("LOGOUT", T.reset);
