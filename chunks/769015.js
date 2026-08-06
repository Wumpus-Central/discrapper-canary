"use strict";
n.d(t, { A: () => g, M: () => T });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(172218),
    o = n(109112),
    d = n(832604),
    c = n(997013),
    u = n(744700),
    _ = n(548118),
    E = n(597098),
    A = n(395671),
    h = n(486020),
    I = n(202541),
    f = n(375708),
    p = n(892354);
let T = { XXSMALL: p.W6, XSMALL: p.s, SMALL: p.EX, MEDIUM: p.Y, MEDIUM_LARGE: p.rZ, LARGE: p.as, XLARGE: p.AQ };
function m(e) {
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
}
let g = r.forwardRef(function (e, t) {
    let a,
        {
            game: g,
            guild: S,
            skuId: N,
            pid: C,
            className: O,
            guildClassName: R,
            size: L = T.MEDIUM,
            allowUnknownGameIcon: D = !0,
            unknownGameIconFallback: y,
        } = e,
        [v, b] = r.useState(null),
        [M, P] = r.useState(!1),
        U = r.useCallback((e) => {
            P(e);
        }, []),
        w = r.useRef(null);
    r.useEffect(() => {
        null != w.current && M && (cancelIdleCallback(w.current), (w.current = null));
    }, [M]);
    let G = (0, l.K)(U);
    if (
        (null != N &&
            (a = (function (e) {
                if (null == e) return null;
                switch (e) {
                    case I.pe.GUILD:
                        return n(664419);
                    case I.pe.TIER_0:
                        return n(31427);
                    case I.pe.TIER_1:
                        return n(831180);
                    case I.pe.TIER_2:
                    case I.pe.LEGACY:
                        return n(29873);
                    default:
                        return null;
                }
            })(N)),
        null != g &&
            null == a &&
            (g instanceof A.Ay || g instanceof c.A
                ? (a = g.getIconURL(m(L)))
                : null != g.icon && (a = (0, u.A)(g.id, g.icon, { size: m(L) }))),
        (a = (0, d.A)(C, a)),
        r.useEffect(() => {
            if (null == a || "" === a) return;
            if ((0, h.V0)(a) || (0, E.LE)(a)) return void b(a);
            function e() {
                if (null != a && "" !== a)
                    return (0, E.yt)(a, (e, t) => {
                        b(a);
                    });
            }
            if (M) return e();
            let t = requestIdleCallback(() => {
                (w.current = null), e();
            });
            return (
                (w.current = t),
                () => {
                    null != w.current && (cancelIdleCallback(w.current), (w.current = null));
                }
            );
        }, [a, M]),
        void 0 === a && null != S)
    ) {
        let e = (function (e) {
            switch (e) {
                case T.XSMALL:
                    return _.Ay.Sizes.SMALLER;
                case T.SMALL:
                    return _.Ay.Sizes.SMALL;
                case T.LARGE:
                    return _.Ay.Sizes.LARGE;
                default:
                case T.MEDIUM:
                    return _.Ay.Sizes.MEDIUM;
            }
        })(L);
        return (0, i.jsx)(_.Ay, { className: s()(p.Gt, R, O), guild: S, size: e });
    }
    if (null == a || "" === a)
        return D ? (y ?? (0, i.jsx)(o._, { size: "md", color: "currentColor", className: s()(p.Gt, L, O) })) : null;
    let x = g?.name,
        k =
            null != x && "" !== x
                ? f.intl.formatToPlainString(f.t.tiKyYg, { applicationName: x })
                : f.intl.string(f.t["2B/phM"]),
        F = (0, h.V0)(a),
        V = (0, E.LE)(a),
        B = v === a || F || V;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            B ? null : (0, i.jsx)("div", { className: s()(p.qD, L, O) }),
            (0, i.jsx)("img", {
                ref: t,
                alt: k,
                src: a,
                className: s()(p.Gt, L, O),
                style: B ? void 0 : { display: "none" },
            }),
            (0, i.jsx)("div", { className: p.Xc, children: (0, i.jsx)("div", { ref: G, className: p.Pr }) }),
        ],
    });
});
