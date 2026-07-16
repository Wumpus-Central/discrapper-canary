"use strict";
n.d(t, { A: () => P });
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
    A = n(775602),
    h = n(248778),
    I = n(945096),
    f = n(310784),
    p = n.n(f),
    T = n(998304),
    m = n(898985),
    g = n(824994),
    S = n(922301),
    N = n(750656);
let C = "--custom-display-name-styles-main-color";
n(321073);
var R = n(308050),
    O = n(912051),
    L = n(564039);
let y = (0, R.A)();
function D(e) {
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
                (0, O.p)(t).forEach((t, s) => {
                    y.lastIndex = 0;
                    let u = y.test(t);
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
            (0, i.jsx)("span", { className: L.Q, children: t }),
            (0, i.jsx)("span", { "aria-hidden": !0, children: o }),
        ],
    });
}
var v = n(73392),
    b = n(875358);
let M = [o.x.CHERRY_BOMB, o.x.CHICLE],
    P = r.memo(function (e) {
        let {
                userName: t,
                displayNameStyles: n,
                effectDisplayType: a = S.G.STATIC,
                inProfile: o = !1,
                textClassName: f,
                loop: R = !1,
                shouldWrap: O = !1,
                boldFontOpacity: L = 1,
                shouldUnderlineOnHover: y = !1,
                appendedInlineContent: P,
            } = e,
            U = (0, h.DW)("UserNameWithEffects"),
            w = (0, I.sx)(n, U),
            G = (0, v.a)({ displayNameStyles: w }),
            { useReducedMotion: x } = (0, d.cf)([A.Ay], () => ({ useReducedMotion: A.Ay.useReducedMotion })),
            k = (0, g.W)({ location: "UserNameWithEffects" }),
            F = (0, u.r)(_.A.colors.BACKGROUND_BASE_LOW).hex(),
            V = w?.effectId ?? l.z.SOLID,
            B = (0, E.O)(t),
            H = (0, c.CR)(B, V === l.z.TOON ? b.Zg : void 0),
            j = (function (e) {
                let { displayNameStyles: t, backgroundColor: n } = e,
                    i = (0, d.bG)([A.Ay], () => (A.Ay.desaturateUserColors ? A.Ay.saturation : 1)),
                    a = t?.effectId ?? l.z.SOLID,
                    s = (0, m._)(a);
                return r.useMemo(
                    () =>
                        null == t
                            ? []
                            : t.colors.map((e) =>
                                  (0, T.lZ)({
                                      foreground: p()(e),
                                      background: a === l.z.TOON ? p()("#333") : p()(n),
                                      ratio: s.minContrastRatio,
                                      saturationFactor: i,
                                  }).hex(),
                              ),
                    [t, a, s.minContrastRatio, i, n],
                );
            })({ displayNameStyles: k ? w : null, backgroundColor: F });
        if (!k || null == w) return (0, i.jsxs)(i.Fragment, { children: [t, " ", P] });
        let W = (function (e, t) {
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
                                      [C]: n[0],
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
                                          "--custom-display-name-styles-prism-cycle": `max(${r}ch, ${N.LP}px)`,
                                          [C]: i[0],
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
                                } = (0, I.$0)(e);
                                return {
                                    [C]: t,
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
            })(V, j, { shouldWrap: O, fontOpacity: M.includes(w.fontId) ? L : 1, nameLength: B?.length ?? 0 }),
            Y = (function (e) {
                switch (e) {
                    case l.z.GRADIENT:
                    case l.z.GLOW:
                        return b.D7;
                    case l.z.PRISM:
                        return b.Wj;
                    case l.z.NEON:
                        return b.lw;
                    case l.z.TOON:
                        return b.lQ;
                    case l.z.POP:
                        return b.uY;
                    case l.z.GUMMY:
                        return b.Y0;
                    case l.z.SOLID:
                    default:
                        return b.QJ;
                }
            })(V),
            K = a !== S.G.PLAIN,
            $ = a === S.G.ANIMATED && !x,
            z = (0, i.jsx)("div", {
                className: s()(b.kL, G, f, {
                    [b.rD]: K,
                    [b.CS]: $,
                    [b.HW]: R,
                    [b.$E]: o,
                    [b.Tn]: null != P,
                    [b._j]: O,
                }),
                style: W,
                children: (0, i.jsx)("span", {
                    "data-username-with-effects": B,
                    className: s()(b.WH, Y, { [b._W]: y }),
                    children:
                        V === l.z.GUMMY && K
                            ? (0, i.jsx)(D, {
                                  name: B ?? "",
                                  emojiClassName: b.Zg,
                                  letterClassName: $ ? b.M4 : void 0,
                                  wordClassName: b.qf,
                                  colors: j,
                              })
                            : H,
                }),
            });
        return null != P ? (0, i.jsxs)("div", { className: b.g8, children: [z, P] }) : z;
    });
