"use strict";
n.d(t, { A: () => S, M: () => g });
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
    p = n(929490),
    h = n(788868),
    m = n(985018),
    E = n(155626);
let g = { XXSMALL: E.W6, XSMALL: E.s, SMALL: E.EX, MEDIUM: E.Y, MEDIUM_LARGE: E.rZ, LARGE: E.as, XLARGE: E.AQ };
function A(e) {
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
function I(e) {
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
}
function T(e) {
    switch (e) {
        case g.XSMALL:
            return c.Ay.Sizes.SMALLER;
        case g.SMALL:
            return c.Ay.Sizes.SMALL;
        case g.LARGE:
            return c.Ay.Sizes.LARGE;
        default:
        case g.MEDIUM:
            return c.Ay.Sizes.MEDIUM;
    }
}
let S = i.forwardRef(function (e, t) {
    let n,
        {
            game: s,
            guild: h,
            skuId: S,
            pid: y,
            className: v,
            guildClassName: N,
            size: C = g.MEDIUM,
            allowUnknownGameIcon: R = !0,
            unknownGameIconFallback: O,
        } = e,
        [b, D] = i.useState(null),
        [L, w] = i.useState(!1),
        M = i.useCallback((e) => {
            w(e);
        }, []),
        x = i.useRef(null);
    i.useEffect(() => {
        null != x.current && L && (cancelIdleCallback(x.current), (x.current = null));
    }, [L]);
    let P = (0, o.K)(M);
    if (
        (null != S && (n = I(S)),
        null != s &&
            null == n &&
            (s instanceof _.Ay
                ? (n = s.getIconURL(A(C)))
                : s instanceof p.A
                  ? (n = f.Ay.getApplicationIconURL({ id: s.id, icon: s.iconHash }))
                  : null != s.icon && (n = f.Ay.getApplicationIconURL({ id: s.id, icon: s.icon }))),
        (n = (0, u.A)(y, n)),
        i.useEffect(() => {
            if (null == n || "" === n) return;
            if ((0, f.V0)(n) || (0, d.LE)(n)) return void D(n);
            let e = () =>
                (0, d.yt)(n, (e, t) => {
                    D(n);
                });
            if (L) return e();
            let t = requestIdleCallback(() => {
                (x.current = null), e();
            });
            return (
                (x.current = t),
                () => {
                    null != x.current && (cancelIdleCallback(x.current), (x.current = null));
                }
            );
        }, [n, L]),
        void 0 === n && null != h)
    ) {
        let e = T(C);
        return (0, r.jsx)(c.Ay, { className: a()(E.Gt, N, v), guild: h, size: e });
    }
    if (null == n || "" === n)
        return R ? (O ?? (0, r.jsx)(l._7Z, { size: "md", color: "currentColor", className: a()(E.Gt, C, v) })) : null;
    let k = s?.name,
        U =
            null != k && "" !== k
                ? m.intl.formatToPlainString(m.t.tiKyYg, { applicationName: k })
                : m.intl.string(m.t["2B/phM"]),
        G = (0, f.V0)(n),
        F = (0, d.LE)(n),
        V = b === n || G || F;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            V ? null : (0, r.jsx)("div", { className: a()(E.qD, C, v) }),
            (0, r.jsx)("img", {
                ref: t,
                alt: U,
                src: n,
                className: a()(E.Gt, C, v),
                style: V ? void 0 : { display: "none" },
            }),
            (0, r.jsx)("div", { className: E.Xc, children: (0, r.jsx)("div", { ref: P, className: E.Pr }) }),
        ],
    });
});
