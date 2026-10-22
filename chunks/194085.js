n.d(t, { $$: () => d, Ay: () => u, qv: () => c });
var l = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    a = n(866665),
    r = n(101555),
    o = n(798743);
function c(e) {
    let {
        label: t,
        ariaLabel: n,
        tooltipText: i,
        icon: c,
        iconProps: d,
        onClick: u,
        onTooltipShow: h,
        onTooltipHide: m,
        disabled: g,
        dangerous: p,
        separator: A,
        buttonClassName: f,
        children: x,
        ref: C,
        ...E
    } = e;
    return (0, l.jsx)(a.m, {
        asContainer: !0,
        __unsupportedReactNodeAsText: i ?? t,
        "aria-label": t,
        onTooltipShow: h,
        onTooltipHide: m,
        children: (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(r.$n, {
                    ref: C,
                    className: s()(o.W1, f),
                    onClick: (e) => {
                        u(e);
                    },
                    "aria-label": n ?? t,
                    disabled: g,
                    dangerous: p,
                    ...E,
                    children: [
                        null != c ? (0, l.jsx)(c, { className: o.Kk, color: "currentColor", ...d }) : null,
                        null != x ? (0, l.jsx)("div", { className: s()(o.Kk, o.IO), children: x }) : null,
                    ],
                }),
                A && (0, l.jsx)(r.wv, {}),
            ],
        }),
    });
}
function d(e) {
    let { className: t } = e;
    return (0, l.jsx)("div", { className: s()(o.me, t) });
}
function u(e) {
    let { children: t, ...n } = e;
    return (0, l.jsx)(r.Ay, { className: s()(n.className, o.oO), children: t });
}
