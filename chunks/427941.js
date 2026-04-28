l.d(t, { A: () => i });
var r = l(627968);
l(64700);
var n = l(607470),
    a = l(506456),
    s = l(211736);
let i = (e) => {
    let {
            backgroundImage: t,
            backgroundSize: l = "cover",
            backgroundPosition: i = "center",
            backgroundRepeat: c = "no-repeat",
            backgroundColor: d,
            padding: o = 16,
            children: u,
        } = e,
        h = (0, a.A)(t),
        m = (0, a.c)(h?.mimeType);
    return (0, r.jsxs)("div", {
        className: s.k,
        style: {
            ...(!m && null != h ? { backgroundImage: `url(${h.src})` } : {}),
            backgroundSize: l,
            backgroundPosition: i,
            backgroundRepeat: c,
            backgroundColor: d,
            padding: o,
        },
        children: [
            m &&
                null != h &&
                (0, r.jsx)(n.A, { className: s.O, src: h.src, autoPlay: !0, loop: !0, muted: !0, playsInline: !0 }),
            u,
        ],
    });
};
