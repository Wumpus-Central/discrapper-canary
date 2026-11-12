t.d(a, { A: () => A });
var l = t(477900),
    n = t(855986),
    r = t(821609),
    s = t(534514),
    i = t(872200),
    u = t(303136),
    o = t(287809),
    c = t(676279),
    h = t(573359),
    d = t(659746),
    m = t(792996),
    p = t(902062);
let A = function (e) {
    let { type: a, text: t, buttonText: A, buttonLoading: E, hideClose: y, onClose: C } = e,
        P = (0, n.bG)([o.default], () => o.default.getCurrentUser()),
        g = (0, n.bG)([h.A], () => h.A.nameplatePreviewOverrides),
        x = (0, c.TM)()
            ? "https://cdn.discordapp.com/assets/content/239903eff27463f888314f6f702385c58dc4f6ef0e8e1a999e0c1051d86f2f11.mov"
            : "https://cdn.discordapp.com/assets/content/2688d55b4d0db6d6e603fdc61131d6e8d8c691bd159952078f166ea177fc970b.webm",
        f = (function (e) {
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
        className: p.kL,
        children: [
            (0, l.jsx)(s.D, { className: p.wx, variant: "nitro-lg", color: "text-strong", children: f }),
            null != P &&
                (0, l.jsxs)("div", {
                    className: p.Dz,
                    children: [
                        (0, l.jsx)(u.A, {
                            fallbackImage:
                                "https://cdn.discordapp.com/assets/content/3ce3d676b7d77ce5184982326720c020ad6ba69d47068473e0096a62472a81d6.png",
                            className: p.d9,
                            children: (0, l.jsx)("source", { src: x }),
                        }),
                        (0, l.jsx)(i.A, {
                            user: P,
                            isHighlighted: !0,
                            nameplate: null,
                            nameplateData: P.nameplate,
                            className: p.M4,
                            nameplatePreviewSize: "large",
                            pendingDisplayNameStyles: g?.displayNameStyles,
                            pendingAvatar: g?.avatar,
                        }),
                    ],
                }),
            (0, l.jsx)("div", { className: p.FS, children: t }),
            !y &&
                (0, l.jsx)("div", {
                    className: p.qr,
                    children: (0, l.jsx)(r.$, {
                        variant: "expressive",
                        fullWidth: !0,
                        text: A,
                        onClick: C,
                        loading: E,
                    }),
                }),
        ],
    });
};
