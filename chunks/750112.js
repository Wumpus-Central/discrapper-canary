"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(73392),
    E = n(564515);
let A = [l.x.CHERRY_BOMB, l.x.CHICLE],
    I = i.memo(function (e) {
        let {
                userName: t,
                displayNameStyles: n,
                effectDisplayType: i = h.G.STATIC,
                inProfile: a = !1,
                textClassName: l,
                loop: I = !1,
                shouldWrap: y = !1,
                boldFontOpacity: S = 1,
                shouldUnderlineOnHover: v = !1,
            } = e,
            C = (0, g.a)({ displayNameStyles: n }),
            { useReducedMotion: b } = (0, u.cf)([_.A], () => ({ useReducedMotion: _.A.useReducedMotion })),
            N = (0, p.W)({ location: "UserNameWithEffects" }),
            R = (0, d.rdh)(d.LU0.colors.BACKGROUND_BASE_LOW).hex(),
            O = n?.effectId ?? o.z.SOLID,
            D = (0, d.Oer)(t),
            L = (0, c.CR)(D, O === o.z.TOON ? E.Zg : void 0),
            w = (0, f.H)({ displayNameStyles: N ? n : null, backgroundColor: R });
        if (!N || null == n) return t;
        let x = (0, m.P)(O, w, { shouldWrap: y, fontOpacity: A.includes(n.fontId) ? S : 1 }),
            P = T(O);
        return (0, r.jsxs)("div", {
            className: s()(E.kL, C, l, {
                [E.rD]: i !== h.G.PLAIN,
                [E.CS]: i === h.G.ANIMATED && !b,
                [E.HW]: I,
                [E.$E]: a,
            }),
            style: x,
            children: [
                (0, r.jsx)("span", {
                    "data-username-with-effects": D,
                    className: s()(E.WH, P?.effectClassName, { [E._W]: v }),
                    children: L,
                }),
                P?.glowClassName != null &&
                    (0, r.jsx)("span", { className: s()(E.l1, E.WH, P.glowClassName), "aria-hidden": !0, children: D }),
            ],
        });
    });
function T(e) {
    switch (e) {
        case o.z.GRADIENT:
        case o.z.GLOW:
            return { effectClassName: E.D7 };
        case o.z.NEON:
            return { effectClassName: E.lw, glowClassName: E._4 };
        case o.z.TOON:
            return { effectClassName: E.lQ };
        case o.z.POP:
            return { effectClassName: E.uY };
        case o.z.SOLID:
        default:
            return { effectClassName: E.QJ };
    }
}
