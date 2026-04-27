a.d(t, { A: () => i });
var r = a(627968),
    n = a(64700),
    l = a(781696);
function i(e) {
    let { mouseLeaveDelay: t = 100, ...a } = e,
        { children: i, className: s, ...o } = a,
        c = n.useRef(0),
        [d, u] = n.useState(!1);
    return (0, r.jsx)("div", {
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
        children: (0, r.jsx)(l.ST, {
            "data-migration-pending": !0,
            forceOpen: d,
            disableTooltipPointerEvents: !1,
            ...o,
            children: i,
        }),
    });
}
