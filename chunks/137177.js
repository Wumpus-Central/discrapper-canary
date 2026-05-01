"use strict";
n.d(t, { A: () => S, M: () => T });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(172218),
    l = n(109112),
    u = n(635377),
    c = n.n(u),
    d = n(306044);
let _ = new (c())({ max: 1e3 });
var f = n(997013),
    h = n(548118),
    p = n(776231),
    E = n(395671),
    m = n(486020),
    g = n(788868),
    A = n(375708),
    I = n(444282);
let T = { XXSMALL: I.W6, XSMALL: I.s, SMALL: I.EX, MEDIUM: I.Y, MEDIUM_LARGE: I.rZ, LARGE: I.as, XLARGE: I.AQ },
    S = r.forwardRef(function (e, t) {
        let s,
            {
                game: u,
                guild: c,
                skuId: S,
                pid: N,
                className: y,
                guildClassName: C,
                size: v = T.MEDIUM,
                allowUnknownGameIcon: O = !0,
                unknownGameIconFallback: R,
            } = e,
            [b, D] = r.useState(null),
            [L, w] = r.useState(!1),
            M = r.useCallback((e) => {
                w(e);
            }, []),
            P = r.useRef(null);
        r.useEffect(() => {
            null != P.current && L && (cancelIdleCallback(P.current), (P.current = null));
        }, [L]);
        let x = (0, o.K)(M);
        if (
            (null != S &&
                (s = (function (e) {
                    if (null == e) return null;
                    switch (e) {
                        case g.pe.GUILD:
                            return n(664419);
                        case g.pe.TIER_0:
                            return n(31427);
                        case g.pe.TIER_1:
                            return n(831180);
                        case g.pe.TIER_2:
                        case g.pe.LEGACY:
                            return n(29873);
                        default:
                            return null;
                    }
                })(S)),
            null != u &&
                null == s &&
                (u instanceof E.Ay
                    ? (s = u.getIconURL(
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
                          })(v),
                      ))
                    : u instanceof f.A
                      ? (s = m.Ay.getApplicationIconURL({ id: u.id, icon: u.iconHash }))
                      : null != u.icon && (s = m.Ay.getApplicationIconURL({ id: u.id, icon: u.icon }))),
            (s = (function (e, t) {
                let [n, i] = r.useState();
                return (
                    r.useEffect(() => {
                        if (null == e || null != t) return void i(void 0);
                        let n = _.get(e);
                        if (null != n) return void i(n);
                        let r = !1;
                        return (
                            (0, d.A)()
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
                                            _.set(e, s), i(s);
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
                if ((0, m.V0)(s) || (0, p.LE)(s)) return void D(s);
                let e = () =>
                    (0, p.yt)(s, (e, t) => {
                        D(s);
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
            void 0 === s && null != c)
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
            })(v);
            return (0, i.jsx)(h.Ay, { className: a()(I.Gt, C, y), guild: c, size: e });
        }
        if (null == s || "" === s)
            return O ? (R ?? (0, i.jsx)(l._, { size: "md", color: "currentColor", className: a()(I.Gt, v, y) })) : null;
        let U = u?.name,
            k =
                null != U && "" !== U
                    ? A.intl.formatToPlainString(A.t.tiKyYg, { applicationName: U })
                    : A.intl.string(A.t["2B/phM"]),
            G = (0, m.V0)(s),
            F = (0, p.LE)(s),
            V = b === s || G || F;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                V ? null : (0, i.jsx)("div", { className: a()(I.qD, v, y) }),
                (0, i.jsx)("img", {
                    ref: t,
                    alt: k,
                    src: s,
                    className: a()(I.Gt, v, y),
                    style: V ? void 0 : { display: "none" },
                }),
                (0, i.jsx)("div", { className: I.Xc, children: (0, i.jsx)("div", { ref: x, className: I.Pr }) }),
            ],
        });
    });
