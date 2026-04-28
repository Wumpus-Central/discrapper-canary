a.d(t, { Z: () => d, s: () => o });
var n = a(627968),
    l = a(64700),
    r = a(503698),
    i = a.n(r),
    s = a(306821);
let o = { PRIMARY: s.Xc, DANGER: s.Wg, WARNING: s.vH, SUCCESS: s.CN, BRAND: s.cX, CUSTOM: s.Nr },
    c = l.forwardRef((e, t) => {
        let { children: a, outline: l = !1, editable: r, type: c = o.PRIMARY, className: d, ...u } = e;
        return (0, n.jsx)("div", { ref: t, className: i()(d, s.Nr, c, { [s.VR]: l }), ...u, children: a });
    });
(c.displayName = "Card"), (c.Types = o);
let d = c;
