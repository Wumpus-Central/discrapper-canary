n.d(t, {
    D0: () => o,
    FJ: () => a,
    Mm: () => l,
    Zx: () => c,
});
var r = n(21814),
    i = n(752689);
function a(e) {
    return (0, r.ad)() ? e.altKey : e.ctrlKey;
}
function o(e, t) {
    var n, r;
    let i = `[data-key="${CSS.escape(String(t))}"]`,
        a = null == (n = e.current) ? void 0 : n.dataset.collection;
    return a && (i = `[data-collection="${CSS.escape(a)}"]${i}`), null == (r = e.current) ? void 0 : r.querySelector(i);
}
let s = new WeakMap();
function l(e) {
    let t = (0, i.Me)();
    return s.set(e, t), t;
}
function c(e) {
    return s.get(e);
}
