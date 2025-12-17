n.d(t, { Z: () => f }), n(413496), n(433524), n(35282);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(729594),
    s = n(838983);
let l = RegExp("^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)"),
    c = 500,
    u = 400;
function d(e) {
    let t = null,
        n = null,
        r = null;
    try {
        (t = (r = o.parse(e, !0)).host), (n = r.pathname);
    } catch (e) {
        return null;
    }
    return null != r && l.test(null != t ? t : "") && null != n ? r : null;
}
function f(e) {
    let {
        className: t,
        embed: { url: n, thumbnail: i },
    } = e;
    if (null == n || null == i) return null;
    let o = d(n);
    if (null == o) return null;
    let l = o.query.iframe_url;
    if (null == l || Array.isArray(l) || null == d(l)) return null;
    let { width: f, height: p } = i,
        _ = f,
        m = p;
    return (
        (f > c || p > u) && (f > p ? ((_ = c), (m = (c * p) / f)) : ((_ = (u * f) / p), (m = u))),
        (0, r.jsx)("iframe", {
            className: a()(s.embedAmazonMusic, t),
            src: l,
            style: {
                width: _,
                height: m,
            },
            frameBorder: 0,
            sandbox:
                "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
        })
    );
}
