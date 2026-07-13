n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(990078),
    s = n(939249),
    o = n(642070);
function u(e) {
    let { onClick: t, icon: n, tooltip: r, className: u } = e,
        d = n({ color: "currentColor", size: "custom", width: 20, height: 20 });
    return (0, i.jsx)(a.m, {
        text: r,
        position: "bottom",
        children: (0, i.jsx)(s.D, {
            onClick: (e) => {
                t(e);
            },
            "aria-label": r,
            className: l()(o.x, u),
            children: (0, i.jsx)("div", { className: o.h, children: d }),
        }),
    });
}
