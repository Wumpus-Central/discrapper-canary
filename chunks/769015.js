"use strict";
n.d(t, { A: () => A, M: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(172218),
    l = n(109112),
    u = n(832604),
    c = n(997013),
    d = n(263063),
    _ = n(776231),
    f = n(611010),
    p = n(486020),
    h = n(788868),
    E = n(985018),
    m = n(444282);
let g = { XXSMALL: m.W6, XSMALL: m.s, SMALL: m.EX, MEDIUM: m.Y, MEDIUM_LARGE: m.rZ, LARGE: m.as, XLARGE: m.AQ },
    A = i.forwardRef(function (e, t) {
        let s,
            {
                game: A,
                guild: I,
                skuId: T,
                pid: S,
                className: y,
                guildClassName: N,
                size: v = g.MEDIUM,
                allowUnknownGameIcon: C = !0,
                unknownGameIconFallback: O,
            } = e,
            [R, b] = i.useState(null),
            [D, L] = i.useState(!1),
            w = i.useCallback((e) => {
                L(e);
            }, []),
            M = i.useRef(null);
        i.useEffect(() => {
            null != M.current && D && (cancelIdleCallback(M.current), (M.current = null));
        }, [D]);
        let P = (0, o.K)(w);
        if (
            (null != T &&
                (s = (function (e) {
                    if (null == e) return null;
                    switch (e) {
                        case h.pe.GUILD:
                            return n(664419);
                        case h.pe.TIER_0:
                            return n(31427);
                        case h.pe.TIER_1:
                            return n(831180);
                        case h.pe.TIER_2:
                        case h.pe.LEGACY:
                            return n(29873);
                        default:
                            return null;
                    }
                })(T)),
            null != A &&
                null == s &&
                (A instanceof f.Ay
                    ? (s = A.getIconURL(
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
                          })(v),
                      ))
                    : A instanceof c.A
                      ? (s = p.Ay.getApplicationIconURL({ id: A.id, icon: A.iconHash }))
                      : null != A.icon && (s = p.Ay.getApplicationIconURL({ id: A.id, icon: A.icon }))),
            (s = (0, u.A)(S, s)),
            i.useEffect(() => {
                if (null == s || "" === s) return;
                if ((0, p.V0)(s) || (0, _.LE)(s)) return void b(s);
                let e = () =>
                    (0, _.yt)(s, (e, t) => {
                        b(s);
                    });
                if (D) return e();
                let t = requestIdleCallback(() => {
                    (M.current = null), e();
                });
                return (
                    (M.current = t),
                    () => {
                        null != M.current && (cancelIdleCallback(M.current), (M.current = null));
                    }
                );
            }, [s, D]),
            void 0 === s && null != I)
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
            })(v);
            return (0, r.jsx)(d.Ay, { className: a()(m.Gt, N, y), guild: I, size: e });
        }
        if (null == s || "" === s)
            return C ? (O ?? (0, r.jsx)(l._, { size: "md", color: "currentColor", className: a()(m.Gt, v, y) })) : null;
        let x = A?.name,
            k =
                null != x && "" !== x
                    ? E.intl.formatToPlainString(E.t.tiKyYg, { applicationName: x })
                    : E.intl.string(E.t["2B/phM"]),
            U = (0, p.V0)(s),
            G = (0, _.LE)(s),
            F = R === s || U || G;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                F ? null : (0, r.jsx)("div", { className: a()(m.qD, v, y) }),
                (0, r.jsx)("img", {
                    ref: t,
                    alt: k,
                    src: s,
                    className: a()(m.Gt, v, y),
                    style: F ? void 0 : { display: "none" },
                }),
                (0, r.jsx)("div", { className: m.Xc, children: (0, r.jsx)("div", { ref: P, className: m.Pr }) }),
            ],
        });
    });
