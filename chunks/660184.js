"use strict";
n.d(t, { A: () => D });
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
    p = n(310784),
    E = n.n(p),
    m = n(998304),
    g = n(383197),
    A = n(824994),
    I = n(922301),
    T = n(945096);
let S = "--custom-display-name-styles-main-color";
var y = n(308050),
    C = n(912051),
    N = n(564039);
function v(e) {
    let { name: t, emojiClassName: n, colors: s } = e,
        a = r.useMemo(() => {
            let e = (0, y.A)(),
                r = 0;
            return (0, C.p)(t).map((t, a) => {
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
            (0, i.jsx)("span", { className: N.Q, children: t }),
            (0, i.jsx)("span", { "aria-hidden": !0, children: a }),
        ],
    });
}
var R = n(73392),
    O = n(875358);
let b = [l.x.CHERRY_BOMB, l.x.CHICLE],
    D = r.memo(function (e) {
        let {
                userName: t,
                displayNameStyles: n,
                effectDisplayType: s = I.G.STATIC,
                inProfile: l = !1,
                textClassName: p,
                loop: y = !1,
                shouldWrap: C = !1,
                boldFontOpacity: N = 1,
                shouldUnderlineOnHover: D = !1,
                appendedInlineContent: L,
            } = e,
            w = (0, R.a)({ displayNameStyles: n }),
            { useReducedMotion: M } = (0, u.cf)([f.Ay], () => ({ useReducedMotion: f.Ay.useReducedMotion })),
            P = (0, A.W)({ location: "UserNameWithEffects" }),
            x = (0, d.r)(_.A.colors.BACKGROUND_BASE_LOW).hex(),
            k = n?.effectId ?? o.z.SOLID,
            U = (0, h.O)(t),
            G = (0, c.CR)(U, k === o.z.TOON ? O.Zg : void 0),
            F = (function (e) {
                let { displayNameStyles: t, backgroundColor: n } = e,
                    i = (0, u.bG)([f.Ay], () => (f.Ay.desaturateUserColors ? f.Ay.saturation : 1)),
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
            })({ displayNameStyles: P ? n : null, backgroundColor: x }).slice(0, 2);
        if (!P || null == n) return (0, i.jsxs)(i.Fragment, { children: [t, " ", L] });
        let V = (function (e, t) {
                let { shouldWrap: n = !1, fontOpacity: i = 1 } =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = {};
                switch (e) {
                    case o.z.GRADIENT:
                    case o.z.GLOW:
                    case o.z.PRISM:
                        r =
                            0 === t.length
                                ? {}
                                : {
                                      "--custom-display-name-styles-gradient-start-color": t[0],
                                      "--custom-display-name-styles-gradient-end-color": t.length > 1 ? t[1] : t[0],
                                      [S]: t[0],
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
            })(k, F, { shouldWrap: C, fontOpacity: b.includes(n.fontId) ? N : 1 }),
            B = (function (e) {
                switch (e) {
                    case o.z.GRADIENT:
                    case o.z.GLOW:
                    case o.z.PRISM:
                        return O.D7;
                    case o.z.NEON:
                        return O.lw;
                    case o.z.TOON:
                        return O.lQ;
                    case o.z.POP:
                        return O.uY;
                    case o.z.GUMMY:
                        return;
                    case o.z.SOLID:
                    default:
                        return O.QJ;
                }
            })(k),
            j = s !== I.G.PLAIN,
            H = (0, i.jsx)("div", {
                className: a()(O.kL, w, p, {
                    [O.rD]: j,
                    [O.CS]: s === I.G.ANIMATED && !M,
                    [O.HW]: y,
                    [O.$E]: l,
                    [O.Tn]: null != L,
                }),
                style: V,
                children: (0, i.jsx)("span", {
                    "data-username-with-effects": U,
                    className: a()(O.WH, B, { [O._W]: D }),
                    children:
                        k === o.z.GUMMY
                            ? (0, i.jsx)(v, { name: U ?? "", emojiClassName: O.Zg, colors: j ? F : void 0 })
                            : G,
                }),
            });
        return null != L ? (0, i.jsxs)("div", { className: O.g8, children: [H, L] }) : H;
    });
