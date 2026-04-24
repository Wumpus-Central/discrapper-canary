"use strict";
r.d(t, { A: () => i });
var l = r(627968);
r(64700);
var s = r(607470),
    n = r(506456),
    a = r(211736);
let i = (e) => {
    let {
            backgroundImage: t,
            backgroundSize: r = "cover",
            backgroundPosition: i = "center",
            backgroundRepeat: c = "no-repeat",
            backgroundColor: u,
            padding: d = 16,
            children: o,
        } = e,
        h = (0, n.A)(t),
        m = (0, n.c)(h?.mimeType);
    return (0, l.jsxs)("div", {
        className: a.k,
        style: {
            ...(!m && null != h ? { backgroundImage: `url(${h.src})` } : {}),
            backgroundSize: r,
            backgroundPosition: i,
            backgroundRepeat: c,
            backgroundColor: u,
            padding: d,
        },
        children: [
            m &&
                null != h &&
                (0, l.jsx)(s.A, { className: a.O, src: h.src, autoPlay: !0, loop: !0, muted: !0, playsInline: !0 }),
            o,
        ],
    });
};
