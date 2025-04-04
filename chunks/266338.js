n.d(t, {
    UC: () => l,
    YP: () => s,
    c: () => a
}),
    n(47120);
let r = new WeakMap(),
    i = new WeakMap();
function o(e, t) {
    e.forEach((e) => {
        var n;
        let r = null == (n = i.get(t)) ? void 0 : n.get(e.target);
        null != r && r.call(null, e);
    });
}
function a(e) {
    let t = r.get(e);
    return null == t && ((t = new IntersectionObserver(o, e)), r.set(e, t), i.set(t, new WeakMap())), t;
}
function s(e, t, n) {
    var r;
    let o = null != (r = i.get(e)) ? r : new WeakMap();
    o.has(t) || e.observe(t), o.set(t, n), i.set(e, o);
}
function l(e, t) {
    var n;
    let r = null != (n = i.get(e)) ? n : new WeakMap();
    r.has(t) && (r.delete(t), e.unobserve(t), i.set(e, r));
}
