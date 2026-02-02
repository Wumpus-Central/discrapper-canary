n.d(t, {
    BF: () => p,
    Yb: () => h,
    gS: () => d,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(158954),
    a = n(827734),
    o = n(985018),
    c = n(865444);

function u(e) {
    let { icon: t, style: n } = e;
    return (0, r.jsx)("div", {
        className: i()(c.Lw, n),
        children: t,
    });
}

function d(e) {
    let { isHoveringOrFocusing: t } = e;
    return (0, r.jsx)(u, {
        style: i()(c.AI, t && c.mW),
        icon: (0, r.jsx)(s.rOg, {
            size: "custom",
            color: a.A.colors.WHITE,
            width: 38,
            height: 38,
            className: i()(c.x6, c.AI),
            "aria-label": o.intl.string(o.t.L5Pt9L),
        }),
    });
}

function p(e) {
    let { count: t } = e;
    return (0, r.jsx)(u, {
        style: c.RF,
        icon: (0, r.jsxs)(s.EYj, {
            variant: "text-sm/medium",
            color: "always-white",
            children: ["+", t + 1],
        }),
    });
}

function h(e) {
    let { count: t } = e;
    return (0, r.jsx)(u, {
        style: c.RF,
        icon: (0, r.jsx)(s.EYj, {
            variant: "text-sm/medium",
            color: "always-white",
            children: o.intl.format(o.t.F6iMs4, {
                count: t,
            }),
        }),
    });
}
