r.d(t, { A: () => o });
var a = r(627968),
    n = r(64700),
    l = r(17928),
    s = r(775602),
    i = r(607470);
let c =
        "https://cdn.discordapp.com/assets/content/615334270467aa3d5adc86cc67efee89f8380a87b945a96e89ec2eb37c27993d.png",
    o = (e) => {
        let { className: t, animationState: r = "on" } = e,
            o = (0, l.bG)([s.A], () => s.A.useReducedMotion),
            [d, u] = (0, n.useState)(!1),
            f = (0, n.useRef)(null),
            A = "on" === r || ("on_hover" === r && d);
        return (
            (0, n.useEffect)(() => {
                null !== f.current && (A ? f.current.play() : ((f.current.currentTime = 0), f.current.pause()));
            }, [A]),
            (0, a.jsx)("div", {
                onMouseEnter: "on_hover" === r ? () => u(!0) : void 0,
                onMouseLeave: "on_hover" === r ? () => u(!1) : void 0,
                children: o
                    ? (0, a.jsx)("img", { src: c, className: t, alt: "Orb" })
                    : (0, a.jsxs)(i.A, {
                          className: t,
                          autoPlay: !0,
                          loop: !0,
                          ref: f,
                          children: [
                              (0, a.jsx)("source", {
                                  src: "https://cdn.discordapp.com/assets/content/ccaa60fae2114887bfa2e413be11d62c6d194139ee0f33671825ff06a1050692.webm",
                                  type: "video/webm",
                              }),
                              (0, a.jsx)("img", { src: c, className: t, alt: "Orb" }),
                          ],
                      }),
            })
        );
    };
