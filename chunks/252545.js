"use strict";
n.d(t, { a: () => f, p: () => _ });
var i = n(503698),
    r = n.n(i),
    s = n(559949),
    a = n(676279),
    o = n(864386);
let l = {
    [s.x.DEFAULT]: o.default.ZEL6mz,
    [s.x.CHERRY_BOMB]: o.default.rN7cuX,
    [s.x.CHICLE]: o.default.CbHHnL,
    [s.x.MUSEO_MODERNO]: o.default.iEcEKO,
    [s.x.NEO_CASTEL]: o.default.DL7jLZ,
    [s.x.PIXELIFY]: o.default.jq4aRp,
    [s.x.SINISTRE]: o.default.jV9DN4,
    [s.x.ZILLA_SLAB]: o.default.KMR8rT,
};
var u = n(824994),
    c = n(592073);
let d = {
    [s.x.DEFAULT]: "",
    [s.x.CHERRY_BOMB]: c.u_,
    [s.x.CHICLE]: c.xO,
    [s.x.MUSEO_MODERNO]: c._,
    [s.x.NEO_CASTEL]: c.pN,
    [s.x.PIXELIFY]: c.f,
    [s.x.SINISTRE]: c.yH,
    [s.x.ZILLA_SLAB]: c.FR,
};
function _(e) {
    return { name: l[e] ?? o.default.ZEL6mz, className: d[e] ?? "" };
}
function f(e) {
    let { displayNameStyles: t } = e;
    if (!(0, u.W)({ location: "useDisplayNameStylesFont" }) || null == t) return "";
    let n = _(t.fontId);
    return "" === n.className ? "" : r()(c.zt, n.className, { [c.VM]: (0, a.nr)() });
}
