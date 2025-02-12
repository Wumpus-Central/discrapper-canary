t.d(n, { Z: () => o });
var i = t(200651);
t(192379);
var l = t(120356),
    s = t.n(l),
    a = t(481060),
    r = t(455476);
function o(e) {
    let { checked: n, onChange: t, disabled: l, className: o, tooltipProps: c } = e,
        d = (e) => {
            e.stopPropagation(), e.preventDefault();
        };
    return (0, i.jsx)(a.P3F, {
        onClick: d,
        onMouseDown: d,
        onMouseUp: d,
        className: s()(r.switch, o),
        ...c,
        children: (0, i.jsx)(a.rsf, {
            checked: n,
            onChange: t,
            disabled: l
        })
    });
}
