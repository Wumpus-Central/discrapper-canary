n.d(t, {
    A: () => p,
}),
    n(747238);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(567243),
    o = n(311907),
    l = n(582754),
    c = n(544028),
    u = n(684290),
    d = n(278727),
    f = n(802571);

function p(e) {
    var t, n;
    let {
            className: i,
            embed: { url: p },
        } = e,
        _ = (0, o.bG)([c.A], () => (0, l.Mw)(c.A.theme));
    if (null == p) return null;
    let h = null,
        m = null,
        g = null;
    try {
        let e = s.parse(p, !0);
        (h = e.host), (m = e.pathname), (g = null != (n = e.query.i) ? n : null), Array.isArray(g) && (g = g[0]);
    } catch (e) {
        return null;
    }
    if (!(0, u.k)(h) || null == m) return null;
    let E = /^\/([a-z]{2}(?:-[a-z]{2})?)\//.test(m) ? 2 : 1,
        b = null == (t = m.split("/")[E]) ? void 0 : t.toLowerCase();
    null != g && (b = "song");
    let y = 450;
    "song" === b ? (y = 175) : "music-video" === b && (y = 371), (m = m.substr(1));
    let O = _ ? "dark" : "light";
    return (0, r.jsx)("iframe", {
        className: a()(f.li, i),
        src: d.q.EMBED(m, O, g),
        style: {
            maxWidth: 660,
            minWidth: 300,
            width: "100%",
            height: y,
        },
        frameBorder: 0,
        sandbox: "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation",
        allow: "encrypted-media *; fullscreen *; clipboard-write",
    });
}
