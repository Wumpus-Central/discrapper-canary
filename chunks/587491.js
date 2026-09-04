t.d(e, { A: () => m });
var l = t(477900),
    n = t(582128),
    r = t(503698),
    s = t.n(r),
    i = t(17928),
    c = t(231723),
    o = t(775602),
    d = t(607470),
    h = t(201714);
let u =
    "https://cdn.discordapp.com/assets/content/0f6e600fdc4948050869dfd104a8101154fe07ef3bddf5fb0e21ab070be221a2.png";
function m(a) {
    let { mediaUrls: e, isSuccess: t, transitionState: r, onClose: m, children: p } = a,
        x = (0, i.bG)([o.Ay], () => o.Ay.useReducedMotion),
        [E, C] = (0, n.useState)("entry"),
        [A, v] = (0, n.useState)("entry"),
        g = (0, n.useRef)(null),
        j = (0, n.useCallback)(() => {
            "entry" === E && (C("idle"), v("idle"), g.current?.play());
        }, [E]),
        f = (0, n.useCallback)(async () => {
            "exit" !== E && (C("exit"), await new Promise((a) => setTimeout(a, 175)), await m());
        }, [E, m]),
        b = r === c.ip.EXITING;
    if (
        !x &&
        t &&
        null != e.activationEntry &&
        null != e.activationIdle &&
        null != e.celebrationEntry &&
        null != e.celebrationIdle
    ) {
        let a =
                "idle" === A
                    ? { type: "video", src: e.activationIdle, fallbackImageSrc: u, loop: !0 }
                    : { type: "video", src: e.activationEntry, fallbackImageSrc: u, loop: !1 },
            t = "exit" === E || b;
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsxs)("div", {
                    className: s()(h.j, { [h.Xn]: t }),
                    children: [
                        (0, l.jsx)(d.A, {
                            playsInline: !0,
                            muted: !0,
                            autoPlay: !0,
                            onEnded: j,
                            className: s()(h.Ki, "entry" === E ? h.RK : h.R),
                            children: (0, l.jsx)("source", { src: e.celebrationEntry }),
                        }),
                        (0, l.jsx)(d.A, {
                            ref: g,
                            playsInline: !0,
                            muted: !0,
                            loop: !0,
                            className: s()(h.Ki, "idle" === E ? h.RK : h.R),
                            children: (0, l.jsx)("source", { src: e.celebrationIdle }),
                        }),
                    ],
                }),
                (0, l.jsx)("div", { className: t ? h.aO : h.ws, children: p(a, f) }),
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
                    className: h.hK,
                }),
            p({ type: "image", src: u, aspectRatio: "16/9" }, m),
        ],
    });
}
