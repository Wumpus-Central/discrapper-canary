r.d(n, {
    UC: function () {
        return c;
    },
    YP: function () {
        return u;
    },
    c: function () {
        return l;
    }
});
var i = r(47120);
let a = new WeakMap(),
    o = new WeakMap();
function s(e, n) {
    e.forEach((e) => {
        var r;
        let i = null === (r = o.get(n)) || void 0 === r ? void 0 : r.get(e.target);
        null != i && i.call(null, e);
    });
}
function l(e) {
    let n = a.get(e);
    return null == n && ((n = new IntersectionObserver(s, e)), a.set(e, n), o.set(n, new WeakMap())), n;
}
function u(e, n, r) {
    var i;
    let a = null !== (i = o.get(e)) && void 0 !== i ? i : new WeakMap();
    !a.has(n) && e.observe(n), a.set(n, r), o.set(e, a);
}
function c(e, n) {
    var r;
    let i = null !== (r = o.get(e)) && void 0 !== r ? r : new WeakMap();
    i.has(n) && (i.delete(n), e.unobserve(n), o.set(e, i));
}
