"use strict";
n.d(t, { i: () => o, r: () => a });
var i = n(825913),
    r = n(357710),
    s = n(64700);
let a = (0, s.createContext)({ isSelected: !1 }),
    o = (0, s.forwardRef)(function (e, t) {
        [e, t] = (0, i.JT)(e, t, a);
        let { isSelected: n, ...o } = e;
        return s.createElement(r.e, {
            ...o,
            ref: t,
            className: e.className || "react-aria-SelectionIndicator",
            name: "SelectionIndicator",
            isVisible: n,
        });
    });
