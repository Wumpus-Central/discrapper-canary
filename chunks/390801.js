r.d(t, {
    Z: function () {
        return c;
    }
});
var a = r(369318),
    n = r(181568);
let s = Math.PI / 180,
    o = [1, 0.007, 0.0228];
function i(e) {
    e[1] < 0 && (e = a.Z.fromBase(a.Z.toBase(e)));
    let t = Math.log(Math.max(1 + 0.0228 * e[1] * a.P.flRoot, 1)) / 0.0228,
        r = e[0] * s,
        n = t * Math.cos(r),
        o = t * Math.sin(r);
    return [e[2], n, o];
}
function c(e, t) {
    [e, t] = (0, n.Z)([e, t]);
    let [r, s, o] = i(a.Z.from(e)),
        [c, u, l] = i(a.Z.from(t));
    return Math.sqrt((r - c) ** 2 + (s - u) ** 2 + (o - l) ** 2);
}
