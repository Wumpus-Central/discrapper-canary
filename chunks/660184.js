l.d(t, { A: () => P });
var n = l(477900),
    s = l(582128),
    a = l(503698),
    r = l.n(a),
    o = l(508425),
    u = l(559949),
    c = l(17928),
    i = l(602853),
    d = l(661531),
    m = l(84571),
    f = l(36075),
    N = l(834730),
    O = l(775602),
    p = l(310784),
    E = l.n(p),
    A = l(998304),
    x = l(898985),
    I = l(824994),
    z = l(922301),
    h = l(945096),
    y = l(750656);
let L = "--custom-display-name-styles-main-color";
l(321073);
var T = l(308050),
    S = l(912051),
    M = l(229996);
let R = (0, T.A)();
function g(e) {
    let { name: t, emojiClassName: l, letterClassName: a, wordClassName: r, colors: o } = e,
        u = s.useMemo(() => {
            let e = 0,
                s = 0,
                u = [],
                c = [];
            function i() {
                if (0 === c.length) return;
                let e = c;
                ((c = []),
                    null != r
                        ? u.push((0, n.jsx)("span", { className: r, children: e }, `word-${u.length}`))
                        : u.push(...e));
            }
            return (
                (0, S.p)(t).forEach((t, r) => {
                    R.lastIndex = 0;
                    let d = R.test(t);
                    if (0 === t.trim().length) {
                        (i(), u.push((0, n.jsx)("span", { children: t }, `space-${r}`)));
                        return;
                    }
                    let m = null != o && o.length > 0 && !d ? o[e % o.length] : void 0,
                        f = null != m ? { color: m } : void 0;
                    (null == a || d || (f = { ...f, "--custom-letter-index": s }),
                        c.push((0, n.jsx)("span", { className: d ? l : a, style: f, children: t }, r)),
                        !d && (e++, s++));
                }),
                i(),
                u
            );
        }, [t, o, l, a, r]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("span", { className: M.Q, children: t }),
            (0, n.jsx)("span", { "aria-hidden": !0, children: u }),
        ],
    });
}
var C = l(73392),
    _ = l(658385);
let D = [u.x.CHERRY_BOMB, u.x.CHICLE],
    P = s.memo(function (e) {
        let {
                userName: t,
                displayNameStyles: l,
                effectDisplayType: a = z.G.STATIC,
                inProfile: u = !1,
                textClassName: N,
                loop: p = !1,
                shouldWrap: T = !1,
                boldFontOpacity: S = 1,
                shouldUnderlineOnHover: M = !1,
                appendedInlineContent: R,
                textVariant: P,
            } = e,
            G = (0, C.a)({ displayNameStyles: l }),
            { useReducedMotion: v } = (0, c.cf)([O.Ay], () => ({ useReducedMotion: O.Ay.useReducedMotion })),
            W = (0, I.W)({ location: "UserNameWithEffects" }),
            U = (0, i.r)(d.A.colors.BACKGROUND_BASE_LOW).hex(),
            Y = l?.effectId ?? o.z.SOLID,
            w = (0, m.O)(t),
            F = (0, f.CR)(w, Y === o.z.TOON ? _.Zg : void 0),
            k = (function (e) {
                let { displayNameStyles: t, backgroundColor: l } = e,
                    n = (0, c.bG)([O.Ay], () => (O.Ay.desaturateUserColors ? O.Ay.saturation : 1)),
                    a = t?.effectId ?? o.z.SOLID,
                    r = (0, x._)(a);
                return s.useMemo(
                    () =>
                        null == t
                            ? []
                            : t.colors.map((e) =>
                                  (0, A.lZ)({
                                      foreground: E()(e),
                                      background: a === o.z.TOON ? E()("#333") : E()(l),
                                      ratio: r.minContrastRatio,
                                      saturationFactor: n,
                                  }).hex(),
                              ),
                    [t, a, r.minContrastRatio, n, l],
                );
            })({ displayNameStyles: W ? l : null, backgroundColor: U });
        if (!W || null == l) return (0, n.jsxs)(n.Fragment, { children: [t, " ", R] });
        let B = (function (e, t) {
                var l, n, s;
                let {
                        shouldWrap: a = !1,
                        fontOpacity: r = 1,
                        nameLength: u = 0,
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    c = {};
                switch (e) {
                    case o.z.GRADIENT:
                    case o.z.GLOW:
                        c =
                            0 === (l = t).length
                                ? {}
                                : {
                                      "--custom-display-name-styles-gradient-stops":
                                          1 === l.length
                                              ? `${l[0]}, ${l[0]}`
                                              : l.map((e, t) => `${e} ${10 + (80 * t) / (l.length - 1)}%`).join(", "),
                                      [L]: l[0],
                                  };
                        break;
                    case o.z.PRISM:
                        ((n = t),
                            (s = u),
                            (c =
                                0 === n.length
                                    ? {}
                                    : {
                                          "--custom-display-name-styles-prism-stops": Array.from(
                                              { length: n.length + 1 },
                                              (e, t) => `${n[t % n.length]} ${((100 * t) / n.length).toFixed(3)}%`,
                                          ).join(", "),
                                          "--custom-display-name-styles-prism-cycle": `max(${s}ch, ${y.LP}px)`,
                                          [L]: n[0],
                                      }));
                        break;
                    case o.z.GUMMY:
                    case o.z.NEON:
                    case o.z.POP:
                    case o.z.TOON:
                    case o.z.SOLID:
                    default:
                        t.length > 0 &&
                            (c = (function (e) {
                                let {
                                    main: t,
                                    light1: l,
                                    light2: n,
                                    dark1: s,
                                    dark2: a,
                                    toonStroke: r,
                                    neonStroke: o,
                                } = (0, h.$0)(e);
                                return {
                                    [L]: t,
                                    "--custom-display-name-styles-light-1-color": l,
                                    "--custom-display-name-styles-light-2-color": n,
                                    "--custom-display-name-styles-dark-1-color": s,
                                    "--custom-display-name-styles-dark-2-color": a,
                                    "--custom-display-name-styles-toon-stroke-color": r,
                                    "--custom-display-name-styles-neon-stroke-color": o,
                                };
                            })(t[0]));
                }
                return {
                    ...c,
                    "--custom-display-name-styles-wrap": a ? "wrap" : "nowrap",
                    "--custom-display-name-styles-font-opacity": r,
                };
            })(Y, k, { shouldWrap: T, fontOpacity: D.includes(l.fontId) ? S : 1, nameLength: w?.length ?? 0 }),
            H = (function (e) {
                switch (e) {
                    case o.z.GRADIENT:
                    case o.z.GLOW:
                        return _.D7;
                    case o.z.PRISM:
                        return _.Wj;
                    case o.z.NEON:
                        return _.lw;
                    case o.z.TOON:
                        return _.lQ;
                    case o.z.POP:
                        return _.uY;
                    case o.z.GUMMY:
                        return _.Y0;
                    case o.z.SOLID:
                    default:
                        return _.QJ;
                }
            })(Y),
            $ = a !== z.G.PLAIN,
            b = a === z.G.ANIMATED && !v,
            K = (0, n.jsx)("div", {
                className: r()(_.kL, G, N, {
                    [_.rD]: $,
                    [_.CS]: b,
                    [_.HW]: p,
                    [_.$E]: u,
                    [_.Tn]: null != R,
                    [_._j]: T,
                }),
                style: B,
                children: (0, n.jsx)(j, {
                    textVariant: P,
                    "data-username-with-effects": w,
                    className: r()(_.WH, H, { [_._W]: M }),
                    children:
                        Y === o.z.GUMMY && $
                            ? (0, n.jsx)(g, {
                                  name: w ?? "",
                                  emojiClassName: _.Zg,
                                  letterClassName: b ? _.M4 : void 0,
                                  wordClassName: _.qf,
                                  colors: k,
                              })
                            : F,
                }),
            });
        return null != R ? (0, n.jsxs)("div", { className: _.g8, children: [K, R] }) : K;
    });
function j(e) {
    let { textVariant: t, ...l } = e;
    return null != t ? (0, n.jsx)(N.E, { color: "none", variant: t, ...l }) : (0, n.jsx)("span", { ...l });
}
