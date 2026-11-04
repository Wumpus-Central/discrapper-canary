var r,
    i = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(573435),
    u = n(97385),
    c = (((r = {})[(r.ROUNDED = 0)] = "ROUNDED"), (r[(r.SQUIRCLE = 1)] = "SQUIRCLE"), r);
function d(e) {
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
function C(e) {
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
                    (0, i.jsx)(d, { sizePx: n }),
                ],
            });
        case 0:
            return (0, i.jsx)("div", { className: l()(u.Gt, r, u.Nb), style: s, children: t.icon });
    }
}
n.d(
    t,
    {},
    {
        e: c,
        q: function (e) {
            let { icons: t } = e,
                { frontIcon: n, backIcon: r } = t;
            return (0, i.jsxs)("div", {
                className: u.VD,
                "aria-hidden": !0,
                children: [
                    null != r && (0, i.jsx)(C, { icon: r, sizePx: 40, positionClassName: u.j2 }),
                    (0, i.jsx)(C, { icon: n, sizePx: 48, positionClassName: u.hU }),
                ],
            });
        },
    },
);
