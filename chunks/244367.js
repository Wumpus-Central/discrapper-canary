a.d(l, { a: () => d, t: () => s });
var t = a(627968);
a(64700);
var n = a(503698),
    o = a.n(n),
    i = a(834730),
    r = a(234818);
let s = { DEFAULT: "default", DESCRIPTION: "description" };
function d(e) {
    let { type: l = s.DEFAULT, className: a, disabled: n, children: d, style: u, ...c } = e,
        b = "modeDefault";
    return (
        n && (b = "modeDisabled"),
        (0, t.jsx)(i.E, { variant: "text-sm/normal", className: o()(r[l], a, r[b]), style: u, ...c, children: d })
    );
}
d.Types = s;
