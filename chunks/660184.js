n.d(t, { A: () => P });
var l = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(508425),
    u = n(559949),
    i = n(17928),
    c = n(36075),
    d = n(602853),
    f = n(661531),
    m = n(84571),
    N = n(834730),
    p = n(775602),
    O = n(248778),
    E = n(945096),
    x = n(310784),
    A = n.n(x),
    y = n(998304),
    I = n(898985),
    z = n(824994),
    h = n(922301),
    L = n(750656);
let T = "--custom-display-name-styles-main-color";
n(321073);
var S = n(308050),
    g = n(912051),
    M = n(229996);
let R = (0, S.A)();
function C(e) {
    let { name: t, emojiClassName: n, letterClassName: a, wordClassName: r, colors: o } = e,
        u = s.useMemo(() => {
            let e = 0,
                s = 0,
                u = [],
                i = [];
            function c() {
                if (0 === i.length) return;
                let e = i;
                (i = []),
                    null != r
                        ? u.push((0, l.jsx)("span", { className: r, children: e }, `word-${u.length}`))
                        : u.push(...e);
            }
            return (
                (0, g.p)(t).forEach((t, r) => {
                    R.lastIndex = 0;
                    let d = R.test(t);
                    if (0 === t.trim().length) {
                        c(), u.push((0, l.jsx)("span", { children: t }, `space-${r}`));
                        return;
                    }
                    let f = null != o && o.length > 0 && !d ? o[e % o.length] : void 0,
                        m = null != f ? { color: f } : void 0;
                    null == a || d || (m = { ...m, "--custom-letter-index": s }),
                        i.push((0, l.jsx)("span", { className: d ? n : a, style: m, children: t }, r)),
                        !d && (e++, s++);
                }),
                c(),
                u
            );
        }, [t, o, n, a, r]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("span", { className: M.Q, children: t }),
            (0, l.jsx)("span", { "aria-hidden": !0, children: u }),
        ],
    });
}
var D = n(73392),
    _ = n(658385);
let v = [u.x.CHERRY_BOMB, u.x.CHICLE],
    P = s.memo(function (e) {
        let {
                userName: t,
                displayNameStyles: n,
                effectDisplayType: a = h.G.STATIC,
                inProfile: u = !1,
                textClassName: N,
                loop: x = !1,
                shouldWrap: S = !1,
                boldFontOpacity: g = 1,
                shouldUnderlineOnHover: M = !1,
                appendedInlineContent: R,
                textVariant: P,
            } = e,
            W = (0, O.DW)("UserNameWithEffects"),
            G = (0, E.sx)(n, W),
            b = (0, D.a)({ displayNameStyles: G }),
            { useReducedMotion: U } = (0, i.cf)([p.Ay], () => ({ useReducedMotion: p.Ay.useReducedMotion })),
            k = (0, z.W)({ location: "UserNameWithEffects" }),
            w = (0, d.r)(f.A.colors.BACKGROUND_BASE_LOW).hex(),
            F = G?.effectId ?? o.z.SOLID,
            Y = (0, m.O)(t),
            B = (0, c.CR)(Y, F === o.z.TOON ? _.Zg : void 0),
            H = (function (e) {
                let { displayNameStyles: t, backgroundColor: n } = e,
                    l = (0, i.bG)([p.Ay], () => (p.Ay.desaturateUserColors ? p.Ay.saturation : 1)),
                    a = t?.effectId ?? o.z.SOLID,
                    r = (0, I._)(a);
                return s.useMemo(
                    () =>
                        null == t
                            ? []
                            : t.colors.map((e) =>
                                  (0, y.lZ)({
                                      foreground: A()(e),
                                      background: a === o.z.TOON ? A()("#333") : A()(n),
                                      ratio: r.minContrastRatio,
                                      saturationFactor: l,
                                  }).hex(),
                              ),
                    [t, a, r.minContrastRatio, l, n],
                );
            })({ displayNameStyles: k ? G : null, backgroundColor: w });
        if (!k || null == G) return (0, l.jsxs)(l.Fragment, { children: [t, " ", R] });
        let $ = (function (e, t) {
                var n, l, s;
                let {
                        shouldWrap: a = !1,
                        fontOpacity: r = 1,
                        nameLength: u = 0,
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = {};
                switch (e) {
                    case o.z.GRADIENT:
                    case o.z.GLOW:
                        i =
                            0 === (n = t).length
                                ? {}
                                : {
                                      "--custom-display-name-styles-gradient-stops":
                                          1 === n.length
                                              ? `${n[0]}, ${n[0]}`
                                              : n.map((e, t) => `${e} ${10 + (80 * t) / (n.length - 1)}%`).join(", "),
                                      [T]: n[0],
                                  };
                        break;
                    case o.z.PRISM:
                        (l = t),
                            (s = u),
                            (i =
                                0 === l.length
                                    ? {}
                                    : {
                                          "--custom-display-name-styles-prism-stops": Array.from(
                                              { length: l.length + 1 },
                                              (e, t) => `${l[t % l.length]} ${((100 * t) / l.length).toFixed(3)}%`,
                                          ).join(", "),
                                          "--custom-display-name-styles-prism-cycle": `max(${s}ch, ${L.LP}px)`,
                                          [T]: l[0],
                                      });
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
                                    light1: n,
                                    light2: l,
                                    dark1: s,
                                    dark2: a,
                                    toonStroke: r,
                                    neonStroke: o,
                                } = (0, E.$0)(e);
                                return {
                                    [T]: t,
                                    "--custom-display-name-styles-light-1-color": n,
                                    "--custom-display-name-styles-light-2-color": l,
                                    "--custom-display-name-styles-dark-1-color": s,
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
            })(F, H, { shouldWrap: S, fontOpacity: v.includes(G.fontId) ? g : 1, nameLength: Y?.length ?? 0 }),
            K = (function (e) {
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
            })(F),
            Z = a !== h.G.PLAIN,
            X = a === h.G.ANIMATED && !U,
            J = (0, l.jsx)("div", {
                className: r()(_.kL, b, N, {
                    [_.rD]: Z,
                    [_.CS]: X,
                    [_.HW]: x,
                    [_.$E]: u,
                    [_.Tn]: null != R,
                    [_._j]: S,
                }),
                style: $,
                children: (0, l.jsx)(j, {
                    textVariant: P,
                    "data-username-with-effects": Y,
                    className: r()(_.WH, K, { [_._W]: M }),
                    children:
                        F === o.z.GUMMY && Z
                            ? (0, l.jsx)(C, {
                                  name: Y ?? "",
                                  emojiClassName: _.Zg,
                                  letterClassName: X ? _.M4 : void 0,
                                  wordClassName: _.qf,
                                  colors: H,
                              })
                            : B,
                }),
            });
        return null != R ? (0, l.jsxs)("div", { className: _.g8, children: [J, R] }) : J;
    });
function j(e) {
    let { textVariant: t, ...n } = e;
    return null != t ? (0, l.jsx)(N.E, { color: "none", variant: t, ...n }) : (0, l.jsx)("span", { ...n });
}
