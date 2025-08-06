n.d(t, {
    j: () => u,
    y: () => c,
});
var r = n(342905),
    i = n(594928),
    o = n(181430),
    a = n(698282),
    s = n(772335);
let l = {
        name: a.default.ZEL6m5,
        className: "",
    },
    c = {
        [r.C.DEFAULT]: l,
        [r.C.BIO_RHYME]: {
            name: a.default["91ufEx"],
            className: s.bioRhyme,
        },
        [r.C.CHERRY_BOMB]: {
            name: a.default.rN7cub,
            className: s.cherryBomb,
        },
        [r.C.CHICLE]: {
            name: a.default.CbHHnJ,
            className: s.chicle,
        },
        [r.C.MUSEO_MODERNO]: {
            name: a.default.iEcEKC,
            className: s.museoModerno,
        },
        [r.C.NEO_CASTEL]: {
            name: a.default.DL7jLS,
            className: s.neoCastel,
        },
        [r.C.PIXELIFY]: {
            name: a.default.jq4aRk,
            className: s.pixelify,
        },
        [r.C.SINISTRE]: {
            name: a.default.jV9DNz,
            className: s.sinistre,
        },
        [r.C.ZILLA_SLAB]: {
            name: a.default["91ufEx"],
            className: s.bioRhyme,
        },
        [r.C.BANGERS]: l,
        [r.C.COMPAGNON]: l,
        [r.C.RIBES]: l,
    };
function u(e) {
    var t;
    let { displayNameStyles: n, inProfile: r } = e,
        { includeNonProfile: a } = i.f.useExperiment({ location: "useDisplayNameStylesFont" });
    if (!(0, o.Y)({ location: "useDisplayNameStylesFont" }) || (!r && !a) || null == n) return "";
    let s = c[n.fontId];
    return null != (t = null == s ? void 0 : s.className) ? t : "";
}
