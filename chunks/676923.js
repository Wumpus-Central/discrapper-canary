n.d(t, { S: () => o });
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    s = n(990078),
    a = n(939249),
    u = n(286596);
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
        I = (0, l.jsx)(a.D, {
            className: r()(u.k, i),
            "aria-label": m,
            onClick: d,
            onMouseEnter: c,
            onMouseLeave: h,
            role: "button",
            children: g,
        });
    return n ? (0, l.jsx)(s.m, { text: t, "aria-label": m, children: I }) : I;
}
