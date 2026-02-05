n.d(t, { S: () => o });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    r = n(435371),
    a = n(397927),
    u = n(791895);
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
        I = o ?? t,
        E = (0, l.jsx)(a.DUT, {
            className: s()(u.k, i),
            "aria-label": I,
            onClick: d,
            onMouseEnter: c,
            onMouseLeave: h,
            role: "button",
            children: g,
        });
    return n ? (0, l.jsx)(r.m_, { text: t, "aria-label": I, children: E }) : E;
}
