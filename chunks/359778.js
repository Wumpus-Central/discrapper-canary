a.d(t, { Z: () => d, s: () => o });
var n = a(627968),
    r = a(64700),
    l = a(503698),
    i = a.n(l),
    s = a(306821);
let o = { PRIMARY: s.Xc, DANGER: s.Wg, WARNING: s.vH, SUCCESS: s.CN, BRAND: s.cX, CUSTOM: s.Nr },
    c = r.forwardRef((e, t) => {
        let { children: a, outline: r = !1, editable: l, type: c = o.PRIMARY, className: d, ...u } = e;
        return (0, n.jsx)("div", { ref: t, className: i()(d, s.Nr, c, { [s.VR]: r }), ...u, children: a });
    });
(c.displayName = "Card"), (c.Types = o);
let d = c;
