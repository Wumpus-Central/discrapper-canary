n.d(t, { A: () => p });
var a = n(627968),
    c = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(17928),
    d = n(231723),
    l = n(775602),
    o = n(607470),
    b = n(196527);
let u =
    "https://cdn.discordapp.com/assets/content/0f6e600fdc4948050869dfd104a8101154fe07ef3bddf5fb0e21ab070be221a2.png";
function p(e) {
    let { mediaUrls: t, isSuccess: n, transitionState: i, onClose: p, children: f } = e,
        m = (0, s.bG)([l.A], () => l.A.useReducedMotion),
        [y, E] = (0, c.useState)("entry"),
        [R, h] = (0, c.useState)("entry"),
        v = (0, c.useRef)(null),
        I = (0, c.useCallback)(() => {
            "entry" === y && (E("idle"), h("idle"), v.current?.play());
        }, [y]),
        S = (0, c.useCallback)(async () => {
            "exit" !== y && (E("exit"), await new Promise((e) => setTimeout(e, 175)), await p());
        }, [y, p]),
        x = i === d.ip.EXITING;
    if (
        !m &&
        n &&
        null != t.activationEntry &&
        null != t.activationIdle &&
        null != t.celebrationEntry &&
        null != t.celebrationIdle
    ) {
        let e =
                "idle" === R
                    ? { type: "video", src: t.activationIdle, fallbackImageSrc: u, loop: !0 }
                    : { type: "video", src: t.activationEntry, fallbackImageSrc: u, loop: !1 },
            n = "exit" === y || x;
        return (0, a.jsxs)("div", {
            children: [
                (0, a.jsxs)("div", {
                    className: r()(b.j, { [b.Xn]: n }),
                    children: [
                        (0, a.jsx)(o.A, {
                            playsInline: !0,
                            muted: !0,
                            autoPlay: !0,
                            onEnded: I,
                            className: r()(b.Ki, "entry" === y ? b.RK : b.R),
                            children: (0, a.jsx)("source", { src: t.celebrationEntry }),
                        }),
                        (0, a.jsx)(o.A, {
                            ref: v,
                            playsInline: !0,
                            muted: !0,
                            loop: !0,
                            className: r()(b.Ki, "idle" === y ? b.RK : b.R),
                            children: (0, a.jsx)("source", { src: t.celebrationIdle }),
                        }),
                    ],
                }),
                (0, a.jsx)("div", { className: n ? b.aO : b.ws, children: f(e, S) }),
            ],
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            !m &&
                !x &&
                (0, a.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/5211bb6d712707a9ccfb69d14b3ead6a5ca172e1d1098e357b1d4865e90b525b.png",
                    alt: "",
                    className: b.hK,
                }),
            f({ type: "image", src: u, aspectRatio: "16/9" }, p),
        ],
    });
}
