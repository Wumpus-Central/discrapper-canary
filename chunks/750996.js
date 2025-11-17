n.d(t, { a: () => s });
var r = n(227399),
    i = n(45728),
    a = n(122136),
    o = n(473749);
function s(e) {
    e = (0, a.v)(null != e ? e : {}, l);
    let { locale: t } = (0, r.j)();
    return (0, o.useMemo)(() => new (0, i.C)(t, e), [t, e]);
}
function l(e, t) {
    if (e === t) return !0;
    let n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let r of n) if (t[r] !== e[r]) return !1;
    return !0;
}
