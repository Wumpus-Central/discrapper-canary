n.d(t, { CD: () => c, YP: () => T, e0: () => d, qP: () => C });
var r,
    i = n(477900),
    u = n(582128),
    o = n(503698),
    l = n.n(o),
    a = n(573435),
    s = n(97385);
let c = 48,
    T = 40;
var d = (((r = {})[(r.ROUNDED = 0)] = "ROUNDED"), (r[(r.SQUIRCLE = 1)] = "SQUIRCLE"), r);
function O(e) {
    let { sizePx: t } = e,
        n = 0.5 / t,
        r = `translate(${n}, ${n}) scale(${1 - 2 * n})`;
    return (0, i.jsx)("svg", {
        className: s.v9,
        width: t,
        height: t,
        viewBox: "0 0 1 1",
        "aria-hidden": !0,
        children: (0, i.jsx)("path", {
            d: a.Vf,
            fill: "none",
            stroke: "var(--border-subtle)",
            strokeWidth: 1 / t,
            transform: r,
        }),
    });
}
function f(e) {
    let { icon: t, sizePx: n, positionClassName: r } = e,
        o = u.useMemo(() => ({ width: `${n}px`, height: `${n}px` }), [n]);
    switch (t.shape) {
        case 1:
            return (0, i.jsxs)("div", {
                className: l()(s.Gt, r),
                style: o,
                children: [
                    (0, i.jsx)(a.Ay, {
                        mask: a.Ay.Masks.SQUIRCLE,
                        width: n,
                        height: n,
                        children: (0, i.jsx)("div", { className: s.pU, style: o, children: t.icon }),
                    }),
                    (0, i.jsx)(O, { sizePx: n }),
                ],
            });
        case 0:
            return (0, i.jsx)("div", { className: l()(s.Gt, r, s.Nb), style: o, children: t.icon });
    }
}
function C(e) {
    let { icons: t } = e,
        { frontIcon: n, backIcon: r } = t;
    return (0, i.jsxs)("div", {
        className: s.VD,
        "aria-hidden": !0,
        children: [
            null != r && (0, i.jsx)(f, { icon: r, sizePx: T, positionClassName: s.j2 }),
            (0, i.jsx)(f, { icon: n, sizePx: c, positionClassName: s.hU }),
        ],
    });
}
