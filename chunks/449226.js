t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    a = t.n(l),
    s = t(481060),
    r = t(232203);
function o(e) {
    let { checked: n, onChange: t, disabled: l, className: o, tooltipProps: c } = e,
        d = (e) => {
            e.stopPropagation(), e.preventDefault();
        };
    return (0, i.jsx)(s.Clickable, {
        onClick: d,
        onMouseDown: d,
        onMouseUp: d,
        className: a()(r.switch, o),
        ...c,
        children: (0, i.jsx)(s.Switch, {
            checked: n,
            onChange: t,
            disabled: l
        })
    });
}
