l.d(t, { a: () => f, p: () => d });
var n = l(503698),
    s = l.n(n),
    a = l(559949),
    r = l(676279),
    o = l(913563),
    u = l(824994),
    c = l(516064);
let i = {
    [a.x.DEFAULT]: "",
    [a.x.CHERRY_BOMB]: c.u_,
    [a.x.CHICLE]: c.xO,
    [a.x.MUSEO_MODERNO]: c._,
    [a.x.NEO_CASTEL]: c.pN,
    [a.x.PIXELIFY]: c.f,
    [a.x.SINISTRE]: c.yH,
    [a.x.ZILLA_SLAB]: c.FR,
    [a.x.PLAYPEN_SANS]: c.R_,
    [a.x.ORBITRON]: c.yT,
    [a.x.NEW_ROCKER]: c.NX,
    [a.x.KALAM]: c.x4,
    [a.x.HEXAGON]: c.qP,
};
function d(e) {
    return { name: (0, o.A)(e), className: i[e] ?? "" };
}
function f(e) {
    let { displayNameStyles: t, compensateForSafari: l = !0 } = e;
    if (!(0, u.W)({ location: "useDisplayNameStylesFont" }) || null == t) return "";
    let n = d(t.fontId);
    return "" === n.className ? "" : s()(c.zt, n.className, { [c.VM]: l && (0, r.nr)() });
}
