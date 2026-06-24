"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    r = n(284009),
    s = n.n(r),
    a = n(17928),
    o = n(821609),
    l = n(534514),
    u = n(344346),
    c = n(303136),
    d = n(287809),
    _ = n(676279),
    h = n(659746),
    f = n(375708),
    p = n(521916);
let E = function (e) {
    let { type: t, text: n, buttonText: r, buttonLoading: E, hideClose: m, onClose: g } = e,
        A = (0, a.bG)([d.default], () => {
            let e = d.default.getCurrentUser();
            return s()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        I = (0, _.TM)()
            ? "https://cdn.discordapp.com/assets/content/239903eff27463f888314f6f702385c58dc4f6ef0e8e1a999e0c1051d86f2f11.mov"
            : "https://cdn.discordapp.com/assets/content/2688d55b4d0db6d6e603fdc61131d6e8d8c691bd159952078f166ea177fc970b.webm",
        T = (function (e) {
            switch (e) {
                case h.Or.PREMIUM_UPDATED:
                    return f.intl.string(f.t["75Wt0E"]);
                case h.Or.PREMIUM_ACTIVATED:
                    return f.intl.string(f.t.QWljxE);
                default:
                    return f.intl.string(f.t.X79Az5);
            }
        })(t);
    return (0, i.jsxs)("div", {
        className: p.kL,
        children: [
            (0, i.jsx)(l.D, { className: p.wx, variant: "display-md", color: "text-strong", children: T }),
            (0, i.jsxs)("div", {
                className: p.Dz,
                children: [
                    (0, i.jsx)(c.A, {
                        fallbackImage:
                            "https://cdn.discordapp.com/assets/content/3ce3d676b7d77ce5184982326720c020ad6ba69d47068473e0096a62472a81d6.png",
                        className: p.d9,
                        children: (0, i.jsx)("source", { src: I }),
                    }),
                    (0, i.jsx)(u.A, {
                        user: A,
                        isHighlighted: !0,
                        nameplate: null,
                        nameplateData: A.nameplate,
                        className: p.M4,
                        nameplatePreviewSize: "large",
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: p.FS, children: n }),
            !m &&
                (0, i.jsx)("div", {
                    className: p.qr,
                    children: (0, i.jsx)(o.$, {
                        variant: "expressive",
                        fullWidth: !0,
                        text: r,
                        onClick: g,
                        loading: E,
                    }),
                }),
        ],
    });
};
