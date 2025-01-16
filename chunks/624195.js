t.d(l, {
    Z: function () {
        return u;
    }
});
var n = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    a = t(729594),
    o = t(340702);
let s = RegExp('^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)');
function d(e) {
    let l = null,
        t = null,
        n = null;
    try {
        (l = (n = a.parse(e, !0)).host), (t = n.pathname);
    } catch (e) {
        return null;
    }
    return null != n && s.test(null != l ? l : '') && null != t ? n : null;
}
function u(e) {
    let {
        className: l,
        embed: { url: t, thumbnail: i }
    } = e;
    if (null == t || null == i) return null;
    let a = d(t);
    if (null == a) return null;
    let s = a.query.iframe_url;
    if (null == s || Array.isArray(s) || null == d(s)) return null;
    let { width: u, height: m } = i,
        h = u,
        c = m;
    return (
        (u > 500 || m > 400) && (u > m ? ((h = 500), (c = (500 * m) / u)) : ((h = (400 * u) / m), (c = 400))),
        (0, n.jsx)('iframe', {
            className: r()(o.embedAmazonMusic, l),
            src: s,
            style: {
                width: h,
                height: c
            },
            frameBorder: 0,
            sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
        })
    );
}
