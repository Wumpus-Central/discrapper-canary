n.d(t, { A: () => f, Y: () => d });
var l = n(477900),
    i = n(503698),
    a = n.n(i),
    r = n(17928),
    s = n(866665),
    o = n(775602),
    u = n(101555),
    c = n(969603);
function d(e) {
    let {
            className: t,
            ref: n,
            tooltipText: i,
            onClick: d,
            shouldDelayTooltip: f,
            disabled: A,
            "aria-label": S,
            "aria-haspopup": h,
            "aria-expanded": T,
            "aria-controls": m,
            icon: g,
            variant: x,
            onMouseDown: E,
            onMouseEnter: p,
            onKeyDown: R,
        } = e,
        y = (0, r.bG)([o.Ay], () => (!f || o.Ay.useReducedMotion || o.Ay.keyboardModeEnabled ? 0 : 300));
    return (0, l.jsx)(s.m, {
        asContainer: !0,
        text: i,
        delay: y,
        ariaHidden: !0,
        children: (0, l.jsx)(u.$n, {
            ref: n,
            className: a()(c.button, c[x], t),
            disabled: A,
            "aria-label": S ?? i,
            "aria-haspopup": h,
            "aria-expanded": T,
            "aria-controls": m,
            onClick: d,
            onMouseDown: E,
            onMouseEnter: p,
            onKeyDown: R,
            children: (0, l.jsx)(g, { size: "xs", colorClass: c.icon }),
        }),
    });
}
function f(e) {
    let { className: t, children: n } = e;
    return (0, l.jsx)(u.Ay, { className: a()(c.bar, t), children: n });
}
