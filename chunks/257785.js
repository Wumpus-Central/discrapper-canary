n.d(t, {
    E: function () {
        return s;
    },
    Z9: function () {
        return c;
    },
    wl: function () {
        return d;
    }
});
var a = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    i = n(481060),
    o = n(941469);
function s(e) {
    let { className: t, children: n } = e;
    return (0, a.jsx)('dl', {
        className: l()(o.properties, t),
        children: n
    });
}
function c(e) {
    let { name: t, children: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('dt', {
                className: o.propertyName,
                children: t
            }),
            (0, a.jsx)('dd', { children: n })
        ]
    });
}
function d(e) {
    let { value: t } = e;
    return (0, a.jsx)(i.Checkbox, {
        size: 16,
        value: t,
        shape: i.Checkbox.Shapes.SMALL_BOX,
        displayOnly: !0
    });
}
