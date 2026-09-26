n.d(t, { $$: () => u, Ay: () => h, qv: () => d });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(866665),
    o = n(101555),
    c = n(798743);
let d = i.forwardRef(function (e, t) {
    let {
        label: n,
        ariaLabel: i,
        tooltipText: s,
        icon: d,
        iconProps: u,
        onClick: h,
        onTooltipShow: m,
        onTooltipHide: g,
        disabled: p,
        dangerous: A,
        separator: f,
        buttonClassName: C,
        children: x,
        ...E
    } = e;
    return (0, l.jsx)(r.m, {
        asContainer: !0,
        __unsupportedReactNodeAsText: s ?? n,
        "aria-label": n,
        onTooltipShow: m,
        onTooltipHide: g,
        children: (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(o.$n, {
                    ref: t,
                    className: a()(c.W1, C),
                    onClick: (e) => {
                        h(e);
                    },
                    "aria-label": i ?? n,
                    disabled: p,
                    dangerous: A,
                    ...E,
                    children: [
                        null != d ? (0, l.jsx)(d, { className: c.Kk, color: "currentColor", ...u }) : null,
                        null != x ? (0, l.jsx)("div", { className: a()(c.Kk, c.IO), children: x }) : null,
                    ],
                }),
                f && (0, l.jsx)(o.wv, {}),
            ],
        }),
    });
});
function u(e) {
    let { className: t } = e;
    return (0, l.jsx)("div", { className: a()(c.me, t) });
}
function h(e) {
    let { children: t, ...n } = e;
    return (0, l.jsx)(o.Ay, { className: a()(n.className, c.oO), children: t });
}
