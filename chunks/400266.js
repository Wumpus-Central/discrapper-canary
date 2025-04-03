t.d(l, { Z: () => d }), t(757143), t(301563);
var n = t(200651);
t(192379);
var r = t(120356),
    i = t.n(r),
    s = t(729594),
    a = t(785992),
    o = t(616922),
    u = t(94488);
function d(e) {
    let {
        className: l,
        embed: { url: t }
    } = e;
    if (null == t) return null;
    let r = null,
        d = null;
    try {
        let e = s.parse(t.replace(/intl-[^/]+\//, ''), !0);
        (r = e.host), (d = e.pathname);
    } catch (e) {
        return null;
    }
    if (!(0, a.E)(r) || null == d) return null;
    let c = d.split('/'),
        h = null != c[1] ? c[1].toLowerCase() : null,
        m = null != c[3] ? c[3].toLowerCase() : null,
        p = c[4];
    if (!['track', 'playlist', 'album', 'artist', 'user', 'show', 'episode'].includes(null != h ? h : '') || ('user' === h && 'playlist' !== m)) return null;
    'user' === h && 'playlist' === m && null != p && (d = '/playlist/'.concat(p));
    let g = 352;
    return (
        'track' === h ? (g = 80) : ('episode' === h || 'show' === h) && (g = 232),
        (0, n.jsx)('iframe', {
            className: i()(u.embedSpotify, l),
            src: o.C7.EMBED(d),
            style: {
                maxWidth: 400,
                minWidth: 300,
                width: '100%',
                height: g
            },
            frameBorder: 0,
            sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts',
            allow: 'clipboard-write'
        })
    );
}
