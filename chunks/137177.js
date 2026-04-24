a.d(t, { A: () => E, M: () => A });
var n = a(627968),
    r = a(64700),
    l = a(503698),
    i = a.n(l),
    s = a(172218),
    o = a(109112),
    c = a(635377),
    d = a.n(c),
    u = a(306044);
let h = new (d())({ max: 1e3 });
var p = a(997013),
    m = a(548118),
    f = a(776231),
    b = a(395671),
    _ = a(486020),
    g = a(788868),
    x = a(985018),
    v = a(444282);
let A = { XXSMALL: v.W6, XSMALL: v.s, SMALL: v.EX, MEDIUM: v.Y, MEDIUM_LARGE: v.rZ, LARGE: v.as, XLARGE: v.AQ },
    E = r.forwardRef(function (e, t) {
        let l,
            {
                game: c,
                guild: d,
                skuId: E,
                pid: y,
                className: I,
                guildClassName: S,
                size: j = A.MEDIUM,
                allowUnknownGameIcon: C = !0,
                unknownGameIconFallback: T,
            } = e,
            [R, w] = r.useState(null),
            [k, L] = r.useState(!1),
            N = r.useCallback((e) => {
                L(e);
            }, []),
            O = r.useRef(null);
        r.useEffect(() => {
            null != O.current && k && (cancelIdleCallback(O.current), (O.current = null));
        }, [k]);
        let P = (0, s.K)(N);
        if (
            (null != E &&
                (l = (function (e) {
                    if (null == e) return null;
                    switch (e) {
                        case g.pe.GUILD:
                            return a(664419);
                        case g.pe.TIER_0:
                            return a(31427);
                        case g.pe.TIER_1:
                            return a(831180);
                        case g.pe.TIER_2:
                        case g.pe.LEGACY:
                            return a(29873);
                        default:
                            return null;
                    }
                })(E)),
            null != c &&
                null == l &&
                (c instanceof b.Ay
                    ? (l = c.getIconURL(
                          (function (e) {
                              switch (e) {
                                  case A.XXSMALL:
                                      return 16;
                                  case A.XSMALL:
                                      return 24;
                                  case A.SMALL:
                                      return 30;
                                  case A.MEDIUM:
                                      return 40;
                                  case A.MEDIUM_LARGE:
                                      return 48;
                                  case A.LARGE:
                                      return 60;
                                  default:
                                      return 80;
                              }
                          })(j),
                      ))
                    : c instanceof p.A
                      ? (l = _.Ay.getApplicationIconURL({ id: c.id, icon: c.iconHash }))
                      : null != c.icon && (l = _.Ay.getApplicationIconURL({ id: c.id, icon: c.icon }))),
            (l = (function (e, t) {
                let [a, n] = r.useState();
                return (
                    r.useEffect(() => {
                        if (null == e || null != t) return void n(void 0);
                        let a = h.get(e);
                        if (null != a) return void n(a);
                        let r = !1;
                        return (
                            (0, u.A)()
                                .then((t) => {
                                    null == t ||
                                        r ||
                                        t.identifyGame(e, (t, a) => {
                                            if (r) return;
                                            if (
                                                0 !== t ||
                                                null == a.icon ||
                                                "" === a.icon ||
                                                null == a.name ||
                                                "" === a.name
                                            )
                                                return void n(void 0);
                                            let l = `data:image/png;base64,${a.icon}`;
                                            h.set(e, l), n(l);
                                        });
                                })
                                .catch(() => {
                                    r || n(void 0);
                                }),
                            () => {
                                r = !0;
                            }
                        );
                    }, [e, t]),
                    t ?? a
                );
            })(y, l)),
            r.useEffect(() => {
                if (null == l || "" === l) return;
                if ((0, _.V0)(l) || (0, f.LE)(l)) return void w(l);
                let e = () =>
                    (0, f.yt)(l, (e, t) => {
                        w(l);
                    });
                if (k) return e();
                let t = requestIdleCallback(() => {
                    (O.current = null), e();
                });
                return (
                    (O.current = t),
                    () => {
                        null != O.current && (cancelIdleCallback(O.current), (O.current = null));
                    }
                );
            }, [l, k]),
            void 0 === l && null != d)
        ) {
            let e = (function (e) {
                switch (e) {
                    case A.XSMALL:
                        return m.Ay.Sizes.SMALLER;
                    case A.SMALL:
                        return m.Ay.Sizes.SMALL;
                    case A.LARGE:
                        return m.Ay.Sizes.LARGE;
                    default:
                    case A.MEDIUM:
                        return m.Ay.Sizes.MEDIUM;
                }
            })(j);
            return (0, n.jsx)(m.Ay, { className: i()(v.Gt, S, I), guild: d, size: e });
        }
        if (null == l || "" === l)
            return C ? (T ?? (0, n.jsx)(o._, { size: "md", color: "currentColor", className: i()(v.Gt, j, I) })) : null;
        let D = c?.name,
            M =
                null != D && "" !== D
                    ? x.intl.formatToPlainString(x.t.tiKyYg, { applicationName: D })
                    : x.intl.string(x.t["2B/phM"]),
            U = (0, _.V0)(l),
            F = (0, f.LE)(l),
            V = R === l || U || F;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                V ? null : (0, n.jsx)("div", { className: i()(v.qD, j, I) }),
                (0, n.jsx)("img", {
                    ref: t,
                    alt: M,
                    src: l,
                    className: i()(v.Gt, j, I),
                    style: V ? void 0 : { display: "none" },
                }),
                (0, n.jsx)("div", { className: v.Xc, children: (0, n.jsx)("div", { ref: P, className: v.Pr }) }),
            ],
        });
    });
