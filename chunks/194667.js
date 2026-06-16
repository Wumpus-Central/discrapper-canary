l.d(a, { X: () => i });
var e = l(627968);
l(64700);
var r = l(834730),
    c = l(111019);
let i = (s) => {
    let { title: a, subtitle: l, icon: i } = s;
    return (0, e.jsxs)("div", {
        className: c.iE,
        children: [
            null != i && (0, e.jsx)(i, { size: "xs", color: "currentColor", className: c.Kk }),
            (0, e.jsx)(r.E, { variant: "text-md/normal", className: c.DD, children: a }),
            null != l && "" !== l
                ? (0, e.jsx)(r.E, { variant: "text-xs/semibold", className: c.VA, children: l })
                : null,
        ],
    });
};
