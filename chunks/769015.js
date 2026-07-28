"use strict";
n.d(t, { A: () => T, M: () => p });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(172218),
    o = n(109112),
    d = n(832604),
    c = n(997013),
    u = n(548118),
    _ = n(597098),
    E = n(395671),
    A = n(486020),
    h = n(202541),
    I = n(375708),
    f = n(892354);
let p = { XXSMALL: f.W6, XSMALL: f.s, SMALL: f.EX, MEDIUM: f.Y, MEDIUM_LARGE: f.rZ, LARGE: f.as, XLARGE: f.AQ },
    T = r.forwardRef(function (e, t) {
        let a,
            {
                game: T,
                guild: m,
                skuId: g,
                pid: S,
                className: N,
                guildClassName: C,
                size: O = p.MEDIUM,
                allowUnknownGameIcon: R = !0,
                unknownGameIconFallback: L,
            } = e,
            [y, D] = r.useState(null),
            [v, b] = r.useState(!1),
            M = r.useCallback((e) => {
                b(e);
            }, []),
            P = r.useRef(null);
        r.useEffect(() => {
            null != P.current && v && (cancelIdleCallback(P.current), (P.current = null));
        }, [v]);
        let U = (0, l.K)(M);
        if (
            (null != g &&
                (a = (function (e) {
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
                })(g)),
            null != T &&
                null == a &&
                (T instanceof E.Ay || T instanceof c.A
                    ? (a = T.getIconURL(
                          (function (e) {
                              switch (e) {
                                  case p.XXSMALL:
                                      return 16;
                                  case p.XSMALL:
                                      return 24;
                                  case p.SMALL:
                                      return 30;
                                  case p.MEDIUM:
                                      return 40;
                                  case p.MEDIUM_LARGE:
                                      return 48;
                                  case p.LARGE:
                                      return 60;
                                  default:
                                      return 80;
                              }
                          })(O),
                      ))
                    : null != T.icon && (a = A.Ay.getApplicationIconURL({ id: T.id, icon: T.icon }))),
            (a = (0, d.A)(S, a)),
            r.useEffect(() => {
                if (null == a || "" === a) return;
                if ((0, A.V0)(a) || (0, _.LE)(a)) return void D(a);
                function e() {
                    if (null != a && "" !== a)
                        return (0, _.yt)(a, (e, t) => {
                            D(a);
                        });
                }
                if (v) return e();
                let t = requestIdleCallback(() => {
                    (P.current = null), e();
                });
                return (
                    (P.current = t),
                    () => {
                        null != P.current && (cancelIdleCallback(P.current), (P.current = null));
                    }
                );
            }, [a, v]),
            void 0 === a && null != m)
        ) {
            let e = (function (e) {
                switch (e) {
                    case p.XSMALL:
                        return u.Ay.Sizes.SMALLER;
                    case p.SMALL:
                        return u.Ay.Sizes.SMALL;
                    case p.LARGE:
                        return u.Ay.Sizes.LARGE;
                    default:
                    case p.MEDIUM:
                        return u.Ay.Sizes.MEDIUM;
                }
            })(O);
            return (0, i.jsx)(u.Ay, { className: s()(f.Gt, C, N), guild: m, size: e });
        }
        if (null == a || "" === a)
            return R ? (L ?? (0, i.jsx)(o._, { size: "md", color: "currentColor", className: s()(f.Gt, O, N) })) : null;
        let w = T?.name,
            G =
                null != w && "" !== w
                    ? I.intl.formatToPlainString(I.t.tiKyYg, { applicationName: w })
                    : I.intl.string(I.t["2B/phM"]),
            x = (0, A.V0)(a),
            k = (0, _.LE)(a),
            F = y === a || x || k;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                F ? null : (0, i.jsx)("div", { className: s()(f.qD, O, N) }),
                (0, i.jsx)("img", {
                    ref: t,
                    alt: G,
                    src: a,
                    className: s()(f.Gt, O, N),
                    style: F ? void 0 : { display: "none" },
                }),
                (0, i.jsx)("div", { className: f.Xc, children: (0, i.jsx)("div", { ref: U, className: f.Pr }) }),
            ],
        });
    });
