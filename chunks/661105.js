r.d(t, { Z: () => s });
var a = r(181568),
    n = r(665352),
    o = r(262281);
function s(e, t, { inGamut: r } = {}) {
    e = (0, a.Z)(e);
    let i = (t = n.Z.get(t)).from(e),
        c = {
            space: t,
            coords: i,
            alpha: e.alpha,
        };
    return r && (c = (0, o.Z)(c, !0 === r ? void 0 : r)), c;
}
s.returns = "color";
