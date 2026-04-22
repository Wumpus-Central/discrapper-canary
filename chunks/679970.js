a.d(t, { A: () => o });
var r = a(627968),
    n = a(64700),
    l = a(311907),
    s = a(775602),
    i = a(607470),
    c = a(157620),
    d = a(561418);
let o = (e) => {
    let { className: t, animationState: a = "on" } = e,
        o = (0, l.bG)([s.A], () => s.A.useReducedMotion),
        [u, _] = (0, n.useState)(!1),
        f = (0, n.useRef)(null),
        E = "on" === a || ("on_hover" === a && u);
    return (
        (0, n.useEffect)(() => {
            null !== f.current && (E ? f.current.play() : ((f.current.currentTime = 0), f.current.pause()));
        }, [E]),
        (0, r.jsx)("div", {
            onMouseEnter: "on_hover" === a ? () => _(!0) : void 0,
            onMouseLeave: "on_hover" === a ? () => _(!1) : void 0,
            children: o
                ? (0, r.jsx)("img", { src: c.A, className: t, alt: "Orb" })
                : (0, r.jsxs)(i.A, {
                      className: t,
                      autoPlay: !0,
                      loop: !0,
                      ref: f,
                      children: [
                          (0, r.jsx)("source", { src: d.A, type: "video/webm" }),
                          (0, r.jsx)("img", { src: c.A, className: t, alt: "Orb" }),
                      ],
                  }),
        })
    );
};
