t.d(l, { Z: () => u }), t(413496), t(433524), t(35282);
var r = t(255367);
t(73800);
var n = t(120356),
    i = t.n(n),
    s = t(729594),
    a = t(781452);
let o = RegExp("^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)");
function d(e) {
    let l = null,
        t = null,
        r = null;
    try {
        (l = (r = s.parse(e, !0)).host), (t = r.pathname);
    } catch (e) {
        return null;
    }
    return null != r && o.test(null != l ? l : "") && null != t ? r : null;
}
function u(e) {
    let {
        className: l,
        embed: { url: t, thumbnail: n },
    } = e;
    if (null == t || null == n) return null;
    let s = d(t);
    if (null == s) return null;
    let o = s.query.iframe_url;
    if (null == o || Array.isArray(o) || null == d(o)) return null;
    let { width: u, height: h } = n,
        c = u,
        m = h;
    return (
        (u > 500 || h > 400) && (u > h ? ((c = 500), (m = (500 * h) / u)) : ((c = (400 * u) / h), (m = 400))),
        (0, r.jsx)("iframe", {
            className: i()(a.embedAmazonMusic, l),
            src: o,
            style: {
                width: c,
                height: m,
            },
            frameBorder: 0,
            sandbox:
                "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
        })
    );
}
