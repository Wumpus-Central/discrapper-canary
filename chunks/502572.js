n.d(t, { A: () => r });
var a = n(627968),
    i = n(64700),
    l = n(781696);
function r(e) {
    let { mouseLeaveDelay: t = 100, ...n } = e,
        { children: r, className: o, ...s } = n,
        c = i.useRef(0),
        [d, u] = i.useState(!1);
    return (0, a.jsx)("div", {
        className: o,
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
        children: (0, a.jsx)(l.ST, {
            "data-migration-pending": !0,
            forceOpen: d,
            disableTooltipPointerEvents: !1,
            ...s,
            children: r,
        }),
    });
}
