n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(186078),
    l = n(137158),
    o = n(664305);
let c = function (e) {
    let { formField: t, index: n, isDragEnabled: i, isDropHovered: c, onDrop: d, onEdit: u, onRemove: m, canRemove: g, actionsLocation: p, fieldStyle: f } = e,
        { label: h } = t;
    return (0, r.jsx)(l.Z, {
        field: t,
        index: n,
        isDragEnabled: i,
        isDropHovered: c,
        onDrop: d,
        onEdit: u,
        onRemove: m,
        title: h,
        canRemove: g,
        actionsLocation: p,
        fieldStyle: f,
        children: (0, r.jsx)(a.BO, {
            field: t,
            value: void 0,
            radioItemClassName: s()(o.fieldBackground, o.multipleChoiceFixedTextColor),
            disabled: !1
        })
    });
};
