n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(186078),
    a = n(137158),
    o = n(664305);
let c = function (e) {
    let { formField: t, index: n, isDragEnabled: i, isDropHovered: c, onDrop: u, onEdit: d, onRemove: m, canRemove: g, actionsLocation: p, fieldStyle: h } = e,
        { label: f } = t;
    return (0, r.jsx)(a.Z, {
        field: t,
        index: n,
        isDragEnabled: i,
        isDropHovered: c,
        onDrop: u,
        onEdit: d,
        onRemove: m,
        title: f,
        canRemove: g,
        actionsLocation: p,
        fieldStyle: h,
        children: (0, r.jsx)(s.BO, {
            field: t,
            value: void 0,
            radioItemClassName: l()(o.fieldBackground, o.multipleChoiceFixedTextColor),
            disabled: !1
        })
    });
};
