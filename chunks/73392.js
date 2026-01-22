n.d(t, {
    a: () => f,
    p: () => d,
});
var r = n(503698),
    i = n.n(r),
    a = n(559949),
    s = n(676279),
    o = n(913563),
    l = n(824994),
    c = n(464998);
let u = {
    [a.x.DEFAULT]: "",
    [a.x.CHERRY_BOMB]: c.u_,
    [a.x.CHICLE]: c.xO,
    [a.x.MUSEO_MODERNO]: c._,
    [a.x.NEO_CASTEL]: c.pN,
    [a.x.PIXELIFY]: c.f,
    [a.x.SINISTRE]: c.yH,
    [a.x.ZILLA_SLAB]: c.FR,
};
function d(e) {
    var t;
    return {
        name: (0, o.A)(e),
        className: null != (t = u[e]) ? t : "",
    };
}
function f(e) {
    let { displayNameStyles: t } = e;
    if (!(0, l.W)({ location: "useDisplayNameStylesFont" }) || null == t) return "";
    let n = d(t.fontId);
    return "" === n.className ? "" : i()(c.zt, n.className, { [c.VM]: (0, s.nr)() });
}
