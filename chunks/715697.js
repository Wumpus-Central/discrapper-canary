n.d(t, { Z: () => _ }), n(35282);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(729594),
    s = n(442837),
    l = n(780384),
    c = n(210887),
    u = n(635477),
    d = n(902692),
    f = n(111925);
function _(e) {
    var t, n;
    let {
            className: i,
            embed: { url: _ },
        } = e,
        p = (0, s.e7)([c.Z], () => (0, l.wj)(c.Z.theme));
    if (null == _) return null;
    let h = null,
        m = null,
        g = null;
    try {
        let e = o.parse(_, !0);
        (h = e.host), (m = e.pathname), (g = null != (n = e.query.i) ? n : null), Array.isArray(g) && (g = g[0]);
    } catch (e) {
        return null;
    }
    if (!(0, u.L)(h) || null == m) return null;
    let E = /^\/([a-z]{2}(?:-[a-z]{2})?)\//.test(m) ? 2 : 1,
        b = null == (t = m.split("/")[E]) ? void 0 : t.toLowerCase();
    null != g && (b = "song");
    let y = 450;
    "song" === b ? (y = 175) : "music-video" === b && (y = 371), (m = m.substr(1));
    let O = p ? "dark" : "light";
    return (0, r.jsx)("iframe", {
        className: a()(f.embedAppleMusic, i),
        src: d.P.EMBED(m, O, g),
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
