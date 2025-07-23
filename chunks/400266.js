(t.d(l, { Z: () => u }), t(704826), t(35282));
var r = t(255367);
t(73800);
var n = t(120356),
    i = t.n(n),
    s = t(729594),
    a = t(785992),
    o = t(616922),
    d = t(94488);
function u(e) {
    let {
        className: l,
        embed: { url: t }
    } = e;
    if (null == t) return null;
    let n = null,
        u = null;
    try {
        let e = s.parse(t.replace(/intl-[^/]+\//, ''), !0);
        ((n = e.host), (u = e.pathname));
    } catch (e) {
        return null;
    }
    if (!(0, a.E)(n) || null == u) return null;
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
            className: i()(d.embedSpotify, l),
            src: o.C7.EMBED(u),
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
