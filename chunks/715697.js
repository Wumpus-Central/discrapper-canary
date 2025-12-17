n.d(t, { Z: () => p }), n(35282);
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
    f = n(838983);
function p(e) {
    var t, n;
    let {
            className: i,
            embed: { url: p },
        } = e,
        _ = (0, s.e7)([c.Z], () => (0, l.wj)(c.Z.theme));
    if (null == p) return null;
    let m = null,
        h = null,
        g = null;
    try {
        let e = o.parse(p, !0);
        (m = e.host), (h = e.pathname), (g = null != (n = e.query.i) ? n : null), Array.isArray(g) && (g = g[0]);
    } catch (e) {
        return null;
    }
    if (!(0, u.L)(m) || null == h) return null;
    let E = /^\/([a-z]{2}(?:-[a-z]{2})?)\//.test(h) ? 2 : 1,
        b = null == (t = h.split("/")[E]) ? void 0 : t.toLowerCase();
    null != g && (b = "song");
    let y = 450;
    "song" === b ? (y = 175) : "music-video" === b && (y = 371), (h = h.substr(1));
    let O = _ ? "dark" : "light";
    return (0, r.jsx)("iframe", {
        className: a()(f.embedAppleMusic, i),
        src: d.P.EMBED(h, O, g),
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
