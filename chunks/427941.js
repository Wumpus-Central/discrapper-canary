l.d(t, { A: () => a });
var r = l(627968);
l(64700);
var n = l(607470),
    i = l(506456),
    o = l(401721);
let a = (e) => {
    let {
            backgroundImage: t,
            backgroundSize: l = "cover",
            backgroundPosition: a = "center",
            backgroundRepeat: s = "no-repeat",
            backgroundColor: d,
            padding: c = 16,
            children: u,
        } = e,
        h = (0, i.A)(t),
        m = (0, i.c)(h?.mimeType);
    return (0, r.jsxs)("div", {
        className: o.k,
        style: {
            ...(!m && null != h ? { backgroundImage: `url(${h.src})` } : {}),
            backgroundSize: l,
            backgroundPosition: a,
            backgroundRepeat: s,
            backgroundColor: d,
            padding: c,
        },
        children: [
            m &&
                null != h &&
                (0, r.jsx)(n.A, { className: o.O, src: h.src, autoPlay: !0, loop: !0, muted: !0, playsInline: !0 }),
            u,
        ],
    });
};
