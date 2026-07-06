n.d(t, { A: () => p });
var a = n(627968),
    i = n(64700),
    c = n(503698),
    r = n.n(c),
    l = n(17928),
    s = n(231723),
    o = n(775602),
    d = n(607470),
    u = n(196527);
let b =
    "https://cdn.discordapp.com/assets/content/0f6e600fdc4948050869dfd104a8101154fe07ef3bddf5fb0e21ab070be221a2.png";
function p(e) {
    let { mediaUrls: t, isSuccess: n, transitionState: c, onClose: p, children: f } = e,
        m = (0, l.bG)([o.Ay], () => o.Ay.useReducedMotion),
        [y, E] = (0, i.useState)("entry"),
        [h, v] = (0, i.useState)("entry"),
        x = (0, i.useRef)(null),
        R = (0, i.useCallback)(() => {
            "entry" === y && (E("idle"), v("idle"), x.current?.play());
        }, [y]),
        j = (0, i.useCallback)(async () => {
            "exit" !== y && (E("exit"), await new Promise((e) => setTimeout(e, 175)), await p());
        }, [y, p]),
        I = c === s.ip.EXITING;
    if (
        !m &&
        n &&
        null != t.activationEntry &&
        null != t.activationIdle &&
        null != t.celebrationEntry &&
        null != t.celebrationIdle
    ) {
        let e =
                "idle" === h
                    ? { type: "video", src: t.activationIdle, fallbackImageSrc: b, loop: !0 }
                    : { type: "video", src: t.activationEntry, fallbackImageSrc: b, loop: !1 },
            n = "exit" === y || I;
        return (0, a.jsxs)("div", {
            children: [
                (0, a.jsxs)("div", {
                    className: r()(u.j, { [u.Xn]: n }),
                    children: [
                        (0, a.jsx)(d.A, {
                            playsInline: !0,
                            muted: !0,
                            autoPlay: !0,
                            onEnded: R,
                            className: r()(u.Ki, "entry" === y ? u.RK : u.R),
                            children: (0, a.jsx)("source", { src: t.celebrationEntry }),
                        }),
                        (0, a.jsx)(d.A, {
                            ref: x,
                            playsInline: !0,
                            muted: !0,
                            loop: !0,
                            className: r()(u.Ki, "idle" === y ? u.RK : u.R),
                            children: (0, a.jsx)("source", { src: t.celebrationIdle }),
                        }),
                    ],
                }),
                (0, a.jsx)("div", { className: n ? u.aO : u.ws, children: f(e, j) }),
            ],
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            !m &&
                !I &&
                (0, a.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/5211bb6d712707a9ccfb69d14b3ead6a5ca172e1d1098e357b1d4865e90b525b.png",
                    alt: "",
                    className: u.hK,
                }),
            f({ type: "image", src: b, aspectRatio: "16/9" }, p),
        ],
    });
}
