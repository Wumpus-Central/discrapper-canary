"use strict";
r.d(t, { EG: () => u, N9: () => i, au: () => a, j5: () => l });
var n = r(361037),
    o = r(709157);
function i(e) {
    return (0, n.lg)() ? e.altKey : e.ctrlKey;
}
function a(e, t) {
    var r, n;
    let o = `[data-key="${CSS.escape(String(t))}"]`,
        i = null == (r = e.current) ? void 0 : r.dataset.collection;
    return i && (o = `[data-collection="${CSS.escape(i)}"]${o}`), null == (n = e.current) ? void 0 : n.querySelector(o);
}
let s = new WeakMap();
function l(e) {
    let t = (0, o.Bi)();
    return s.set(e, t), t;
}
function u(e) {
    return s.get(e);
}
