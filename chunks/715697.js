t.d(l, { Z: () => m }), t(301563);
var n = t(200651);
t(192379);
var r = t(120356),
    i = t.n(r),
    s = t(729594),
    a = t(442837),
    o = t(780384),
    u = t(210887),
    d = t(635477),
    c = t(902692),
    h = t(94488);
function m(e) {
    let {
            className: l,
            embed: { url: t }
        } = e,
        r = (0, a.e7)([u.Z], () => (0, o.wj)(u.Z.theme));
    if (null == t) return null;
    let m = null,
        p = null,
        g = null;
    try {
        var b;
        let e = s.parse(t, !0);
        (m = e.host), (p = e.pathname), (g = null != (b = e.query.i) ? b : null), Array.isArray(g) && (g = g[0]);
    } catch (e) {
        return null;
    }
    if (!(0, d.L)(m) || null == p) return null;
    let f = p.match(/^\/([a-z]{2}(?:-[a-z]{2})?)\//);
    null != f && (p = p.substr(f[1].length + 1));
    let y = p.split('/'),
        v = null != y[1] ? y[1].toLowerCase() : null;
    null != g && (v = 'song');
    let x = 450;
    return (
        'song' === v ? (x = 175) : 'music-video' === v && (x = 371),
        (p = p.substr(1)),
        (0, n.jsx)('iframe', {
            className: i()(h.embedAppleMusic, l),
            src: c.P.EMBED(p, r ? 'dark' : 'light', g),
            style: {
                maxWidth: 660,
                minWidth: 300,
                width: '100%',
                height: x
            },
            frameBorder: 0,
            sandbox: 'allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation',
            allow: 'encrypted-media *; fullscreen *; clipboard-write'
        })
    );
}
