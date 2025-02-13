t.d(l, { Z: () => u });
var n = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    s = t(729594),
    a = t(280511);
let o = RegExp('^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)');
function d(e) {
    let l = null,
        t = null,
        n = null;
    try {
        (l = (n = s.parse(e, !0)).host), (t = n.pathname);
    } catch (e) {
        return null;
    }
    return null != n && o.test(null != l ? l : '') && null != t ? n : null;
}
function u(e) {
    let {
        className: l,
        embed: { url: t, thumbnail: i }
    } = e;
    if (null == t || null == i) return null;
    let s = d(t);
    if (null == s) return null;
    let o = s.query.iframe_url;
    if (null == o || Array.isArray(o) || null == d(o)) return null;
    let { width: u, height: h } = i,
        m = u,
        c = h;
    return (
        (u > 500 || h > 400) && (u > h ? ((m = 500), (c = (500 * h) / u)) : ((m = (400 * u) / h), (c = 400))),
        (0, n.jsx)('iframe', {
            className: r()(a.embedAmazonMusic, l),
            src: o,
            style: {
                width: m,
                height: c
            },
            frameBorder: 0,
            sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
        })
    );
}
