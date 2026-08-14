t.d(n, { A: () => I, M: () => S });
var r = t(477900),
    l = t(582128),
    s = t(503698),
    u = t.n(s),
    a = t(172218),
    c = t(109112),
    i = t(832604),
    f = t(997013),
    o = t(744700),
    d = t(548118),
    L = t(776231),
    A = t(395671),
    M = t(486020),
    E = t(202541),
    p = t(375708),
    v = t(892354);
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
let I = l.forwardRef(function (e, n) {
    let s,
        {
            game: I,
            guild: g,
            skuId: R,
            pid: h,
            className: G,
            guildClassName: x,
            size: b = S.MEDIUM,
            allowUnknownGameIcon: y = !0,
            unknownGameIconFallback: X,
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
    let w = (0, a.K)(_);
    if (
        (null != R &&
            (s = (function (e) {
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
            })(R)),
        null != I &&
            null == s &&
            (I instanceof A.Ay || I instanceof f.A
                ? (s = I.getIconURL(m(b)))
                : null != I.icon && (s = (0, o.A)(I.id, I.icon, { size: m(b) }))),
        (s = (0, i.A)(h, s)),
        l.useEffect(() => {
            if (null == s || "" === s) return;
            if ((0, M.V0)(s) || (0, L.LE)(s)) return void U(s);
            function e() {
                if (null != s && "" !== s)
                    return (0, L.yt)(s, (e, n) => {
                        U(s);
                    });
            }
            if (k) return e();
            let n = requestIdleCallback(() => {
                (j.current = null), e();
            });
            return (
                (j.current = n),
                () => {
                    null != j.current && (cancelIdleCallback(j.current), (j.current = null));
                }
            );
        }, [s, k]),
        void 0 === s && null != g)
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
        })(b);
        return (0, r.jsx)(d.Ay, { className: u()(v.Gt, x, G), guild: g, size: e });
    }
    if (null == s || "" === s)
        return y ? (X ?? (0, r.jsx)(c._, { size: "md", color: "currentColor", className: u()(v.Gt, b, G) })) : null;
    let z = I?.name,
        N =
            null != z && "" !== z
                ? p.intl.formatToPlainString(p.t.tiKyYg, { applicationName: z })
                : p.intl.string(p.t["2B/phM"]),
        T = (0, M.V0)(s),
        Y = (0, L.LE)(s),
        q = D === s || T || Y;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            q ? null : (0, r.jsx)("div", { className: u()(v.qD, b, G) }),
            (0, r.jsx)("img", {
                ref: n,
                alt: N,
                src: s,
                className: u()(v.Gt, b, G),
                style: q ? void 0 : { display: "none" },
            }),
            (0, r.jsx)("div", { className: v.Xc, children: (0, r.jsx)("div", { ref: w, className: v.Pr }) }),
        ],
    });
});
