"use strict";
n.d(t, { a: () => _, p: () => d });
var r = n(503698),
    i = n.n(r),
    s = n(559949),
    a = n(676279),
    o = n(913563),
    l = n(824994),
    u = n(372185);
let c = {
    [s.x.DEFAULT]: "",
    [s.x.CHERRY_BOMB]: u.u_,
    [s.x.CHICLE]: u.xO,
    [s.x.MUSEO_MODERNO]: u._,
    [s.x.NEO_CASTEL]: u.pN,
    [s.x.PIXELIFY]: u.f,
    [s.x.SINISTRE]: u.yH,
    [s.x.ZILLA_SLAB]: u.FR,
};
function d(e) {
    return { name: (0, o.A)(e), className: c[e] ?? "" };
}
function _(e) {
    let { displayNameStyles: t } = e;
    if (!(0, l.W)({ location: "useDisplayNameStylesFont" }) || null == t) return "";
    let n = d(t.fontId);
    return "" === n.className ? "" : i()(u.zt, n.className, { [u.VM]: (0, a.nr)() });
}
