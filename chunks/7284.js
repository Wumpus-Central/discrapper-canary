n.d(t, { j: () => c });
var r = n(342905),
    i = n(594928),
    a = n(698282),
    o = n(772335);
let s = {
        name: a.default.ZEL6m5,
        className: ''
    },
    l = {
        [r.C.DEFAULT]: s,
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
        [r.C.SINISTRE]: {
            name: a.default.jV9DNz,
            className: o.sinistre
        },
        [r.C.BANGERS]: s,
        [r.C.COMPAGNON]: s,
        [r.C.RIBES]: s
    };
function c(e) {
    var t;
    let { displayNameStyles: n, inProfile: r } = e,
        a = i.f.useExperiment({ location: 'useDisplayNameStylesFont' });
    if (!a.enabled || (!r && !a.includeNonProfile) || null == n) return '';
    let o = l[n.fontId];
    return null != (t = null == o ? void 0 : o.className) ? t : '';
}
