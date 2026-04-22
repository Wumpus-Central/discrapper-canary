n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    l = n(990078),
    o = n(939249),
    s = n(642070);
function d(e) {
    let { onClick: t, icon: n, tooltip: r, className: d } = e,
        u = n({ color: "currentColor", size: "custom", width: 20, height: 20 });
    return (0, i.jsx)(l.m, {
        text: r,
        position: "bottom",
        children: (0, i.jsx)(o.D, {
            onClick: (e) => {
                t(e);
            },
            "aria-label": r,
            className: a()(s.x, d),
            children: (0, i.jsx)("div", { className: s.h, children: u }),
        }),
    });
}
