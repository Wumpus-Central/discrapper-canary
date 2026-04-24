n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    l = n(990078),
    s = n(939249),
    o = n(642070);
function d(e) {
    let { onClick: t, icon: n, tooltip: a, className: d } = e,
        u = n({ color: "currentColor", size: "custom", width: 20, height: 20 });
    return (0, i.jsx)(l.m, {
        text: a,
        position: "bottom",
        children: (0, i.jsx)(s.D, {
            onClick: (e) => {
                t(e);
            },
            "aria-label": a,
            className: r()(o.x, d),
            children: (0, i.jsx)("div", { className: o.h, children: u }),
        }),
    });
}
