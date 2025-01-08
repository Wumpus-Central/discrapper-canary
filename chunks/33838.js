r.d(t, {
    Z: function () {
        return o;
    }
});
var a = r(857702),
    n = r(181568);
function o(e, t) {
    [e, t] = (0, n.Z)([e, t]);
    let [r, o, s] = a.Z.from(e),
        [i, c, u] = a.Z.from(t);
    Number.isNaN(s) && Number.isNaN(u) ? ((s = 0), (u = 0)) : Number.isNaN(s) ? (s = u) : Number.isNaN(u) && (u = s);
    let l = 2 * Math.sqrt(o * c) * Math.sin(((s - u) / 2) * (Math.PI / 180));
    return Math.sqrt((r - i) ** 2 + (o - c) ** 2 + l ** 2);
}
