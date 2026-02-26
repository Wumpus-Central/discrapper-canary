"use strict";
n.d(t, { A: () => T, M: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(172218),
    l = n(397927),
    u = n(832604),
    c = n(263063),
    d = n(776231),
    _ = n(611010),
    f = n(486020),
    p = n(788868),
    h = n(985018),
    m = n(748921);
let E = { XXSMALL: m.W6, XSMALL: m.s, SMALL: m.EX, MEDIUM: m.Y, MEDIUM_LARGE: m.rZ, LARGE: m.as, XLARGE: m.AQ };
function g(e) {
    switch (e) {
        case E.XXSMALL:
            return 16;
        case E.XSMALL:
            return 24;
        case E.SMALL:
            return 30;
        case E.MEDIUM:
            return 40;
        case E.MEDIUM_LARGE:
            return 48;
        case E.LARGE:
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
        case E.XSMALL:
            return c.Ay.Sizes.SMALLER;
        case E.SMALL:
            return c.Ay.Sizes.SMALL;
        case E.LARGE:
            return c.Ay.Sizes.LARGE;
        default:
        case E.MEDIUM:
            return c.Ay.Sizes.MEDIUM;
    }
}
let T = i.forwardRef(function (e, t) {
    let n,
        {
            game: s,
            guild: p,
            skuId: T,
            pid: S,
            className: y,
            guildClassName: v,
            size: N = E.MEDIUM,
            allowUnknownGameIcon: C = !0,
            unknownGameIconFallback: b,
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
    let M = (0, o.K)(w);
    if (
        (null != T && (n = A(T)),
        null != s &&
            null == n &&
            (s instanceof _.Ay
                ? (n = s.getIconURL(g(N)))
                : null != s.icon && (n = f.Ay.getApplicationIconURL({ id: s.id, icon: s.icon }))),
        (n = (0, u.A)(S, n)),
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
        let e = I(N);
        return (0, r.jsx)(c.Ay, { className: a()(m.Gt, v, y), guild: p, size: e });
    }
    if (null == n || "" === n)
        return C ? (b ?? (0, r.jsx)(l._7Z, { size: "md", color: "currentColor", className: a()(m.Gt, N, y) })) : null;
    let P = s?.name,
        k =
            null != P && "" !== P
                ? h.intl.formatToPlainString(h.t.tiKyYg, { applicationName: P })
                : h.intl.string(h.t["2B/phM"]),
        U = (0, f.V0)(n),
        G = (0, d.LE)(n),
        F = R === n || U || G;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            F ? null : (0, r.jsx)("div", { className: a()(m.qD, N, y) }),
            (0, r.jsx)("img", {
                ref: t,
                alt: k,
                src: n,
                className: a()(m.Gt, N, y),
                style: F ? void 0 : { display: "none" },
            }),
            (0, r.jsx)("div", { className: m.Xc, children: (0, r.jsx)("div", { ref: M, className: m.Pr }) }),
        ],
    });
});
