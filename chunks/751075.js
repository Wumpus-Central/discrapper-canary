n.d(t, { CD: () => d, YP: () => c, e0: () => g, qP: () => h });
var i,
    l = n(477900),
    s = n(582128),
    r = n(503698),
    a = n.n(r),
    o = n(573435),
    u = n(200622);
let d = 48,
    c = 40;
var g = (((i = {})[(i.ROUNDED = 0)] = "ROUNDED"), (i[(i.SQUIRCLE = 1)] = "SQUIRCLE"), i);
function m(e) {
    let { sizePx: t } = e,
        n = 0.5 / t,
        i = `translate(${n}, ${n}) scale(${1 - 2 * n})`;
    return (0, l.jsx)("svg", {
        className: u.v9,
        width: t,
        height: t,
        viewBox: "0 0 1 1",
        "aria-hidden": !0,
        children: (0, l.jsx)("path", {
            d: o.Vf,
            fill: "none",
            stroke: "var(--border-subtle)",
            strokeWidth: 1 / t,
            transform: i,
        }),
    });
}
function A(e) {
    let { icon: t, sizePx: n, positionClassName: i } = e,
        r = s.useMemo(() => ({ width: `${n}px`, height: `${n}px` }), [n]);
    switch (t.shape) {
        case 1:
            return (0, l.jsxs)("div", {
                className: a()(u.Gt, i),
                style: r,
                children: [
                    (0, l.jsx)(o.Ay, {
                        mask: o.Ay.Masks.SQUIRCLE,
                        width: n,
                        height: n,
                        children: (0, l.jsx)("div", { className: u.pU, style: r, children: t.icon }),
                    }),
                    (0, l.jsx)(m, { sizePx: n }),
                ],
            });
        case 0:
            return (0, l.jsx)("div", { className: a()(u.Gt, i, u.Nb), style: r, children: t.icon });
    }
}
function h(e) {
    let { icons: t } = e,
        { frontIcon: n, backIcon: i } = t;
    return (0, l.jsxs)("div", {
        className: u.VD,
        "aria-hidden": !0,
        children: [
            null != i && (0, l.jsx)(A, { icon: i, sizePx: c, positionClassName: u.j2 }),
            (0, l.jsx)(A, { icon: n, sizePx: d, positionClassName: u.hU }),
        ],
    });
}
