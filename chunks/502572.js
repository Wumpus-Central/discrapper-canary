"use strict";
r.d(t, { A: () => s });
var n = r(627968),
    i = r(64700),
    a = r(781696);
function s(e) {
    let { mouseLeaveDelay: t = 100, ...r } = e,
        { children: s, className: l, ...o } = r,
        c = i.useRef(0),
        [d, u] = i.useState(!1);
    return (0, n.jsx)("div", {
        className: l,
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
        children: (0, n.jsx)(a.ST, {
            "data-migration-pending": !0,
            forceOpen: d,
            disableTooltipPointerEvents: !1,
            ...o,
            children: s,
        }),
    });
}
