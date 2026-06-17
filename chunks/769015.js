"use strict";
n.d(t, { A: () => A, M: () => g });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(172218),
    l = n(109112),
    u = n(832604),
    c = n(265398),
    d = n(548118),
    _ = n(776231),
    h = n(395671),
    f = n(486020),
    p = n(788868),
    E = n(375708),
    m = n(550266);
let g = { XXSMALL: m.W6, XSMALL: m.s, SMALL: m.EX, MEDIUM: m.Y, MEDIUM_LARGE: m.rZ, LARGE: m.as, XLARGE: m.AQ },
    A = r.forwardRef(function (e, t) {
        let s,
            {
                game: A,
                guild: I,
                skuId: T,
                pid: S,
                className: y,
                guildClassName: C,
                size: N = g.MEDIUM,
                allowUnknownGameIcon: v = !0,
                unknownGameIconFallback: R,
            } = e,
            [O, b] = r.useState(null),
            [D, L] = r.useState(!1),
            w = r.useCallback((e) => {
                L(e);
            }, []),
            M = r.useRef(null);
        r.useEffect(() => {
            null != M.current && D && (cancelIdleCallback(M.current), (M.current = null));
        }, [D]);
        let P = (0, o.K)(w);
        if (
            (null != T &&
                (s = (function (e) {
                    if (null == e) return null;
                    switch (e) {
                        case p.pe.GUILD:
                            return n(664419);
                        case p.pe.TIER_0:
                            return n(31427);
                        case p.pe.TIER_1:
                            return n(831180);
                        case p.pe.TIER_2:
                        case p.pe.LEGACY:
                            return n(29873);
                        default:
                            return null;
                    }
                })(T)),
            null != A &&
                null == s &&
                (A instanceof h.Ay
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
                          })(N),
                      ))
                    : A instanceof c.A
                      ? (s = f.Ay.getApplicationIconURL({ id: A.id, icon: A.iconHash }))
                      : null != A.icon && (s = f.Ay.getApplicationIconURL({ id: A.id, icon: A.icon }))),
            (s = (0, u.A)(S, s)),
            r.useEffect(() => {
                if (null == s || "" === s) return;
                if ((0, f.V0)(s) || (0, _.LE)(s)) return void b(s);
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
            })(N);
            return (0, i.jsx)(d.Ay, { className: a()(m.Gt, C, y), guild: I, size: e });
        }
        if (null == s || "" === s)
            return v ? (R ?? (0, i.jsx)(l._, { size: "md", color: "currentColor", className: a()(m.Gt, N, y) })) : null;
        let x = A?.name,
            k =
                null != x && "" !== x
                    ? E.intl.formatToPlainString(E.t.tiKyYg, { applicationName: x })
                    : E.intl.string(E.t["2B/phM"]),
            U = (0, f.V0)(s),
            G = (0, _.LE)(s),
            F = O === s || U || G;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                F ? null : (0, i.jsx)("div", { className: a()(m.qD, N, y) }),
                (0, i.jsx)("img", {
                    ref: t,
                    alt: k,
                    src: s,
                    className: a()(m.Gt, N, y),
                    style: F ? void 0 : { display: "none" },
                }),
                (0, i.jsx)("div", { className: m.Xc, children: (0, i.jsx)("div", { ref: P, className: m.Pr }) }),
            ],
        });
    });
