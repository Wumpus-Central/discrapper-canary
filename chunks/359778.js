a.d(l, { Z: () => u, s: () => s });
var t = a(627968),
    n = a(64700),
    o = a(503698),
    i = a.n(o),
    r = a(634373);
let s = { PRIMARY: r.Xc, DANGER: r.Wg, WARNING: r.vH, SUCCESS: r.CN, BRAND: r.cX, CUSTOM: r.Nr },
    d = n.forwardRef((e, l) => {
        let { children: a, outline: n = !1, editable: o, type: d = s.PRIMARY, className: u, ...c } = e;
        return (0, t.jsx)("div", { ref: l, className: i()(u, r.Nr, d, { [r.VR]: n }), ...c, children: a });
    });
(d.displayName = "Card"), (d.Types = s);
let u = d;
