r.d(t, { A: () => c });
var l = r(627968);
r(64700);
var n = r(607470),
    a = r(506456),
    s = r(401721);
let c = (e) => {
    let {
            backgroundImage: t,
            backgroundSize: r = "cover",
            backgroundPosition: c = "center",
            backgroundRepeat: i = "no-repeat",
            backgroundColor: d,
            padding: o = 16,
            children: u,
        } = e,
        m = (0, a.A)(t),
        h = (0, a.c)(m?.mimeType);
    return (0, l.jsxs)("div", {
        className: s.k,
        style: {
            ...(!h && null != m ? { backgroundImage: `url(${m.src})` } : {}),
            backgroundSize: r,
            backgroundPosition: c,
            backgroundRepeat: i,
            backgroundColor: d,
            padding: o,
        },
        children: [
            h &&
                null != m &&
                (0, l.jsx)(n.A, { className: s.O, src: m.src, autoPlay: !0, loop: !0, muted: !0, playsInline: !0 }),
            u,
        ],
    });
};
