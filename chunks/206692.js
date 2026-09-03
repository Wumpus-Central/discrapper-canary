n.d(t, { $v: () => o, e: () => s, wB: () => l });
let i = new WeakMap(),
    r = new WeakMap();
function a(e, t) {
    e.forEach((e) => {
        let n = r.get(t)?.get(e.target);
        null != n && n.call(null, e);
    });
}
function s(e) {
    let t = i.get(e);
    return null == t && ((t = new IntersectionObserver(a, e)), i.set(e, t), r.set(t, new WeakMap())), t;
}
function l(e, t, n) {
    let i = r.get(e) ?? new WeakMap();
    i.has(t) || e.observe(t), i.set(t, n), r.set(e, i);
}
function o(e, t) {
    let n = r.get(e) ?? new WeakMap();
    n.has(t) && (n.delete(t), e.unobserve(t), r.set(e, n));
}
