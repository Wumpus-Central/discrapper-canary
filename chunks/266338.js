n.d(t, {
    UC: () => l,
    YP: () => o,
    c: () => s
}),
    n(47120);
let i = new WeakMap(),
    r = new WeakMap();
function a(e, t) {
    e.forEach((e) => {
        var n;
        let i = null === (n = r.get(t)) || void 0 === n ? void 0 : n.get(e.target);
        null != i && i.call(null, e);
    });
}
function s(e) {
    let t = i.get(e);
    return null == t && ((t = new IntersectionObserver(a, e)), i.set(e, t), r.set(t, new WeakMap())), t;
}
function o(e, t, n) {
    var i;
    let a = null !== (i = r.get(e)) && void 0 !== i ? i : new WeakMap();
    a.has(t) || e.observe(t), a.set(t, n), r.set(e, a);
}
function l(e, t) {
    var n;
    let i = null !== (n = r.get(e)) && void 0 !== n ? n : new WeakMap();
    i.has(t) && (i.delete(t), e.unobserve(t), r.set(e, i));
}
