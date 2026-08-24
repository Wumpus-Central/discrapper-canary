"use strict";
r.d(t, { i: () => s, r: () => a });
var n = r(760029),
    i = r(287946),
    o = r(582128);
let a = (0, o.createContext)({ isSelected: !1 }),
    s = (0, o.forwardRef)(function (e, t) {
        [e, t] = (0, n.JT)(e, t, a);
        let { isSelected: r, ...s } = e;
        return o.createElement(i.e, {
            ...s,
            ref: t,
            className: e.className || "react-aria-SelectionIndicator",
            name: "SelectionIndicator",
            isVisible: r,
        });
    });
