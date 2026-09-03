r.d(t, { p: () => _ }), r(321073);
var l = r(228366),
    o = r(350172),
    u = r(730202),
    c = r(540737),
    n = r(821925);
let s = new Set(),
    a = new Set(),
    S = null,
    f = null;
function d(e) {
    let t = [];
    for (let r = 0; r < e.length; r += 100) t.push(e.slice(r, r + 100));
    return t;
}
function i() {
    S = null;
    let e = [...s];
    for (let t of (s.clear(), d(e))) (0, c.tu)({ skuIds: t });
}
function h() {
    f = null;
    let e = [...a];
    for (let t of (a.clear(), d(e))) (0, o._v)({ collectionIds: t });
}
let _ = {
    requestProducts(e) {
        for (let t of e) "" !== t && "loading" !== n.A.getFetchStateForSku(t) && s.add(t);
        s.size > 0 && null == S && (S = setTimeout(i, 32));
    },
    requestCollections(e) {
        for (let t of e) "" !== t && "loading" !== u.A.getFetchState(t) && a.add(t);
        a.size > 0 && null == f && (f = setTimeout(h, 32));
    },
    reset() {
        s.clear(), a.clear(), null != S && (clearTimeout(S), (S = null)), null != f && (clearTimeout(f), (f = null));
    },
};
l.h.subscribe("LOGOUT", _.reset);
