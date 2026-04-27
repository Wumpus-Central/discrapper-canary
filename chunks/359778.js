"use strict";
r.d(t, { Z: () => d, s: () => o });
var n = r(627968),
    i = r(64700),
    a = r(503698),
    s = r.n(a),
    l = r(306821);
let o = { PRIMARY: l.Xc, DANGER: l.Wg, WARNING: l.vH, SUCCESS: l.CN, BRAND: l.cX, CUSTOM: l.Nr },
    c = i.forwardRef((e, t) => {
        let { children: r, outline: i = !1, editable: a, type: c = o.PRIMARY, className: d, ...u } = e;
        return (0, n.jsx)("div", { ref: t, className: s()(d, l.Nr, c, { [l.VR]: i }), ...u, children: r });
    });
(c.displayName = "Card"), (c.Types = o);
let d = c;
