t.d(n, { A: () => g, M: () => v });
var r = t(477900),
    l = t(582128),
    s = t(503698),
    u = t.n(s),
    c = t(172218),
    a = t(109112),
    i = t(832604),
    f = t(997013),
    o = t(744700),
    d = t(548118),
    A = t(776231),
    L = t(395671),
    M = t(486020),
    E = t(854456),
    p = t(202541),
    S = t(105292),
    m = t(989533);
let v = { XXSMALL: m.W6, XSMALL: m.s, SMALL: m.EX, MEDIUM: m.Y, MEDIUM_LARGE: m.rZ, LARGE: m.as, XLARGE: m.AQ };
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
function g(e) {
    let n,
        {
            game: s,
            guild: g,
            skuId: h,
            pid: G,
            className: R,
            guildClassName: x,
            size: b = v.MEDIUM,
            allowUnknownGameIcon: y = !0,
            unknownGameIconFallback: X,
            withBackground: D = !1,
            ref: U,
        } = e,
        k = (0, E.A)(D),
        [C, _] = l.useState(null),
        [j, z] = l.useState(!1),
        N = l.useCallback((e) => {
            z(e);
        }, []),
        w = l.useRef(null);
    l.useEffect(() => {
        null != w.current && j && (cancelIdleCallback(w.current), (w.current = null));
    }, [j]);
    let T = (0, c.K)(N);
    if (
        (null != h &&
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
            })(h)),
        null != s &&
            null == n &&
            (s instanceof L.Ay || s instanceof f.A
                ? (n = s.getIconURL(I(b)))
                : null != s.icon && (n = (0, o.A)(s.id, s.icon, { size: I(b) }))),
        (n = (0, i.A)(G, n)),
        l.useEffect(() => {
            if (null == n || "" === n) return;
            if ((0, M.V0)(n) || (0, A.LE)(n)) return void _(n);
            function e() {
                if (null != n && "" !== n)
                    return (0, A.yt)(n, (e, t) => {
                        _(n);
                    });
            }
            if (j) return e();
            let t = requestIdleCallback(() => {
                ((w.current = null), e());
            });
            return (
                (w.current = t),
                () => {
                    null != w.current && (cancelIdleCallback(w.current), (w.current = null));
                }
            );
        }, [n, j]),
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
        return (0, r.jsx)(d.Ay, { className: u()(m.Gt, x, R), guild: g, size: e });
    }
    if (null == n || "" === n)
        return y ? (X ?? (0, r.jsx)(a._, { size: "md", color: "currentColor", className: u()(m.Gt, b, R) })) : null;
    let V = s?.name,
        Y =
            null != V && "" !== V
                ? S.intl.formatToPlainString(S.t.tiKyYg, { applicationName: V })
                : S.intl.string(S.t["2B/phM"]),
        q = (0, M.V0)(n),
        K = (0, A.LE)(n),
        P = C === n || q || K;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            P ? null : (0, r.jsx)("div", { className: u()(m.qD, b, R) }),
            (0, r.jsx)("img", {
                ref: U,
                alt: Y,
                src: n,
                className: u()(m.Gt, b, R, { [m.VA]: D }),
                style: P ? k : { ...k, display: "none" },
            }),
            (0, r.jsx)("div", { className: m.Xc, children: (0, r.jsx)("div", { ref: T, className: m.Pr }) }),
        ],
    });
}
