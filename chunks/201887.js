"use strict";
r.d(t, { EG: () => u, N9: () => o, au: () => a, j5: () => l });
var n = r(361037),
    i = r(709157);
function o(e) {
    return (0, n.lg)() ? e.altKey : e.ctrlKey;
}
function a(e, t) {
    var r, n;
    let i = `[data-key="${CSS.escape(String(t))}"]`,
        o = null == (r = e.current) ? void 0 : r.dataset.collection;
    return o && (i = `[data-collection="${CSS.escape(o)}"]${i}`), null == (n = e.current) ? void 0 : n.querySelector(i);
}
let s = new WeakMap();
function l(e) {
    let t = (0, i.Bi)();
    return s.set(e, t), t;
}
function u(e) {
    return s.get(e);
}
