n.d(t, { Z: () => l }), n(35282);
var r = n(54381),
    i = n(473749),
    a = n(36361),
    o = n(673843);
function s(e) {
    let { node: t } = e;
    return (0, r.jsx)("div", {
        className: o.split,
        children: t.layout.map((e) => (0, r.jsx)(a.Z, { node: e }, e.key)),
    });
}
let l = i.memo(s);
