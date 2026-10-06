t.d(e, { A: () => p });
var l = t(477900),
    n = t(17928),
    s = t(821609),
    r = t(297264),
    h = t(344346),
    i = t(303136),
    c = t(287809),
    o = t(676279),
    u = t(573359),
    d = t(659746),
    m = t(375708),
    A = t(902062);
let p = function (a) {
    let { type: e, text: t, buttonText: p, buttonLoading: P, hideClose: E, onClose: M } = a,
        C = (0, n.bG)([c.default], () => c.default.getCurrentUser()),
        T = (0, n.bG)([u.A], () => u.A.nameplatePreviewOverrides),
        g = (0, o.TM)()
            ? "https://cdn.discordapp.com/assets/content/239903eff27463f888314f6f702385c58dc4f6ef0e8e1a999e0c1051d86f2f11.mov"
            : "https://cdn.discordapp.com/assets/content/2688d55b4d0db6d6e603fdc61131d6e8d8c691bd159952078f166ea177fc970b.webm",
        y = (function (a) {
            switch (a) {
                case d.Or.PREMIUM_UPDATED:
                    return m.intl.string(m.t["75Wt0E"]);
                case d.Or.PREMIUM_ACTIVATED:
                    return m.intl.string(m.t.QWljxE);
                default:
                    return m.intl.string(m.t.X79Az5);
            }
        })(e);
    return (0, l.jsxs)("div", {
        className: A.kL,
        children: [
            (0, l.jsx)(r.D, { className: A.wx, variant: "nitro-lg", color: "text-strong", children: y }),
            null != C &&
                (0, l.jsxs)("div", {
                    className: A.Dz,
                    children: [
                        (0, l.jsx)(i.A, {
                            fallbackImage:
                                "https://cdn.discordapp.com/assets/content/3ce3d676b7d77ce5184982326720c020ad6ba69d47068473e0096a62472a81d6.png",
                            className: A.d9,
                            children: (0, l.jsx)("source", { src: g }),
                        }),
                        (0, l.jsx)(h.A, {
                            user: C,
                            isHighlighted: !0,
                            nameplate: null,
                            nameplateData: C.nameplate,
                            className: A.M4,
                            nameplatePreviewSize: "large",
                            pendingDisplayNameStyles: T?.displayNameStyles,
                            pendingAvatar: T?.avatar,
                        }),
                    ],
                }),
            (0, l.jsx)("div", { className: A.FS, children: t }),
            !E &&
                (0, l.jsx)("div", {
                    className: A.qr,
                    children: (0, l.jsx)(s.$, {
                        variant: "expressive",
                        fullWidth: !0,
                        text: p,
                        onClick: M,
                        loading: P,
                    }),
                }),
        ],
    });
};
