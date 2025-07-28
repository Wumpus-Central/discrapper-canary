n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(186078),
    s = n(137158),
    o = n(664305);
let c = function (e) {
    let { formField: t, index: n, isDragEnabled: i, isDropHovered: c, onDrop: d, onEdit: u, onRemove: m, canRemove: g, actionsLocation: p, fieldStyle: h } = e,
        { label: f } = t;
    return (0, r.jsx)(s.Z, {
        field: t,
        index: n,
        isDragEnabled: i,
        isDropHovered: c,
        onDrop: d,
        onEdit: u,
        onRemove: m,
        title: f,
        canRemove: g,
        actionsLocation: p,
        fieldStyle: h,
        children: (0, r.jsx)(a.BO, {
            field: t,
            value: void 0,
            radioItemClassName: l()(o.fieldBackground, o.multipleChoiceFixedTextColor),
            disabled: !1
        })
    });
};
