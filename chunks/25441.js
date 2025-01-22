r.d(n, {
    N: function () {
        return o;
    },
    h: function () {
        return s;
    }
});
var i = r(47120);
let a = new Map();
function o(e, n) {
    let r = a.get(e);
    return null == r && ((r = new Set()), a.set(e, r)), r.add(n), () => (null == r ? void 0 : r.delete(n));
}
function s(e, n, r) {
    let i = a.get(e);
    if (null != i) for (let e of i) e(n, r);
}
