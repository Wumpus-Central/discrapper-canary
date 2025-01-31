l.d(n, { Z: () => h });
var t = l(200651),
    i = l(481060),
    r = l(374129),
    a = l(639351),
    s = l(908841),
    o = l(410441),
    u = l(206583),
    c = l(388032);
let d = {
        [u.kG.SPOTIFY]: s.Z,
        [u.kG.CRUNCHYROLL]: i.omf,
        [u.kG.XBOX]: a.Z,
        [u.kG.PLAYSTATION]: r.Z
    },
    m = {
        [u.kG.SPOTIFY]: () => c.intl.string(c.t['0ZB/XF']),
        [u.kG.CRUNCHYROLL]: () => c.intl.string(c.t.jdJYX1),
        [u.kG.XBOX]: () => c.intl.string(c.t['Nfvo7+']),
        [u.kG.PLAYSTATION]: () => c.intl.string(c.t.fFl4jo)
    };
function h(e) {
    var n;
    let { type: l, 'aria-label': i, ...r } = e,
        a = d[l];
    if (null == a) return null;
    let s = null != i ? i : null === (n = m[l]) || void 0 === n ? void 0 : n.call(m);
    return (0, t.jsx)(o.Z, {
        Icon: a,
        ...r,
        'aria-label': s
    });
}
