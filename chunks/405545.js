n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    c = n(186078),
    s = n(137158),
    a = n(664305);
let l = function (e) {
    let { formField: t, index: n, isDragEnabled: i, isDropHovered: l, onDrop: u, onEdit: d, onRemove: f, canRemove: p, actionsLocation: b, fieldStyle: j } = e,
        { label: y } = t;
    return (0, r.jsx)(s.Z, {
        field: t,
        index: n,
        isDragEnabled: i,
        isDropHovered: l,
        onDrop: u,
        onEdit: d,
        onRemove: f,
        title: y,
        canRemove: p,
        actionsLocation: b,
        fieldStyle: j,
        children: (0, r.jsx)(c.BO, {
            field: t,
            value: void 0,
            radioItemClassName: o()(a.fieldBackground, a.multipleChoiceFixedTextColor),
            disabled: !1
        })
    });
};
