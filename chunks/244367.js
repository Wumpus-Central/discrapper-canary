var t = s(477900);
s(582128);
var d = s(503698),
    i = s.n(d),
    r = s(834730),
    n = s(458029);
let c = { DEFAULT: "default", DESCRIPTION: "description" };
function l(e) {
    let { type: a = c.DEFAULT, className: s, disabled: d, children: l, style: p, ...o } = e,
        u = "modeDefault";
    return (
        d && (u = "modeDisabled"),
        (0, t.jsx)(r.E, { variant: "body-sm/normal", className: i()(n[a], s, n[u]), style: p, ...o, children: l })
    );
}
((l.Types = c), s.d(a, {}, { a: l, t: c }));
