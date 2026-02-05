"use strict";
n.d(t, { a: () => _, p: () => d });
var r = n(503698),
    i = n.n(r),
    a = n(559949),
    s = n(676279),
    o = n(913563),
    l = n(824994),
    u = n(464998);
let c = {
    [a.x.DEFAULT]: "",
    [a.x.CHERRY_BOMB]: u.u_,
    [a.x.CHICLE]: u.xO,
    [a.x.MUSEO_MODERNO]: u._,
    [a.x.NEO_CASTEL]: u.pN,
    [a.x.PIXELIFY]: u.f,
    [a.x.SINISTRE]: u.yH,
    [a.x.ZILLA_SLAB]: u.FR,
};
function d(e) {
    return { name: (0, o.A)(e), className: c[e] ?? "" };
}
function _(e) {
    let { displayNameStyles: t } = e;
    if (!(0, l.W)({ location: "useDisplayNameStylesFont" }) || null == t) return "";
    let n = d(t.fontId);
    return "" === n.className ? "" : i()(u.zt, n.className, { [u.VM]: (0, s.nr)() });
}
