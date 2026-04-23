n.d(t, { $$: () => u, Ay: () => h, qv: () => d });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(990078),
    o = n(101555),
    c = n(568580);
let d = l.forwardRef(function (e, t) {
    let {
        label: n,
        ariaLabel: l,
        tooltipText: a,
        icon: d,
        iconProps: u,
        onClick: h,
        onTooltipShow: m,
        onTooltipHide: A,
        disabled: g,
        dangerous: _,
        separator: p,
        buttonClassName: f,
        children: E,
        ...C
    } = e;
    return (0, i.jsx)(r.m, {
        asContainer: !0,
        __unsupportedReactNodeAsText: a ?? n,
        "aria-label": n,
        onTooltipShow: m,
        onTooltipHide: A,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(o.$n, {
                    ref: t,
                    className: s()(c.W1, f),
                    onClick: (e) => {
                        h(e);
                    },
                    "aria-label": l ?? n,
                    disabled: g,
                    dangerous: _,
                    ...C,
                    children: [
                        null != d ? (0, i.jsx)(d, { className: c.Kk, color: "currentColor", ...u }) : null,
                        null != E ? (0, i.jsx)("div", { className: s()(c.Kk, c.IO), children: E }) : null,
                    ],
                }),
                p && (0, i.jsx)(o.wv, {}),
            ],
        }),
    });
});
function u(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", { className: s()(c.me, t) });
}
function h(e) {
    let { children: t, ...n } = e;
    return (0, i.jsx)(o.Ay, { className: s()(n.className, c.oO), children: t });
}
