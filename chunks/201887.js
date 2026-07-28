"use strict";
n.d(t, { EG: () => u, N9: () => a, au: () => o, j5: () => l });
var r = n(361037),
    i = n(709157);
function a(e) {
    return (0, r.lg)() ? e.altKey : e.ctrlKey;
}
function o(e, t) {
    var n, r;
    let i = `[data-key="${CSS.escape(String(t))}"]`,
        a = null == (n = e.current) ? void 0 : n.dataset.collection;
    return a && (i = `[data-collection="${CSS.escape(a)}"]${i}`), null == (r = e.current) ? void 0 : r.querySelector(i);
}
let s = new WeakMap();
function l(e) {
    let t = (0, i.Bi)();
    return s.set(e, t), t;
}
function u(e) {
    return s.get(e);
}
