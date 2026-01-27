t.d(l, {
    A: () => d,
}),
    t(591487),
    t(727858),
    t(747238);
var r = t(627968);
t(64700);
var n = t(503698),
    i = t.n(n),
    s = t(567243),
    a = t(802571);
let o = RegExp("^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)");

function u(e) {
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

function d(e) {
    let {
        className: l,
        embed: { url: t, thumbnail: n },
    } = e;
    if (null == t || null == n) return null;
    let s = u(t);
    if (null == s) return null;
    let o = s.query.iframe_url;
    if (null == o || Array.isArray(o) || null == u(o)) return null;
    let { width: d, height: c } = n,
        h = d,
        p = c;
    return (
        (d > 500 || c > 400) && (d > c ? ((h = 500), (p = (500 * c) / d)) : ((h = (400 * d) / c), (p = 400))),
        (0, r.jsx)("iframe", {
            className: i()(a.FS, l),
            src: o,
            style: {
                width: h,
                height: p,
            },
            frameBorder: 0,
            sandbox:
                "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
        })
    );
}
