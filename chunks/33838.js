r.d(t, {
    Z: function () {
        return s;
    }
});
var a = r(857702),
    n = r(181568);
function s(e, t) {
    [e, t] = (0, n.Z)([e, t]);
    let [r, s, o] = a.Z.from(e),
        [i, c, u] = a.Z.from(t);
    Number.isNaN(o) && Number.isNaN(u) ? ((o = 0), (u = 0)) : Number.isNaN(o) ? (o = u) : Number.isNaN(u) && (u = o);
    let l = 2 * Math.sqrt(s * c) * Math.sin(((o - u) / 2) * (Math.PI / 180));
    return Math.sqrt((r - i) ** 2 + (s - c) ** 2 + l ** 2);
}
