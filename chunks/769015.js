"use strict";
i.d(t, { A: () => E, M: () => g });
var n = i(627968),
    l = i(64700),
    r = i(503698),
    a = i.n(r),
    s = i(172218),
    o = i(109112),
    c = i(832604),
    u = i(997013),
    d = i(263063),
    _ = i(776231),
    p = i(611010),
    m = i(486020),
    h = i(788868),
    A = i(985018),
    f = i(550266);
let g = { XXSMALL: f.W6, XSMALL: f.s, SMALL: f.EX, MEDIUM: f.Y, MEDIUM_LARGE: f.rZ, LARGE: f.as, XLARGE: f.AQ },
    E = l.forwardRef(function (e, t) {
        let r,
            {
                game: E,
                guild: I,
                skuId: v,
                pid: T,
                className: C,
                guildClassName: S,
                size: b = g.MEDIUM,
                allowUnknownGameIcon: y = !0,
                unknownGameIconFallback: x,
            } = e,
            [R, N] = l.useState(null),
            [L, O] = l.useState(!1),
            M = l.useCallback((e) => {
                O(e);
            }, []),
            w = l.useRef(null);
        l.useEffect(() => {
            null != w.current && L && (cancelIdleCallback(w.current), (w.current = null));
        }, [L]);
        let P = (0, s.K)(M);
        if (
            (null != v &&
                (r = (function (e) {
                    if (null == e) return null;
                    switch (e) {
                        case h.pe.GUILD:
                            return i(664419);
                        case h.pe.TIER_0:
                            return i(31427);
                        case h.pe.TIER_1:
                            return i(831180);
                        case h.pe.TIER_2:
                        case h.pe.LEGACY:
                            return i(29873);
                        default:
                            return null;
                    }
                })(v)),
            null != E &&
                null == r &&
                (E instanceof p.Ay
                    ? (r = E.getIconURL(
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
                          })(b),
                      ))
                    : E instanceof u.A
                      ? (r = m.Ay.getApplicationIconURL({ id: E.id, icon: E.iconHash }))
                      : null != E.icon && (r = m.Ay.getApplicationIconURL({ id: E.id, icon: E.icon }))),
            (r = (0, c.A)(T, r)),
            l.useEffect(() => {
                if (null == r || "" === r) return;
                if ((0, m.V0)(r) || (0, _.LE)(r)) return void N(r);
                let e = () =>
                    (0, _.yt)(r, (e, t) => {
                        N(r);
                    });
                if (L) return e();
                let t = requestIdleCallback(() => {
                    (w.current = null), e();
                });
                return (
                    (w.current = t),
                    () => {
                        null != w.current && (cancelIdleCallback(w.current), (w.current = null));
                    }
                );
            }, [r, L]),
            void 0 === r && null != I)
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
            })(b);
            return (0, n.jsx)(d.Ay, { className: a()(f.Gt, S, C), guild: I, size: e });
        }
        if (null == r || "" === r)
            return y ? (x ?? (0, n.jsx)(o._, { size: "md", color: "currentColor", className: a()(f.Gt, b, C) })) : null;
        let D = E?.name,
            j =
                null != D && "" !== D
                    ? A.intl.formatToPlainString(A.t.tiKyYg, { applicationName: D })
                    : A.intl.string(A.t["2B/phM"]),
            U = (0, m.V0)(r),
            F = (0, _.LE)(r),
            G = R === r || U || F;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                G ? null : (0, n.jsx)("div", { className: a()(f.qD, b, C) }),
                (0, n.jsx)("img", {
                    ref: t,
                    alt: j,
                    src: r,
                    className: a()(f.Gt, b, C),
                    style: G ? void 0 : { display: "none" },
                }),
                (0, n.jsx)("div", { className: f.Xc, children: (0, n.jsx)("div", { ref: P, className: f.Pr }) }),
            ],
        });
    });
