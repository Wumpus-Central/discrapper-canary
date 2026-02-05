n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(641324),
    a = n(985018),
    l = n(462250);
function o(e) {
    let { node: t } = e;
    return (0, i.jsxs)(s.BJc, {
        gap: 8,
        padding: { top: 8 },
        children: [
            (0, i.jsx)(s.Heading, {
                variant: "heading-md/semibold",
                color: "text-muted",
                className: l.D,
                children: a.intl.string(a.t.rPREPG),
            }),
            t.layout.map((e) => (0, i.jsx)(r.A, { node: e }, e.key)),
        ],
    });
}
