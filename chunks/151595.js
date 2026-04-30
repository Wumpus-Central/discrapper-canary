s.d(t, { A: () => g });
var n = s(627968),
    l = s(284009),
    i = s.n(l),
    a = s(17928),
    r = s(821609),
    C = s(534514),
    c = s(344346),
    d = s(303136),
    L = s(287809),
    H = s(676279),
    M = s(659746),
    u = s(375708),
    o = s(521916);
let g = (e) => {
    let { type: t, text: s, buttonText: l, buttonLoading: g, hideClose: h, onClose: p } = e,
        E = (0, a.bG)([L.default], () => {
            let e = L.default.getCurrentUser();
            return i()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        m = (0, H.TM)()
            ? "https://cdn.discordapp.com/assets/content/239903eff27463f888314f6f702385c58dc4f6ef0e8e1a999e0c1051d86f2f11.mov"
            : "https://cdn.discordapp.com/assets/content/2688d55b4d0db6d6e603fdc61131d6e8d8c691bd159952078f166ea177fc970b.webm",
        N = ((e) => {
            switch (e) {
                case M.Or.PREMIUM_UPDATED:
                    return u.intl.string(u.t["75Wt0E"]);
                case M.Or.PREMIUM_ACTIVATED:
                    return u.intl.string(u.t.QWljxE);
                default:
                    return u.intl.string(u.t.X79Az5);
            }
        })(t);
    return (0, n.jsxs)("div", {
        className: o.kL,
        children: [
            (0, n.jsx)(C.D, { className: o.wx, variant: "display-md", color: "text-strong", children: N }),
            (0, n.jsxs)("div", {
                className: o.Dz,
                children: [
                    (0, n.jsx)(d.A, {
                        fallbackImage:
                            "https://cdn.discordapp.com/assets/content/3ce3d676b7d77ce5184982326720c020ad6ba69d47068473e0096a62472a81d6.png",
                        className: o.d9,
                        children: (0, n.jsx)("source", { src: m }),
                    }),
                    (0, n.jsx)(c.A, {
                        user: E,
                        isHighlighted: !0,
                        nameplate: null,
                        nameplateData: E.nameplate,
                        className: o.M4,
                        nameplatePreviewSize: "large",
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: o.FS, children: s }),
            !h &&
                (0, n.jsx)("div", {
                    className: o.qr,
                    children: (0, n.jsx)(r.$, {
                        variant: "expressive",
                        fullWidth: !0,
                        text: l,
                        onClick: p,
                        loading: g,
                    }),
                }),
        ],
    });
};
