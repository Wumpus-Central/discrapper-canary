"use strict";
n.d(t, { A: () => I, M: () => v });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(172218),
    o = n(109112),
    c = n(635377),
    d = n.n(c),
    u = n(306044);
let _ = new (d())({ max: 1e3 });
var p = n(997013),
    f = n(548118),
    m = n(776231),
    h = n(395671),
    g = n(486020),
    b = n(788868),
    A = n(985018),
    E = n(444282);
let v = { XXSMALL: E.W6, XSMALL: E.s, SMALL: E.EX, MEDIUM: E.Y, MEDIUM_LARGE: E.rZ, LARGE: E.as, XLARGE: E.AQ },
    I = a.forwardRef(function (e, t) {
        let i,
            {
                game: c,
                guild: d,
                skuId: I,
                pid: y,
                className: x,
                guildClassName: S,
                size: T = v.MEDIUM,
                allowUnknownGameIcon: C = !0,
                unknownGameIconFallback: N,
            } = e,
            [R, w] = a.useState(null),
            [L, M] = a.useState(!1),
            O = a.useCallback((e) => {
                M(e);
            }, []),
            D = a.useRef(null);
        a.useEffect(() => {
            null != D.current && L && (cancelIdleCallback(D.current), (D.current = null));
        }, [L]);
        let P = (0, s.K)(O);
        if (
            (null != I &&
                (i = (function (e) {
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
                })(I)),
            null != c &&
                null == i &&
                (c instanceof h.Ay
                    ? (i = c.getIconURL(
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
                          })(T),
                      ))
                    : c instanceof p.A
                      ? (i = g.Ay.getApplicationIconURL({ id: c.id, icon: c.iconHash }))
                      : null != c.icon && (i = g.Ay.getApplicationIconURL({ id: c.id, icon: c.icon }))),
            (i = (function (e, t) {
                let [n, r] = a.useState();
                return (
                    a.useEffect(() => {
                        if (null == e || null != t) return void r(void 0);
                        let n = _.get(e);
                        if (null != n) return void r(n);
                        let a = !1;
                        return (
                            (0, u.A)()
                                .then((t) => {
                                    null == t ||
                                        a ||
                                        t.identifyGame(e, (t, n) => {
                                            if (a) return;
                                            if (
                                                0 !== t ||
                                                null == n.icon ||
                                                "" === n.icon ||
                                                null == n.name ||
                                                "" === n.name
                                            )
                                                return void r(void 0);
                                            let i = `data:image/png;base64,${n.icon}`;
                                            _.set(e, i), r(i);
                                        });
                                })
                                .catch(() => {
                                    a || r(void 0);
                                }),
                            () => {
                                a = !0;
                            }
                        );
                    }, [e, t]),
                    t ?? n
                );
            })(y, i)),
            a.useEffect(() => {
                if (null == i || "" === i) return;
                if ((0, g.V0)(i) || (0, m.LE)(i)) return void w(i);
                let e = () =>
                    (0, m.yt)(i, (e, t) => {
                        w(i);
                    });
                if (L) return e();
                let t = requestIdleCallback(() => {
                    (D.current = null), e();
                });
                return (
                    (D.current = t),
                    () => {
                        null != D.current && (cancelIdleCallback(D.current), (D.current = null));
                    }
                );
            }, [i, L]),
            void 0 === i && null != d)
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
            })(T);
            return (0, r.jsx)(f.Ay, { className: l()(E.Gt, S, x), guild: d, size: e });
        }
        if (null == i || "" === i)
            return C ? (N ?? (0, r.jsx)(o._, { size: "md", color: "currentColor", className: l()(E.Gt, T, x) })) : null;
        let j = c?.name,
            k =
                null != j && "" !== j
                    ? A.intl.formatToPlainString(A.t.tiKyYg, { applicationName: j })
                    : A.intl.string(A.t["2B/phM"]),
            U = (0, g.V0)(i),
            F = (0, m.LE)(i),
            B = R === i || U || F;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                B ? null : (0, r.jsx)("div", { className: l()(E.qD, T, x) }),
                (0, r.jsx)("img", {
                    ref: t,
                    alt: k,
                    src: i,
                    className: l()(E.Gt, T, x),
                    style: B ? void 0 : { display: "none" },
                }),
                (0, r.jsx)("div", { className: E.Xc, children: (0, r.jsx)("div", { ref: P, className: E.Pr }) }),
            ],
        });
    });
