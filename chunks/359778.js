"use strict";
n.d(t, { Z: () => d, s: () => o });
var a = n(627968),
    r = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(306821);
let o = { PRIMARY: s.Xc, DANGER: s.Wg, WARNING: s.vH, SUCCESS: s.CN, BRAND: s.cX, CUSTOM: s.Nr },
    c = r.forwardRef((e, t) => {
        let { children: n, outline: r = !1, editable: i, type: c = o.PRIMARY, className: d, ...u } = e;
        return (0, a.jsx)("div", { ref: t, className: l()(d, s.Nr, c, { [s.VR]: r }), ...u, children: n });
    });
(c.displayName = "Card"), (c.Types = o);
let d = c;
