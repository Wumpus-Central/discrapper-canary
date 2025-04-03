t.d(l, { Z: () => d }), t(474991), t(398202), t(301563);
var n = t(200651);
t(192379);
var r = t(120356),
    i = t.n(r),
    s = t(729594),
    a = t(94488);
let o = RegExp('^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)');
function u(e) {
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
function d(e) {
    let {
        className: l,
        embed: { url: t, thumbnail: r }
    } = e;
    if (null == t || null == r) return null;
    let s = u(t);
    if (null == s) return null;
    let o = s.query.iframe_url;
    if (null == o || Array.isArray(o) || null == u(o)) return null;
    let { width: d, height: c } = r,
        h = d,
        m = c;
    return (
        (d > 500 || c > 400) && (d > c ? ((h = 500), (m = (500 * c) / d)) : ((h = (400 * d) / c), (m = 400))),
        (0, n.jsx)('iframe', {
            className: i()(a.embedAmazonMusic, l),
            src: o,
            style: {
                width: h,
                height: m
            },
            frameBorder: 0,
            sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
        })
    );
}
