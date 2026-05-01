"use strict";
n.d(t, { a: () => c, p: () => u });
var i = n(503698),
    r = n.n(i),
    s = n(559949),
    a = n(676279),
    o = n(913563),
    l = n(824994),
    _ = n(592073);
let d = {
    [s.x.DEFAULT]: "",
    [s.x.CHERRY_BOMB]: _.u_,
    [s.x.CHICLE]: _.xO,
    [s.x.MUSEO_MODERNO]: _._,
    [s.x.NEO_CASTEL]: _.pN,
    [s.x.PIXELIFY]: _.f,
    [s.x.SINISTRE]: _.yH,
    [s.x.ZILLA_SLAB]: _.FR,
};
function u(e) {
    return { name: (0, o.A)(e), className: d[e] ?? "" };
}
function c(e) {
    let { displayNameStyles: t } = e;
    if (!(0, l.W)({ location: "useDisplayNameStylesFont" }) || null == t) return "";
    let n = u(t.fontId);
    return "" === n.className ? "" : r()(_.zt, n.className, { [_.VM]: (0, a.nr)() });
}
