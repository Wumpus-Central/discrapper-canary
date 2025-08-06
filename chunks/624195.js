(n.d(t, { Z: () => f }), n(413496), n(433524), n(35282));
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(729594),
    s = n(94488);
let l = RegExp('^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)'),
    c = 500,
    u = 400;
function d(e) {
    let t = null,
        n = null,
        r = null;
    try {
        ((t = (r = a.parse(e, !0)).host), (n = r.pathname));
    } catch (e) {
        return null;
    }
    return null != r && l.test(null != t ? t : '') && null != n ? r : null;
}
function f(e) {
    let {
        className: t,
        embed: { url: n, thumbnail: i }
    } = e;
    if (null == n || null == i) return null;
    let a = d(n);
    if (null == a) return null;
    let l = a.query.iframe_url;
    if (null == l || Array.isArray(l) || null == d(l)) return null;
    let { width: f, height: _ } = i,
        p = f,
        h = _;
    return (
        (f > c || _ > u) && (f > _ ? ((p = c), (h = (c * _) / f)) : ((p = (u * f) / _), (h = u))),
        (0, r.jsx)('iframe', {
            className: o()(s.embedAmazonMusic, t),
            src: l,
            style: {
                width: p,
                height: h
            },
            frameBorder: 0,
            sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
        })
    );
}
