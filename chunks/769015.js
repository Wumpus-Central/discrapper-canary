var r = t(477900),
    l = t(582128),
    s = t(503698),
    u = t.n(s),
    c = t(172218),
    a = t(109112),
    i = t(832604),
    f = t(997013),
    o = t(744700),
    d = t(682163),
    A = t(776231),
    L = t(327891),
    M = t(486020),
    E = t(854456),
    p = t(682901),
    m = t(792996),
    S = t(989533);
let v = { XXSMALL: S.W6, XSMALL: S.s, SMALL: S.EX, MEDIUM: S.Y, MEDIUM_LARGE: S.rZ, LARGE: S.as, XLARGE: S.AQ };
function I(e) {
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
}
t.d(
    n,
    {},
    {
        A: function (e) {
            let n,
                {
                    game: s,
                    guild: g,
                    skuId: G,
                    pid: h,
                    className: R,
                    guildClassName: x,
                    size: b = v.MEDIUM,
                    allowUnknownGameIcon: y = !0,
                    unknownGameIconFallback: U,
                    withBackground: X = !1,
                    ref: k,
                } = e,
                D = (0, E.A)(X),
                [C, j] = l.useState(null),
                [w, z] = l.useState(!1),
                N = l.useCallback((e) => {
                    z(e);
                }, []),
                _ = l.useRef(null);
            l.useEffect(() => {
                null != _.current && w && (cancelIdleCallback(_.current), (_.current = null));
            }, [w]);
            let T = (0, c.K)(N);
            if (
                (null != G &&
                    (n = (function (e) {
                        if (null == e) return null;
                        switch (e) {
                            case p.pe.GUILD:
                                return t(664419);
                            case p.pe.TIER_0:
                                return t(31427);
                            case p.pe.TIER_1:
                                return t(831180);
                            case p.pe.TIER_2:
                            case p.pe.LEGACY:
                                return t(29873);
                            default:
                                return null;
                        }
                    })(G)),
                null != s &&
                    null == n &&
                    (s instanceof L.Ay || s instanceof f.A
                        ? (n = s.getIconURL(I(b)))
                        : null != s.icon && (n = (0, o.A)(s.id, s.icon, { size: I(b) }))),
                (n = (0, i.A)(h, n)),
                l.useEffect(() => {
                    if (null == n || "" === n) return;
                    if ((0, M.V0)(n) || (0, A.LE)(n)) return void j(n);
                    function e() {
                        if (null != n && "" !== n)
                            return (0, A.yt)(n, (e, t) => {
                                j(n);
                            });
                    }
                    if (w) return e();
                    let t = requestIdleCallback(() => {
                        ((_.current = null), e());
                    });
                    return (
                        (_.current = t),
                        () => {
                            null != _.current && (cancelIdleCallback(_.current), (_.current = null));
                        }
                    );
                }, [n, w]),
                void 0 === n && null != g)
            ) {
                let e = (function (e) {
                    switch (e) {
                        case v.XSMALL:
                            return d.Ay.Sizes.SMALLER;
                        case v.SMALL:
                            return d.Ay.Sizes.SMALL;
                        case v.LARGE:
                            return d.Ay.Sizes.LARGE;
                        default:
                        case v.MEDIUM:
                            return d.Ay.Sizes.MEDIUM;
                    }
                })(b);
                return (0, r.jsx)(d.Ay, { className: u()(S.Gt, x, R), guild: g, size: e });
            }
            if (null == n || "" === n)
                return y
                    ? (U ??
                          (0, r.jsx)(a.UnknownGameIcon, {
                              size: "md",
                              color: "currentColor",
                              className: u()(S.Gt, b, R),
                          }))
                    : null;
            let V = s?.name,
                Y =
                    null != V && "" !== V
                        ? m.intl.formatToPlainString(m.t.tiKyYg, { applicationName: V })
                        : m.intl.string(m.t["2B/phM"]),
                q = (0, M.V0)(n),
                K = (0, A.LE)(n),
                P = C === n || q || K;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    P ? null : (0, r.jsx)("div", { className: u()(S.qD, b, R) }),
                    (0, r.jsx)("img", {
                        ref: k,
                        alt: Y,
                        src: n,
                        className: u()(S.Gt, b, R, { [S.VA]: X }),
                        style: P ? D : { ...D, display: "none" },
                    }),
                    (0, r.jsx)("div", { className: S.Xc, children: (0, r.jsx)("div", { ref: T, className: S.Pr }) }),
                ],
            });
        },
        M: v,
    },
);
