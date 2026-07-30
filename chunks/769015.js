"use strict";
n.d(t, { A: () => f, M: () => I });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(172218),
    o = n(109112),
    d = n(832604),
    c = n(548118),
    u = n(597098),
    _ = n(486020),
    E = n(202541),
    A = n(375708),
    h = n(892354);
let I = { XXSMALL: h.W6, XSMALL: h.s, SMALL: h.EX, MEDIUM: h.Y, MEDIUM_LARGE: h.rZ, LARGE: h.as, XLARGE: h.AQ },
    f = r.forwardRef(function (e, t) {
        let a,
            {
                game: f,
                guild: p,
                skuId: T,
                pid: m,
                className: g,
                guildClassName: S,
                size: N = I.MEDIUM,
                allowUnknownGameIcon: C = !0,
                unknownGameIconFallback: O,
            } = e,
            [R, L] = r.useState(null),
            [D, y] = r.useState(!1),
            v = r.useCallback((e) => {
                y(e);
            }, []),
            b = r.useRef(null);
        r.useEffect(() => {
            null != b.current && D && (cancelIdleCallback(b.current), (b.current = null));
        }, [D]);
        let M = (0, l.K)(v);
        if (
            (null != T &&
                (a = (function (e) {
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
            null != f &&
                null == a &&
                (a = f.getIconURL(
                    (function (e) {
                        switch (e) {
                            case I.XXSMALL:
                                return 16;
                            case I.XSMALL:
                                return 24;
                            case I.SMALL:
                                return 30;
                            case I.MEDIUM:
                                return 40;
                            case I.MEDIUM_LARGE:
                                return 48;
                            case I.LARGE:
                                return 60;
                            default:
                                return 80;
                        }
                    })(N),
                )),
            (a = (0, d.A)(m, a)),
            r.useEffect(() => {
                if (null == a || "" === a) return;
                if ((0, _.V0)(a) || (0, u.LE)(a)) return void L(a);
                function e() {
                    if (null != a && "" !== a)
                        return (0, u.yt)(a, (e, t) => {
                            L(a);
                        });
                }
                if (D) return e();
                let t = requestIdleCallback(() => {
                    (b.current = null), e();
                });
                return (
                    (b.current = t),
                    () => {
                        null != b.current && (cancelIdleCallback(b.current), (b.current = null));
                    }
                );
            }, [a, D]),
            void 0 === a && null != p)
        ) {
            let e = (function (e) {
                switch (e) {
                    case I.XSMALL:
                        return c.Ay.Sizes.SMALLER;
                    case I.SMALL:
                        return c.Ay.Sizes.SMALL;
                    case I.LARGE:
                        return c.Ay.Sizes.LARGE;
                    default:
                    case I.MEDIUM:
                        return c.Ay.Sizes.MEDIUM;
                }
            })(N);
            return (0, i.jsx)(c.Ay, { className: s()(h.Gt, S, g), guild: p, size: e });
        }
        if (null == a || "" === a)
            return C ? (O ?? (0, i.jsx)(o._, { size: "md", color: "currentColor", className: s()(h.Gt, N, g) })) : null;
        let P = f?.name,
            U =
                null != P && "" !== P
                    ? A.intl.formatToPlainString(A.t.tiKyYg, { applicationName: P })
                    : A.intl.string(A.t["2B/phM"]),
            w = (0, _.V0)(a),
            G = (0, u.LE)(a),
            x = R === a || w || G;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                x ? null : (0, i.jsx)("div", { className: s()(h.qD, N, g) }),
                (0, i.jsx)("img", {
                    ref: t,
                    alt: U,
                    src: a,
                    className: s()(h.Gt, N, g),
                    style: x ? void 0 : { display: "none" },
                }),
                (0, i.jsx)("div", { className: h.Xc, children: (0, i.jsx)("div", { ref: M, className: h.Pr }) }),
            ],
        });
    });
