r.d(t, { Z: () => o });
var a = r(181568),
    n = r(665352),
    s = r(262281);
function o(e, t, { inGamut: r } = {}) {
    e = (0, a.Z)(e);
    let i = (t = n.Z.get(t)).from(e),
        c = {
            space: t,
            coords: i,
            alpha: e.alpha
        };
    return r && (c = (0, s.Z)(c, !0 === r ? void 0 : r)), c;
}
o.returns = 'color';
