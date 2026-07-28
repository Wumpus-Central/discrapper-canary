t.d(e, { A: () => m });
var l = t(477900),
    n = t(582128),
    i = t(503698),
    r = t.n(i),
    s = t(17928),
    c = t(231723),
    o = t(775602),
    h = t(607470),
    d = t(544711);
let u =
    "https://cdn.discordapp.com/assets/content/0f6e600fdc4948050869dfd104a8101154fe07ef3bddf5fb0e21ab070be221a2.png";
function m(a) {
    let { mediaUrls: e, isSuccess: t, transitionState: i, onClose: m, children: p } = a,
        x = (0, s.bG)([o.Ay], () => o.Ay.useReducedMotion),
        [E, j] = (0, n.useState)("entry"),
        [v, A] = (0, n.useState)("entry"),
        C = (0, n.useRef)(null),
        f = (0, n.useCallback)(() => {
            "entry" === E && (j("idle"), A("idle"), C.current?.play());
        }, [E]),
        g = (0, n.useCallback)(async () => {
            "exit" !== E && (j("exit"), await new Promise((a) => setTimeout(a, 175)), await m());
        }, [E, m]),
        b = i === c.ip.EXITING;
    if (
        !x &&
        t &&
        null != e.activationEntry &&
        null != e.activationIdle &&
        null != e.celebrationEntry &&
        null != e.celebrationIdle
    ) {
        let a =
                "idle" === v
                    ? { type: "video", src: e.activationIdle, fallbackImageSrc: u, loop: !0 }
                    : { type: "video", src: e.activationEntry, fallbackImageSrc: u, loop: !1 },
            t = "exit" === E || b;
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsxs)("div", {
                    className: r()(d.j, { [d.Xn]: t }),
                    children: [
                        (0, l.jsx)(h.A, {
                            playsInline: !0,
                            muted: !0,
                            autoPlay: !0,
                            onEnded: f,
                            className: r()(d.Ki, "entry" === E ? d.RK : d.R),
                            children: (0, l.jsx)("source", { src: e.celebrationEntry }),
                        }),
                        (0, l.jsx)(h.A, {
                            ref: C,
                            playsInline: !0,
                            muted: !0,
                            loop: !0,
                            className: r()(d.Ki, "idle" === E ? d.RK : d.R),
                            children: (0, l.jsx)("source", { src: e.celebrationIdle }),
                        }),
                    ],
                }),
                (0, l.jsx)("div", { className: t ? d.aO : d.ws, children: p(a, g) }),
            ],
        });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            !x &&
                !b &&
                (0, l.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/5211bb6d712707a9ccfb69d14b3ead6a5ca172e1d1098e357b1d4865e90b525b.png",
                    alt: "",
                    className: d.hK,
                }),
            p({ type: "image", src: u, aspectRatio: "16/9" }, m),
        ],
    });
}
