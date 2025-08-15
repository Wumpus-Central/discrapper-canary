n.d(t, {
    j: () => _,
    y: () => f,
});
var r = n(120356),
    i = n.n(r),
    o = n(342905),
    a = n(526167),
    s = n(594928),
    l = n(181430),
    c = n(693450),
    u = n(806539);
let d = {
        name: c.default.ZEL6m5,
        className: "",
    },
    f = {
        [o.C.DEFAULT]: d,
        [o.C.CHERRY_BOMB]: {
            name: c.default.rN7cub,
            className: u.cherryBomb,
        },
        [o.C.CHICLE]: {
            name: c.default.CbHHnJ,
            className: u.chicle,
        },
        [o.C.MUSEO_MODERNO]: {
            name: c.default.iEcEKC,
            className: u.museoModerno,
        },
        [o.C.NEO_CASTEL]: {
            name: c.default.DL7jLS,
            className: u.neoCastel,
        },
        [o.C.PIXELIFY]: {
            name: c.default.jq4aRk,
            className: u.pixelify,
        },
        [o.C.SINISTRE]: {
            name: c.default.jV9DNz,
            className: u.sinistre,
        },
        [o.C.ZILLA_SLAB]: {
            name: c.default.KMR8ra,
            className: u.zillaSlab,
        },
        [o.C.BIO_RHYME]: d,
        [o.C.BANGERS]: d,
        [o.C.COMPAGNON]: d,
        [o.C.RIBES]: d,
    };
function _(e) {
    var t;
    let { displayNameStyles: n, inProfile: r } = e,
        { includeNonProfile: o } = s.f.useExperiment({ location: "useDisplayNameStylesFont" });
    if (!(0, l.Y)({ location: "useDisplayNameStylesFont" }) || (!r && !o) || null == n) return "";
    let c = null != (t = f[n.fontId]) ? t : d;
    return "" === c.className ? "" : i()(u.dnsFont, c.className, { [u.safari]: (0, a.G6)() });
}
