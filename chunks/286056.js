n.d(t, { A: () => a });
var r = n(627968);
n(64700);
var i = n(601047),
    l = n(243056),
    s = n(985018);
let a = function (e) {
    let {
            formField: t,
            index: n,
            isDragEnabled: a,
            isDropHovered: c,
            onDrop: o,
            onEdit: d,
            onRemove: u,
            canRemove: f,
            actionsLocation: g,
            fieldStyle: b,
        } = e,
        { label: m, placeholder: p } = t;
    return (0, r.jsx)(l.A, {
        field: t,
        index: n,
        isDragEnabled: a,
        isDropHovered: c,
        onDrop: o,
        onEdit: d,
        onRemove: u,
        title: m,
        canRemove: f,
        actionsLocation: g,
        fieldStyle: b,
        children: (0, r.jsx)(i.PC, {
            placeholder: null != p ? p : s.intl.string(s.t["Sqn+Wh"]),
            disabled: !0,
        }),
    });
};
