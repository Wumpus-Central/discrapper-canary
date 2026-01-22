n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(397927),
    l = n(290223);

function c(e) {
    let { icon: t, tooltip: n, onClick: i, className: c } = e,
        u = (e) => {
            e.preventDefault(), e.stopPropagation(), i(e);
        };
    return (0, r.jsx)(s.m, {
        text: n,
        children: (0, r.jsx)(o.DUT, {
            "aria-label": n,
            onClick: u,
            className: a()(l.hP, c),
            children: (0, r.jsx)(t, {
                className: l.Kk,
                color: "currentColor",
            }),
        }),
    });
}
