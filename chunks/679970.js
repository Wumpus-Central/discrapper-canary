"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(775602),
    o = n(607470),
    l = n(157620),
    u = n(561418);
let c = (e) => {
    let { className: t, animationState: n = "on" } = e,
        c = (0, s.bG)([a.A], () => a.A.useReducedMotion),
        [d, _] = (0, i.useState)(!1),
        f = (0, i.useRef)(null),
        p = "on" === n || ("on_hover" === n && d);
    return (
        (0, i.useEffect)(() => {
            null !== f.current && (p ? f.current.play() : ((f.current.currentTime = 0), f.current.pause()));
        }, [p]),
        (0, r.jsx)("div", {
            onMouseEnter: "on_hover" === n ? () => _(!0) : void 0,
            onMouseLeave: "on_hover" === n ? () => _(!1) : void 0,
            children: c
                ? (0, r.jsx)("img", { src: l.A, className: t, alt: "Orb" })
                : (0, r.jsxs)(o.A, {
                      className: t,
                      autoPlay: !0,
                      loop: !0,
                      ref: f,
                      children: [
                          (0, r.jsx)("source", { src: u.A, type: "video/webm" }),
                          (0, r.jsx)("img", { src: l.A, className: t, alt: "Orb" }),
                      ],
                  }),
        })
    );
};
