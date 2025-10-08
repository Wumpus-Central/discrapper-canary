n.d(t, { Z: () => a });
var r = n(951288);
n(647438);
var i = n(186078),
    l = n(137158),
    s = n(866234);
let a = function (e) {
    let {
            formField: t,
            index: n,
            isDragEnabled: a,
            isDropHovered: o,
            onDrop: c,
            onEdit: d,
            onRemove: u,
            canRemove: g,
            actionsLocation: m,
            fieldStyle: p,
        } = e,
        { label: f } = t;
    return (0, r.jsx)(l.Z, {
        field: t,
        index: n,
        isDragEnabled: a,
        isDropHovered: o,
        onDrop: c,
        onEdit: d,
        onRemove: u,
        title: f,
        canRemove: g,
        actionsLocation: m,
        fieldStyle: p,
        children: (0, r.jsx)(i.BO, {
            field: t,
            value: void 0,
            radioItemClassName: s.multipleChoiceFixedTextColor,
            disabled: !1,
        }),
    });
};
