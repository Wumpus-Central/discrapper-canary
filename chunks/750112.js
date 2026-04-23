"use strict";
n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(508425),
    l = n(559949),
    u = n(311907),
    c = n(36075),
    d = n(602853),
    _ = n(827734),
    f = n(614820),
    p = n(775602),
    h = n(816395),
    E = n(824994),
    m = n(922301),
    g = n(566492),
    A = n(73392),
    I = n(875358);
let T = [l.x.CHERRY_BOMB, l.x.CHICLE],
    S = i.memo(function (e) {
        let {
                userName: t,
                displayNameStyles: n,
                effectDisplayType: i = m.G.STATIC,
                inProfile: s = !1,
                textClassName: l,
                loop: S = !1,
                shouldWrap: y = !1,
                boldFontOpacity: N = 1,
                shouldUnderlineOnHover: v = !1,
                appendedInlineContent: C,
            } = e,
            O = (0, A.a)({ displayNameStyles: n }),
            { useReducedMotion: R } = (0, u.cf)([p.A], () => ({ useReducedMotion: p.A.useReducedMotion })),
            b = (0, E.W)({ location: "UserNameWithEffects" }),
            D = (0, d.r)(_.A.colors.BACKGROUND_BASE_LOW).hex(),
            L = n?.effectId ?? o.z.SOLID,
            w = (0, f.O)(t),
            M = (0, c.CR)(w, L === o.z.TOON ? I.Zg : void 0),
            P = (0, h.H)({ displayNameStyles: b ? n : null, backgroundColor: D });
        if (!b || null == n) return (0, r.jsxs)(r.Fragment, { children: [t, " ", C] });
        let x = (0, g.P)(L, P, { shouldWrap: y, fontOpacity: T.includes(n.fontId) ? N : 1 }),
            k = (function (e) {
                switch (e) {
                    case o.z.GRADIENT:
                    case o.z.GLOW:
                        return { effectClassName: I.D7 };
                    case o.z.NEON:
                        return { effectClassName: I.lw, glowClassName: I._4 };
                    case o.z.TOON:
                        return { effectClassName: I.lQ };
                    case o.z.POP:
                        return { effectClassName: I.uY };
                    case o.z.SOLID:
                    default:
                        return { effectClassName: I.QJ };
                }
            })(L),
            U = (0, r.jsxs)("div", {
                className: a()(I.kL, O, l, {
                    [I.rD]: i !== m.G.PLAIN,
                    [I.CS]: i === m.G.ANIMATED && !R,
                    [I.HW]: S,
                    [I.$E]: s,
                    [I.Tn]: null != C,
                }),
                style: x,
                children: [
                    (0, r.jsx)("span", {
                        "data-username-with-effects": w,
                        className: a()(I.WH, k?.effectClassName, { [I._W]: v }),
                        children: M,
                    }),
                    k?.glowClassName != null &&
                        (0, r.jsx)("span", {
                            className: a()(I.l1, I.WH, k.glowClassName),
                            "aria-hidden": !0,
                            children: w,
                        }),
                ],
            });
        return null != C ? (0, r.jsxs)("div", { className: I.g8, children: [U, C] }) : U;
    });
