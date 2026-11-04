l.d(t, { A: () => D });
var n = l(477900),
    s = l(582128),
    a = l(503698),
    r = l.n(a),
    o = l(508425),
    u = l(559949),
    c = l(855986),
    i = l(602853),
    d = l(646514),
    f = l(84571),
    m = l(36075),
    N = l(834730),
    O = l(775602),
    A = l(310784),
    E = l.n(A),
    p = l(998304),
    x = l(898985),
    z = l(824994),
    I = l(922301),
    h = l(501803);
l(750656);
let y = "--custom-display-name-styles-main-color";
l(321073);
var L = l(308050),
    T = l(912051),
    S = l(229996);
let M = (0, L.A)();
function R(e) {
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
                (0, T.p)(t).forEach((t, r) => {
                    M.lastIndex = 0;
                    let d = M.test(t);
                    if (0 === t.trim().length) {
                        (i(), u.push((0, n.jsx)("span", { children: t }, `space-${r}`)));
                        return;
                    }
                    let f = null != o && o.length > 0 && !d ? o[e % o.length] : void 0,
                        m = null != f ? { color: f } : void 0;
                    (null == a || d || (m = { ...m, "--custom-letter-index": s }),
                        c.push((0, n.jsx)("span", { className: d ? l : a, style: m, children: t }, r)),
                        !d && (e++, s++));
                }),
                i(),
                u
            );
        }, [t, o, l, a, r]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("span", { className: S.Q, children: t }),
            (0, n.jsx)("span", { "aria-hidden": !0, children: u }),
        ],
    });
}
var g = l(73392),
    C = l(658385);
let _ = [u.x.CHERRY_BOMB, u.x.CHICLE],
    D = s.memo(function (e) {
        let {
                userName: t,
                displayNameStyles: l,
                effectDisplayType: a = I.G.STATIC,
                inProfile: u = !1,
                textClassName: N,
                loop: A = !1,
                shouldWrap: L = !1,
                boldFontOpacity: T = 1,
                shouldUnderlineOnHover: S = !1,
                appendedInlineContent: M,
                textVariant: D,
            } = e,
            G = (0, g.a)({ displayNameStyles: l }),
            { useReducedMotion: j } = (0, c.cf)([O.Ay], () => ({ useReducedMotion: O.Ay.useReducedMotion })),
            v = (0, z.W)({ location: "UserNameWithEffects" }),
            W = (0, i.r)(d.A.colors.BACKGROUND_BASE_LOW).hex(),
            U = l?.effectId ?? o.z.SOLID,
            Y = (0, f.O)(t),
            k = (0, m.CR)(Y, U === o.z.TOON ? C.Zg : void 0),
            w = (function (e) {
                let { displayNameStyles: t, backgroundColor: l } = e,
                    n = (0, c.bG)([O.Ay], () => (O.Ay.desaturateUserColors ? O.Ay.saturation : 1)),
                    a = t?.effectId ?? o.z.SOLID,
                    r = (0, x._)(a);
                return s.useMemo(
                    () =>
                        null == t
                            ? []
                            : t.colors.map((e) =>
                                  (0, p.lZ)({
                                      foreground: E()(e),
                                      background: a === o.z.TOON ? E()("#333") : E()(l),
                                      ratio: r.minContrastRatio,
                                      saturationFactor: n,
                                  }).hex(),
                              ),
                    [t, a, r.minContrastRatio, n, l],
                );
            })({ displayNameStyles: v ? l : null, backgroundColor: W });
        if (!v || null == l) return (0, n.jsxs)(n.Fragment, { children: [t, " ", M] });
        let F = (function (e, t) {
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
                                      [y]: l[0],
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
                                          "--custom-display-name-styles-prism-cycle": `max(${s}ch, 38px)`,
                                          [y]: n[0],
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
                                    [y]: t,
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
            })(U, w, { shouldWrap: L, fontOpacity: _.includes(l.fontId) ? T : 1, nameLength: Y?.length ?? 0 }),
            H = (function (e) {
                switch (e) {
                    case o.z.GRADIENT:
                    case o.z.GLOW:
                        return C.D7;
                    case o.z.PRISM:
                        return C.Wj;
                    case o.z.NEON:
                        return C.lw;
                    case o.z.TOON:
                        return C.lQ;
                    case o.z.POP:
                        return C.uY;
                    case o.z.GUMMY:
                        return C.Y0;
                    case o.z.SOLID:
                    default:
                        return C.QJ;
                }
            })(U),
            B = a !== I.G.PLAIN,
            $ = a === I.G.ANIMATED && !j,
            b = (0, n.jsx)("div", {
                className: r()(C.kL, G, N, {
                    [C.rD]: B,
                    [C.CS]: $,
                    [C.HW]: A,
                    [C.$E]: u,
                    [C.Tn]: null != M,
                    [C._j]: L,
                }),
                style: F,
                children: (0, n.jsx)(P, {
                    textVariant: D,
                    "data-username-with-effects": Y,
                    className: r()(C.WH, H, { [C._W]: S }),
                    children:
                        U === o.z.GUMMY && B
                            ? (0, n.jsx)(R, {
                                  name: Y ?? "",
                                  emojiClassName: C.Zg,
                                  letterClassName: $ ? C.M4 : void 0,
                                  wordClassName: C.qf,
                                  colors: w,
                              })
                            : k,
                }),
            });
        return null != M ? (0, n.jsxs)("div", { className: C.g8, children: [b, M] }) : b;
    });
function P(e) {
    let { textVariant: t, ...l } = e;
    return null != t ? (0, n.jsx)(N.E, { color: "none", variant: t, ...l }) : (0, n.jsx)("span", { ...l });
}
