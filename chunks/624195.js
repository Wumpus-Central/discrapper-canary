l.d(t, { Z: () => u }), l(474991), l(398202), l(301563);
var r = l(200651);
l(192379);
var n = l(120356),
    i = l.n(n),
    s = l(729594),
    o = l(821879);
let a = RegExp('^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)');
function d(e) {
    let t = null,
        l = null,
        r = null;
    try {
        (t = (r = s.parse(e, !0)).host), (l = r.pathname);
    } catch (e) {
        return null;
    }
    return null != r && a.test(null != t ? t : '') && null != l ? r : null;
}
function u(e) {
    let {
        className: t,
        embed: { url: l, thumbnail: n }
    } = e;
    if (null == l || null == n) return null;
    let s = d(l);
    if (null == s) return null;
    let a = s.query.iframe_url;
    if (null == a || Array.isArray(a) || null == d(a)) return null;
    let { width: u, height: c } = n,
        h = u,
        m = c;
    return (
        (u > 500 || c > 400) && (u > c ? ((h = 500), (m = (500 * c) / u)) : ((h = (400 * u) / c), (m = 400))),
        (0, r.jsx)('iframe', {
            className: i()(o.embedAmazonMusic, t),
            src: a,
            style: {
                width: h,
                height: m
            },
            frameBorder: 0,
            sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
        })
    );
}
