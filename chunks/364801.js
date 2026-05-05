l.d(t, { A: () => i });
var r = l(627968);
l(64700);
var n = l(607470),
    a = l(847608),
    s = l(732896);
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
        m = (0, a.A)(t),
        h = (0, a.c)(m?.mimeType);
    return (0, r.jsxs)("div", {
        className: s.k,
        style: {
            ...(!h && null != m ? { backgroundImage: `url(${m.src})` } : {}),
            backgroundSize: l,
            backgroundPosition: i,
            backgroundRepeat: c,
            backgroundColor: d,
            padding: o,
        },
        children: [
            h &&
                null != m &&
                (0, r.jsx)(n.A, { className: s.O, src: m.src, autoPlay: !0, loop: !0, muted: !0, playsInline: !0 }),
            u,
        ],
    });
};
