t.d(l, { Z: () => d }), t(301563);
var n = t(200651);
t(192379);
var r = t(120356),
    i = t.n(r),
    s = t(729594),
    a = t(635477),
    o = t(902692),
    u = t(94488);
function d(e) {
    let {
        className: l,
        embed: { url: t }
    } = e;
    if (null == t) return null;
    let r = null,
        d = null,
        c = null;
    try {
        var h;
        let e = s.parse(t, !0);
        (r = e.host), (d = e.pathname), (c = null != (h = e.query.i) ? h : null), Array.isArray(c) && (c = c[0]);
    } catch (e) {
        return null;
    }
    if (!(0, a.L)(r) || null == d) return null;
    let m = d.match(/^\/([a-z]{2}(?:-[a-z]{2})?)\//);
    null != m && (d = d.substr(m[1].length + 1));
    let p = d.split('/'),
        g = null != p[1] ? p[1].toLowerCase() : null;
    null != c && (g = 'song');
    let b = 450;
    return (
        'song' === g ? (b = 175) : 'music-video' === g && (b = 371),
        (d = d.substr(1)),
        (0, n.jsx)('iframe', {
            className: i()(u.embedAppleMusic, l),
            src: o.P.EMBED(d, c),
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
