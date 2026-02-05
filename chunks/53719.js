n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(990078),
    l = n(397927),
    o = n(290223);
function c(e) {
    let { icon: t, tooltip: n, onClick: s, className: c } = e;
    return (0, i.jsx)(a.m, {
        text: n,
        children: (0, i.jsx)(l.DUT, {
            "aria-label": n,
            onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), s(e);
            },
            className: r()(o.hP, c),
            children: (0, i.jsx)(t, { className: o.Kk, color: "currentColor" }),
        }),
    });
}
