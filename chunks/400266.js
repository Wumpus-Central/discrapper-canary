t.d(l, {
    Z: function () {
        return u;
    }
}),
    t(757143);
var n = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    a = t(729594),
    o = t(785992),
    s = t(616922),
    d = t(340702);
function u(e) {
    let {
        className: l,
        embed: { url: t }
    } = e;
    if (null == t) return null;
    let i = null,
        u = null;
    try {
        let e = a.parse(t.replace(/intl-[^/]+\//, ''), !0);
        (i = e.host), (u = e.pathname);
    } catch (e) {
        return null;
    }
    if (!(0, o.E)(i) || null == u) return null;
    let m = u.split('/'),
        h = null != m[1] ? m[1].toLowerCase() : null,
        c = null != m[3] ? m[3].toLowerCase() : null,
        p = m[4];
    if (!['track', 'playlist', 'album', 'artist', 'user', 'show', 'episode'].includes(null != h ? h : '') || ('user' === h && 'playlist' !== c)) return null;
    'user' === h && 'playlist' === c && null != p && (u = '/playlist/'.concat(p));
    let b = 352;
    return (
        'track' === h ? (b = 80) : ('episode' === h || 'show' === h) && (b = 232),
        (0, n.jsx)('iframe', {
            className: r()(d.embedSpotify, l),
            src: s.C7.EMBED(u),
            style: {
                width: 400,
                height: b
            },
            frameBorder: 0,
            sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
        })
    );
}
