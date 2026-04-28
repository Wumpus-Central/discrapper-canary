a.d(t, { A: () => i });
var n = a(627968),
    l = a(64700),
    r = a(781696);
function i(e) {
    let { mouseLeaveDelay: t = 100, ...a } = e,
        { children: i, className: s, ...o } = a,
        c = l.useRef(0),
        [d, u] = l.useState(!1);
    return (0, n.jsx)("div", {
        className: s,
        onMouseEnter:
            0 !== t
                ? function () {
                      clearTimeout(c.current), u(!0);
                  }
                : () => {},
        onMouseLeave:
            0 !== t
                ? function () {
                      clearTimeout(c.current), (c.current = setTimeout(() => u(!1), t));
                  }
                : () => {},
        children: (0, n.jsx)(r.ST, {
            "data-migration-pending": !0,
            forceOpen: d,
            disableTooltipPointerEvents: !1,
            ...o,
            children: i,
        }),
    });
}
