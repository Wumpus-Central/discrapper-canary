n.d(t, { a: () => N, p: () => m });
var l = n(503698),
    s = n.n(l),
    a = n(559949),
    r = n(676279),
    o = n(248778),
    u = n(913563),
    i = n(824994),
    c = n(750656),
    d = n(516064);
let f = {
    [a.x.DEFAULT]: "",
    [a.x.CHERRY_BOMB]: d.u_,
    [a.x.CHICLE]: d.xO,
    [a.x.MUSEO_MODERNO]: d._,
    [a.x.NEO_CASTEL]: d.pN,
    [a.x.PIXELIFY]: d.f,
    [a.x.SINISTRE]: d.yH,
    [a.x.ZILLA_SLAB]: d.FR,
    [a.x.PLAYPEN_SANS]: d.R_,
    [a.x.ORBITRON]: d.yT,
    [a.x.NEW_ROCKER]: d.NX,
    [a.x.KALAM]: d.x4,
};
function m(e) {
    return { name: (0, u.A)(e), className: f[e] ?? "" };
}
function N(e) {
    let { displayNameStyles: t } = e,
        n = (0, i.W)({ location: "useDisplayNameStylesFont" }),
        l = (0, o.DW)("useDisplayNameStylesFont");
    if (!n || null == t || (!l && c._k.includes(t.fontId))) return "";
    let a = m(t.fontId);
    return "" === a.className ? "" : s()(d.zt, a.className, { [d.VM]: (0, r.nr)() });
}
