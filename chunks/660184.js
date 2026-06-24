"use strict";
n.d(t, { A: () => M });
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
    S = n(922301),
    y = n(750656);
let C = "--custom-display-name-styles-main-color";
n(321073);
var N = n(308050),
    v = n(912051),
    R = n(564039);
let O = (0, N.A)();
function b(e) {
    let { name: t, emojiClassName: n, letterClassName: s, wordClassName: a, colors: o } = e,
        l = r.useMemo(() => {
            let e = 0,
                r = 0,
                l = [],
                u = [],
                c = () => {
                    if (0 === u.length) return;
                    let e = u;
                    (u = []),
                        null != a
                            ? l.push((0, i.jsx)("span", { className: a, children: e }, `word-${l.length}`))
                            : l.push(...e);
                };
            return (
                (0, v.p)(t).forEach((t, a) => {
                    O.lastIndex = 0;
                    let d = O.test(t);
                    if (0 === t.trim().length) {
                        c(), l.push((0, i.jsx)("span", { children: t }, `space-${a}`));
                        return;
                    }
                    let _ = null != o && o.length > 0 && !d ? o[e % o.length] : void 0,
                        h = null != _ ? { color: _ } : void 0;
                    null == s || d || (h = { ...h, "--custom-letter-index": r }),
                        u.push((0, i.jsx)("span", { className: d ? n : s, style: h, children: t }, a)),
                        !d && (e++, r++);
                }),
                c(),
                l
            );
        }, [t, o, n, s, a]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("span", { className: R.Q, children: t }),
            (0, i.jsx)("span", { "aria-hidden": !0, children: l }),
        ],
    });
}
var D = n(73392),
    L = n(875358);
let w = [l.x.CHERRY_BOMB, l.x.CHICLE],
    M = r.memo(function (e) {
        let {
                userName: t,
                displayNameStyles: n,
                effectDisplayType: s = S.G.STATIC,
                inProfile: l = !1,
                textClassName: m,
                loop: N = !1,
                shouldWrap: v = !1,
                boldFontOpacity: R = 1,
                shouldUnderlineOnHover: O = !1,
                appendedInlineContent: M,
            } = e,
            P = (0, p.DW)("UserNameWithEffects"),
            x = (0, E.sx)(n, P),
            k = (0, D.a)({ displayNameStyles: x }),
            { useReducedMotion: U } = (0, u.cf)([f.Ay], () => ({ useReducedMotion: f.Ay.useReducedMotion })),
            G = (0, T.W)({ location: "UserNameWithEffects" }),
            F = (0, d.r)(_.A.colors.BACKGROUND_BASE_LOW).hex(),
            V = x?.effectId ?? o.z.SOLID,
            B = (0, h.O)(t),
            j = (0, c.CR)(B, V === o.z.TOON ? L.Zg : void 0),
            H = (function (e) {
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
            })({ displayNameStyles: G ? x : null, backgroundColor: F });
        if (!G || null == x) return (0, i.jsxs)(i.Fragment, { children: [t, " ", M] });
        let Y = (function (e, t) {
                var n, i, r;
                let {
                        shouldWrap: s = !1,
                        fontOpacity: a = 1,
                        nameLength: l = 0,
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    u = {};
                switch (e) {
                    case o.z.GRADIENT:
                    case o.z.GLOW:
                        u =
                            0 === (n = t).length
                                ? {}
                                : {
                                      "--custom-display-name-styles-gradient-stops":
                                          1 === n.length
                                              ? `${n[0]}, ${n[0]}`
                                              : n.map((e, t) => `${e} ${10 + (80 * t) / (n.length - 1)}%`).join(", "),
                                      [C]: n[0],
                                  };
                        break;
                    case o.z.PRISM:
                        (i = t),
                            (r = l),
                            (u =
                                0 === i.length
                                    ? {}
                                    : {
                                          "--custom-display-name-styles-prism-stops": Array.from(
                                              { length: i.length + 1 },
                                              (e, t) => `${i[t % i.length]} ${((100 * t) / i.length).toFixed(3)}%`,
                                          ).join(", "),
                                          "--custom-display-name-styles-prism-cycle": `max(${r}ch, ${y.LP}px)`,
                                          [C]: i[0],
                                      });
                        break;
                    case o.z.GUMMY:
                    case o.z.NEON:
                    case o.z.POP:
                    case o.z.TOON:
                    case o.z.SOLID:
                    default:
                        t.length > 0 &&
                            (u = (function (e) {
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
                                    [C]: t,
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
                    ...u,
                    "--custom-display-name-styles-wrap": s ? "wrap" : "nowrap",
                    "--custom-display-name-styles-font-opacity": a,
                };
            })(V, H, { shouldWrap: v, fontOpacity: w.includes(x.fontId) ? R : 1, nameLength: B?.length ?? 0 }),
            W = (function (e) {
                switch (e) {
                    case o.z.GRADIENT:
                    case o.z.GLOW:
                        return L.D7;
                    case o.z.PRISM:
                        return L.Wj;
                    case o.z.NEON:
                        return L.lw;
                    case o.z.TOON:
                        return L.lQ;
                    case o.z.POP:
                        return L.uY;
                    case o.z.GUMMY:
                        return L.Y0;
                    case o.z.SOLID:
                    default:
                        return L.QJ;
                }
            })(V),
            K = s !== S.G.PLAIN,
            $ = s === S.G.ANIMATED && !U,
            z = (0, i.jsx)("div", {
                className: a()(L.kL, k, m, {
                    [L.rD]: K,
                    [L.CS]: $,
                    [L.HW]: N,
                    [L.$E]: l,
                    [L.Tn]: null != M,
                    [L._j]: v,
                }),
                style: Y,
                children: (0, i.jsx)("span", {
                    "data-username-with-effects": B,
                    className: a()(L.WH, W, { [L._W]: O }),
                    children:
                        V === o.z.GUMMY && K
                            ? (0, i.jsx)(b, {
                                  name: B ?? "",
                                  emojiClassName: L.Zg,
                                  letterClassName: $ ? L.M4 : void 0,
                                  wordClassName: L.qf,
                                  colors: H,
                              })
                            : j,
                }),
            });
        return null != M ? (0, i.jsxs)("div", { className: L.g8, children: [z, M] }) : z;
    });
