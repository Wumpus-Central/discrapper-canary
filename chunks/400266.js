l.d(t, { Z: () => u }), l(757143), l(301563);
var r = l(200651);
l(192379);
var n = l(120356),
    i = l.n(n),
    s = l(729594),
    o = l(785992),
    a = l(616922),
    d = l(821879);
function u(e) {
    let {
        className: t,
        embed: { url: l }
    } = e;
    if (null == l) return null;
    let n = null,
        u = null;
    try {
        let e = s.parse(l.replace(/intl-[^/]+\//, ''), !0);
        (n = e.host), (u = e.pathname);
    } catch (e) {
        return null;
    }
    if (!(0, o.E)(n) || null == u) return null;
    let c = u.split('/'),
        h = null != c[1] ? c[1].toLowerCase() : null,
        m = null != c[3] ? c[3].toLowerCase() : null,
        p = c[4];
    if (!['track', 'playlist', 'album', 'artist', 'user', 'show', 'episode'].includes(null != h ? h : '') || ('user' === h && 'playlist' !== m)) return null;
    'user' === h && 'playlist' === m && null != p && (u = '/playlist/'.concat(p));
    let g = 352;
    return (
        'track' === h ? (g = 80) : ('episode' === h || 'show' === h) && (g = 232),
        (0, r.jsx)('iframe', {
            className: i()(d.embedSpotify, t),
            src: a.C7.EMBED(u),
            style: {
                width: 400,
                height: g
            },
            frameBorder: 0,
            sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
        })
    );
}
