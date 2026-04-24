"use strict";
n.d(t, { A: () => y, M: () => v });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(172218),
    o = n(109112),
    c = n(635377),
    u = n.n(c),
    d = n(306044);
let _ = new (u())({ max: 1e3 });
var p = n(997013),
    f = n(548118),
    h = n(776231),
    m = n(395671),
    g = n(486020),
    b = n(788868),
    A = n(985018),
    E = n(444282);
let v = { XXSMALL: E.W6, XSMALL: E.s, SMALL: E.EX, MEDIUM: E.Y, MEDIUM_LARGE: E.rZ, LARGE: E.as, XLARGE: E.AQ },
    y = i.forwardRef(function (e, t) {
        let a,
            {
                game: c,
                guild: u,
                skuId: y,
                pid: I,
                className: S,
                guildClassName: T,
                size: C = v.MEDIUM,
                allowUnknownGameIcon: x = !0,
                unknownGameIconFallback: R,
            } = e,
            [N, L] = i.useState(null),
            [w, O] = i.useState(!1),
            D = i.useCallback((e) => {
                O(e);
            }, []),
            P = i.useRef(null);
        i.useEffect(() => {
            null != P.current && w && (cancelIdleCallback(P.current), (P.current = null));
        }, [w]);
        let M = (0, s.K)(D);
        if (
            (null != y &&
                (a = (function (e) {
                    if (null == e) return null;
                    switch (e) {
                        case b.pe.GUILD:
                            return n(664419);
                        case b.pe.TIER_0:
                            return n(31427);
                        case b.pe.TIER_1:
                            return n(831180);
                        case b.pe.TIER_2:
                        case b.pe.LEGACY:
                            return n(29873);
                        default:
                            return null;
                    }
                })(y)),
            null != c &&
                null == a &&
                (c instanceof m.Ay
                    ? (a = c.getIconURL(
                          (function (e) {
                              switch (e) {
                                  case v.XXSMALL:
                                      return 16;
                                  case v.XSMALL:
                                      return 24;
                                  case v.SMALL:
                                      return 30;
                                  case v.MEDIUM:
                                      return 40;
                                  case v.MEDIUM_LARGE:
                                      return 48;
                                  case v.LARGE:
                                      return 60;
                                  default:
                                      return 80;
                              }
                          })(C),
                      ))
                    : c instanceof p.A
                      ? (a = g.Ay.getApplicationIconURL({ id: c.id, icon: c.iconHash }))
                      : null != c.icon && (a = g.Ay.getApplicationIconURL({ id: c.id, icon: c.icon }))),
            (a = (function (e, t) {
                let [n, r] = i.useState();
                return (
                    i.useEffect(() => {
                        if (null == e || null != t) return void r(void 0);
                        let n = _.get(e);
                        if (null != n) return void r(n);
                        let i = !1;
                        return (
                            (0, d.A)()
                                .then((t) => {
                                    null == t ||
                                        i ||
                                        t.identifyGame(e, (t, n) => {
                                            if (i) return;
                                            if (
                                                0 !== t ||
                                                null == n.icon ||
                                                "" === n.icon ||
                                                null == n.name ||
                                                "" === n.name
                                            )
                                                return void r(void 0);
                                            let a = `data:image/png;base64,${n.icon}`;
                                            _.set(e, a), r(a);
                                        });
                                })
                                .catch(() => {
                                    i || r(void 0);
                                }),
                            () => {
                                i = !0;
                            }
                        );
                    }, [e, t]),
                    t ?? n
                );
            })(I, a)),
            i.useEffect(() => {
                if (null == a || "" === a) return;
                if ((0, g.V0)(a) || (0, h.LE)(a)) return void L(a);
                let e = () =>
                    (0, h.yt)(a, (e, t) => {
                        L(a);
                    });
                if (w) return e();
                let t = requestIdleCallback(() => {
                    (P.current = null), e();
                });
                return (
                    (P.current = t),
                    () => {
                        null != P.current && (cancelIdleCallback(P.current), (P.current = null));
                    }
                );
            }, [a, w]),
            void 0 === a && null != u)
        ) {
            let e = (function (e) {
                switch (e) {
                    case v.XSMALL:
                        return f.Ay.Sizes.SMALLER;
                    case v.SMALL:
                        return f.Ay.Sizes.SMALL;
                    case v.LARGE:
                        return f.Ay.Sizes.LARGE;
                    default:
                    case v.MEDIUM:
                        return f.Ay.Sizes.MEDIUM;
                }
            })(C);
            return (0, r.jsx)(f.Ay, { className: l()(E.Gt, T, S), guild: u, size: e });
        }
        if (null == a || "" === a)
            return x ? (R ?? (0, r.jsx)(o._, { size: "md", color: "currentColor", className: l()(E.Gt, C, S) })) : null;
        let k = c?.name,
            j =
                null != k && "" !== k
                    ? A.intl.formatToPlainString(A.t.tiKyYg, { applicationName: k })
                    : A.intl.string(A.t["2B/phM"]),
            U = (0, g.V0)(a),
            F = (0, h.LE)(a),
            B = N === a || U || F;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                B ? null : (0, r.jsx)("div", { className: l()(E.qD, C, S) }),
                (0, r.jsx)("img", {
                    ref: t,
                    alt: j,
                    src: a,
                    className: l()(E.Gt, C, S),
                    style: B ? void 0 : { display: "none" },
                }),
                (0, r.jsx)("div", { className: E.Xc, children: (0, r.jsx)("div", { ref: M, className: E.Pr }) }),
            ],
        });
    });
