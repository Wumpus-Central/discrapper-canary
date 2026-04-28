a.d(t, { A: () => E, M: () => A });
var n = a(627968),
    l = a(64700),
    r = a(503698),
    i = a.n(r),
    s = a(172218),
    o = a(109112),
    c = a(635377),
    d = a.n(c),
    u = a(306044);
let h = new (d())({ max: 1e3 });
var p = a(997013),
    m = a(548118),
    f = a(776231),
    _ = a(395671),
    b = a(486020),
    g = a(788868),
    x = a(985018),
    v = a(444282);
let A = { XXSMALL: v.W6, XSMALL: v.s, SMALL: v.EX, MEDIUM: v.Y, MEDIUM_LARGE: v.rZ, LARGE: v.as, XLARGE: v.AQ },
    E = l.forwardRef(function (e, t) {
        let r,
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
            [w, R] = l.useState(null),
            [N, k] = l.useState(!1),
            L = l.useCallback((e) => {
                k(e);
            }, []),
            O = l.useRef(null);
        l.useEffect(() => {
            null != O.current && N && (cancelIdleCallback(O.current), (O.current = null));
        }, [N]);
        let M = (0, s.K)(L);
        if (
            (null != E &&
                (r = (function (e) {
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
                null == r &&
                (c instanceof _.Ay
                    ? (r = c.getIconURL(
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
                      ? (r = b.Ay.getApplicationIconURL({ id: c.id, icon: c.iconHash }))
                      : null != c.icon && (r = b.Ay.getApplicationIconURL({ id: c.id, icon: c.icon }))),
            (r = (function (e, t) {
                let [a, n] = l.useState();
                return (
                    l.useEffect(() => {
                        if (null == e || null != t) return void n(void 0);
                        let a = h.get(e);
                        if (null != a) return void n(a);
                        let l = !1;
                        return (
                            (0, u.A)()
                                .then((t) => {
                                    null == t ||
                                        l ||
                                        t.identifyGame(e, (t, a) => {
                                            if (l) return;
                                            if (
                                                0 !== t ||
                                                null == a.icon ||
                                                "" === a.icon ||
                                                null == a.name ||
                                                "" === a.name
                                            )
                                                return void n(void 0);
                                            let r = `data:image/png;base64,${a.icon}`;
                                            h.set(e, r), n(r);
                                        });
                                })
                                .catch(() => {
                                    l || n(void 0);
                                }),
                            () => {
                                l = !0;
                            }
                        );
                    }, [e, t]),
                    t ?? a
                );
            })(y, r)),
            l.useEffect(() => {
                if (null == r || "" === r) return;
                if ((0, b.V0)(r) || (0, f.LE)(r)) return void R(r);
                let e = () =>
                    (0, f.yt)(r, (e, t) => {
                        R(r);
                    });
                if (N) return e();
                let t = requestIdleCallback(() => {
                    (O.current = null), e();
                });
                return (
                    (O.current = t),
                    () => {
                        null != O.current && (cancelIdleCallback(O.current), (O.current = null));
                    }
                );
            }, [r, N]),
            void 0 === r && null != d)
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
        if (null == r || "" === r)
            return C ? (T ?? (0, n.jsx)(o._, { size: "md", color: "currentColor", className: i()(v.Gt, j, I) })) : null;
        let P = c?.name,
            D =
                null != P && "" !== P
                    ? x.intl.formatToPlainString(x.t.tiKyYg, { applicationName: P })
                    : x.intl.string(x.t["2B/phM"]),
            U = (0, b.V0)(r),
            V = (0, f.LE)(r),
            F = w === r || U || V;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                F ? null : (0, n.jsx)("div", { className: i()(v.qD, j, I) }),
                (0, n.jsx)("img", {
                    ref: t,
                    alt: D,
                    src: r,
                    className: i()(v.Gt, j, I),
                    style: F ? void 0 : { display: "none" },
                }),
                (0, n.jsx)("div", { className: v.Xc, children: (0, n.jsx)("div", { ref: M, className: v.Pr }) }),
            ],
        });
    });
