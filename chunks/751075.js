r.d(t, { CD: () => c, YP: () => d, e0: () => C, qP: () => N });
var n,
    i = r(477900),
    a = r(582128),
    s = r(503698),
    l = r.n(s),
    o = r(573435),
    u = r(97385);
let c = 48,
    d = 40;
var C = (((n = {})[(n.ROUNDED = 0)] = "ROUNDED"), (n[(n.SQUIRCLE = 1)] = "SQUIRCLE"), n);
function O(e) {
    let { sizePx: t } = e,
        r = 0.5 / t,
        n = `translate(${r}, ${r}) scale(${1 - 2 * r})`;
    return (0, i.jsx)("svg", {
        className: u.v9,
        width: t,
        height: t,
        viewBox: "0 0 1 1",
        "aria-hidden": !0,
        children: (0, i.jsx)("path", {
            d: o.Vf,
            fill: "none",
            stroke: "var(--border-subtle)",
            strokeWidth: 1 / t,
            transform: n,
        }),
    });
}
function T(e) {
    let { icon: t, sizePx: r, positionClassName: n } = e,
        s = a.useMemo(() => ({ width: `${r}px`, height: `${r}px` }), [r]);
    switch (t.shape) {
        case 1:
            return (0, i.jsxs)("div", {
                className: l()(u.Gt, n),
                style: s,
                children: [
                    (0, i.jsx)(o.Ay, {
                        mask: o.Ay.Masks.SQUIRCLE,
                        width: r,
                        height: r,
                        children: (0, i.jsx)("div", { className: u.pU, style: s, children: t.icon }),
                    }),
                    (0, i.jsx)(O, { sizePx: r }),
                ],
            });
        case 0:
            return (0, i.jsx)("div", { className: l()(u.Gt, n, u.Nb), style: s, children: t.icon });
    }
}
function N(e) {
    let { icons: t } = e,
        { frontIcon: r, backIcon: n } = t;
    return (0, i.jsxs)("div", {
        className: u.VD,
        "aria-hidden": !0,
        children: [
            null != n && (0, i.jsx)(T, { icon: n, sizePx: d, positionClassName: u.j2 }),
            (0, i.jsx)(T, { icon: r, sizePx: c, positionClassName: u.hU }),
        ],
    });
}
