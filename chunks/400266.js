t.d(l, { Z: () => u }), t(757143);
var n = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    s = t(729594),
    a = t(785992),
    o = t(616922),
    d = t(280511);
function u(e) {
    let {
        className: l,
        embed: { url: t }
    } = e;
    if (null == t) return null;
    let i = null,
        u = null;
    try {
        let e = s.parse(t.replace(/intl-[^/]+\//, ''), !0);
        (i = e.host), (u = e.pathname);
    } catch (e) {
        return null;
    }
    if (!(0, a.E)(i) || null == u) return null;
    let h = u.split('/'),
        m = null != h[1] ? h[1].toLowerCase() : null,
        c = null != h[3] ? h[3].toLowerCase() : null,
        p = h[4];
    if (!['track', 'playlist', 'album', 'artist', 'user', 'show', 'episode'].includes(null != m ? m : '') || ('user' === m && 'playlist' !== c)) return null;
    'user' === m && 'playlist' === c && null != p && (u = '/playlist/'.concat(p));
    let g = 352;
    return (
        'track' === m ? (g = 80) : ('episode' === m || 'show' === m) && (g = 232),
        (0, n.jsx)('iframe', {
            className: r()(d.embedSpotify, l),
            src: o.C7.EMBED(u),
            style: {
                width: 400,
                height: g
            },
            frameBorder: 0,
            sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
        })
    );
}
