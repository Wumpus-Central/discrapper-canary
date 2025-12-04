n.d(t, { Z: () => l });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(36361),
    o = n(388032),
    s = n(949558);
function l(e) {
    let { node: t } = e;
    return (0, r.jsxs)(i.Kqy, {
        gap: 8,
        padding: { top: 8 },
        children: [
            (0, r.jsx)(i.Heading, {
                variant: "heading-md/semibold",
                color: "text-default",
                className: s.title,
                children: o.intl.string(o.t.rPREPG),
            }),
            t.layout.map((e) => (0, r.jsx)(a.Z, { node: e }, e.key)),
        ],
    });
}
