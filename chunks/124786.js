n.d(t, { A: () => f }), n(591487), n(727858), n(747238);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(567243),
    o = n(802571);
let l = RegExp("^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)"),
    c = 500,
    u = 400;
function d(e) {
    let t = null,
        n = null,
        r = null;
    try {
        (t = (r = s.parse(e, !0)).host), (n = r.pathname);
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
    let s = d(n);
    if (null == s) return null;
    let l = s.query.iframe_url;
    if (null == l || Array.isArray(l) || null == d(l)) return null;
    let { width: f, height: p } = i,
        _ = f,
        h = p;
    return (
        (f > c || p > u) && (f > p ? ((_ = c), (h = (c * p) / f)) : ((_ = (u * f) / p), (h = u))),
        (0, r.jsx)("iframe", {
            className: a()(o.FS, t),
            src: l,
            style: {
                width: _,
                height: h,
            },
            frameBorder: 0,
            sandbox:
                "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
        })
    );
}
