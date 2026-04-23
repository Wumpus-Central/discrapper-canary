t.d(l, { A: () => u });
var r = t(627968);
t(64700);
var s = t(503698),
    n = t.n(s),
    i = t(567243),
    a = t(472840);
let o = RegExp("^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)");
function d(e) {
    let l = null,
        t = null,
        r = null;
    try {
        (l = (r = i.parse(e, !0)).host), (t = r.pathname);
    } catch (e) {
        return null;
    }
    return null != r && o.test(l ?? "") && null != t ? r : null;
}
function u(e) {
    let {
        className: l,
        embed: { url: t, thumbnail: s },
    } = e;
    if (null == t || null == s) return null;
    let i = d(t);
    if (null == i) return null;
    let o = i.query.iframe_url;
    if (null == o || Array.isArray(o) || null == d(o)) return null;
    let { width: u, height: h } = s,
        c = u,
        m = h;
    return (
        (u > 500 || h > 400) && (u > h ? ((c = 500), (m = (500 * h) / u)) : ((c = (400 * u) / h), (m = 400))),
        (0, r.jsx)("iframe", {
            className: n()(a.FS, l),
            src: o,
            style: { width: c, height: m },
            frameBorder: 0,
            sandbox:
                "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
        })
    );
}
