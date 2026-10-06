a.d(t, { A: () => p });
var l = a(477900),
    n = a(17928),
    r = a(821609),
    i = a(297264),
    s = a(344346),
    o = a(303136),
    u = a(287809),
    c = a(676279),
    h = a(573359),
    d = a(659746),
    m = a(375708),
    C = a(902062);
let p = function (e) {
    let { type: t, text: a, buttonText: p, buttonLoading: A, hideClose: E, onClose: _ } = e,
        g = (0, n.bG)([u.default], () => u.default.getCurrentUser()),
        f = (0, n.bG)([h.A], () => h.A.nameplatePreviewOverrides),
        T = (0, c.TM)()
            ? "https://cdn.discordapp.com/assets/content/239903eff27463f888314f6f702385c58dc4f6ef0e8e1a999e0c1051d86f2f11.mov"
            : "https://cdn.discordapp.com/assets/content/2688d55b4d0db6d6e603fdc61131d6e8d8c691bd159952078f166ea177fc970b.webm",
        y = (function (e) {
            switch (e) {
                case d.Or.PREMIUM_UPDATED:
                    return m.intl.string(m.t["75Wt0E"]);
                case d.Or.PREMIUM_ACTIVATED:
                    return m.intl.string(m.t.QWljxE);
                default:
                    return m.intl.string(m.t.X79Az5);
            }
        })(t);
    return (0, l.jsxs)("div", {
        className: C.kL,
        children: [
            (0, l.jsx)(i.D, { className: C.wx, variant: "nitro-lg", color: "text-strong", children: y }),
            null != g &&
                (0, l.jsxs)("div", {
                    className: C.Dz,
                    children: [
                        (0, l.jsx)(o.A, {
                            fallbackImage:
                                "https://cdn.discordapp.com/assets/content/3ce3d676b7d77ce5184982326720c020ad6ba69d47068473e0096a62472a81d6.png",
                            className: C.d9,
                            children: (0, l.jsx)("source", { src: T }),
                        }),
                        (0, l.jsx)(s.A, {
                            user: g,
                            isHighlighted: !0,
                            nameplate: null,
                            nameplateData: g.nameplate,
                            className: C.M4,
                            nameplatePreviewSize: "large",
                            pendingDisplayNameStyles: f?.displayNameStyles,
                            pendingAvatar: f?.avatar,
                        }),
                    ],
                }),
            (0, l.jsx)("div", { className: C.FS, children: a }),
            !E &&
                (0, l.jsx)("div", {
                    className: C.qr,
                    children: (0, l.jsx)(r.$, {
                        variant: "expressive",
                        fullWidth: !0,
                        text: p,
                        onClick: _,
                        loading: A,
                    }),
                }),
        ],
    });
};
