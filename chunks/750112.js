"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(508425),
    l = n(559949),
    u = n(311907),
    c = n(36075),
    d = n(397927),
    _ = n(775602),
    f = n(816395),
    p = n(824994),
    h = n(922301),
    m = n(566492),
    E = n(73392),
    g = n(564515);
let A = [l.x.CHERRY_BOMB, l.x.CHICLE],
    I = i.memo(function (e) {
        let {
                userName: t,
                displayNameStyles: n,
                effectDisplayType: i = h.G.STATIC,
                inProfile: s = !1,
                textClassName: l,
                loop: I = !1,
                shouldWrap: S = !1,
                boldFontOpacity: y = 1,
                shouldUnderlineOnHover: v = !1,
                appendedInlineContent: N,
            } = e,
            C = (0, E.a)({ displayNameStyles: n }),
            { useReducedMotion: R } = (0, u.cf)([_.A], () => ({ useReducedMotion: _.A.useReducedMotion })),
            O = (0, p.W)({ location: "UserNameWithEffects" }),
            b = (0, d.rdh)(d.LU0.colors.BACKGROUND_BASE_LOW).hex(),
            D = n?.effectId ?? o.z.SOLID,
            L = (0, d.Oer)(t),
            w = (0, c.CR)(L, D === o.z.TOON ? g.Zg : void 0),
            M = (0, f.H)({ displayNameStyles: O ? n : null, backgroundColor: b });
        if (!O || null == n) return (0, r.jsxs)(r.Fragment, { children: [t, " ", N] });
        let x = (0, m.P)(D, M, { shouldWrap: S, fontOpacity: A.includes(n.fontId) ? y : 1 }),
            P = T(D),
            k = (0, r.jsxs)("div", {
                className: a()(g.kL, C, l, {
                    [g.rD]: i !== h.G.PLAIN,
                    [g.CS]: i === h.G.ANIMATED && !R,
                    [g.HW]: I,
                    [g.$E]: s,
                    [g.Tn]: null != N,
                }),
                style: x,
                children: [
                    (0, r.jsx)("span", {
                        "data-username-with-effects": L,
                        className: a()(g.WH, P?.effectClassName, { [g._W]: v }),
                        children: w,
                    }),
                    P?.glowClassName != null &&
                        (0, r.jsx)("span", {
                            className: a()(g.l1, g.WH, P.glowClassName),
                            "aria-hidden": !0,
                            children: L,
                        }),
                ],
            });
        return null != N ? (0, r.jsxs)("div", { className: g.g8, children: [k, N] }) : k;
    });
function T(e) {
    switch (e) {
        case o.z.GRADIENT:
        case o.z.GLOW:
            return { effectClassName: g.D7 };
        case o.z.NEON:
            return { effectClassName: g.lw, glowClassName: g._4 };
        case o.z.TOON:
            return { effectClassName: g.lQ };
        case o.z.POP:
            return { effectClassName: g.uY };
        case o.z.SOLID:
        default:
            return { effectClassName: g.QJ };
    }
}
