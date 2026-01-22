n.d(t, {
    e: () => c,
    o: () => u,
});
var r = n(853590),
    i = n(731692),
    a = n(944490),
    s = n(64700);
let o = new WeakMap();
function l(e) {
    let t = o.get(e);
    return t || ((t = new (0, i.B)(e)), o.set(e, t)), t;
}
function c(e, t) {
    return (t && i.B.getGlobalDictionaryForPackage(t)) || l(e);
}
function u(e, t) {
    let { locale: n } = (0, r.Y)(),
        i = c(e, t);
    return (0, s.useMemo)(() => new (0, a.J)(n, i), [n, i]);
}
