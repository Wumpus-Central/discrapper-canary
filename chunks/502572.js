i.d(t, { A: () => l });
var s = i(477900),
    n = i(582128),
    r = i(900002);
function l(e) {
    let { mouseLeaveDelay: t = 100, ...i } = e,
        { children: l, className: a, ...o } = i,
        c = n.useRef(0),
        [d, u] = n.useState(!1);
    return (0, s.jsx)("div", {
        className: a,
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
        children: (0, s.jsx)(r.ST, {
            "data-migration-pending": !0,
            forceOpen: d,
            disableTooltipPointerEvents: !1,
            ...o,
            children: l,
        }),
    });
}
