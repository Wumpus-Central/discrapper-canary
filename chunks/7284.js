n.d(t, {
    U: () => f,
    j: () => _,
});
var r = n(120356),
    i = n.n(r),
    a = n(342905),
    o = n(526167),
    s = n(594928),
    l = n(817330),
    c = n(181430),
    u = n(806539);
let d = {
    [a.C.DEFAULT]: "",
    [a.C.CHERRY_BOMB]: u.cherryBomb,
    [a.C.CHICLE]: u.chicle,
    [a.C.MUSEO_MODERNO]: u.museoModerno,
    [a.C.NEO_CASTEL]: u.neoCastel,
    [a.C.PIXELIFY]: u.pixelify,
    [a.C.SINISTRE]: u.sinistre,
    [a.C.ZILLA_SLAB]: u.zillaSlab,
};
function f(e) {
    var t;
    return {
        name: (0, l.Z)(e),
        className: null != (t = d[e]) ? t : "",
    };
}
function _(e) {
    let { displayNameStyles: t, inProfile: n } = e,
        { includeNonProfile: r } = s.fN.useExperiment({ location: "useDisplayNameStylesFont" });
    if (!(0, c.Y)({ location: "useDisplayNameStylesFont" }) || (!n && !r) || null == t) return "";
    let a = f(t.fontId);
    return "" === a.className ? "" : i()(u.dnsFont, a.className, { [u.safari]: (0, o.G6)() });
}
