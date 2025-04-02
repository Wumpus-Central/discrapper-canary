t.d(l, { Z: () => u }), t(301563);
var n = t(200651);
t(192379);
var r = t(120356),
    i = t.n(r),
    s = t(729594),
    a = t(635477),
    o = t(902692),
    d = t(817857);
function u(e) {
    let {
        className: l,
        embed: { url: t }
    } = e;
    if (null == t) return null;
    let r = null,
        u = null,
        c = null;
    try {
        var h;
        let e = s.parse(t, !0);
        (r = e.host), (u = e.pathname), (c = null !== (h = e.query.i) && void 0 !== h ? h : null), Array.isArray(c) && (c = c[0]);
    } catch (e) {
        return null;
    }
    if (!(0, a.L)(r) || null == u) return null;
    let m = u.match(/^\/([a-z]{2}(?:-[a-z]{2})?)\//);
    null != m && (u = u.substr(m[1].length + 1));
    let p = u.split('/'),
        g = null != p[1] ? p[1].toLowerCase() : null;
    null != c && (g = 'song');
    let b = 450;
    return (
        'song' === g ? (b = 175) : 'music-video' === g && (b = 371),
        (u = u.substr(1)),
        (0, n.jsx)('iframe', {
            className: i()(d.embedAppleMusic, l),
            src: o.P.EMBED(u, c),
            style: {
                maxWidth: 660,
                minWidth: 300,
                width: '100%',
                height: b
            },
            frameBorder: 0,
            sandbox: 'allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation',
            allow: 'encrypted-media *; fullscreen *; clipboard-write'
        })
    );
}
