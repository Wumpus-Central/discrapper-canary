n.d(t, {
    K: () => c,
    q: () => u,
});
var r = n(227399),
    i = n(919118),
    a = n(309098),
    o = n(473749);
let s = new WeakMap();
function l(e) {
    let t = s.get(e);
    return t || ((t = new (0, i.J)(e)), s.set(e, t)), t;
}
function c(e, t) {
    return (t && i.J.getGlobalDictionaryForPackage(t)) || l(e);
}
function u(e, t) {
    let { locale: n } = (0, r.j)(),
        i = c(e, t);
    return (0, o.useMemo)(() => new (0, a.E)(n, i), [n, i]);
}
