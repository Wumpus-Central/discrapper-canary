"use strict";
n.d(t, { Z: () => d, s: () => o });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(634373);
let o = { PRIMARY: a.Xc, DANGER: a.Wg, WARNING: a.vH, SUCCESS: a.CN, BRAND: a.cX, CUSTOM: a.Nr },
    c = s.forwardRef((e, t) => {
        let { children: n, outline: s = !1, editable: r, type: c = o.PRIMARY, className: d, ...u } = e;
        return (0, i.jsx)("div", { ref: t, className: l()(d, a.Nr, c, { [a.VR]: s }), ...u, children: n });
    });
(c.displayName = "Card"), (c.Types = o);
let d = c;
