t.d(n, { Z: () => o });
var i = t(200651);
t(192379);
var l = t(73880),
    s = t(137158),
    a = t(388032),
    r = t(31619);
let o = function (e) {
    let { formField: n, index: t, isDragEnabled: o, isDropHovered: c, onDrop: d, onEdit: u, onRemove: x, canRemove: m, actionsLocation: h, fieldStyle: f } = e,
        { label: v, placeholder: g } = n;
    return (0, i.jsx)(s.Z, {
        field: n,
        index: t,
        isDragEnabled: o,
        isDropHovered: c,
        onDrop: d,
        onEdit: u,
        onRemove: x,
        title: v,
        canRemove: m,
        actionsLocation: h,
        fieldStyle: f,
        children: (0, i.jsx)(l.Q8, {
            className: r.fieldBackground,
            placeholder: null != g ? g : a.intl.string(a.t['Sqn+Wl']),
            disabled: !0
        })
    });
};
