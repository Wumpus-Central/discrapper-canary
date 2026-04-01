"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    s = n(773690),
    a = n(532114),
    o = n(158954),
    l = n(311907),
    u = n(133636),
    c = n(91299),
    d = n(275106),
    _ = n(178090),
    f = n(346640),
    p = n(429311),
    h = n(985018),
    m = n(365321),
    E = n(983266),
    g = n(354298),
    A = n(915318),
    I = n(862624);
let T = 10,
    S = 20;
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, o.zhh)({
        from: { x: 0, scaleX: t ? -1 : 1 },
        to: async (n) => {
            for (;;)
                await n({ x: (e ? S : T) * (t ? 1 : -1), scaleX: t ? -1 : 1 }), await n({ x: 0, scaleX: t ? -1 : 1 });
        },
        config: e ? s.config.default : s.config.slow,
    });
}
function v(e) {
    let { setScreen: t } = e,
        { combatClass: n, craftingClass: o } = (0, l.cf)([u.A], () => ({
            combatClass: u.A.getCombatClass(),
            craftingClass: u.A.getCraftingClass(),
        })),
        T = null != n && null != o,
        [S, v] = (0, i.useState)(!1),
        C = (0, i.useCallback)(() => {
            t(T ? f.Q0.MAIN : f.Q0.INTRO);
        }, [t, T]),
        N = () => v(!0),
        R = () => v(!1),
        O = y(S),
        b = y(S, !0);
    return (0, r.jsxs)("div", {
        className: m.kL,
        children: [
            (0, r.jsx)("img", { src: E.A, alt: "", className: m.m9 }),
            (0, r.jsx)("img", { src: g.A, alt: h.intl.string(p.default.UnXoXM), className: m.wm }),
            (0, r.jsxs)(c.A, {
                onClick: C,
                onMouseEnter: N,
                onMouseLeave: R,
                clickSound: a.A,
                className: m.Xk,
                children: [
                    (0, r.jsx)(s.animated.img, { src: A.A, alt: "", className: m.Wn, style: O }),
                    (0, r.jsx)(_.A, {
                        className: m.qK,
                        variant: "heading-xxl/normal",
                        children: h.intl.string(T ? p.default["9B9905"] : p.default["fzcc/k"]),
                    }),
                    (0, r.jsx)(s.animated.img, { src: A.A, alt: "", className: m.Wn, style: b }),
                ],
            }),
            (0, r.jsxs)(d.A, {
                className: m.Qs,
                children: [
                    (0, r.jsx)(_.A, {
                        variant: "heading-xxl/normal",
                        className: m.eu,
                        children: h.intl.string(p.default["5RiarY"]),
                    }),
                    (0, r.jsx)(_.A, { variant: "text-lg/normal", children: h.intl.string(p.default.Zq3lEi) }),
                ],
            }),
            (0, r.jsx)("img", { src: I.A, alt: "", className: m.Yp }),
        ],
    });
}
