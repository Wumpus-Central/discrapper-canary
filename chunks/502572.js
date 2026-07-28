"use strict";
n.d(t, { A: () => s });
var i = n(477900),
    r = n(582128),
    a = n(900002);
function s(e) {
    let { mouseLeaveDelay: t = 100, ...n } = e,
        { children: s, className: l, ...o } = n,
        d = r.useRef(0),
        [c, u] = r.useState(!1);
    return (0, i.jsx)("div", {
        className: l,
        onMouseEnter:
            0 !== t
                ? function () {
                      clearTimeout(d.current), u(!0);
                  }
                : () => {},
        onMouseLeave:
            0 !== t
                ? function () {
                      clearTimeout(d.current), (d.current = setTimeout(() => u(!1), t));
                  }
                : () => {},
        children: (0, i.jsx)(a.ST, {
            "data-migration-pending": !0,
            forceOpen: c,
            disableTooltipPointerEvents: !1,
            ...o,
            children: s,
        }),
    });
}
