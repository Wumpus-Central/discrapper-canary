"use strict";
n.d(t, { Z: () => d, s: () => o });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(306821);
let o = { PRIMARY: s.Xc, DANGER: s.Wg, WARNING: s.vH, SUCCESS: s.CN, BRAND: s.cX, CUSTOM: s.Nr },
    c = a.forwardRef((e, t) => {
        let { children: n, outline: a = !1, editable: i, type: c = o.PRIMARY, className: d, ...u } = e;
        return (0, r.jsx)("div", { ref: t, className: l()(d, s.Nr, c, { [s.VR]: a }), ...u, children: n });
    });
(c.displayName = "Card"), (c.Types = o);
let d = c;
