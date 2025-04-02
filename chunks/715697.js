l.d(t, { Z: () => d }), l(301563);
var n = l(200651);
l(192379);
var r = l(120356),
    i = l.n(r),
    s = l(729594),
    a = l(635477),
    o = l(902692),
    u = l(817857);
function d(e) {
    let {
        className: t,
        embed: { url: l }
    } = e;
    if (null == l) return null;
    let r = null,
        d = null,
        c = null;
    try {
        var h;
        let e = s.parse(l, !0);
        (r = e.host), (d = e.pathname), (c = null !== (h = e.query.i) && void 0 !== h ? h : null), Array.isArray(c) && (c = c[0]);
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
            className: i()(u.embedAppleMusic, t),
            src: o.P.EMBED(d, c),
            style: {
                maxWidth: 660,
                minWidth: 300,
                width: '100%',
                height: b
            },
            frameBorder: 0,
            sandbox: 'allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation'
        })
    );
}
