"use strict";
n.d(t, { A: () => L });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(508425),
    l = n(559949),
    u = n(17928),
    c = n(36075),
    d = n(602853),
    _ = n(661531),
    h = n(614820),
    f = n(775602),
    p = n(248778),
    E = n(945096),
    m = n(310784),
    g = n.n(m),
    A = n(998304),
    I = n(898985),
    T = n(824994),
    S = n(922301);
let y = "--custom-display-name-styles-main-color";
var C = n(308050),
    N = n(912051),
    v = n(564039);
function R(e) {
    let { name: t, emojiClassName: n, colors: s } = e,
        a = r.useMemo(() => {
            let e = (0, C.A)(),
                r = 0;
            return (0, N.p)(t).map((t, a) => {
                e.lastIndex = 0;
                let o = e.test(t),
                    l = !o && t.trim().length > 0,
                    u = null != s && s.length > 0 && l ? s[r % s.length] : void 0;
                return (
                    l && r++,
                    (0, i.jsx)(
                        "span",
                        { className: o ? n : void 0, style: null != u ? { color: u } : void 0, children: t },
                        a,
                    )
                );
            });
        }, [t, s, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("span", { className: v.Q, children: t }),
            (0, i.jsx)("span", { "aria-hidden": !0, children: a }),
        ],
    });
}
var O = n(73392),
    b = n(875358);
let D = [l.x.CHERRY_BOMB, l.x.CHICLE],
    L = r.memo(function (e) {
        let {
                userName: t,
                displayNameStyles: n,
                effectDisplayType: s = S.G.STATIC,
                inProfile: l = !1,
                textClassName: m,
                loop: C = !1,
                shouldWrap: N = !1,
                boldFontOpacity: v = 1,
                shouldUnderlineOnHover: L = !1,
                appendedInlineContent: w,
            } = e,
            M = (0, p.DW)("UserNameWithEffects"),
            P = (0, E.sx)(n, M),
            x = (0, O.a)({ displayNameStyles: P }),
            { useReducedMotion: k } = (0, u.cf)([f.Ay], () => ({ useReducedMotion: f.Ay.useReducedMotion })),
            U = (0, T.W)({ location: "UserNameWithEffects" }),
            G = (0, d.r)(_.A.colors.BACKGROUND_BASE_LOW).hex(),
            F = P?.effectId ?? o.z.SOLID,
            V = (0, h.O)(t),
            B = (0, c.CR)(V, F === o.z.TOON ? b.Zg : void 0),
            j = (function (e) {
                let { displayNameStyles: t, backgroundColor: n } = e,
                    i = (0, u.bG)([f.Ay], () => (f.Ay.desaturateUserColors ? f.Ay.saturation : 1)),
                    s = t?.effectId ?? o.z.SOLID,
                    a = (0, I._)(s);
                return r.useMemo(
                    () =>
                        null == t
                            ? []
                            : t.colors.map((e) =>
                                  (0, A.lZ)({
                                      foreground: g()(e),
                                      background: s === o.z.TOON ? g()("#333") : g()(n),
                                      ratio: a.minContrastRatio,
                                      saturationFactor: i,
                                  }).hex(),
                              ),
                    [t, s, a.minContrastRatio, i, n],
                );
            })({ displayNameStyles: U ? P : null, backgroundColor: G });
        if (!U || null == P) return (0, i.jsxs)(i.Fragment, { children: [t, " ", w] });
        let H = (function (e, t) {
                let { shouldWrap: n = !1, fontOpacity: i = 1 } =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = {};
                switch (e) {
                    case o.z.GRADIENT:
                    case o.z.GLOW:
                    case o.z.PRISM:
                        var s;
                        r =
                            0 === (s = t).length
                                ? {}
                                : {
                                      "--custom-display-name-styles-gradient-stops":
                                          1 === s.length
                                              ? `${s[0]}, ${s[0]}`
                                              : s.map((e, t) => `${e} ${10 + (80 * t) / (s.length - 1)}%`).join(", "),
                                      [y]: s[0],
                                  };
                        break;
                    case o.z.GUMMY:
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
                                } = (0, E.$0)(e);
                                return {
                                    [y]: t,
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
            })(F, j, { shouldWrap: N, fontOpacity: D.includes(P.fontId) ? v : 1 }),
            Y = (function (e) {
                switch (e) {
                    case o.z.GRADIENT:
                    case o.z.GLOW:
                    case o.z.PRISM:
                        return b.D7;
                    case o.z.NEON:
                        return b.lw;
                    case o.z.TOON:
                        return b.lQ;
                    case o.z.POP:
                        return b.uY;
                    case o.z.GUMMY:
                        return;
                    case o.z.SOLID:
                    default:
                        return b.QJ;
                }
            })(F),
            W = s !== S.G.PLAIN,
            K = (0, i.jsx)("div", {
                className: a()(b.kL, x, m, {
                    [b.rD]: W,
                    [b.CS]: s === S.G.ANIMATED && !k,
                    [b.HW]: C,
                    [b.$E]: l,
                    [b.Tn]: null != w,
                }),
                style: H,
                children: (0, i.jsx)("span", {
                    "data-username-with-effects": V,
                    className: a()(b.WH, Y, { [b._W]: L }),
                    children:
                        F === o.z.GUMMY
                            ? (0, i.jsx)(R, { name: V ?? "", emojiClassName: b.Zg, colors: W ? j : void 0 })
                            : B,
                }),
            });
        return null != w ? (0, i.jsxs)("div", { className: b.g8, children: [K, w] }) : K;
    });
