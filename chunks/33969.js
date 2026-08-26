n.d(t, { A: () => f, Y: () => d });
var l = n(477900),
    r = n(503698),
    a = n.n(r),
    i = n(17928),
    s = n(866665),
    o = n(775602),
    u = n(101555),
    c = n(969603);
function d(e) {
    let {
            className: t,
            ref: n,
            tooltipText: r,
            onClick: d,
            shouldDelayTooltip: f,
            disabled: h,
            "aria-label": m,
            "aria-haspopup": A,
            "aria-expanded": T,
            "aria-controls": S,
            icon: g,
            variant: x,
            onMouseDown: p,
            onMouseEnter: E,
            onKeyDown: R,
        } = e,
        y = (0, i.bG)([o.Ay], () => (!f || o.Ay.useReducedMotion || o.Ay.keyboardModeEnabled ? 0 : 300));
    return (0, l.jsx)(s.m, {
        asContainer: !0,
        text: r,
        delay: y,
        ariaHidden: !0,
        children: (0, l.jsx)(u.$n, {
            ref: n,
            className: a()(c.button, c[x], t),
            disabled: h,
            "aria-label": m ?? r,
            "aria-haspopup": A,
            "aria-expanded": T,
            "aria-controls": S,
            onClick: d,
            onMouseDown: p,
            onMouseEnter: E,
            onKeyDown: R,
            children: (0, l.jsx)(g, { size: "xs", colorClass: c.icon }),
        }),
    });
}
function f(e) {
    let { className: t, children: n } = e;
    return (0, l.jsx)(u.Ay, { className: a()(c.bar, t), children: n });
}
