n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(939249),
    a = n(243721),
    o = n(101839);
function d(e) {
    let { checked: t, onChange: n, disabled: l, className: d, tooltipProps: c } = e,
        u = (e) => {
            e.stopPropagation(), e.preventDefault();
        };
    return (0, i.jsx)(r.D, {
        onClick: u,
        onMouseDown: u,
        onMouseUp: u,
        className: s()(o.ZW, d),
        ...c,
        children: (0, i.jsx)(a.d, { checked: t, onChange: n, disabled: l }),
    });
}
