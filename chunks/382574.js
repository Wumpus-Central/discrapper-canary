n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(73880),
    l = n(137158),
    a = n(388032);
let s = function (e) {
    let {
            formField: t,
            index: n,
            isDragEnabled: s,
            isDropHovered: o,
            onDrop: c,
            onEdit: d,
            onRemove: u,
            canRemove: g,
            actionsLocation: f,
            fieldStyle: m,
        } = e,
        { label: b, placeholder: p } = t;
    return (0, r.jsx)(l.Z, {
        field: t,
        index: n,
        isDragEnabled: s,
        isDropHovered: o,
        onDrop: c,
        onEdit: d,
        onRemove: u,
        title: b,
        canRemove: g,
        actionsLocation: f,
        fieldStyle: m,
        children: (0, r.jsx)(i.Q8, {
            placeholder: null != p ? p : a.intl.string(a.t["Sqn+Wh"]),
            disabled: !0,
        }),
    });
};
