"use strict";
n.d(t, { i: () => o, r: () => s });
var r = n(825913),
    i = n(357710),
    a = n(64700);
let s = (0, a.createContext)({ isSelected: !1 }),
    o = (0, a.forwardRef)(function (e, t) {
        [e, t] = (0, r.JT)(e, t, s);
        let { isSelected: n, ...o } = e;
        return a.createElement(i.e, {
            ...o,
            ref: t,
            className: e.className || "react-aria-SelectionIndicator",
            name: "SelectionIndicator",
            isVisible: n,
        });
    });
