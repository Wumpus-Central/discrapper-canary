"use strict";
r.d(t, { A: () => y, M: () => v });
var n = r(627968),
    i = r(64700),
    a = r(503698),
    l = r.n(a),
    s = r(172218),
    o = r(109112),
    c = r(635377),
    u = r.n(c),
    d = r(306044);
let _ = new (u())({ max: 1e3 });
var p = r(997013),
    f = r(548118),
    m = r(776231),
    h = r(395671),
    g = r(486020),
    b = r(788868),
    A = r(985018),
    E = r(444282);
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
                size: x = v.MEDIUM,
                allowUnknownGameIcon: C = !0,
                unknownGameIconFallback: R,
            } = e,
            [N, L] = i.useState(null),
            [w, O] = i.useState(!1),
            P = i.useCallback((e) => {
                O(e);
            }, []),
            D = i.useRef(null);
        i.useEffect(() => {
            null != D.current && w && (cancelIdleCallback(D.current), (D.current = null));
        }, [w]);
        let M = (0, s.K)(P);
        if (
            (null != y &&
                (a = (function (e) {
                    if (null == e) return null;
                    switch (e) {
                        case b.pe.GUILD:
                            return r(664419);
                        case b.pe.TIER_0:
                            return r(31427);
                        case b.pe.TIER_1:
                            return r(831180);
                        case b.pe.TIER_2:
                        case b.pe.LEGACY:
                            return r(29873);
                        default:
                            return null;
                    }
                })(y)),
            null != c &&
                null == a &&
                (c instanceof h.Ay
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
                          })(x),
                      ))
                    : c instanceof p.A
                      ? (a = g.Ay.getApplicationIconURL({ id: c.id, icon: c.iconHash }))
                      : null != c.icon && (a = g.Ay.getApplicationIconURL({ id: c.id, icon: c.icon }))),
            (a = (function (e, t) {
                let [r, n] = i.useState();
                return (
                    i.useEffect(() => {
                        if (null == e || null != t) return void n(void 0);
                        let r = _.get(e);
                        if (null != r) return void n(r);
                        let i = !1;
                        return (
                            (0, d.A)()
                                .then((t) => {
                                    null == t ||
                                        i ||
                                        t.identifyGame(e, (t, r) => {
                                            if (i) return;
                                            if (
                                                0 !== t ||
                                                null == r.icon ||
                                                "" === r.icon ||
                                                null == r.name ||
                                                "" === r.name
                                            )
                                                return void n(void 0);
                                            let a = `data:image/png;base64,${r.icon}`;
                                            _.set(e, a), n(a);
                                        });
                                })
                                .catch(() => {
                                    i || n(void 0);
                                }),
                            () => {
                                i = !0;
                            }
                        );
                    }, [e, t]),
                    t ?? r
                );
            })(I, a)),
            i.useEffect(() => {
                if (null == a || "" === a) return;
                if ((0, g.V0)(a) || (0, m.LE)(a)) return void L(a);
                let e = () =>
                    (0, m.yt)(a, (e, t) => {
                        L(a);
                    });
                if (w) return e();
                let t = requestIdleCallback(() => {
                    (D.current = null), e();
                });
                return (
                    (D.current = t),
                    () => {
                        null != D.current && (cancelIdleCallback(D.current), (D.current = null));
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
            })(x);
            return (0, n.jsx)(f.Ay, { className: l()(E.Gt, T, S), guild: u, size: e });
        }
        if (null == a || "" === a)
            return C ? (R ?? (0, n.jsx)(o._, { size: "md", color: "currentColor", className: l()(E.Gt, x, S) })) : null;
        let k = c?.name,
            j =
                null != k && "" !== k
                    ? A.intl.formatToPlainString(A.t.tiKyYg, { applicationName: k })
                    : A.intl.string(A.t["2B/phM"]),
            U = (0, g.V0)(a),
            F = (0, m.LE)(a),
            G = N === a || U || F;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                G ? null : (0, n.jsx)("div", { className: l()(E.qD, x, S) }),
                (0, n.jsx)("img", {
                    ref: t,
                    alt: j,
                    src: a,
                    className: l()(E.Gt, x, S),
                    style: G ? void 0 : { display: "none" },
                }),
                (0, n.jsx)("div", { className: E.Xc, children: (0, n.jsx)("div", { ref: M, className: E.Pr }) }),
            ],
        });
    });
