"use strict";
n.d(t, { A: () => A, M: () => g });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(172218),
    l = n(109112),
    u = n(832604),
    c = n(997013),
    d = n(548118),
    _ = n(776231),
    h = n(395671),
    f = n(486020),
    E = n(202541),
    p = n(375708),
    m = n(444282);
let g = { XXSMALL: m.W6, XSMALL: m.s, SMALL: m.EX, MEDIUM: m.Y, MEDIUM_LARGE: m.rZ, LARGE: m.as, XLARGE: m.AQ },
    A = r.forwardRef(function (e, t) {
        let s,
            {
                game: A,
                guild: I,
                skuId: T,
                pid: S,
                className: N,
                guildClassName: C,
                size: y = g.MEDIUM,
                allowUnknownGameIcon: O = !0,
                unknownGameIconFallback: R,
            } = e,
            [v, b] = r.useState(null),
            [L, D] = r.useState(!1),
            w = r.useCallback((e) => {
                D(e);
            }, []),
            P = r.useRef(null);
        r.useEffect(() => {
            null != P.current && L && (cancelIdleCallback(P.current), (P.current = null));
        }, [L]);
        let M = (0, o.K)(w);
        if (
            (null != T &&
                (s = (function (e) {
                    if (null == e) return null;
                    switch (e) {
                        case E.pe.GUILD:
                            return n(664419);
                        case E.pe.TIER_0:
                            return n(31427);
                        case E.pe.TIER_1:
                            return n(831180);
                        case E.pe.TIER_2:
                        case E.pe.LEGACY:
                            return n(29873);
                        default:
                            return null;
                    }
                })(T)),
            null != A &&
                null == s &&
                (A instanceof h.Ay || A instanceof c.A
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
                          })(y),
                      ))
                    : null != A.icon && (s = f.Ay.getApplicationIconURL({ id: A.id, icon: A.icon }))),
            (s = (0, u.A)(S, s)),
            r.useEffect(() => {
                if (null == s || "" === s) return;
                if ((0, f.V0)(s) || (0, _.LE)(s)) return void b(s);
                let e = () =>
                    (0, _.yt)(s, (e, t) => {
                        b(s);
                    });
                if (L) return e();
                let t = requestIdleCallback(() => {
                    (P.current = null), e();
                });
                return (
                    (P.current = t),
                    () => {
                        null != P.current && (cancelIdleCallback(P.current), (P.current = null));
                    }
                );
            }, [s, L]),
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
            })(y);
            return (0, i.jsx)(d.Ay, { className: a()(m.Gt, C, N), guild: I, size: e });
        }
        if (null == s || "" === s)
            return O ? (R ?? (0, i.jsx)(l._, { size: "md", color: "currentColor", className: a()(m.Gt, y, N) })) : null;
        let x = A?.name,
            U =
                null != x && "" !== x
                    ? p.intl.formatToPlainString(p.t.tiKyYg, { applicationName: x })
                    : p.intl.string(p.t["2B/phM"]),
            k = (0, f.V0)(s),
            G = (0, _.LE)(s),
            V = v === s || k || G;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                V ? null : (0, i.jsx)("div", { className: a()(m.qD, y, N) }),
                (0, i.jsx)("img", {
                    ref: t,
                    alt: U,
                    src: s,
                    className: a()(m.Gt, y, N),
                    style: V ? void 0 : { display: "none" },
                }),
                (0, i.jsx)("div", { className: m.Xc, children: (0, i.jsx)("div", { ref: M, className: m.Pr }) }),
            ],
        });
    });
