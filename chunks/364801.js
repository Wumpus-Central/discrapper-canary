n.d(t, { A: () => i });
var r = n(627968);
n(64700);
var l = n(607470),
    a = n(847608),
    s = n(732896);
let i = function (e) {
    let {
            backgroundImage: t,
            backgroundSize: n = "cover",
            backgroundPosition: i = "center",
            backgroundRepeat: c = "no-repeat",
            backgroundColor: o,
            padding: u = 16,
            children: d,
        } = e,
        h = (0, a.A)(t),
        m = (0, a.c)(h?.mimeType);
    return (0, r.jsxs)("div", {
        className: s.k,
        style: {
            ...(!m && null != h ? { backgroundImage: `url(${h.src})` } : {}),
            backgroundSize: n,
            backgroundPosition: i,
            backgroundRepeat: c,
            backgroundColor: o,
            padding: u,
        },
        children: [
            m &&
                null != h &&
                (0, r.jsx)(l.A, { className: s.O, src: h.src, autoPlay: !0, loop: !0, muted: !0, playsInline: !0 }),
            d,
        ],
    });
};
