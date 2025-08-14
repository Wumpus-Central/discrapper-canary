n.d(t, {
    j: () => f,
    y: () => d,
});
var r = n(120356),
    i = n.n(r),
    o = n(342905),
    a = n(594928),
    s = n(181430),
    l = n(693450),
    c = n(806539);
let u = {
        name: l.default.ZEL6m5,
        className: "",
    },
    d = {
        [o.C.DEFAULT]: u,
        [o.C.CHERRY_BOMB]: {
            name: l.default.rN7cub,
            className: c.cherryBomb,
        },
        [o.C.CHICLE]: {
            name: l.default.CbHHnJ,
            className: c.chicle,
        },
        [o.C.MUSEO_MODERNO]: {
            name: l.default.iEcEKC,
            className: c.museoModerno,
        },
        [o.C.NEO_CASTEL]: {
            name: l.default.DL7jLS,
            className: c.neoCastel,
        },
        [o.C.PIXELIFY]: {
            name: l.default.jq4aRk,
            className: c.pixelify,
        },
        [o.C.SINISTRE]: {
            name: l.default.jV9DNz,
            className: c.sinistre,
        },
        [o.C.ZILLA_SLAB]: {
            name: l.default.KMR8ra,
            className: c.zillaSlab,
        },
        [o.C.BIO_RHYME]: u,
        [o.C.BANGERS]: u,
        [o.C.COMPAGNON]: u,
        [o.C.RIBES]: u,
    };
function f(e) {
    var t;
    let { displayNameStyles: n, inProfile: r } = e,
        { includeNonProfile: o } = a.f.useExperiment({ location: "useDisplayNameStylesFont" });
    if (!(0, s.Y)({ location: "useDisplayNameStylesFont" }) || (!r && !o) || null == n) return "";
    let l = null != (t = d[n.fontId]) ? t : u;
    return "" === l.className ? "" : i()(c.dnsFont, l.className);
}
