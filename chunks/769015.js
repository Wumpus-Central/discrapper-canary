n.d(t, { A: () => E, M: () => p });
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(172218),
    u = n(109112),
    s = n(832604),
    c = n(997013),
    d = n(263063),
    A = n(776231),
    f = n(611010),
    g = n(486020),
    m = n(788868),
    _ = n(985018),
    I = n(550266);
let p = { XXSMALL: I.W6, XSMALL: I.s, SMALL: I.EX, MEDIUM: I.Y, MEDIUM_LARGE: I.rZ, LARGE: I.as, XLARGE: I.AQ },
    E = i.forwardRef(function (e, t) {
        let l,
            {
                game: E,
                guild: C,
                skuId: S,
                pid: h,
                className: T,
                guildClassName: y,
                size: v = p.MEDIUM,
                allowUnknownGameIcon: N = !0,
                unknownGameIconFallback: R,
            } = e,
            [L, b] = i.useState(null),
            [P, M] = i.useState(!1),
            x = i.useCallback((e) => {
                M(e);
            }, []),
            D = i.useRef(null);
        i.useEffect(() => {
            null != D.current && P && (cancelIdleCallback(D.current), (D.current = null));
        }, [P]);
        let O = (0, o.K)(x);
        if (
            (null != S &&
                (l = (function (e) {
                    if (null == e) return null;
                    switch (e) {
                        case m.pe.GUILD:
                            return n(664419);
                        case m.pe.TIER_0:
                            return n(31427);
                        case m.pe.TIER_1:
                            return n(831180);
                        case m.pe.TIER_2:
                        case m.pe.LEGACY:
                            return n(29873);
                        default:
                            return null;
                    }
                })(S)),
            null != E &&
                null == l &&
                (E instanceof f.Ay
                    ? (l = E.getIconURL(
                          (function (e) {
                              switch (e) {
                                  case p.XXSMALL:
                                      return 16;
                                  case p.XSMALL:
                                      return 24;
                                  case p.SMALL:
                                      return 30;
                                  case p.MEDIUM:
                                      return 40;
                                  case p.MEDIUM_LARGE:
                                      return 48;
                                  case p.LARGE:
                                      return 60;
                                  default:
                                      return 80;
                              }
                          })(v),
                      ))
                    : E instanceof c.A
                      ? (l = g.Ay.getApplicationIconURL({ id: E.id, icon: E.iconHash }))
                      : null != E.icon && (l = g.Ay.getApplicationIconURL({ id: E.id, icon: E.icon }))),
            (l = (0, s.A)(h, l)),
            i.useEffect(() => {
                if (null == l || "" === l) return;
                if ((0, g.V0)(l) || (0, A.LE)(l)) return void b(l);
                let e = () =>
                    (0, A.yt)(l, (e, t) => {
                        b(l);
                    });
                if (P) return e();
                let t = requestIdleCallback(() => {
                    (D.current = null), e();
                });
                return (
                    (D.current = t),
                    () => {
                        null != D.current && (cancelIdleCallback(D.current), (D.current = null));
                    }
                );
            }, [l, P]),
            void 0 === l && null != C)
        ) {
            let e = (function (e) {
                switch (e) {
                    case p.XSMALL:
                        return d.Ay.Sizes.SMALLER;
                    case p.SMALL:
                        return d.Ay.Sizes.SMALL;
                    case p.LARGE:
                        return d.Ay.Sizes.LARGE;
                    default:
                    case p.MEDIUM:
                        return d.Ay.Sizes.MEDIUM;
                }
            })(v);
            return (0, r.jsx)(d.Ay, { className: a()(I.Gt, y, T), guild: C, size: e });
        }
        if (null == l || "" === l)
            return N ? (R ?? (0, r.jsx)(u._, { size: "md", color: "currentColor", className: a()(I.Gt, v, T) })) : null;
        let G = E?.name,
            w =
                null != G && "" !== G
                    ? _.intl.formatToPlainString(_.t.tiKyYg, { applicationName: G })
                    : _.intl.string(_.t["2B/phM"]),
            U = (0, g.V0)(l),
            j = (0, A.LE)(l),
            F = L === l || U || j;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                F ? null : (0, r.jsx)("div", { className: a()(I.qD, v, T) }),
                (0, r.jsx)("img", {
                    ref: t,
                    alt: w,
                    src: l,
                    className: a()(I.Gt, v, T),
                    style: F ? void 0 : { display: "none" },
                }),
                (0, r.jsx)("div", { className: I.Xc, children: (0, r.jsx)("div", { ref: O, className: I.Pr }) }),
            ],
        });
    });
