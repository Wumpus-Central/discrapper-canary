n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var a = n(939249),
    r = n(477155),
    i = n(534514),
    s = n(475358),
    E = n(486974),
    _ = n(985018),
    u = n(104168),
    o = n(645267);
function c(e) {
    let { onNavigate: t, backPanel: n = E.g.INFO } = e;
    return (0, l.jsxs)("div", {
        className: o.wx,
        children: [
            (0, l.jsx)("div", {
                className: o.qd,
                children: (0, l.jsxs)(a.D, {
                    className: u.Gv,
                    onClick: () => t?.(n),
                    children: [
                        (0, l.jsx)(r.r, { size: "custom", width: 20, height: 20 }),
                        (0, l.jsx)(i.D, { variant: "heading-md/semibold", children: _.intl.string(_.t["13/7kX"]) }),
                    ],
                }),
            }),
            (0, l.jsx)(a.D, {
                onClick: (e) => {
                    e.stopPropagation(), t?.(n);
                },
                children: (0, l.jsx)(s.e, { shortcut: "esc", keyClassName: u.Wb, className: u.ti }),
            }),
        ],
    });
}
