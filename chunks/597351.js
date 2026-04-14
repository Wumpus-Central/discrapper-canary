n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    a = n(990078),
    s = n(397927),
    o = n(922118);
function d(e) {
    let { onClick: t, icon: n, tooltip: l, className: d } = e,
        u = n({ color: "currentColor", size: "custom", width: 20, height: 20 });
    return (0, i.jsx)(a.m, {
        text: l,
        position: "bottom",
        children: (0, i.jsx)(s.DUT, {
            onClick: (e) => {
                t(e);
            },
            "aria-label": l,
            className: r()(o.x, d),
            children: (0, i.jsx)("div", { className: o.h, children: u }),
        }),
    });
}
