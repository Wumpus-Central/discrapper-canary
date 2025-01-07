r.d(t, {
    Z: function () {
        return s;
    }
});
var a = r(665352),
    n = r(181568);
function s(e, t, { epsilon: r = 0.000075 } = {}) {
    (e = (0, n.Z)(e)), !t && (t = e.space), (t = a.Z.get(t));
    let s = e.coords;
    return t !== e.space && (s = t.from(e)), t.inGamut(s, { epsilon: r });
}
