n.d(t, {
    U: () => _,
    j: () => p,
});
var r = n(120356),
    i = n.n(r),
    a = n(342905),
    o = n(526167),
    s = n(594928),
    l = n(181430),
    c = n(592186),
    u = n(806539);
let d = {
        name: c.default.ZEL6mz,
        className: "",
    },
    f = {
        [a.C.DEFAULT]: d,
        [a.C.CHERRY_BOMB]: {
            name: c.default.rN7cuX,
            className: u.cherryBomb,
        },
        [a.C.CHICLE]: {
            name: c.default.CbHHnL,
            className: u.chicle,
        },
        [a.C.MUSEO_MODERNO]: {
            name: c.default.iEcEKO,
            className: u.museoModerno,
        },
        [a.C.NEO_CASTEL]: {
            name: c.default.DL7jLZ,
            className: u.neoCastel,
        },
        [a.C.PIXELIFY]: {
            name: c.default.jq4aRp,
            className: u.pixelify,
        },
        [a.C.SINISTRE]: {
            name: c.default.jV9DN4,
            className: u.sinistre,
        },
        [a.C.ZILLA_SLAB]: {
            name: c.default.KMR8rT,
            className: u.zillaSlab,
        },
    };
function _(e) {
    var t;
    return null != (t = f[e]) ? t : d;
}
function p(e) {
    var t;
    let { displayNameStyles: n, inProfile: r } = e,
        { includeNonProfile: a } = s.fN.useExperiment({ location: "useDisplayNameStylesFont" });
    if (!(0, l.Y)({ location: "useDisplayNameStylesFont" }) || (!r && !a) || null == n) return "";
    let c = null != (t = f[n.fontId]) ? t : d;
    return "" === c.className ? "" : i()(u.dnsFont, c.className, { [u.safari]: (0, o.G6)() });
}
