"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(775602),
    o = n(607470);
let l =
        "https://cdn.discordapp.com/assets/content/615334270467aa3d5adc86cc67efee89f8380a87b945a96e89ec2eb37c27993d.png",
    d = (e) => {
        let { className: t, animationState: n = "on" } = e,
            d = (0, s.bG)([a.A], () => a.A.useReducedMotion),
            [_, u] = (0, r.useState)(!1),
            c = (0, r.useRef)(null),
            E = "on" === n || ("on_hover" === n && _);
        return (
            (0, r.useEffect)(() => {
                null !== c.current && (E ? c.current.play() : ((c.current.currentTime = 0), c.current.pause()));
            }, [E]),
            (0, i.jsx)("div", {
                onMouseEnter: "on_hover" === n ? () => u(!0) : void 0,
                onMouseLeave: "on_hover" === n ? () => u(!1) : void 0,
                children: d
                    ? (0, i.jsx)("img", { src: l, className: t, alt: "Orb" })
                    : (0, i.jsxs)(o.A, {
                          className: t,
                          autoPlay: !0,
                          loop: !0,
                          ref: c,
                          children: [
                              (0, i.jsx)("source", {
                                  src: "https://cdn.discordapp.com/assets/content/ccaa60fae2114887bfa2e413be11d62c6d194139ee0f33671825ff06a1050692.webm",
                                  type: "video/webm",
                              }),
                              (0, i.jsx)("img", { src: l, className: t, alt: "Orb" }),
                          ],
                      }),
            })
        );
    };
