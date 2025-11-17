n.d(t, { Z: () => a });
var r = n(54381);
n(473749);
var i = n(186078),
    l = n(137158);
let a = function (e) {
    let {
            formField: t,
            index: n,
            isDragEnabled: a,
            isDropHovered: s,
            onDrop: o,
            onEdit: c,
            onRemove: d,
            canRemove: u,
            actionsLocation: g,
            fieldStyle: m,
        } = e,
        { label: p } = t;
    return (0, r.jsx)(l.Z, {
        field: t,
        index: n,
        isDragEnabled: a,
        isDropHovered: s,
        onDrop: o,
        onEdit: c,
        onRemove: d,
        title: p,
        canRemove: u,
        actionsLocation: g,
        fieldStyle: m,
        children: (0, r.jsx)(i.BO, {
            field: t,
            value: void 0,
            disabled: !1,
        }),
    });
};
