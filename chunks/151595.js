n.d(t, { A: () => M });
var s = n(627968),
    l = n(284009),
    i = n.n(l),
    a = n(17928),
    r = n(821609),
    d = n(534514),
    c = n(344346),
    u = n(303136),
    C = n(287809),
    o = n(676279),
    L = n(659746),
    m = n(375708),
    g = n(521916);
let M = function (e) {
    let { type: t, text: n, buttonText: l, buttonLoading: M, hideClose: H, onClose: h } = e,
        E = (0, a.bG)([C.default], () => {
            let e = C.default.getCurrentUser();
            return i()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        p = (0, o.TM)()
            ? "https://cdn.discordapp.com/assets/content/239903eff27463f888314f6f702385c58dc4f6ef0e8e1a999e0c1051d86f2f11.mov"
            : "https://cdn.discordapp.com/assets/content/2688d55b4d0db6d6e603fdc61131d6e8d8c691bd159952078f166ea177fc970b.webm",
        x = (function (e) {
            switch (e) {
                case L.Or.PREMIUM_UPDATED:
                    return m.intl.string(m.t["75Wt0E"]);
                case L.Or.PREMIUM_ACTIVATED:
                    return m.intl.string(m.t.QWljxE);
                default:
                    return m.intl.string(m.t.X79Az5);
            }
        })(t);
    return (0, s.jsxs)("div", {
        className: g.kL,
        children: [
            (0, s.jsx)(d.D, { className: g.wx, variant: "display-md", color: "text-strong", children: x }),
            (0, s.jsxs)("div", {
                className: g.Dz,
                children: [
                    (0, s.jsx)(u.A, {
                        fallbackImage:
                            "https://cdn.discordapp.com/assets/content/3ce3d676b7d77ce5184982326720c020ad6ba69d47068473e0096a62472a81d6.png",
                        className: g.d9,
                        children: (0, s.jsx)("source", { src: p }),
                    }),
                    (0, s.jsx)(c.A, {
                        user: E,
                        isHighlighted: !0,
                        nameplate: null,
                        nameplateData: E.nameplate,
                        className: g.M4,
                        nameplatePreviewSize: "large",
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: g.FS, children: n }),
            !H &&
                (0, s.jsx)("div", {
                    className: g.qr,
                    children: (0, s.jsx)(r.$, {
                        variant: "expressive",
                        fullWidth: !0,
                        text: l,
                        onClick: h,
                        loading: M,
                    }),
                }),
        ],
    });
};
