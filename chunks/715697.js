t.d(l, { Z: () => m }), t(35282);
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
    var l, t;
    let {
            className: r,
            embed: { url: m }
        } = e,
        p = (0, a.e7)([u.Z], () => (0, o.wj)(u.Z.theme));
    if (null == m) return null;
    let g = null,
        b = null,
        f = null;
    try {
        let e = s.parse(m, !0);
        (g = e.host), (b = e.pathname), (f = null != (t = e.query.i) ? t : null), Array.isArray(f) && (f = f[0]);
    } catch (e) {
        return null;
    }
    if (!(0, d.L)(g) || null == b) return null;
    let v = /^\/([a-z]{2}(?:-[a-z]{2})?)\//.test(b) ? 2 : 1,
        y = null == (l = b.split('/')[v]) ? void 0 : l.toLowerCase();
    null != f && (y = 'song');
    let x = 450;
    return (
        'song' === y ? (x = 175) : 'music-video' === y && (x = 371),
        (b = b.substr(1)),
        (0, n.jsx)('iframe', {
            className: i()(h.embedAppleMusic, r),
            src: c.P.EMBED(b, p ? 'dark' : 'light', f),
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
