t.d(n, { A: () => c });
var l = t(627968);
t(64700);
var r = t(331322),
    i = t(534514),
    s = t(641324),
    a = t(985018),
    o = t(722899);
function c(e) {
    let { node: n } = e;
    return (0, l.jsxs)(r.B, {
        gap: 8,
        padding: { top: 8 },
        children: [
            (0, l.jsx)(i.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                className: o.D,
                children: a.intl.string(a.t.rPREPG),
            }),
            n.layout.map((e) => (0, l.jsx)(s.A, { node: e }, e.key)),
        ],
    });
}
