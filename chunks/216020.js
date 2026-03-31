n.d(t, { A: () => a });
var i = n(627968),
    l = n(158954),
    s = n(587933);
function a(e) {
    let { title: t, description: n, onClick: a } = e;
    return (0, i.jsxs)("div", {
        className: s.S,
        children: [
            (0, i.jsx)(l.DUT, {
                onClick: a,
                className: s.H,
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
