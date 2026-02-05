"use strict";
n.d(t, { A: () => T, M: () => g });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(172218),
    l = n(397927),
    u = n(832604),
    c = n(263063),
    d = n(776231),
    _ = n(611010),
    f = n(486020),
    p = n(788868),
    h = n(985018),
    m = n(103467);
let g = { XXSMALL: m.W6, XSMALL: m.s, SMALL: m.EX, MEDIUM: m.Y, MEDIUM_LARGE: m.rZ, LARGE: m.as, XLARGE: m.AQ };
function E(e) {
    switch (e) {
        case g.XXSMALL:
            return 16;
        case g.XSMALL:
            return 24;
        case g.SMALL:
            return 30;
        case g.MEDIUM:
            return 40;
        case g.MEDIUM_LARGE:
            return 48;
        case g.LARGE:
            return 60;
        default:
            return 80;
    }
}
function A(e) {
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
}
function I(e) {
    switch (e) {
        case g.XSMALL:
            return c.A.Sizes.SMALLER;
        case g.SMALL:
            return c.A.Sizes.SMALL;
        case g.LARGE:
            return c.A.Sizes.LARGE;
        default:
        case g.MEDIUM:
            return c.A.Sizes.MEDIUM;
    }
}
let T = i.forwardRef(function (e, t) {
    let n,
        {
            game: a,
            guild: p,
            skuId: T,
            pid: y,
            className: S,
            guildClassName: v,
            size: C = g.MEDIUM,
            allowUnknownGameIcon: b = !0,
            unknownGameIconFallback: N,
        } = e,
        [R, O] = i.useState(null),
        [D, L] = i.useState(!1),
        w = i.useCallback((e) => {
            L(e);
        }, []),
        x = i.useRef(null);
    i.useEffect(() => {
        null != x.current && D && (cancelIdleCallback(x.current), (x.current = null));
    }, [D]);
    let P = (0, o.K)(w);
    if (
        (null != T && (n = A(T)),
        null != a &&
            null == n &&
            (a instanceof _.Ay
                ? (n = a.getIconURL(E(C)))
                : null != a.icon && (n = f.Ay.getApplicationIconURL({ id: a.id, icon: a.icon }))),
        (n = (0, u.A)(y, n)),
        i.useEffect(() => {
            if (null == n || "" === n) return;
            if ((0, f.V0)(n) || (0, d.LE)(n)) return void O(n);
            let e = () =>
                (0, d.yt)(n, (e, t) => {
                    O(n);
                });
            if (D) return e();
            let t = requestIdleCallback(() => {
                (x.current = null), e();
            });
            return (
                (x.current = t),
                () => {
                    null != x.current && (cancelIdleCallback(x.current), (x.current = null));
                }
            );
        }, [n, D]),
        void 0 === n && null != p)
    ) {
        let e = I(C);
        return (0, r.jsx)(c.A, { className: s()(m.Gt, v, S), guild: p, size: e });
    }
    if (null == n || "" === n)
        return b ? (N ?? (0, r.jsx)(l._7Z, { size: "md", color: "currentColor", className: s()(m.Gt, C, S) })) : null;
    let M = a?.name,
        k =
            null != M && "" !== M
                ? h.intl.formatToPlainString(h.t.tiKyYg, { applicationName: M })
                : h.intl.string(h.t["2B/phM"]),
        U = (0, f.V0)(n),
        G = (0, d.LE)(n),
        V = R === n || U || G;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            V ? null : (0, r.jsx)("div", { className: s()(m.qD, C, S) }),
            (0, r.jsx)("img", {
                ref: t,
                alt: k,
                src: n,
                className: s()(m.Gt, C, S),
                style: V ? void 0 : { display: "none" },
            }),
            (0, r.jsx)("div", { className: m.Xc, children: (0, r.jsx)("div", { ref: P, className: m.Pr }) }),
        ],
    });
});
