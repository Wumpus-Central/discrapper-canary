n.d(t, {
    A: () => c,
});
var l = n(627968);
n(64700);
var r = n(397927),
    a = n(486974),
    i = n(985018),
    s = n(848161),
    o = n(438536);

function c(e) {
    let { onNavigate: t, backPanel: n = a.g.INFO } = e;
    return (0, l.jsxs)("div", {
        className: o.wx,
        children: [
            (0, l.jsx)("div", {
                className: o.qd,
                children: (0, l.jsxs)(r.DUT, {
                    className: s.Gv,
                    onClick: () => (null == t ? void 0 : t(n)),
                    children: [
                        (0, l.jsx)(r.rJJ, {
                            size: "custom",
                            width: 20,
                            height: 20,
                        }),
                        (0, l.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            children: i.intl.string(i.t["13/7kX"]),
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(r.e7I, {
                shortcut: "esc",
                keyClassName: s.Wb,
                className: s.ti,
            }),
        ],
    });
}
