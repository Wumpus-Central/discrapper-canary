"use strict";
n.d(t, { A: () => O });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(508425),
    l = n(559949),
    d = n(17928),
    _ = n(36075),
    u = n(602853),
    c = n(661531),
    E = n(614820),
    h = n(775602),
    m = n(310784),
    f = n.n(m),
    g = n(998304),
    p = n(383197),
    A = n(824994),
    I = n(922301),
    T = n(945096);
let S = "--custom-display-name-styles-main-color";
var N = n(73392),
    C = n(875358);
let R = [l.x.CHERRY_BOMB, l.x.CHICLE],
    O = r.memo(function (e) {
        let {
                userName: t,
                displayNameStyles: n,
                effectDisplayType: s = I.G.STATIC,
                inProfile: l = !1,
                textClassName: m,
                loop: O = !1,
                shouldWrap: y = !1,
                boldFontOpacity: v = 1,
                shouldUnderlineOnHover: D = !1,
                appendedInlineContent: L,
            } = e,
            b = (0, N.a)({ displayNameStyles: n }),
            { useReducedMotion: w } = (0, d.cf)([h.A], () => ({ useReducedMotion: h.A.useReducedMotion })),
            P = (0, A.W)({ location: "UserNameWithEffects" }),
            k = (0, u.r)(c.A.colors.BACKGROUND_BASE_LOW).hex(),
            M = n?.effectId ?? o.z.SOLID,
            U = (0, E.O)(t),
            x = (0, _.CR)(U, M === o.z.TOON ? C.Zg : void 0),
            G = (function (e) {
                let { displayNameStyles: t, backgroundColor: n } = e,
                    i = (0, d.bG)([h.A], () => (h.A.desaturateUserColors ? h.A.saturation : 1)),
                    s = t?.effectId ?? o.z.SOLID,
                    a = (0, p._)(s);
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
            })({ displayNameStyles: P ? n : null, backgroundColor: k });
        if (!P || null == n) return (0, i.jsxs)(i.Fragment, { children: [t, " ", L] });
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
            })(M, G, { shouldWrap: y, fontOpacity: R.includes(n.fontId) ? v : 1 }),
            F = (function (e) {
                switch (e) {
                    case o.z.GRADIENT:
                    case o.z.GLOW:
                        return { effectClassName: C.D7 };
                    case o.z.NEON:
                        return { effectClassName: C.lw, glowClassName: C._4 };
                    case o.z.TOON:
                        return { effectClassName: C.lQ };
                    case o.z.POP:
                        return { effectClassName: C.uY };
                    case o.z.SOLID:
                    default:
                        return { effectClassName: C.QJ };
                }
            })(M),
            B = (0, i.jsxs)("div", {
                className: a()(C.kL, b, m, {
                    [C.rD]: s !== I.G.PLAIN,
                    [C.CS]: s === I.G.ANIMATED && !w,
                    [C.HW]: O,
                    [C.$E]: l,
                    [C.Tn]: null != L,
                }),
                style: V,
                children: [
                    (0, i.jsx)("span", {
                        "data-username-with-effects": U,
                        className: a()(C.WH, F?.effectClassName, { [C._W]: D }),
                        children: x,
                    }),
                    F?.glowClassName != null &&
                        (0, i.jsx)("span", {
                            className: a()(C.l1, C.WH, F.glowClassName),
                            "aria-hidden": !0,
                            children: U,
                        }),
                ],
            });
        return null != L ? (0, i.jsxs)("div", { className: C.g8, children: [B, L] }) : B;
    });
