"use strict";
n.d(t, { A: () => U });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(508425),
    o = n(559949),
    d = n(17928),
    c = n(36075),
    u = n(602853),
    _ = n(661531),
    E = n(614820),
    A = n(834730),
    h = n(775602),
    I = n(248778),
    f = n(945096),
    p = n(310784),
    T = n.n(p),
    m = n(998304),
    g = n(898985),
    S = n(824994),
    N = n(922301),
    C = n(750656);
let O = "--custom-display-name-styles-main-color";
n(321073);
var R = n(308050),
    L = n(912051),
    y = n(558959);
let D = (0, R.A)();
function v(e) {
    let { name: t, emojiClassName: n, letterClassName: a, wordClassName: s, colors: l } = e,
        o = r.useMemo(() => {
            let e = 0,
                r = 0,
                o = [],
                d = [];
            function c() {
                if (0 === d.length) return;
                let e = d;
                (d = []),
                    null != s
                        ? o.push((0, i.jsx)("span", { className: s, children: e }, `word-${o.length}`))
                        : o.push(...e);
            }
            return (
                (0, L.p)(t).forEach((t, s) => {
                    D.lastIndex = 0;
                    let u = D.test(t);
                    if (0 === t.trim().length) {
                        c(), o.push((0, i.jsx)("span", { children: t }, `space-${s}`));
                        return;
                    }
                    let _ = null != l && l.length > 0 && !u ? l[e % l.length] : void 0,
                        E = null != _ ? { color: _ } : void 0;
                    null == a || u || (E = { ...E, "--custom-letter-index": r }),
                        d.push((0, i.jsx)("span", { className: u ? n : a, style: E, children: t }, s)),
                        !u && (e++, r++);
                }),
                c(),
                o
            );
        }, [t, l, n, a, s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("span", { className: y.Q, children: t }),
            (0, i.jsx)("span", { "aria-hidden": !0, children: o }),
        ],
    });
}
var b = n(73392),
    M = n(459142);
let P = [o.x.CHERRY_BOMB, o.x.CHICLE],
    U = r.memo(function (e) {
        let {
                userName: t,
                displayNameStyles: n,
                effectDisplayType: a = N.G.STATIC,
                inProfile: o = !1,
                textClassName: A,
                loop: p = !1,
                shouldWrap: R = !1,
                boldFontOpacity: L = 1,
                shouldUnderlineOnHover: y = !1,
                appendedInlineContent: D,
                textVariant: U,
            } = e,
            G = (0, I.DW)("UserNameWithEffects"),
            x = (0, f.sx)(n, G),
            k = (0, b.a)({ displayNameStyles: x }),
            { useReducedMotion: F } = (0, d.cf)([h.Ay], () => ({ useReducedMotion: h.Ay.useReducedMotion })),
            V = (0, S.W)({ location: "UserNameWithEffects" }),
            B = (0, u.r)(_.A.colors.BACKGROUND_BASE_LOW).hex(),
            H = x?.effectId ?? l.z.SOLID,
            j = (0, E.O)(t),
            W = (0, c.CR)(j, H === l.z.TOON ? M.Zg : void 0),
            Y = (function (e) {
                let { displayNameStyles: t, backgroundColor: n } = e,
                    i = (0, d.bG)([h.Ay], () => (h.Ay.desaturateUserColors ? h.Ay.saturation : 1)),
                    a = t?.effectId ?? l.z.SOLID,
                    s = (0, g._)(a);
                return r.useMemo(
                    () =>
                        null == t
                            ? []
                            : t.colors.map((e) =>
                                  (0, m.lZ)({
                                      foreground: T()(e),
                                      background: a === l.z.TOON ? T()("#333") : T()(n),
                                      ratio: s.minContrastRatio,
                                      saturationFactor: i,
                                  }).hex(),
                              ),
                    [t, a, s.minContrastRatio, i, n],
                );
            })({ displayNameStyles: V ? x : null, backgroundColor: B });
        if (!V || null == x) return (0, i.jsxs)(i.Fragment, { children: [t, " ", D] });
        let K = (function (e, t) {
                var n, i, r;
                let {
                        shouldWrap: a = !1,
                        fontOpacity: s = 1,
                        nameLength: o = 0,
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    d = {};
                switch (e) {
                    case l.z.GRADIENT:
                    case l.z.GLOW:
                        d =
                            0 === (n = t).length
                                ? {}
                                : {
                                      "--custom-display-name-styles-gradient-stops":
                                          1 === n.length
                                              ? `${n[0]}, ${n[0]}`
                                              : n.map((e, t) => `${e} ${10 + (80 * t) / (n.length - 1)}%`).join(", "),
                                      [O]: n[0],
                                  };
                        break;
                    case l.z.PRISM:
                        (i = t),
                            (r = o),
                            (d =
                                0 === i.length
                                    ? {}
                                    : {
                                          "--custom-display-name-styles-prism-stops": Array.from(
                                              { length: i.length + 1 },
                                              (e, t) => `${i[t % i.length]} ${((100 * t) / i.length).toFixed(3)}%`,
                                          ).join(", "),
                                          "--custom-display-name-styles-prism-cycle": `max(${r}ch, ${C.LP}px)`,
                                          [O]: i[0],
                                      });
                        break;
                    case l.z.GUMMY:
                    case l.z.NEON:
                    case l.z.POP:
                    case l.z.TOON:
                    case l.z.SOLID:
                    default:
                        t.length > 0 &&
                            (d = (function (e) {
                                let {
                                    main: t,
                                    light1: n,
                                    light2: i,
                                    dark1: r,
                                    dark2: a,
                                    toonStroke: s,
                                    neonStroke: l,
                                } = (0, f.$0)(e);
                                return {
                                    [O]: t,
                                    "--custom-display-name-styles-light-1-color": n,
                                    "--custom-display-name-styles-light-2-color": i,
                                    "--custom-display-name-styles-dark-1-color": r,
                                    "--custom-display-name-styles-dark-2-color": a,
                                    "--custom-display-name-styles-toon-stroke-color": s,
                                    "--custom-display-name-styles-neon-stroke-color": l,
                                };
                            })(t[0]));
                }
                return {
                    ...d,
                    "--custom-display-name-styles-wrap": a ? "wrap" : "nowrap",
                    "--custom-display-name-styles-font-opacity": s,
                };
            })(H, Y, { shouldWrap: R, fontOpacity: P.includes(x.fontId) ? L : 1, nameLength: j?.length ?? 0 }),
            $ = (function (e) {
                switch (e) {
                    case l.z.GRADIENT:
                    case l.z.GLOW:
                        return M.D7;
                    case l.z.PRISM:
                        return M.Wj;
                    case l.z.NEON:
                        return M.lw;
                    case l.z.TOON:
                        return M.lQ;
                    case l.z.POP:
                        return M.uY;
                    case l.z.GUMMY:
                        return M.Y0;
                    case l.z.SOLID:
                    default:
                        return M.QJ;
                }
            })(H),
            z = a !== N.G.PLAIN,
            q = a === N.G.ANIMATED && !F,
            Z = (0, i.jsx)("div", {
                className: s()(M.kL, k, A, {
                    [M.rD]: z,
                    [M.CS]: q,
                    [M.HW]: p,
                    [M.$E]: o,
                    [M.Tn]: null != D,
                    [M._j]: R,
                }),
                style: K,
                children: (0, i.jsx)(w, {
                    textVariant: U,
                    "data-username-with-effects": j,
                    className: s()(M.WH, $, { [M._W]: y }),
                    children:
                        H === l.z.GUMMY && z
                            ? (0, i.jsx)(v, {
                                  name: j ?? "",
                                  emojiClassName: M.Zg,
                                  letterClassName: q ? M.M4 : void 0,
                                  wordClassName: M.qf,
                                  colors: Y,
                              })
                            : W,
                }),
            });
        return null != D ? (0, i.jsxs)("div", { className: M.g8, children: [Z, D] }) : Z;
    });
function w(e) {
    let { textVariant: t, ...n } = e;
    return null != t ? (0, i.jsx)(A.E, { color: "none", variant: t, ...n }) : (0, i.jsx)("span", { ...n });
}
