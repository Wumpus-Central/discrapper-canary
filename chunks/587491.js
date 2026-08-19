t.d(a, { A: () => m });
var l = t(477900),
    n = t(582128),
    r = t(503698),
    s = t.n(r),
    i = t(17928),
    c = t(231723),
    o = t(775602),
    u = t(607470),
    d = t(544711);
let h =
    "https://cdn.discordapp.com/assets/content/0f6e600fdc4948050869dfd104a8101154fe07ef3bddf5fb0e21ab070be221a2.png";
function m(e) {
    let { mediaUrls: a, isSuccess: t, transitionState: r, onClose: m, children: p } = e,
        x = (0, i.bG)([o.Ay], () => o.Ay.useReducedMotion),
        [C, E] = (0, n.useState)("entry"),
        [g, v] = (0, n.useState)("entry"),
        f = (0, n.useRef)(null),
        j = (0, n.useCallback)(() => {
            "entry" === C && (E("idle"), v("idle"), f.current?.play());
        }, [C]),
        A = (0, n.useCallback)(async () => {
            "exit" !== C && (E("exit"), await new Promise((e) => setTimeout(e, 175)), await m());
        }, [C, m]),
        b = r === c.ip.EXITING;
    if (
        !x &&
        t &&
        null != a.activationEntry &&
        null != a.activationIdle &&
        null != a.celebrationEntry &&
        null != a.celebrationIdle
    ) {
        let e =
                "idle" === g
                    ? { type: "video", src: a.activationIdle, fallbackImageSrc: h, loop: !0 }
                    : { type: "video", src: a.activationEntry, fallbackImageSrc: h, loop: !1 },
            t = "exit" === C || b;
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsxs)("div", {
                    className: s()(d.j, { [d.Xn]: t }),
                    children: [
                        (0, l.jsx)(u.A, {
                            playsInline: !0,
                            muted: !0,
                            autoPlay: !0,
                            onEnded: j,
                            className: s()(d.Ki, "entry" === C ? d.RK : d.R),
                            children: (0, l.jsx)("source", { src: a.celebrationEntry }),
                        }),
                        (0, l.jsx)(u.A, {
                            ref: f,
                            playsInline: !0,
                            muted: !0,
                            loop: !0,
                            className: s()(d.Ki, "idle" === C ? d.RK : d.R),
                            children: (0, l.jsx)("source", { src: a.celebrationIdle }),
                        }),
                    ],
                }),
                (0, l.jsx)("div", { className: t ? d.aO : d.ws, children: p(e, A) }),
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
            p({ type: "image", src: h, aspectRatio: "16/9" }, m),
        ],
    });
}
