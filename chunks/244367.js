e.d(a, { a: () => c, t: () => s });
var i = e(477900);
e(582128);
var t = e(503698),
    o = e.n(t),
    n = e(834730),
    l = e(458029);
let s = { DEFAULT: "default", DESCRIPTION: "description" };
function c(r) {
    let { type: a = s.DEFAULT, className: e, disabled: t, children: c, style: b, ...m } = r,
        v = "modeDefault";
    return (
        t && (v = "modeDisabled"),
        (0, i.jsx)(n.E, { variant: "text-sm/normal", className: o()(l[a], e, l[v]), style: b, ...m, children: c })
    );
}
c.Types = s;
