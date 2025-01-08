r.d(t, {
    Z: function () {
        return s;
    }
});
var a = r(181568),
    n = r(665352),
    o = r(262281);
function s(e, t, { inGamut: r } = {}) {
    e = (0, a.Z)(e);
    let s = (t = n.Z.get(t)).from(e),
        i = {
            space: t,
            coords: s,
            alpha: e.alpha
        };
    return r && (i = (0, o.Z)(i, !0 === r ? void 0 : r)), i;
}
s.returns = 'color';
