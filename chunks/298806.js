t.d(a, { a: () => o });
var u = t(594886),
    n = t(45728),
    r = t(872),
    i = t(647438);
function o(e) {
    e = (0, r.v)(null != e ? e : {}, l);
    let { locale: a } = (0, u.j)();
    return (0, i.useMemo)(() => new (0, n.C)(a, e), [a, e]);
}
function l(e, a) {
    if (e === a) return !0;
    let t = Object.keys(e),
        u = Object.keys(a);
    if (t.length !== u.length) return !1;
    for (let u of t) if (a[u] !== e[u]) return !1;
    return !0;
}
