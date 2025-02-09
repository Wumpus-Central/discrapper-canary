t.d(n, { Z: () => c });
var i = t(200651);
t(192379);
var l = t(120356),
    s = t.n(l),
    a = t(186078),
    r = t(137158),
    o = t(241195);
let c = function (e) {
    let { formField: n, index: t, isDragEnabled: l, isDropHovered: c, onDrop: d, onEdit: u, onRemove: x, canRemove: m, actionsLocation: h, fieldStyle: f } = e,
        { label: v } = n;
    return (0, i.jsx)(r.Z, {
        field: n,
        index: t,
        isDragEnabled: l,
        isDropHovered: c,
        onDrop: d,
        onEdit: u,
        onRemove: x,
        title: v,
        canRemove: m,
        actionsLocation: h,
        fieldStyle: f,
        children: (0, i.jsx)(a.BO, {
            field: n,
            value: void 0,
            radioItemClassName: s()(o.fieldBackground, o.multipleChoiceFixedTextColor),
            disabled: !1
        })
    });
};
