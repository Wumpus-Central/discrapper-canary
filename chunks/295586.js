r.d(t, { p: () => E }), r(321073);
var l = r(228366),
    o = r(350172),
    u = r(730202),
    n = r(540737),
    c = r(821925);
let s = new Set(),
    a = new Set(),
    i = null,
    d = null,
    S = !1;
function f(e) {
    let t = [];
    for (let r = 0; r < e.length; r += 100) t.push(e.slice(r, r + 100));
    return t;
}
function h() {
    i = null;
    let e = [...s];
    for (let t of (s.clear(), f(e))) (0, n.tu)({ skuIds: t });
}
function _() {
    d = null;
    let e = [...a],
        t = S;
    for (let r of (a.clear(), (S = !1), f(e)))
        (0, o._v)({ collectionIds: r, includeUnpublishedCollections: t, includeUnpublishedProducts: t });
}
let E = {
    requestProducts(e) {
        for (let t of e) "" !== t && "loading" !== c.A.getFetchStateForSku(t) && s.add(t);
        s.size > 0 && null == i && (i = setTimeout(h, 32));
    },
    requestCollections(e) {
        let { includeUnpublished: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        for (let t of e) "" !== t && "loading" !== u.A.getFetchState(t) && a.add(t);
        t && (S = !0), a.size > 0 && null == d && (d = setTimeout(_, 32));
    },
    reset() {
        s.clear(),
            a.clear(),
            (S = !1),
            null != i && (clearTimeout(i), (i = null)),
            null != d && (clearTimeout(d), (d = null));
    },
};
l.h.subscribe("LOGOUT", E.reset);
