s.d(e, { A: () => p, Y: () => h });
var n = s(477900),
    i = s(503698),
    r = s.n(i),
    o = s(17928),
    l = s(866665),
    t = s(775602),
    d = s(101555),
    c = s(969603);
function h(a) {
    let {
            className: e,
            ref: s,
            tooltipText: i,
            onClick: h,
            shouldDelayTooltip: p,
            disabled: u,
            "aria-label": x,
            "aria-haspopup": v,
            "aria-expanded": w,
            "aria-controls": b,
            icon: f,
            variant: y,
            onMouseDown: A,
            onMouseEnter: m,
            onKeyDown: g,
        } = a,
        j = (0, o.bG)([t.Ay], () => (!p || t.Ay.useReducedMotion || t.Ay.keyboardModeEnabled ? 0 : 300));
    return (0, n.jsx)(l.m, {
        asContainer: !0,
        text: i,
        delay: j,
        ariaHidden: !0,
        children: (0, n.jsx)(d.$n, {
            ref: s,
            className: r()(c.button, c[y], e),
            disabled: u,
            "aria-label": x ?? i,
            "aria-haspopup": v,
            "aria-expanded": w,
            "aria-controls": b,
            onClick: h,
            onMouseDown: A,
            onMouseEnter: m,
            onKeyDown: g,
            children: (0, n.jsx)(f, { size: "xs", colorClass: c.icon }),
        }),
    });
}
function p(a) {
    let { className: e, children: s } = a;
    return (0, n.jsx)(d.Ay, { className: r()(c.bar, e), children: s });
}
