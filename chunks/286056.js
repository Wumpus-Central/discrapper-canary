n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var s = n(601047),
    l = n(243056),
    r = n(985018);
let a = function (e) {
    let {
            formField: t,
            index: n,
            isDragEnabled: a,
            isDropHovered: c,
            onDrop: d,
            onEdit: o,
            onRemove: u,
            canRemove: x,
            actionsLocation: m,
            fieldStyle: h,
        } = e,
        { label: v, placeholder: j } = t;
    return (0, i.jsx)(l.A, {
        field: t,
        index: n,
        isDragEnabled: a,
        isDropHovered: c,
        onDrop: d,
        onEdit: o,
        onRemove: u,
        title: v,
        canRemove: x,
        actionsLocation: m,
        fieldStyle: h,
        children: (0, i.jsx)(s.PC, { placeholder: j ?? r.intl.string(r.t["Sqn+Wh"]), disabled: !0 }),
    });
};
