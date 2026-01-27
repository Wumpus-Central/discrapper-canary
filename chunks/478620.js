t.d(l, {
    A: () => p,
}),
    t(747238);
var r = t(627968);
t(64700);
var n = t(503698),
    i = t.n(n),
    s = t(567243),
    a = t(311907),
    o = t(582754),
    u = t(544028),
    d = t(684290),
    c = t(278727),
    h = t(802571);

function p(e) {
    var l, t;
    let {
            className: n,
            embed: { url: p },
        } = e,
        m = (0, a.bG)([u.A], () => (0, o.Mw)(u.A.theme));
    if (null == p) return null;
    let g = null,
        f = null,
        y = null;
    try {
        let e = s.parse(p, !0);
        (g = e.host), (f = e.pathname), (y = null != (t = e.query.i) ? t : null), Array.isArray(y) && (y = y[0]);
    } catch (e) {
        return null;
    }
    if (!(0, d.k)(g) || null == f) return null;
    let b = /^\/([a-z]{2}(?:-[a-z]{2})?)\//.test(f) ? 2 : 1,
        v = null == (l = f.split("/")[b]) ? void 0 : l.toLowerCase();
    null != y && (v = "song");
    let w = 450;
    return (
        "song" === v ? (w = 175) : "music-video" === v && (w = 371),
        (f = f.substr(1)),
        (0, r.jsx)("iframe", {
            className: i()(h.li, n),
            src: c.q.EMBED(f, m ? "dark" : "light", y),
            style: {
                maxWidth: 660,
                minWidth: 300,
                width: "100%",
                height: w,
            },
            frameBorder: 0,
            sandbox: "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation",
            allow: "encrypted-media *; fullscreen *; clipboard-write",
        })
    );
}
