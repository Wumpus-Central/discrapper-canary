"use strict";
n.d(t, { A: () => a });
var i = n(627968),
    r = n(64700),
    s = n(781696);
function a(e) {
    let { mouseLeaveDelay: t = 100, ...n } = e,
        { children: a, className: o, ...l } = n,
        u = r.useRef(0),
        [c, d] = r.useState(!1);
    return (0, i.jsx)("div", {
        className: o,
        onMouseEnter:
            0 !== t
                ? function () {
                      clearTimeout(u.current), d(!0);
                  }
                : () => {},
        onMouseLeave:
            0 !== t
                ? function () {
                      clearTimeout(u.current), (u.current = setTimeout(() => d(!1), t));
                  }
                : () => {},
        children: (0, i.jsx)(s.ST, {
            "data-migration-pending": !0,
            forceOpen: c,
            disableTooltipPointerEvents: !1,
            ...l,
            children: a,
        }),
    });
}
