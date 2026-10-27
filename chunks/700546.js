t.d(a, { A: () => p });
var l = t(477900),
    n = t(17928),
    r = t(821609),
    s = t(297264),
    i = t(344346),
    h = t(303136),
    u = t(287809),
    c = t(676279),
    o = t(573359),
    d = t(659746),
    m = t(105292),
    A = t(902062);
let p = function (e) {
    let { type: a, text: t, buttonText: p, buttonLoading: E, hideClose: P, onClose: C } = e,
        M = (0, n.bG)([u.default], () => u.default.getCurrentUser()),
        y = (0, n.bG)([o.A], () => o.A.nameplatePreviewOverrides),
        g = (0, c.TM)()
            ? "https://cdn.discordapp.com/assets/content/239903eff27463f888314f6f702385c58dc4f6ef0e8e1a999e0c1051d86f2f11.mov"
            : "https://cdn.discordapp.com/assets/content/2688d55b4d0db6d6e603fdc61131d6e8d8c691bd159952078f166ea177fc970b.webm",
        T = (function (e) {
            switch (e) {
                case d.Or.PREMIUM_UPDATED:
                    return m.intl.string(m.t["75Wt0E"]);
                case d.Or.PREMIUM_ACTIVATED:
                    return m.intl.string(m.t.QWljxE);
                default:
                    return m.intl.string(m.t.X79Az5);
            }
        })(a);
    return (0, l.jsxs)("div", {
        className: A.kL,
        children: [
            (0, l.jsx)(s.D, { className: A.wx, variant: "nitro-lg", color: "text-strong", children: T }),
            null != M &&
                (0, l.jsxs)("div", {
                    className: A.Dz,
                    children: [
                        (0, l.jsx)(h.A, {
                            fallbackImage:
                                "https://cdn.discordapp.com/assets/content/3ce3d676b7d77ce5184982326720c020ad6ba69d47068473e0096a62472a81d6.png",
                            className: A.d9,
                            children: (0, l.jsx)("source", { src: g }),
                        }),
                        (0, l.jsx)(i.A, {
                            user: M,
                            isHighlighted: !0,
                            nameplate: null,
                            nameplateData: M.nameplate,
                            className: A.M4,
                            nameplatePreviewSize: "large",
                            pendingDisplayNameStyles: y?.displayNameStyles,
                            pendingAvatar: y?.avatar,
                        }),
                    ],
                }),
            (0, l.jsx)("div", { className: A.FS, children: t }),
            !P &&
                (0, l.jsx)("div", {
                    className: A.qr,
                    children: (0, l.jsx)(r.$, {
                        variant: "expressive",
                        fullWidth: !0,
                        text: p,
                        onClick: C,
                        loading: E,
                    }),
                }),
        ],
    });
};
