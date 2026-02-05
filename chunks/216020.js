n.d(t, { A: () => r });
var i = n(627968),
    l = n(158954),
    s = n(985018),
    a = n(885794);
function r(e) {
    let { title: t, description: n, onClick: r } = e;
    return (0, i.jsxs)("div", {
        className: a.S,
        children: [
            (0, i.jsx)(l.DUT, {
                onClick: r,
                className: a.H,
                "aria-label": s.intl.string(s.t.pLPjsb),
                children: (0, i.jsx)(l.EYj, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    lineClamp: 2,
                    children: t,
                }),
            }),
            (0, i.jsx)(l.EYj, { variant: "text-xs/medium", color: "text-default", children: n }),
        ],
    });
}
