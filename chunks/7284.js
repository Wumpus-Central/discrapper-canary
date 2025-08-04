n.d(t, {
    j: () => u,
    y: () => c
});
var r = n(342905),
    i = n(594928),
    a = n(181430),
    o = n(698282),
    s = n(772335);
let l = {
        name: o.default.ZEL6m5,
        className: ''
    },
    c = {
        [r.C.DEFAULT]: l,
        [r.C.BIO_RHYME]: {
            name: o.default['91ufEx'],
            className: s.bioRhyme
        },
        [r.C.CHERRY_BOMB]: {
            name: o.default.rN7cub,
            className: s.cherryBomb
        },
        [r.C.CHICLE]: {
            name: o.default.CbHHnJ,
            className: s.chicle
        },
        [r.C.MUSEO_MODERNO]: {
            name: o.default.iEcEKC,
            className: s.museoModerno
        },
        [r.C.NEO_CASTEL]: {
            name: o.default.DL7jLS,
            className: s.neoCastel
        },
        [r.C.PIXELIFY]: {
            name: o.default.jq4aRk,
            className: s.pixelify
        },
        [r.C.SINISTRE]: {
            name: o.default.jV9DNz,
            className: s.sinistre
        },
        [r.C.BANGERS]: l,
        [r.C.COMPAGNON]: l,
        [r.C.RIBES]: l
    };
function u(e) {
    var t;
    let { displayNameStyles: n, inProfile: r } = e,
        { includeNonProfile: o } = i.f.useExperiment({ location: 'useDisplayNameStylesFont' });
    if (!(0, a.Y)({ location: 'useDisplayNameStylesFont' }) || (!r && !o) || null == n) return '';
    let s = c[n.fontId];
    return null != (t = null == s ? void 0 : s.className) ? t : '';
}
