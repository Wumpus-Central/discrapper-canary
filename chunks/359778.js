"use strict";
n.d(t, { Z: () => c, s: () => l });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(306821);
let l = { PRIMARY: o.Xc, DANGER: o.Wg, WARNING: o.vH, SUCCESS: o.CN, BRAND: o.cX, CUSTOM: o.Nr },
    u = r.forwardRef((e, t) => {
        let { children: n, outline: r = !1, editable: s, type: u = l.PRIMARY, className: c, ...d } = e;
        return (0, i.jsx)("div", { ref: t, className: a()(c, o.Nr, u, { [o.VR]: r }), ...d, children: n });
    });
(u.displayName = "Card"), (u.Types = l);
let c = u;
