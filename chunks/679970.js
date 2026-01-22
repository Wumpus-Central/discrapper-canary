n.d(t, { A: () => u }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(775602),
    o = n(607470),
    l = n(157620),
    c = n(561418);
let u = (e) => {
    let { className: t, animationState: n = "on" } = e,
        u = (0, a.bG)([s.A], () => s.A.useReducedMotion),
        [d, f] = (0, i.useState)(!1),
        p = (0, i.useRef)(null),
        _ = "on" === n || ("on_hover" === n && d);
    return (
        (0, i.useEffect)(() => {
            null !== p.current && (_ ? p.current.play() : ((p.current.currentTime = 0), p.current.pause()));
        }, [_]),
        (0, r.jsx)("div", {
            onMouseEnter: "on_hover" === n ? () => f(!0) : void 0,
            onMouseLeave: "on_hover" === n ? () => f(!1) : void 0,
            children: u
                ? (0, r.jsx)("img", {
                      src: l.A,
                      className: t,
                      alt: "Orb",
                  })
                : (0, r.jsxs)(o.A, {
                      className: t,
                      autoPlay: !0,
                      loop: !0,
                      ref: p,
                      children: [
                          (0, r.jsx)("source", {
                              src: c.A,
                              type: "video/webm",
                          }),
                          (0, r.jsx)("img", {
                              src: l.A,
                              className: t,
                              alt: "Orb",
                          }),
                      ],
                  }),
        })
    );
};
