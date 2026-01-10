n.d(t, {
    U: () => d,
    j: () => f,
});
var r = n(120356),
    i = n.n(r),
    a = n(342905),
    o = n(526167),
    s = n(817330),
    l = n(181430),
    c = n(717360);
let u = {
    [a.C.DEFAULT]: "",
    [a.C.CHERRY_BOMB]: c.cherryBomb,
    [a.C.CHICLE]: c.chicle,
    [a.C.MUSEO_MODERNO]: c.museoModerno,
    [a.C.NEO_CASTEL]: c.neoCastel,
    [a.C.PIXELIFY]: c.pixelify,
    [a.C.SINISTRE]: c.sinistre,
    [a.C.ZILLA_SLAB]: c.zillaSlab,
};
function d(e) {
    var t;
    return {
        name: (0, s.Z)(e),
        className: null != (t = u[e]) ? t : "",
    };
}
function f(e) {
    let { displayNameStyles: t } = e;
    if (!(0, l.Y)({ location: "useDisplayNameStylesFont" }) || null == t) return "";
    let n = d(t.fontId);
    return "" === n.className ? "" : i()(c.dnsFont, n.className, { [c.safari]: (0, o.G6)() });
}
