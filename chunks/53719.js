n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(990078),
    a = n(397927),
    o = n(290223);

function c(e) {
    let { icon: t, tooltip: n, onClick: i, className: c } = e;
    return (0, r.jsx)(s.m, {
        text: n,
        children: (0, r.jsx)(a.DUT, {
            "aria-label": n,
            onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), i(e);
            },
            className: l()(o.hP, c),
            children: (0, r.jsx)(t, {
                className: o.Kk,
                color: "currentColor",
            }),
        }),
    });
}
