a.d(t, { a: () => l, t: () => c });
var s = a(627968);
a(64700);
var d = a(503698),
    i = a.n(d),
    r = a(834730),
    n = a(234818);
let c = { DEFAULT: "default", DESCRIPTION: "description" };
function l(e) {
    let { type: t = c.DEFAULT, className: a, disabled: d, children: l, style: p, ...u } = e,
        o = "modeDefault";
    return (
        d && (o = "modeDisabled"),
        (0, s.jsx)(r.E, { variant: "text-sm/normal", className: i()(n[t], a, n[o]), style: p, ...u, children: l })
    );
}
l.Types = c;
