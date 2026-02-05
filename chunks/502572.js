"use strict";
n.d(t, { A: () => s });
var r = n(627968),
    i = n(64700),
    a = n(781696);
function s(e) {
    let { mouseLeaveDelay: t = 100, ...n } = e,
        { children: s, className: o, ...l } = n,
        u = i.useRef(0),
        [c, d] = i.useState(!1);
    function _() {
        clearTimeout(u.current), d(!0);
    }
    function f() {
        clearTimeout(u.current), (u.current = setTimeout(() => d(!1), t));
    }
    return (0, r.jsx)("div", {
        className: o,
        onMouseEnter: 0 !== t ? _ : () => {},
        onMouseLeave: 0 !== t ? f : () => {},
        children: (0, r.jsx)(a.ST, {
            "data-migration-pending": !0,
            forceOpen: c,
            disableTooltipPointerEvents: !1,
            ...l,
            children: s,
        }),
    });
}
