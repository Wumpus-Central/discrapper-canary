s.d(t, { A: () => H });
var l = s(627968),
    n = s(284009),
    i = s.n(n),
    a = s(17928),
    r = s(821609),
    d = s(534514),
    c = s(344346),
    C = s(303136),
    u = s(287809),
    o = s(676279),
    L = s(659746),
    g = s(375708),
    M = s(521916);
let H = (e) => {
    let { type: t, text: s, buttonText: n, buttonLoading: H, hideClose: m, onClose: h } = e,
        p = (0, a.bG)([u.default], () => {
            let e = u.default.getCurrentUser();
            return i()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        E = (0, o.TM)()
            ? "https://cdn.discordapp.com/assets/content/239903eff27463f888314f6f702385c58dc4f6ef0e8e1a999e0c1051d86f2f11.mov"
            : "https://cdn.discordapp.com/assets/content/2688d55b4d0db6d6e603fdc61131d6e8d8c691bd159952078f166ea177fc970b.webm",
        N = ((e) => {
            switch (e) {
                case L.Or.PREMIUM_UPDATED:
                    return g.intl.string(g.t["75Wt0E"]);
                case L.Or.PREMIUM_ACTIVATED:
                    return g.intl.string(g.t.QWljxE);
                default:
                    return g.intl.string(g.t.X79Az5);
            }
        })(t);
    return (0, l.jsxs)("div", {
        className: M.kL,
        children: [
            (0, l.jsx)(d.D, { className: M.wx, variant: "display-md", color: "text-strong", children: N }),
            (0, l.jsxs)("div", {
                className: M.Dz,
                children: [
                    (0, l.jsx)(C.A, {
                        fallbackImage:
                            "https://cdn.discordapp.com/assets/content/3ce3d676b7d77ce5184982326720c020ad6ba69d47068473e0096a62472a81d6.png",
                        className: M.d9,
                        children: (0, l.jsx)("source", { src: E }),
                    }),
                    (0, l.jsx)(c.A, {
                        user: p,
                        isHighlighted: !0,
                        nameplate: null,
                        nameplateData: p.nameplate,
                        className: M.M4,
                        nameplatePreviewSize: "large",
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: M.FS, children: s }),
            !m &&
                (0, l.jsx)("div", {
                    className: M.qr,
                    children: (0, l.jsx)(r.$, {
                        variant: "expressive",
                        fullWidth: !0,
                        text: n,
                        onClick: h,
                        loading: H,
                    }),
                }),
        ],
    });
};
