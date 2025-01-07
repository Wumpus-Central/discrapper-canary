r.d(t, {
    Z: function () {
        return o;
    }
});
var a = r(181568),
    n = r(665352),
    s = r(262281);
function o(e, t, { inGamut: r } = {}) {
    e = (0, a.Z)(e);
    let o = (t = n.Z.get(t)).from(e),
        i = {
            space: t,
            coords: o,
            alpha: e.alpha
        };
    return r && (i = (0, s.Z)(i, !0 === r ? void 0 : r)), i;
}
o.returns = 'color';
