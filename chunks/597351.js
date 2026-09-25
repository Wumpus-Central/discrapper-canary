n.d(t, { A: () => u });
var i = n(477900);
n(582128);
var r = n(503698),
    l = n.n(r),
    a = n(866665),
    o = n(939249),
    s = n(250109);
function u(e) {
    let { onClick: t, icon: n, tooltip: r, className: u } = e,
        d = n({ color: "currentColor", size: "custom", width: 20, height: 20 });
    return (0, i.jsx)(a.m, {
        text: r,
        position: "bottom",
        children: (0, i.jsx)(o.D, {
            onClick: (e) => {
                t(e);
            },
            "aria-label": r,
            className: l()(s.x, u),
            children: (0, i.jsx)("div", { className: s.h, children: d }),
        }),
    });
}
