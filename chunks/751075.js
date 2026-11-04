n.d(t, { CD: () => c, YP: () => d, e0: () => C, qP: () => N });
var r,
    i = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(573435),
    u = n(97385);
let c = 48,
    d = 40;
var C = (((r = {})[(r.ROUNDED = 0)] = "ROUNDED"), (r[(r.SQUIRCLE = 1)] = "SQUIRCLE"), r);
function O(e) {
    let { sizePx: t } = e,
        n = 0.5 / t,
        r = `translate(${n}, ${n}) scale(${1 - 2 * n})`;
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
            transform: r,
        }),
    });
}
function T(e) {
    let { icon: t, sizePx: n, positionClassName: r } = e,
        s = a.useMemo(() => ({ width: `${n}px`, height: `${n}px` }), [n]);
    switch (t.shape) {
        case 1:
            return (0, i.jsxs)("div", {
                className: l()(u.Gt, r),
                style: s,
                children: [
                    (0, i.jsx)(o.Ay, {
                        mask: o.Ay.Masks.SQUIRCLE,
                        width: n,
                        height: n,
                        children: (0, i.jsx)("div", { className: u.pU, style: s, children: t.icon }),
                    }),
                    (0, i.jsx)(O, { sizePx: n }),
                ],
            });
        case 0:
            return (0, i.jsx)("div", { className: l()(u.Gt, r, u.Nb), style: s, children: t.icon });
    }
}
function N(e) {
    let { icons: t } = e,
        { frontIcon: n, backIcon: r } = t;
    return (0, i.jsxs)("div", {
        className: u.VD,
        "aria-hidden": !0,
        children: [
            null != r && (0, i.jsx)(T, { icon: r, sizePx: d, positionClassName: u.j2 }),
            (0, i.jsx)(T, { icon: n, sizePx: c, positionClassName: u.hU }),
        ],
    });
}
