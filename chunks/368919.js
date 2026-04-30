"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(508425),
    l = n(559949),
    _ = n(17928),
    d = n(36075),
    u = n(602853),
    c = n(661531),
    E = n(614820),
    h = n(775602),
    m = n(310784),
    f = n.n(m),
    g = n(998304),
    A = n(383197),
    I = n(824994),
    p = n(922301),
    T = n(945096);
let S = "--custom-display-name-styles-main-color";
var N = n(73392),
    O = n(875358);
let R = [l.x.CHERRY_BOMB, l.x.CHICLE],
    C = r.memo(function (e) {
        let {
                userName: t,
                displayNameStyles: n,
                effectDisplayType: s = p.G.STATIC,
                inProfile: l = !1,
                textClassName: m,
                loop: C = !1,
                shouldWrap: y = !1,
                boldFontOpacity: D = 1,
                shouldUnderlineOnHover: L = !1,
                appendedInlineContent: v,
            } = e,
            w = (0, N.a)({ displayNameStyles: n }),
            { useReducedMotion: P } = (0, _.cf)([h.A], () => ({ useReducedMotion: h.A.useReducedMotion })),
            b = (0, I.W)({ location: "UserNameWithEffects" }),
            k = (0, u.r)(c.A.colors.BACKGROUND_BASE_LOW).hex(),
            U = n?.effectId ?? o.z.SOLID,
            M = (0, E.O)(t),
            G = (0, d.CR)(M, U === o.z.TOON ? O.Zg : void 0),
            x = (function (e) {
                let { displayNameStyles: t, backgroundColor: n } = e,
                    i = (0, _.bG)([h.A], () => (h.A.desaturateUserColors ? h.A.saturation : 1)),
                    s = t?.effectId ?? o.z.SOLID,
                    a = (0, A._)(s);
                return r.useMemo(
                    () =>
                        null == t
                            ? []
                            : t.colors.map((e) =>
                                  (0, g.lZ)({
                                      foreground: f()(e),
                                      background: s === o.z.TOON ? f()("#333") : f()(n),
                                      ratio: a.minContrastRatio,
                                      saturationFactor: i,
                                  }).hex(),
                              ),
                    [t, s, a.minContrastRatio, i, n],
                );
            })({ displayNameStyles: b ? n : null, backgroundColor: k });
        if (!b || null == n) return (0, i.jsxs)(i.Fragment, { children: [t, " ", v] });
        let V = (function (e, t) {
                let { shouldWrap: n = !1, fontOpacity: i = 1 } =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = {};
                switch (e) {
                    case o.z.GRADIENT:
                    case o.z.GLOW:
                        r =
                            0 === t.length
                                ? {}
                                : {
                                      "--custom-display-name-styles-gradient-start-color": t[0],
                                      "--custom-display-name-styles-gradient-end-color": t.length > 1 ? t[1] : t[0],
                                      [S]: t[0],
                                  };
                        break;
                    case o.z.NEON:
                    case o.z.POP:
                    case o.z.TOON:
                    case o.z.SOLID:
                    default:
                        t.length > 0 &&
                            (r = (function (e) {
                                let {
                                    main: t,
                                    light1: n,
                                    light2: i,
                                    dark1: r,
                                    dark2: s,
                                    toonStroke: a,
                                    neonStroke: o,
                                } = (0, T.$0)(e);
                                return {
                                    [S]: t,
                                    "--custom-display-name-styles-light-1-color": n,
                                    "--custom-display-name-styles-light-2-color": i,
                                    "--custom-display-name-styles-dark-1-color": r,
                                    "--custom-display-name-styles-dark-2-color": s,
                                    "--custom-display-name-styles-toon-stroke-color": a,
                                    "--custom-display-name-styles-neon-stroke-color": o,
                                };
                            })(t[0]));
                }
                return {
                    ...r,
                    "--custom-display-name-styles-wrap": n ? "wrap" : "nowrap",
                    "--custom-display-name-styles-font-opacity": i,
                };
            })(U, x, { shouldWrap: y, fontOpacity: R.includes(n.fontId) ? D : 1 }),
            F = (function (e) {
                switch (e) {
                    case o.z.GRADIENT:
                    case o.z.GLOW:
                        return { effectClassName: O.D7 };
                    case o.z.NEON:
                        return { effectClassName: O.lw, glowClassName: O._4 };
                    case o.z.TOON:
                        return { effectClassName: O.lQ };
                    case o.z.POP:
                        return { effectClassName: O.uY };
                    case o.z.SOLID:
                    default:
                        return { effectClassName: O.QJ };
                }
            })(U),
            B = (0, i.jsxs)("div", {
                className: a()(O.kL, w, m, {
                    [O.rD]: s !== p.G.PLAIN,
                    [O.CS]: s === p.G.ANIMATED && !P,
                    [O.HW]: C,
                    [O.$E]: l,
                    [O.Tn]: null != v,
                }),
                style: V,
                children: [
                    (0, i.jsx)("span", {
                        "data-username-with-effects": M,
                        className: a()(O.WH, F?.effectClassName, { [O._W]: L }),
                        children: G,
                    }),
                    F?.glowClassName != null &&
                        (0, i.jsx)("span", {
                            className: a()(O.l1, O.WH, F.glowClassName),
                            "aria-hidden": !0,
                            children: M,
                        }),
                ],
            });
        return null != v ? (0, i.jsxs)("div", { className: O.g8, children: [B, v] }) : B;
    });
