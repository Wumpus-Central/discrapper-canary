l.d(t, { A: () => c });
var n = l(627968);
l(64700);
var i = l(503698),
    s = l.n(i),
    a = l(990078),
    r = l(939249),
    d = l(665566);
function c(e) {
    let { icon: t, tooltip: l, onClick: i, className: c } = e;
    return (0, n.jsx)(a.m, {
        text: l,
        children: (0, n.jsx)(r.D, {
            "aria-label": l,
            onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), i(e);
            },
            className: s()(d.hP, c),
            children: (0, n.jsx)(t, { className: d.Kk, color: "currentColor" }),
        }),
    });
}
