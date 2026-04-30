"use strict";
n.d(t, { A: () => v });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(508425),
    l = n(559949),
    u = n(17928),
    c = n(521100),
    d = n(602853),
    _ = n(661531),
    f = n(614820),
    h = n(775602),
    p = n(310784),
    E = n.n(p),
    m = n(998304),
    g = n(383197),
    A = n(824994),
    I = n(922301),
    T = n(945096);
let S = "--custom-display-name-styles-main-color";
var N = n(252545),
    y = n(875358);
let C = [l.x.CHERRY_BOMB, l.x.CHICLE],
    v = r.memo(function (e) {
        let {
                userName: t,
                displayNameStyles: n,
                effectDisplayType: s = I.G.STATIC,
                inProfile: l = !1,
                textClassName: p,
                loop: v = !1,
                shouldWrap: O = !1,
                boldFontOpacity: R = 1,
                shouldUnderlineOnHover: b = !1,
                appendedInlineContent: D,
            } = e,
            L = (0, N.a)({ displayNameStyles: n }),
            { useReducedMotion: w } = (0, u.cf)([h.A], () => ({ useReducedMotion: h.A.useReducedMotion })),
            M = (0, A.W)({ location: "UserNameWithEffects" }),
            P = (0, d.r)(_.A.colors.BACKGROUND_BASE_LOW).hex(),
            x = n?.effectId ?? o.z.SOLID,
            U = (0, f.O)(t),
            k = (0, c.CR)(U, x === o.z.TOON ? y.Zg : void 0),
            G = (function (e) {
                let { displayNameStyles: t, backgroundColor: n } = e,
                    i = (0, u.bG)([h.A], () => (h.A.desaturateUserColors ? h.A.saturation : 1)),
                    s = t?.effectId ?? o.z.SOLID,
                    a = (0, g._)(s);
                return r.useMemo(
                    () =>
                        null == t
                            ? []
                            : t.colors.map((e) =>
                                  (0, m.lZ)({
                                      foreground: E()(e),
                                      background: s === o.z.TOON ? E()("#333") : E()(n),
                                      ratio: a.minContrastRatio,
                                      saturationFactor: i,
                                  }).hex(),
                              ),
                    [t, s, a.minContrastRatio, i, n],
                );
            })({ displayNameStyles: M ? n : null, backgroundColor: P });
        if (!M || null == n) return (0, i.jsxs)(i.Fragment, { children: [t, " ", D] });
        let F = (function (e, t) {
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
            })(x, G, { shouldWrap: O, fontOpacity: C.includes(n.fontId) ? R : 1 }),
            V = (function (e) {
                switch (e) {
                    case o.z.GRADIENT:
                    case o.z.GLOW:
                        return { effectClassName: y.D7 };
                    case o.z.NEON:
                        return { effectClassName: y.lw, glowClassName: y._4 };
                    case o.z.TOON:
                        return { effectClassName: y.lQ };
                    case o.z.POP:
                        return { effectClassName: y.uY };
                    case o.z.SOLID:
                    default:
                        return { effectClassName: y.QJ };
                }
            })(x),
            B = (0, i.jsxs)("div", {
                className: a()(y.kL, L, p, {
                    [y.rD]: s !== I.G.PLAIN,
                    [y.CS]: s === I.G.ANIMATED && !w,
                    [y.HW]: v,
                    [y.$E]: l,
                    [y.Tn]: null != D,
                }),
                style: F,
                children: [
                    (0, i.jsx)("span", {
                        "data-username-with-effects": U,
                        className: a()(y.WH, V?.effectClassName, { [y._W]: b }),
                        children: k,
                    }),
                    V?.glowClassName != null &&
                        (0, i.jsx)("span", {
                            className: a()(y.l1, y.WH, V.glowClassName),
                            "aria-hidden": !0,
                            children: U,
                        }),
                ],
            });
        return null != D ? (0, i.jsxs)("div", { className: y.g8, children: [B, D] }) : B;
    });
