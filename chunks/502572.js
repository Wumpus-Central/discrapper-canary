a.d(t, { A: () => i });
var l = a(627968),
    n = a(64700),
    o = a(781696);
function i(e) {
    let { mouseLeaveDelay: t = 100, ...a } = e,
        { children: i, className: s, ...r } = a,
        u = n.useRef(0),
        [d, c] = n.useState(!1);
    return (0, l.jsx)("div", {
        className: s,
        onMouseEnter:
            0 !== t
                ? function () {
                      clearTimeout(u.current), c(!0);
                  }
                : () => {},
        onMouseLeave:
            0 !== t
                ? function () {
                      clearTimeout(u.current), (u.current = setTimeout(() => c(!1), t));
                  }
                : () => {},
        children: (0, l.jsx)(o.ST, {
            "data-migration-pending": !0,
            forceOpen: d,
            disableTooltipPointerEvents: !1,
            ...r,
            children: i,
        }),
    });
}
