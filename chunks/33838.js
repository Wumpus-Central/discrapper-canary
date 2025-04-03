r.d(t, { Z: () => s });
var a = r(857702),
    n = r(181568);
function s(e, t) {
    [e, t] = (0, n.Z)([e, t]);
    let [r, s, o] = a.Z.from(e),
        [i, c, l] = a.Z.from(t);
    Number.isNaN(o) && Number.isNaN(l) ? ((o = 0), (l = 0)) : Number.isNaN(o) ? (o = l) : Number.isNaN(l) && (l = o);
    let u = 2 * Math.sqrt(s * c) * Math.sin(((o - l) / 2) * (Math.PI / 180));
    return Math.sqrt((r - i) ** 2 + (s - c) ** 2 + u ** 2);
}
