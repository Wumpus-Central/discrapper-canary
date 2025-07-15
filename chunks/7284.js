n.d(t, { j: () => s });
var r = n(342905),
    i = n(594928),
    a = n(772335);
let o = {
    [r.C.DEFAULT]: '',
    [r.C.BANGERS]: a.bangers,
    [r.C.BIO_RHYME]: a.bioRhyme,
    [r.C.CHERRY_BOMB]: a.cherryBomb,
    [r.C.CHICLE]: a.chicle,
    [r.C.COMPAGNON]: a.compagnon,
    [r.C.MUSEO_MODERNO]: a.museoModerno,
    [r.C.NEO_CASTEL]: a.neoCastel,
    [r.C.PIXELIFY]: a.pixelify,
    [r.C.RIBES]: a.ribes,
    [r.C.SINISTRE]: a.sinistre
};
function s(e) {
    var t;
    let { displayNameStyles: n } = e;
    return i.f.useExperiment({ location: 'useDisplayNameStylesFont' }).enabled && null != n && null != (t = o[n.fontId]) ? t : '';
}
