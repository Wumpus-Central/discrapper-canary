c.d(s, { A: () => u });
var a = c(627968),
    r = c(64700),
    o = c(17928),
    t = c(775602),
    n = c(607470);
let d =
        "https://cdn.discordapp.com/assets/content/615334270467aa3d5adc86cc67efee89f8380a87b945a96e89ec2eb37c27993d.png",
    u = function (e) {
        let { className: s, animationState: c = "on" } = e,
            u = (0, o.bG)([t.Ay], () => t.Ay.useReducedMotion),
            [i, p] = (0, r.useState)(!1),
            l = (0, r.useRef)(null),
            E = "on" === c || ("on_hover" === c && i);
        return (
            (0, r.useEffect)(() => {
                null !== l.current && (E ? l.current.play() : ((l.current.currentTime = 0), l.current.pause()));
            }, [E]),
            (0, a.jsx)("div", {
                onMouseEnter: "on_hover" === c ? () => p(!0) : void 0,
                onMouseLeave: "on_hover" === c ? () => p(!1) : void 0,
                children: u
                    ? (0, a.jsx)("img", { src: d, className: s, alt: "Orb" })
                    : (0, a.jsxs)(n.A, {
                          className: s,
                          autoPlay: !0,
                          loop: !0,
                          ref: l,
                          children: [
                              (0, a.jsx)("source", {
                                  src: "https://cdn.discordapp.com/assets/content/ccaa60fae2114887bfa2e413be11d62c6d194139ee0f33671825ff06a1050692.webm",
                                  type: "video/webm",
                              }),
                              (0, a.jsx)("img", { src: d, className: s, alt: "Orb" }),
                          ],
                      }),
            })
        );
    };
