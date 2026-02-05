"use strict";
n.d(t, { $v: () => l, e: () => s, wB: () => o });
let r = new WeakMap(),
    i = new WeakMap();
function a(e, t) {
    e.forEach((e) => {
        let n = i.get(t)?.get(e.target);
        null != n && n.call(null, e);
    });
}
function s(e) {
    let t = r.get(e);
    return null == t && ((t = new IntersectionObserver(a, e)), r.set(e, t), i.set(t, new WeakMap())), t;
}
function o(e, t, n) {
    let r = i.get(e) ?? new WeakMap();
    r.has(t) || e.observe(t), r.set(t, n), i.set(e, r);
}
function l(e, t) {
    let n = i.get(e) ?? new WeakMap();
    n.has(t) && (n.delete(t), e.unobserve(t), i.set(e, n));
}
