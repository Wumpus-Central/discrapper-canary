n.d(t, { S: () => o });
var l = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    s = n(939249),
    a = n(866665),
    u = n(945404);
function o(e) {
    let {
            tooltipText: t,
            showTooltip: n = !0,
            className: i,
            ariaLabel: o,
            onClick: d,
            onMouseEnter: c,
            onMouseLeave: h,
            children: g,
        } = e,
        m = o ?? t,
        I = (0, l.jsx)(s.D, {
            className: r()(u.k, i),
            "aria-label": m,
            onClick: d,
            onMouseEnter: c,
            onMouseLeave: h,
            role: "button",
            children: g,
        });
    return n ? (0, l.jsx)(a.m, { text: t, "aria-label": m, children: I }) : I;
}
