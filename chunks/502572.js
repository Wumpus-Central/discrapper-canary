"use strict";
n.d(t, { A: () => l });
var r = n(627968),
    a = n(64700),
    i = n(781696);
function l(e) {
    let { mouseLeaveDelay: t = 100, ...n } = e,
        { children: l, className: s, ...o } = n,
        c = a.useRef(0),
        [d, u] = a.useState(!1);
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
        children: (0, r.jsx)(i.ST, {
            "data-migration-pending": !0,
            forceOpen: d,
            disableTooltipPointerEvents: !1,
            ...o,
            children: l,
        }),
    });
}
