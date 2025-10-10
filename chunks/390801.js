r.d(t, { Z: () => i });
var a = r(369318),
    n = r(181568);
let o = Math.PI / 180;
function s(e) {
    e[1] < 0 && (e = a.Z.fromBase(a.Z.toBase(e)));
    let t = Math.log(Math.max(1 + 0.0228 * e[1] * a.P.flRoot, 1)) / 0.0228,
        r = e[0] * o,
        n = t * Math.cos(r),
        s = t * Math.sin(r);
    return [e[2], n, s];
}
function i(e, t) {
    [e, t] = (0, n.Z)([e, t]);
    let [r, o, i] = s(a.Z.from(e)),
        [c, u, l] = s(a.Z.from(t));
    return Math.sqrt((r - c) ** 2 + (o - u) ** 2 + (i - l) ** 2);
}
