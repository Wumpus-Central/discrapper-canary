a.d(t, { A: () => y, M: () => A });
var r = a(627968),
    n = a(64700),
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
    y = n.forwardRef(function (e, t) {
        let l,
            {
                game: c,
                guild: d,
                skuId: y,
                pid: E,
                className: I,
                guildClassName: j,
                size: S = A.MEDIUM,
                allowUnknownGameIcon: C = !0,
                unknownGameIconFallback: T,
            } = e,
            [R, w] = n.useState(null),
            [k, L] = n.useState(!1),
            N = n.useCallback((e) => {
                L(e);
            }, []),
            O = n.useRef(null);
        n.useEffect(() => {
            null != O.current && k && (cancelIdleCallback(O.current), (O.current = null));
        }, [k]);
        let P = (0, s.K)(N);
        if (
            (null != y &&
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
                })(y)),
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
                          })(S),
                      ))
                    : c instanceof p.A
                      ? (l = _.Ay.getApplicationIconURL({ id: c.id, icon: c.iconHash }))
                      : null != c.icon && (l = _.Ay.getApplicationIconURL({ id: c.id, icon: c.icon }))),
            (l = (function (e, t) {
                let [a, r] = n.useState();
                return (
                    n.useEffect(() => {
                        if (null == e || null != t) return void r(void 0);
                        let a = h.get(e);
                        if (null != a) return void r(a);
                        let n = !1;
                        return (
                            (0, u.A)()
                                .then((t) => {
                                    null == t ||
                                        n ||
                                        t.identifyGame(e, (t, a) => {
                                            if (n) return;
                                            if (
                                                0 !== t ||
                                                null == a.icon ||
                                                "" === a.icon ||
                                                null == a.name ||
                                                "" === a.name
                                            )
                                                return void r(void 0);
                                            let l = `data:image/png;base64,${a.icon}`;
                                            h.set(e, l), r(l);
                                        });
                                })
                                .catch(() => {
                                    n || r(void 0);
                                }),
                            () => {
                                n = !0;
                            }
                        );
                    }, [e, t]),
                    t ?? a
                );
            })(E, l)),
            n.useEffect(() => {
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
            })(S);
            return (0, r.jsx)(m.Ay, { className: i()(v.Gt, j, I), guild: d, size: e });
        }
        if (null == l || "" === l)
            return C ? (T ?? (0, r.jsx)(o._, { size: "md", color: "currentColor", className: i()(v.Gt, S, I) })) : null;
        let D = c?.name,
            M =
                null != D && "" !== D
                    ? x.intl.formatToPlainString(x.t.tiKyYg, { applicationName: D })
                    : x.intl.string(x.t["2B/phM"]),
            U = (0, _.V0)(l),
            F = (0, f.LE)(l),
            V = R === l || U || F;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                V ? null : (0, r.jsx)("div", { className: i()(v.qD, S, I) }),
                (0, r.jsx)("img", {
                    ref: t,
                    alt: M,
                    src: l,
                    className: i()(v.Gt, S, I),
                    style: V ? void 0 : { display: "none" },
                }),
                (0, r.jsx)("div", { className: v.Xc, children: (0, r.jsx)("div", { ref: P, className: v.Pr }) }),
            ],
        });
    });
