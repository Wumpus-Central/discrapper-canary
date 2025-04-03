n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(73880),
    o = n(137158),
    c = n(388032),
    s = n(664305);
let a = function (e) {
    let { formField: t, index: n, isDragEnabled: a, isDropHovered: l, onDrop: u, onEdit: d, onRemove: f, canRemove: p, actionsLocation: b, fieldStyle: j } = e,
        { label: y, placeholder: m } = t;
    return (0, r.jsx)(o.Z, {
        field: t,
        index: n,
        isDragEnabled: a,
        isDropHovered: l,
        onDrop: u,
        onEdit: d,
        onRemove: f,
        title: y,
        canRemove: p,
        actionsLocation: b,
        fieldStyle: j,
        children: (0, r.jsx)(i.Q8, {
            className: s.fieldBackground,
            placeholder: null != m ? m : c.NW.string(c.t['Sqn+Wl']),
            disabled: !0
        })
    });
};
