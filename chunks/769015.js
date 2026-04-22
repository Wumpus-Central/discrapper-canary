"use strict";
n.d(t, { A: () => E, M: () => g });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(172218),
    o = n(109112),
    c = n(832604),
    u = n(997013),
    d = n(263063),
    h = n(776231),
    _ = n(611010),
    p = n(486020),
    A = n(788868),
    f = n(985018),
    m = n(444282);
let g = { XXSMALL: m.W6, XSMALL: m.s, SMALL: m.EX, MEDIUM: m.Y, MEDIUM_LARGE: m.rZ, LARGE: m.as, XLARGE: m.AQ },
    E = r.forwardRef(function (e, t) {
        let l,
            {
                game: E,
                guild: I,
                skuId: v,
                pid: b,
                className: S,
                guildClassName: T,
                size: y = g.MEDIUM,
                allowUnknownGameIcon: C = !0,
                unknownGameIconFallback: x,
            } = e,
            [R, w] = r.useState(null),
            [N, L] = r.useState(!1),
            P = r.useCallback((e) => {
                L(e);
            }, []),
            O = r.useRef(null);
        r.useEffect(() => {
            null != O.current && N && (cancelIdleCallback(O.current), (O.current = null));
        }, [N]);
        let j = (0, s.K)(P);
        if (
            (null != v &&
                (l = (function (e) {
                    if (null == e) return null;
                    switch (e) {
                        case A.pe.GUILD:
                            return n(664419);
                        case A.pe.TIER_0:
                            return n(31427);
                        case A.pe.TIER_1:
                            return n(831180);
                        case A.pe.TIER_2:
                        case A.pe.LEGACY:
                            return n(29873);
                        default:
                            return null;
                    }
                })(v)),
            null != E &&
                null == l &&
                (E instanceof _.Ay
                    ? (l = E.getIconURL(
                          (function (e) {
                              switch (e) {
                                  case g.XXSMALL:
                                      return 16;
                                  case g.XSMALL:
                                      return 24;
                                  case g.SMALL:
                                      return 30;
                                  case g.MEDIUM:
                                      return 40;
                                  case g.MEDIUM_LARGE:
                                      return 48;
                                  case g.LARGE:
                                      return 60;
                                  default:
                                      return 80;
                              }
                          })(y),
                      ))
                    : E instanceof u.A
                      ? (l = p.Ay.getApplicationIconURL({ id: E.id, icon: E.iconHash }))
                      : null != E.icon && (l = p.Ay.getApplicationIconURL({ id: E.id, icon: E.icon }))),
            (l = (0, c.A)(b, l)),
            r.useEffect(() => {
                if (null == l || "" === l) return;
                if ((0, p.V0)(l) || (0, h.LE)(l)) return void w(l);
                let e = () =>
                    (0, h.yt)(l, (e, t) => {
                        w(l);
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
            }, [l, N]),
            void 0 === l && null != I)
        ) {
            let e = (function (e) {
                switch (e) {
                    case g.XSMALL:
                        return d.Ay.Sizes.SMALLER;
                    case g.SMALL:
                        return d.Ay.Sizes.SMALL;
                    case g.LARGE:
                        return d.Ay.Sizes.LARGE;
                    default:
                    case g.MEDIUM:
                        return d.Ay.Sizes.MEDIUM;
                }
            })(y);
            return (0, i.jsx)(d.Ay, { className: a()(m.Gt, T, S), guild: I, size: e });
        }
        if (null == l || "" === l)
            return C ? (x ?? (0, i.jsx)(o._, { size: "md", color: "currentColor", className: a()(m.Gt, y, S) })) : null;
        let U = E?.name,
            M =
                null != U && "" !== U
                    ? f.intl.formatToPlainString(f.t.tiKyYg, { applicationName: U })
                    : f.intl.string(f.t["2B/phM"]),
            D = (0, p.V0)(l),
            F = (0, h.LE)(l),
            k = R === l || D || F;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                k ? null : (0, i.jsx)("div", { className: a()(m.qD, y, S) }),
                (0, i.jsx)("img", {
                    ref: t,
                    alt: M,
                    src: l,
                    className: a()(m.Gt, y, S),
                    style: k ? void 0 : { display: "none" },
                }),
                (0, i.jsx)("div", { className: m.Xc, children: (0, i.jsx)("div", { ref: j, className: m.Pr }) }),
            ],
        });
    });
