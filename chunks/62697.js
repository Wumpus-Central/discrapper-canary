n.d(t, { A: () => E });
var l = n(627968);
n(64700);
var r = n(397927),
    a = n(486974),
    i = n(985018),
    s = n(413688),
    o = n(954531);
function E(e) {
    let { onNavigate: t, backPanel: n = a.g.INFO } = e;
    return (0, l.jsxs)("div", {
        className: o.wx,
        children: [
            (0, l.jsx)("div", {
                className: o.qd,
                children: (0, l.jsxs)(r.DUT, {
                    className: s.Gv,
                    onClick: () => t?.(n),
                    children: [
                        (0, l.jsx)(r.rJJ, { size: "custom", width: 20, height: 20 }),
                        (0, l.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            children: i.intl.string(i.t["13/7kX"]),
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(r.DUT, {
                onClick: (e) => {
                    e.stopPropagation(), t?.(n);
                },
                children: (0, l.jsx)(r.e7I, { shortcut: "esc", keyClassName: s.Wb, className: s.ti }),
            }),
        ],
    });
}
