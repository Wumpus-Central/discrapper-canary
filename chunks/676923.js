var l = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    s = n(939249),
    a = n(866665),
    o = n(563633);
n.d(
    t,
    {},
    {
        S: function (e) {
            let {
                    tooltipText: t,
                    showTooltip: n = !0,
                    className: i,
                    ariaLabel: u,
                    onClick: d,
                    onMouseEnter: c,
                    onMouseLeave: h,
                    children: g,
                } = e,
                m = u ?? t,
                I = (0, l.jsx)(s.D, {
                    className: r()(o.k, i),
                    "aria-label": m,
                    onClick: d,
                    onMouseEnter: c,
                    onMouseLeave: h,
                    role: "button",
                    children: g,
                });
            return n ? (0, l.jsx)(a.m, { text: t, "aria-label": m, children: I }) : I;
        },
    },
);
