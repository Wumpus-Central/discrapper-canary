"use strict";
n.d(t, { a: () => f, p: () => h });
var i = n(503698),
    r = n.n(i),
    s = n(559949),
    a = n(676279),
    o = n(248778),
    l = n(913563),
    u = n(824994),
    c = n(750656),
    d = n(592073);
let _ = {
    [s.x.DEFAULT]: "",
    [s.x.CHERRY_BOMB]: d.u_,
    [s.x.CHICLE]: d.xO,
    [s.x.MUSEO_MODERNO]: d._,
    [s.x.NEO_CASTEL]: d.pN,
    [s.x.PIXELIFY]: d.f,
    [s.x.SINISTRE]: d.yH,
    [s.x.ZILLA_SLAB]: d.FR,
    [s.x.PLAYPEN_SANS]: d.R_,
    [s.x.ORBITRON]: d.yT,
    [s.x.NEW_ROCKER]: d.NX,
    [s.x.KALAM]: d.x4,
};
function h(e) {
    return { name: (0, l.A)(e), className: _[e] ?? "" };
}
function f(e) {
    let { displayNameStyles: t } = e,
        n = (0, u.W)({ location: "useDisplayNameStylesFont" }),
        i = (0, o.DW)("useDisplayNameStylesFont");
    if (!n || null == t || (!i && c._k.includes(t.fontId))) return "";
    let s = h(t.fontId);
    return "" === s.className ? "" : r()(d.zt, s.className, { [d.VM]: (0, a.nr)() });
}
