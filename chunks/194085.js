l.d(t, { $$: () => d, Ay: () => o, qv: () => u });
var a = l(627968),
    n = l(64700),
    s = l(503698),
    i = l.n(s),
    r = l(990078),
    A = l(101555),
    c = l(930901);
let u = n.forwardRef(function (e, t) {
    let {
        label: l,
        ariaLabel: n,
        tooltipText: s,
        icon: u,
        iconProps: d,
        onClick: o,
        onTooltipShow: h,
        onTooltipHide: _,
        disabled: I,
        dangerous: E,
        separator: L,
        buttonClassName: N,
        children: C,
        ...g
    } = e;
    return (0, a.jsx)(r.m, {
        asContainer: !0,
        __unsupportedReactNodeAsText: s ?? l,
        "aria-label": l,
        onTooltipShow: h,
        onTooltipHide: _,
        children: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)(A.$n, {
                    ref: t,
                    className: i()(c.W1, N),
                    onClick: (e) => {
                        o(e);
                    },
                    "aria-label": n ?? l,
                    disabled: I,
                    dangerous: E,
                    ...g,
                    children: [
                        null != u ? (0, a.jsx)(u, { className: c.Kk, color: "currentColor", ...d }) : null,
                        null != C ? (0, a.jsx)("div", { className: i()(c.Kk, c.IO), children: C }) : null,
                    ],
                }),
                L && (0, a.jsx)(A.wv, {}),
            ],
        }),
    });
});
function d(e) {
    let { className: t } = e;
    return (0, a.jsx)("div", { className: i()(c.me, t) });
}
function o(e) {
    let { children: t, ...l } = e;
    return (0, a.jsx)(A.Ay, { className: i()(l.className, c.oO), children: t });
}
