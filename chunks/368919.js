"use strict";
n.d(t, { A: () => C });
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
    h = n(614820),
    f = n(775602),
    p = n(310784),
    E = n.n(p),
    m = n(998304),
    g = n(383197),
    A = n(824994),
    I = n(922301),
    T = n(945096);
let S = "--custom-display-name-styles-main-color";
var y = n(73392),
    N = n(875358);
let v = [l.x.CHERRY_BOMB, l.x.CHICLE],
    C = r.memo(function (e) {
        let {
                userName: t,
                displayNameStyles: n,
                effectDisplayType: s = I.G.STATIC,
                inProfile: l = !1,
                textClassName: p,
                loop: C = !1,
                shouldWrap: R = !1,
                boldFontOpacity: O = 1,
                shouldUnderlineOnHover: b = !1,
                appendedInlineContent: D,
            } = e,
            L = (0, y.a)({ displayNameStyles: n }),
            { useReducedMotion: w } = (0, u.cf)([f.A], () => ({ useReducedMotion: f.A.useReducedMotion })),
            M = (0, A.W)({ location: "UserNameWithEffects" }),
            P = (0, d.r)(_.A.colors.BACKGROUND_BASE_LOW).hex(),
            x = n?.effectId ?? o.z.SOLID,
            k = (0, h.O)(t),
            U = (0, c.CR)(k, x === o.z.TOON ? N.Zg : void 0),
            G = (function (e) {
                let { displayNameStyles: t, backgroundColor: n } = e,
                    i = (0, u.bG)([f.A], () => (f.A.desaturateUserColors ? f.A.saturation : 1)),
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
            })(x, G, { shouldWrap: R, fontOpacity: v.includes(n.fontId) ? O : 1 }),
            V = (function (e) {
                switch (e) {
                    case o.z.GRADIENT:
                    case o.z.GLOW:
                        return N.D7;
                    case o.z.NEON:
                        return N.lw;
                    case o.z.TOON:
                        return N.lQ;
                    case o.z.POP:
                        return N.uY;
                    case o.z.SOLID:
                    default:
                        return N.QJ;
                }
            })(x),
            B = (0, i.jsx)("div", {
                className: a()(N.kL, L, p, {
                    [N.rD]: s !== I.G.PLAIN,
                    [N.CS]: s === I.G.ANIMATED && !w,
                    [N.HW]: C,
                    [N.$E]: l,
                    [N.Tn]: null != D,
                }),
                style: F,
                children: (0, i.jsx)("span", {
                    "data-username-with-effects": k,
                    className: a()(N.WH, V, { [N._W]: b }),
                    children: U,
                }),
            });
        return null != D ? (0, i.jsxs)("div", { className: N.g8, children: [B, D] }) : B;
    });
