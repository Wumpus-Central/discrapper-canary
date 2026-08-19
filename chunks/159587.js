"use strict";
r.d(t, { i: () => s, r: () => a });
var n = r(760029),
    o = r(287946),
    i = r(582128);
let a = (0, i.createContext)({ isSelected: !1 }),
    s = (0, i.forwardRef)(function (e, t) {
        [e, t] = (0, n.JT)(e, t, a);
        let { isSelected: r, ...s } = e;
        return i.createElement(o.e, {
            ...s,
            ref: t,
            className: e.className || "react-aria-SelectionIndicator",
            name: "SelectionIndicator",
            isVisible: r,
        });
    });
