var i = t(200651);
t(192379);
var l = t(120356),
    a = t.n(l),
    s = t(186078),
    r = t(137158),
    o = t(31619);
n.Z = function (e) {
    let { formField: n, index: t, isDragEnabled: l, isDropHovered: c, onDrop: d, onEdit: u, onRemove: m, canRemove: x, actionsLocation: f, fieldStyle: h } = e,
        { label: g } = n;
    return (0, i.jsx)(r.Z, {
        field: n,
        index: t,
        isDragEnabled: l,
        isDropHovered: c,
        onDrop: d,
        onEdit: u,
        onRemove: m,
        title: g,
        canRemove: x,
        actionsLocation: f,
        fieldStyle: h,
        children: (0, i.jsx)(s.BO, {
            field: n,
            value: void 0,
            radioItemClassName: a()(o.fieldBackground, o.multipleChoiceFixedTextColor),
            disabled: !1
        })
    });
};
