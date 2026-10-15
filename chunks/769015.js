t.d(n, { A: () => I, M: () => S });
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
    L = t(776231),
    A = t(395671),
    M = t(486020),
    E = t(202541),
    p = t(105292),
    v = t(989533);
let S = { XXSMALL: v.W6, XSMALL: v.s, SMALL: v.EX, MEDIUM: v.Y, MEDIUM_LARGE: v.rZ, LARGE: v.as, XLARGE: v.AQ };
function m(e) {
    switch (e) {
        case S.XXSMALL:
            return 16;
        case S.XSMALL:
            return 24;
        case S.SMALL:
            return 30;
        case S.MEDIUM:
            return 40;
        case S.MEDIUM_LARGE:
            return 48;
        case S.LARGE:
            return 60;
        default:
            return 80;
    }
}
function I(e) {
    let n,
        {
            game: s,
            guild: I,
            skuId: g,
            pid: h,
            className: G,
            guildClassName: R,
            size: x = S.MEDIUM,
            allowUnknownGameIcon: b = !0,
            unknownGameIconFallback: y,
            ref: X,
        } = e,
        [D, U] = l.useState(null),
        [k, C] = l.useState(!1),
        _ = l.useCallback((e) => {
            C(e);
        }, []),
        j = l.useRef(null);
    l.useEffect(() => {
        null != j.current && k && (cancelIdleCallback(j.current), (j.current = null));
    }, [k]);
    let z = (0, c.K)(_);
    if (
        (null != g &&
            (n = (function (e) {
                if (null == e) return null;
                switch (e) {
                    case E.pe.GUILD:
                        return t(664419);
                    case E.pe.TIER_0:
                        return t(31427);
                    case E.pe.TIER_1:
                        return t(831180);
                    case E.pe.TIER_2:
                    case E.pe.LEGACY:
                        return t(29873);
                    default:
                        return null;
                }
            })(g)),
        null != s &&
            null == n &&
            (s instanceof A.Ay || s instanceof f.A
                ? (n = s.getIconURL(m(x)))
                : null != s.icon && (n = (0, o.A)(s.id, s.icon, { size: m(x) }))),
        (n = (0, i.A)(h, n)),
        l.useEffect(() => {
            if (null == n || "" === n) return;
            if ((0, M.V0)(n) || (0, L.LE)(n)) return void U(n);
            function e() {
                if (null != n && "" !== n)
                    return (0, L.yt)(n, (e, t) => {
                        U(n);
                    });
            }
            if (k) return e();
            let t = requestIdleCallback(() => {
                ((j.current = null), e());
            });
            return (
                (j.current = t),
                () => {
                    null != j.current && (cancelIdleCallback(j.current), (j.current = null));
                }
            );
        }, [n, k]),
        void 0 === n && null != I)
    ) {
        let e = (function (e) {
            switch (e) {
                case S.XSMALL:
                    return d.Ay.Sizes.SMALLER;
                case S.SMALL:
                    return d.Ay.Sizes.SMALL;
                case S.LARGE:
                    return d.Ay.Sizes.LARGE;
                default:
                case S.MEDIUM:
                    return d.Ay.Sizes.MEDIUM;
            }
        })(x);
        return (0, r.jsx)(d.Ay, { className: u()(v.Gt, R, G), guild: I, size: e });
    }
    if (null == n || "" === n)
        return b ? (y ?? (0, r.jsx)(a._, { size: "md", color: "currentColor", className: u()(v.Gt, x, G) })) : null;
    let N = s?.name,
        w =
            null != N && "" !== N
                ? p.intl.formatToPlainString(p.t.tiKyYg, { applicationName: N })
                : p.intl.string(p.t["2B/phM"]),
        T = (0, M.V0)(n),
        Y = (0, L.LE)(n),
        q = D === n || T || Y;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            q ? null : (0, r.jsx)("div", { className: u()(v.qD, x, G) }),
            (0, r.jsx)("img", {
                ref: X,
                alt: w,
                src: n,
                className: u()(v.Gt, x, G),
                style: q ? void 0 : { display: "none" },
            }),
            (0, r.jsx)("div", { className: v.Xc, children: (0, r.jsx)("div", { ref: z, className: v.Pr }) }),
        ],
    });
}
