n.d(t, { A: () => E });
var l = n(477900),
    i = n(284009),
    r = n.n(i),
    a = n(17928),
    s = n(821609),
    o = n(297264),
    u = n(344346),
    c = n(303136),
    d = n(287809),
    m = n(676279),
    p = n(573359),
    C = n(659746),
    h = n(375708),
    f = n(836949);
let E = function (e) {
    let { type: t, text: n, buttonText: i, buttonLoading: E, hideClose: S, onClose: y } = e,
        I = (0, a.bG)([d.default], () => {
            let e = d.default.getCurrentUser();
            return (r()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e);
        }),
        A = (0, a.bG)([p.A], () => p.A.nameplatePreviewOverrides),
        g = (0, m.TM)()
            ? "https://cdn.discordapp.com/assets/content/239903eff27463f888314f6f702385c58dc4f6ef0e8e1a999e0c1051d86f2f11.mov"
            : "https://cdn.discordapp.com/assets/content/2688d55b4d0db6d6e603fdc61131d6e8d8c691bd159952078f166ea177fc970b.webm",
        P = (function (e) {
            switch (e) {
                case C.Or.PREMIUM_UPDATED:
                    return h.intl.string(h.t["75Wt0E"]);
                case C.Or.PREMIUM_ACTIVATED:
                    return h.intl.string(h.t.QWljxE);
                default:
                    return h.intl.string(h.t.X79Az5);
            }
        })(t);
    return (0, l.jsxs)("div", {
        className: f.kL,
        children: [
            (0, l.jsx)(o.D, { className: f.wx, variant: "nitro-lg", color: "text-strong", children: P }),
            (0, l.jsxs)("div", {
                className: f.Dz,
                children: [
                    (0, l.jsx)(c.A, {
                        fallbackImage:
                            "https://cdn.discordapp.com/assets/content/3ce3d676b7d77ce5184982326720c020ad6ba69d47068473e0096a62472a81d6.png",
                        className: f.d9,
                        children: (0, l.jsx)("source", { src: g }),
                    }),
                    (0, l.jsx)(u.A, {
                        user: I,
                        isHighlighted: !0,
                        nameplate: null,
                        nameplateData: I.nameplate,
                        className: f.M4,
                        nameplatePreviewSize: "large",
                        pendingDisplayNameStyles: A?.displayNameStyles,
                        pendingAvatar: A?.avatar,
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: f.FS, children: n }),
            !S &&
                (0, l.jsx)("div", {
                    className: f.qr,
                    children: (0, l.jsx)(s.$, {
                        variant: "expressive",
                        fullWidth: !0,
                        text: i,
                        onClick: y,
                        loading: E,
                    }),
                }),
        ],
    });
};
