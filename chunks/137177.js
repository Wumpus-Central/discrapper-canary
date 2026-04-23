"use strict";
n.d(t, { A: () => S, M: () => T });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(172218),
    l = n(109112),
    d = n(635377),
    _ = n.n(d),
    u = n(306044);
let c = new (_())({ max: 1e3 });
var E = n(997013),
    h = n(548118),
    m = n(776231),
    f = n(395671),
    g = n(486020),
    p = n(788868),
    A = n(985018),
    I = n(444282);
let T = { XXSMALL: I.W6, XSMALL: I.s, SMALL: I.EX, MEDIUM: I.Y, MEDIUM_LARGE: I.rZ, LARGE: I.as, XLARGE: I.AQ },
    S = r.forwardRef(function (e, t) {
        let s,
            {
                game: d,
                guild: _,
                skuId: S,
                pid: N,
                className: C,
                guildClassName: R,
                size: O = T.MEDIUM,
                allowUnknownGameIcon: y = !0,
                unknownGameIconFallback: v,
            } = e,
            [D, L] = r.useState(null),
            [b, w] = r.useState(!1),
            P = r.useCallback((e) => {
                w(e);
            }, []),
            k = r.useRef(null);
        r.useEffect(() => {
            null != k.current && b && (cancelIdleCallback(k.current), (k.current = null));
        }, [b]);
        let M = (0, o.K)(P);
        if (
            (null != S &&
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
                })(S)),
            null != d &&
                null == s &&
                (d instanceof f.Ay
                    ? (s = d.getIconURL(
                          (function (e) {
                              switch (e) {
                                  case T.XXSMALL:
                                      return 16;
                                  case T.XSMALL:
                                      return 24;
                                  case T.SMALL:
                                      return 30;
                                  case T.MEDIUM:
                                      return 40;
                                  case T.MEDIUM_LARGE:
                                      return 48;
                                  case T.LARGE:
                                      return 60;
                                  default:
                                      return 80;
                              }
                          })(O),
                      ))
                    : d instanceof E.A
                      ? (s = g.Ay.getApplicationIconURL({ id: d.id, icon: d.iconHash }))
                      : null != d.icon && (s = g.Ay.getApplicationIconURL({ id: d.id, icon: d.icon }))),
            (s = (function (e, t) {
                let [n, i] = r.useState();
                return (
                    r.useEffect(() => {
                        if (null == e || null != t) return void i(void 0);
                        let n = c.get(e);
                        if (null != n) return void i(n);
                        let r = !1;
                        return (
                            (0, u.A)()
                                .then((t) => {
                                    null == t ||
                                        r ||
                                        t.identifyGame(e, (t, n) => {
                                            if (r) return;
                                            if (
                                                0 !== t ||
                                                null == n.icon ||
                                                "" === n.icon ||
                                                null == n.name ||
                                                "" === n.name
                                            )
                                                return void i(void 0);
                                            let s = `data:image/png;base64,${n.icon}`;
                                            c.set(e, s), i(s);
                                        });
                                })
                                .catch(() => {
                                    r || i(void 0);
                                }),
                            () => {
                                r = !0;
                            }
                        );
                    }, [e, t]),
                    t ?? n
                );
            })(N, s)),
            r.useEffect(() => {
                if (null == s || "" === s) return;
                if ((0, g.V0)(s) || (0, m.LE)(s)) return void L(s);
                let e = () =>
                    (0, m.yt)(s, (e, t) => {
                        L(s);
                    });
                if (b) return e();
                let t = requestIdleCallback(() => {
                    (k.current = null), e();
                });
                return (
                    (k.current = t),
                    () => {
                        null != k.current && (cancelIdleCallback(k.current), (k.current = null));
                    }
                );
            }, [s, b]),
            void 0 === s && null != _)
        ) {
            let e = (function (e) {
                switch (e) {
                    case T.XSMALL:
                        return h.Ay.Sizes.SMALLER;
                    case T.SMALL:
                        return h.Ay.Sizes.SMALL;
                    case T.LARGE:
                        return h.Ay.Sizes.LARGE;
                    default:
                    case T.MEDIUM:
                        return h.Ay.Sizes.MEDIUM;
                }
            })(O);
            return (0, i.jsx)(h.Ay, { className: a()(I.Gt, R, C), guild: _, size: e });
        }
        if (null == s || "" === s)
            return y ? (v ?? (0, i.jsx)(l._, { size: "md", color: "currentColor", className: a()(I.Gt, O, C) })) : null;
        let U = d?.name,
            x =
                null != U && "" !== U
                    ? A.intl.formatToPlainString(A.t.tiKyYg, { applicationName: U })
                    : A.intl.string(A.t["2B/phM"]),
            G = (0, g.V0)(s),
            V = (0, m.LE)(s),
            F = D === s || G || V;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                F ? null : (0, i.jsx)("div", { className: a()(I.qD, O, C) }),
                (0, i.jsx)("img", {
                    ref: t,
                    alt: x,
                    src: s,
                    className: a()(I.Gt, O, C),
                    style: F ? void 0 : { display: "none" },
                }),
                (0, i.jsx)("div", { className: I.Xc, children: (0, i.jsx)("div", { ref: M, className: I.Pr }) }),
            ],
        });
    });
