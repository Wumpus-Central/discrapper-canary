r.d(t, { EG: () => u, N9: () => o, au: () => a, j5: () => l });
var n = r(644255),
    i = r(295551);
function o(e) {
    return (0, n.lg)() ? e.altKey : e.ctrlKey;
}
function a(e, t) {
    let r = `[data-key="${CSS.escape(String(t))}"]`,
        n = e.current?.dataset.collection;
    return n && (r = `[data-collection="${CSS.escape(n)}"]${r}`), e.current?.querySelector(r);
}
let s = new WeakMap();
function l(e) {
    let t = (0, i.Bi)();
    return s.set(e, t), t;
}
function u(e) {
    return s.get(e);
}
