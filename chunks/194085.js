t.d(n, { $$: () => c, Ay: () => A, qv: () => u });
var a = t(627968),
    l = t(64700),
    i = t(503698),
    r = t.n(i),
    s = t(990078),
    o = t(101555),
    d = t(568580);
let u = l.forwardRef(function (e, n) {
    let {
        label: t,
        ariaLabel: l,
        tooltipText: i,
        icon: u,
        iconProps: c,
        onClick: A,
        onTooltipShow: R,
        onTooltipHide: m,
        disabled: g,
        dangerous: h,
        separator: p,
        buttonClassName: f,
        children: _,
        ...O
    } = e;
    return (0, a.jsx)(s.m, {
        asContainer: !0,
        __unsupportedReactNodeAsText: i ?? t,
        "aria-label": t,
        onTooltipShow: R,
        onTooltipHide: m,
        children: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)(o.$n, {
                    ref: n,
                    className: r()(d.W1, f),
                    onClick: (e) => {
                        A(e);
                    },
                    "aria-label": l ?? t,
                    disabled: g,
                    dangerous: h,
                    ...O,
                    children: [
                        null != u ? (0, a.jsx)(u, { className: d.Kk, color: "currentColor", ...c }) : null,
                        null != _ ? (0, a.jsx)("div", { className: r()(d.Kk, d.IO), children: _ }) : null,
                    ],
                }),
                p && (0, a.jsx)(o.wv, {}),
            ],
        }),
    });
});
function c(e) {
    let { className: n } = e;
    return (0, a.jsx)("div", { className: r()(d.me, n) });
}
function A(e) {
    let { children: n, ...t } = e;
    return (0, a.jsx)(o.Ay, { className: r()(t.className, d.oO), children: n });
}
