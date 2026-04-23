n.d(t, { X: () => r });
var i = n(627968);
n(64700);
var l = n(834730),
    s = n(111019);
let r = (e) => {
    let { title: t, subtitle: n, icon: r } = e;
    return (0, i.jsxs)("div", {
        className: s.iE,
        children: [
            null != r && (0, i.jsx)(r, { size: "xs", color: "currentColor", className: s.Kk }),
            (0, i.jsx)(l.E, { variant: "text-md/normal", className: s.DD, children: t }),
            null != n && "" !== n
                ? (0, i.jsx)(l.E, { variant: "text-xs/semibold", className: s.VA, children: n })
                : null,
        ],
    });
};
