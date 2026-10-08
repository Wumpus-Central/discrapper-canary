a.d(t, { A: () => u });
var c = a(477900),
    n = a(582128),
    i = a(503698),
    r = a.n(i),
    d = a(17928),
    o = a(231723),
    s = a(775602),
    l = a(607470),
    b = a(201714);
let p =
    "https://cdn.discordapp.com/assets/content/0f6e600fdc4948050869dfd104a8101154fe07ef3bddf5fb0e21ab070be221a2.png";
function u(e) {
    let { mediaUrls: t, isSuccess: a, transitionState: i, onClose: u, children: f } = e,
        m = (0, d.bG)([s.Ay], () => s.Ay.useReducedMotion),
        [y, v] = (0, n.useState)("entry"),
        [h, w] = (0, n.useState)("entry"),
        R = (0, n.useRef)(null),
        j = (0, n.useCallback)(() => {
            "entry" === y && (v("idle"), w("idle"), R.current?.play());
        }, [y]),
        E = (0, n.useCallback)(async () => {
            "exit" !== y && (v("exit"), await new Promise((e) => setTimeout(e, 175)), await u());
        }, [y, u]),
        I = i === o.ip.EXITING;
    if (
        !m &&
        a &&
        null != t.activationEntry &&
        null != t.activationIdle &&
        null != t.celebrationEntry &&
        null != t.celebrationIdle
    ) {
        let e =
                "idle" === h
                    ? { type: "video", src: t.activationIdle, fallbackImageSrc: p, loop: !0 }
                    : { type: "video", src: t.activationEntry, fallbackImageSrc: p, loop: !1 },
            a = "exit" === y || I;
        return (0, c.jsxs)("div", {
            children: [
                (0, c.jsxs)("div", {
                    className: r()(b.j, { [b.Xn]: a }),
                    children: [
                        (0, c.jsx)(l.A, {
                            playsInline: !0,
                            muted: !0,
                            autoPlay: !0,
                            onEnded: j,
                            className: r()(b.Ki, "entry" === y ? b.RK : b.R),
                            children: (0, c.jsx)("source", { src: t.celebrationEntry }),
                        }),
                        (0, c.jsx)(l.A, {
                            ref: R,
                            playsInline: !0,
                            muted: !0,
                            loop: !0,
                            className: r()(b.Ki, "idle" === y ? b.RK : b.R),
                            children: (0, c.jsx)("source", { src: t.celebrationIdle }),
                        }),
                    ],
                }),
                (0, c.jsx)("div", { className: a ? b.aO : b.ws, children: f(e, E) }),
            ],
        });
    }
    return (0, c.jsxs)(c.Fragment, {
        children: [
            !m &&
                !I &&
                (0, c.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/5211bb6d712707a9ccfb69d14b3ead6a5ca172e1d1098e357b1d4865e90b525b.png",
                    alt: "",
                    className: b.hK,
                }),
            f({ type: "image", src: p, aspectRatio: "16/9" }, u),
        ],
    });
}
