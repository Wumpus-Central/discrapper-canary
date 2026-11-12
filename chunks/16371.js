s.d(t, { A: () => R });
var n = s(477900),
    l = s(582128),
    a = s(503698),
    r = s.n(a),
    o = s(508425),
    c = s(559949),
    i = s(855986),
    u = s(602853),
    d = s(646514),
    m = s(84571),
    f = s(36075),
    p = s(834730),
    h = s(775602),
    z = s(310784),
    O = s.n(z),
    y = s(998304),
    N = s(501803),
    A = s(898985),
    I = s(824994),
    g = s(922301);
s(750656);
let T = "--custom-display-name-styles-main-color";
s(321073);
var M = s(308050),
    x = s(912051),
    E = s(229996);
let S = (0, M.A)();
function G(e) {
    let { name: t, emojiClassName: s, letterClassName: a, wordClassName: r, colors: o } = e,
        c = l.useMemo(() => {
            let e = 0,
                l = 0,
                c = [],
                i = [];
            function u() {
                if (0 === i.length) return;
                let e = i;
                ((i = []),
                    null != r
                        ? c.push((0, n.jsx)("span", { className: r, children: e }, `word-${c.length}`))
                        : c.push(...e));
            }
            return (
                (0, x.p)(t).forEach((t, r) => {
                    S.lastIndex = 0;
                    let d = S.test(t);
                    if (0 === t.trim().length) {
                        (u(), c.push((0, n.jsx)("span", { children: t }, `space-${r}`)));
                        return;
                    }
                    let m = null != o && o.length > 0 && !d ? o[e % o.length] : void 0,
                        f = null != m ? { color: m } : void 0;
                    (null == a || d || (f = { ...f, "--custom-letter-index": l }),
                        i.push((0, n.jsx)("span", { className: d ? s : a, style: f, children: t }, r)),
                        !d && (e++, l++));
                }),
                u(),
                c
            );
        }, [t, o, s, a, r]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("span", { className: E.Q, children: t }),
            (0, n.jsx)("span", { "aria-hidden": !0, children: c }),
        ],
    });
}
var D = s(73392),
    L = s(658385);
let j = [c.x.CHERRY_BOMB, c.x.CHICLE],
    R = l.memo(function (e) {
        let {
                userName: t,
                displayNameStyles: s,
                effectDisplayType: a = g.G.STATIC,
                inProfile: c = !1,
                textClassName: p,
                loop: z = !1,
                shouldWrap: M = !1,
                boldFontOpacity: x = 1,
                shouldUnderlineOnHover: E = !1,
                appendedInlineContent: S,
                textVariant: R,
            } = e,
            C = (0, D.a)({ displayNameStyles: s }),
            { useReducedMotion: P } = (0, i.cf)([h.Ay], () => ({ useReducedMotion: h.Ay.useReducedMotion })),
            W = (0, I.W)({ location: "UserNameWithEffects" }),
            _ = (0, u.r)(d.A.colors.BACKGROUND_BASE_LOW).hex(),
            w = s?.effectId ?? o.z.SOLID,
            U = (0, m.O)(t),
            k = (0, f.CR)(U, w === o.z.TOON ? L.Zg : void 0),
            $ = (function (e) {
                let { displayNameStyles: t, backgroundColor: s } = e,
                    n = (0, i.bG)([h.Ay], () => (h.Ay.desaturateUserColors ? h.Ay.saturation : 1)),
                    a = t?.effectId ?? o.z.SOLID,
                    r = (0, A._)(a);
                return l.useMemo(
                    () =>
                        null == t
                            ? []
                            : t.colors
                                  .filter(N.fF)
                                  .map((e) =>
                                      (0, y.lZ)({
                                          foreground: O()(e),
                                          background: a === o.z.TOON ? O()("#333") : O()(s),
                                          ratio: r.minContrastRatio,
                                          saturationFactor: n,
                                      }).hex(),
                                  ),
                    [t, a, r.minContrastRatio, n, s],
                );
            })({ displayNameStyles: W ? s : null, backgroundColor: _ });
        if (!W || null == s) return (0, n.jsxs)(n.Fragment, { children: [t, " ", S] });
        let Y = (function (e, t) {
                var s, n, l;
                let {
                        shouldWrap: a = !1,
                        fontOpacity: r = 1,
                        nameLength: c = 0,
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = {};
                switch (e) {
                    case o.z.GRADIENT:
                    case o.z.GLOW:
                        i =
                            0 === (s = t).length
                                ? {}
                                : {
                                      "--custom-display-name-styles-gradient-stops":
                                          1 === s.length
                                              ? `${s[0]}, ${s[0]}`
                                              : s.map((e, t) => `${e} ${10 + (80 * t) / (s.length - 1)}%`).join(", "),
                                      [T]: s[0],
                                  };
                        break;
                    case o.z.PRISM:
                        ((n = t),
                            (l = c),
                            (i =
                                0 === n.length
                                    ? {}
                                    : {
                                          "--custom-display-name-styles-prism-stops": Array.from(
                                              { length: n.length + 1 },
                                              (e, t) => `${n[t % n.length]} ${((100 * t) / n.length).toFixed(3)}%`,
                                          ).join(", "),
                                          "--custom-display-name-styles-prism-cycle": `max(${l}ch, 38px)`,
                                          [T]: n[0],
                                      }));
                        break;
                    case o.z.GUMMY:
                    case o.z.NEON:
                    case o.z.POP:
                    case o.z.TOON:
                    case o.z.SOLID:
                    default:
                        t.length > 0 &&
                            (i = (function (e) {
                                let {
                                    main: t,
                                    light1: s,
                                    light2: n,
                                    dark1: l,
                                    dark2: a,
                                    toonStroke: r,
                                    neonStroke: o,
                                } = (0, N.$0)(e);
                                return {
                                    [T]: t,
                                    "--custom-display-name-styles-light-1-color": s,
                                    "--custom-display-name-styles-light-2-color": n,
                                    "--custom-display-name-styles-dark-1-color": l,
                                    "--custom-display-name-styles-dark-2-color": a,
                                    "--custom-display-name-styles-toon-stroke-color": r,
                                    "--custom-display-name-styles-neon-stroke-color": o,
                                };
                            })(t[0]));
                }
                return {
                    ...i,
                    "--custom-display-name-styles-wrap": a ? "wrap" : "nowrap",
                    "--custom-display-name-styles-font-opacity": r,
                };
            })(w, $, { shouldWrap: M, fontOpacity: j.includes(s.fontId) ? x : 1, nameLength: U?.length ?? 0 }),
            b = (function (e) {
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
            })(w),
            F = a !== g.G.PLAIN,
            B = a === g.G.ANIMATED && !P,
            H = (0, n.jsx)("div", {
                className: r()(L.kL, C, p, {
                    [L.rD]: F,
                    [L.CS]: B,
                    [L.HW]: z,
                    [L.$E]: c,
                    [L.Tn]: null != S,
                    [L._j]: M,
                }),
                style: Y,
                children: (0, n.jsx)(v, {
                    textVariant: R,
                    "data-username-with-effects": U,
                    className: r()(L.WH, b, { [L._W]: E }),
                    children:
                        w === o.z.GUMMY && F
                            ? (0, n.jsx)(G, {
                                  name: U ?? "",
                                  emojiClassName: L.Zg,
                                  letterClassName: B ? L.M4 : void 0,
                                  wordClassName: L.qf,
                                  colors: $,
                              })
                            : k,
                }),
            });
        return null != S ? (0, n.jsxs)("div", { className: L.g8, children: [H, S] }) : H;
    });
function v(e) {
    let { textVariant: t, ...s } = e;
    return null != t ? (0, n.jsx)(p.E, { color: "none", variant: t, ...s }) : (0, n.jsx)("span", { ...s });
}
