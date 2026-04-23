n.d(t, { A: () => r });
var i = n(627968),
    l = n(939249),
    s = n(834730),
    a = n(369005);
function r(e) {
    let { title: t, description: n, onClick: r } = e;
    return (0, i.jsxs)("div", {
        className: a.S,
        children: [
            (0, i.jsx)(l.D, {
                onClick: r,
                className: a.H,
                children: (0, i.jsx)(s.E, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    lineClamp: 2,
                    children: t,
                }),
            }),
            (0, i.jsx)(s.E, { variant: "text-xs/medium", color: "text-default", children: n }),
        ],
    });
}
