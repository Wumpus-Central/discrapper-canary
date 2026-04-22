t.d(l, { A: () => m });
var r = t(627968);
t(64700);
var s = t(503698),
    n = t.n(s),
    i = t(567243),
    a = t(311907),
    o = t(462887),
    d = t(544028),
    u = t(684290),
    h = t(278727),
    c = t(472840);
function m(e) {
    let {
            className: l,
            embed: { url: t },
        } = e,
        s = (0, a.bG)([d.A], () => (0, o.M)(d.A.theme));
    if (null == t) return null;
    let m = null,
        p = null,
        g = null;
    try {
        let e = i.parse(t, !0);
        (m = e.host), (p = e.pathname), (g = e.query.i ?? null), Array.isArray(g) && (g = g[0]);
    } catch (e) {
        return null;
    }
    if (!(0, u.k)(m) || null == p) return null;
    let x = /^\/([a-z]{2}(?:-[a-z]{2})?)\//.test(p) ? 2 : 1,
        f = p.split("/"),
        y = f[x]?.toLowerCase();
    null != g && (y = "song");
    let w = 450;
    return (
        "song" === y ? (w = 175) : "music-video" === y && (w = 371),
        (p = p.substr(1)),
        (0, r.jsx)("iframe", {
            className: n()(c.li, l),
            src: h.q.EMBED(p, s ? "dark" : "light", g),
            style: { maxWidth: 660, minWidth: 300, width: "100%", height: w },
            frameBorder: 0,
            sandbox: "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation",
            allow: "encrypted-media *; fullscreen *; clipboard-write",
        })
    );
}
