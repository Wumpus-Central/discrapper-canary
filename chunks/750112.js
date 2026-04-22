"use strict";
n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(508425),
    l = n(559949),
    u = n(311907),
    d = n(36075),
    c = n(602853),
    _ = n(827734),
    f = n(614820),
    E = n(775602),
    h = n(816395),
    p = n(824994),
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
                shouldUnderlineOnHover: O = !1,
                appendedInlineContent: R,
            } = e,
            v = (0, A.a)({ displayNameStyles: n }),
            { useReducedMotion: C } = (0, u.cf)([E.A], () => ({ useReducedMotion: E.A.useReducedMotion })),
            b = (0, p.W)({ location: "UserNameWithEffects" }),
            D = (0, c.r)(_.A.colors.BACKGROUND_BASE_LOW).hex(),
            L = n?.effectId ?? o.z.SOLID,
            w = (0, f.O)(t),
            M = (0, d.CR)(w, L === o.z.TOON ? I.Zg : void 0),
            P = (0, h.H)({ displayNameStyles: b ? n : null, backgroundColor: D });
        if (!b || null == n) return (0, r.jsxs)(r.Fragment, { children: [t, " ", R] });
        let U = (0, g.P)(L, P, { shouldWrap: y, fontOpacity: T.includes(n.fontId) ? N : 1 }),
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
            x = (0, r.jsxs)("div", {
                className: a()(I.kL, v, l, {
                    [I.rD]: i !== m.G.PLAIN,
                    [I.CS]: i === m.G.ANIMATED && !C,
                    [I.HW]: S,
                    [I.$E]: s,
                    [I.Tn]: null != R,
                }),
                style: U,
                children: [
                    (0, r.jsx)("span", {
                        "data-username-with-effects": w,
                        className: a()(I.WH, k?.effectClassName, { [I._W]: O }),
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
        return null != R ? (0, r.jsxs)("div", { className: I.g8, children: [x, R] }) : x;
    });
