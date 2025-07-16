n.d(t, { j: () => l });
var r = n(342905),
    i = n(594928),
    a = n(698282),
    o = n(772335);
let s = {
    [r.C.DEFAULT]: {
        name: a.default.ZEL6m5,
        className: ''
    },
    [r.C.BANGERS]: {
        name: a.default['bdtv8/'],
        className: o.bangers
    },
    [r.C.BIO_RHYME]: {
        name: a.default['91ufEx'],
        className: o.bioRhyme
    },
    [r.C.CHERRY_BOMB]: {
        name: a.default.rN7cub,
        className: o.cherryBomb
    },
    [r.C.CHICLE]: {
        name: a.default.CbHHnJ,
        className: o.chicle
    },
    [r.C.COMPAGNON]: {
        name: a.default.GsMX6u,
        className: o.compagnon
    },
    [r.C.MUSEO_MODERNO]: {
        name: a.default.iEcEKC,
        className: o.museoModerno
    },
    [r.C.NEO_CASTEL]: {
        name: a.default.DL7jLS,
        className: o.neoCastel
    },
    [r.C.PIXELIFY]: {
        name: a.default.jq4aRk,
        className: o.pixelify
    },
    [r.C.RIBES]: {
        name: a.default.WMG3Mz,
        className: o.ribes
    },
    [r.C.SINISTRE]: {
        name: a.default.jV9DNz,
        className: o.sinistre
    }
};
function l(e) {
    var t;
    let { displayNameStyles: n } = e;
    if (!i.f.useExperiment({ location: 'useDisplayNameStylesFont' }).enabled || null == n) return '';
    let r = s[n.fontId];
    return null != (t = null == r ? void 0 : r.className) ? t : '';
}
