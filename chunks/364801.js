n.d(t, { A: () => s });
var r = n(477900);
n(582128);
var l = n(607470),
    a = n(847608),
    i = n(169819);
let s = function (e) {
    let {
            backgroundImage: t,
            backgroundSize: n = "cover",
            backgroundPosition: s = "center",
            backgroundRepeat: c = "no-repeat",
            backgroundColor: o,
            padding: u = 16,
            children: d,
        } = e,
        m = (0, a.A)(t),
        h = (0, a.c)(m?.mimeType);
    return (0, r.jsxs)("div", {
        className: i.k,
        style: {
            ...(!h && null != m ? { backgroundImage: `url(${m.src})` } : {}),
            backgroundSize: n,
            backgroundPosition: s,
            backgroundRepeat: c,
            backgroundColor: o,
            padding: u,
        },
        children: [
            h &&
                null != m &&
                (0, r.jsx)(l.A, { className: i.O, src: m.src, autoPlay: !0, loop: !0, muted: !0, playsInline: !0 }),
            d,
        ],
    });
};
