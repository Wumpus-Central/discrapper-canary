n.d(t, { A: () => E });
var l = n(477900),
    r = n(284009),
    i = n.n(r),
    s = n(17928),
    a = n(821609),
    u = n(297264),
    c = n(344346),
    o = n(303136),
    d = n(287809),
    f = n(676279),
    h = n(573359),
    m = n(659746),
    C = n(375708),
    p = n(902062);
let E = function (e) {
    let { type: t, text: n, buttonText: r, buttonLoading: E, hideClose: I, onClose: S } = e,
        y = (0, s.bG)([d.default], () => {
            let e = d.default.getCurrentUser();
            return (i()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e);
        }),
        g = (0, s.bG)([h.A], () => h.A.nameplatePreviewOverrides),
        _ = (0, f.TM)()
            ? "https://cdn.discordapp.com/assets/content/239903eff27463f888314f6f702385c58dc4f6ef0e8e1a999e0c1051d86f2f11.mov"
            : "https://cdn.discordapp.com/assets/content/2688d55b4d0db6d6e603fdc61131d6e8d8c691bd159952078f166ea177fc970b.webm",
        P = (function (e) {
            switch (e) {
                case m.Or.PREMIUM_UPDATED:
                    return C.intl.string(C.t["75Wt0E"]);
                case m.Or.PREMIUM_ACTIVATED:
                    return C.intl.string(C.t.QWljxE);
                default:
                    return C.intl.string(C.t.X79Az5);
            }
        })(t);
    return (0, l.jsxs)("div", {
        className: p.kL,
        children: [
            (0, l.jsx)(u.D, { className: p.wx, variant: "nitro-lg", color: "text-strong", children: P }),
            (0, l.jsxs)("div", {
                className: p.Dz,
                children: [
                    (0, l.jsx)(o.A, {
                        fallbackImage:
                            "https://cdn.discordapp.com/assets/content/3ce3d676b7d77ce5184982326720c020ad6ba69d47068473e0096a62472a81d6.png",
                        className: p.d9,
                        children: (0, l.jsx)("source", { src: _ }),
                    }),
                    (0, l.jsx)(c.A, {
                        user: y,
                        isHighlighted: !0,
                        nameplate: null,
                        nameplateData: y.nameplate,
                        className: p.M4,
                        nameplatePreviewSize: "large",
                        pendingDisplayNameStyles: g?.displayNameStyles,
                        pendingAvatar: g?.avatar,
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: p.FS, children: n }),
            !I &&
                (0, l.jsx)("div", {
                    className: p.qr,
                    children: (0, l.jsx)(a.$, {
                        variant: "expressive",
                        fullWidth: !0,
                        text: r,
                        onClick: S,
                        loading: E,
                    }),
                }),
        ],
    });
};
