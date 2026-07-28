"use strict";
n.d(t, { i: () => s, r: () => o });
var r = n(760029),
    i = n(287946),
    a = n(582128);
let o = (0, a.createContext)({ isSelected: !1 }),
    s = (0, a.forwardRef)(function (e, t) {
        [e, t] = (0, r.JT)(e, t, o);
        let { isSelected: n, ...s } = e;
        return a.createElement(i.e, {
            ...s,
            ref: t,
            className: e.className || "react-aria-SelectionIndicator",
            name: "SelectionIndicator",
            isVisible: n,
        });
    });
