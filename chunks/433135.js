r.d(t, {
    Z: function () {
        return s;
    }
});
var a = r(762399),
    n = r(181568);
function s(e, t) {
    [e, t] = (0, n.Z)([e, t]);
    let [r, s, o] = a.Z.from(e),
        [i, c, u] = a.Z.from(t);
    return Math.sqrt((r - i) ** 2 + (s - c) ** 2 + (o - u) ** 2);
}
