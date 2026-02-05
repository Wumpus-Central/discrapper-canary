"use strict";
n.d(t, { Z: () => c, s: () => l });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(532512);
let l = { PRIMARY: o.Xc, DANGER: o.Wg, WARNING: o.vH, SUCCESS: o.CN, BRAND: o.cX, CUSTOM: o.Nr },
    u = i.forwardRef((e, t) => {
        let n,
            { children: i, editable: a = !1, type: u = l.PRIMARY, className: c, outline: d = !1, ..._ } = e;
        return (
            d ? (n = o.rj) : u === l.PRIMARY && a && (n = o.LL),
            (0, r.jsx)("div", { ref: t, className: s()(c, u, n), ..._, children: i })
        );
    });
(u.displayName = "Card"), (u.Types = l);
let c = u;
