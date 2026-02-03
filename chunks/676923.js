n.d(t, {
    S: () => u,
});
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(435371),
    s = n(397927),
    o = n(791895);

function u(e) {
    let {
            tooltipText: t,
            showTooltip: n = !0,
            className: r,
            ariaLabel: u,
            onClick: c,
            onMouseEnter: d,
            onMouseLeave: h,
            children: p,
        } = e,
        f = null != u ? u : t,
        g = (0, i.jsx)(s.DUT, {
            className: l()(o.k, r),
            "aria-label": f,
            onClick: c,
            onMouseEnter: d,
            onMouseLeave: h,
            role: "button",
            children: p,
        });
    return n
        ? (0, i.jsx)(a.m_, {
              text: t,
              "aria-label": f,
              children: g,
          })
        : g;
}
