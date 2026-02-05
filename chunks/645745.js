n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(827734),
    a = n(397927),
    c = n(147925),
    d = n(273926),
    o = n(243056),
    u = n(985018),
    x = n(592454);
let m = function (e) {
    let {
            channelId: t,
            formField: n,
            index: s,
            isDragEnabled: m,
            isDropHovered: h,
            onDrop: v,
            onEdit: j,
            onRemove: f,
            canRemove: g,
            title: p,
            actionsLocation: A,
            fieldStyle: T,
        } = e,
        C = n.values,
        E = C.slice(0, 1),
        w = C.length - E.length;
    return (0, i.jsxs)(o.A, {
        field: n,
        index: s,
        isDragEnabled: m,
        isDropHovered: h,
        onDrop: v,
        onEdit: j,
        onRemove: f,
        title: p,
        canRemove: g,
        actionsLocation: A,
        fieldStyle: T,
        children: [
            (0, i.jsx)(d.IJ, { terms: E, channelId: t }),
            0 !== w &&
                (0, i.jsxs)(a.DUT, {
                    className: l()(x.vs, x.vk),
                    onClick: j,
                    children: [
                        (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            className: x.vk,
                            children: u.intl.format(u.t.jnhD0S, { count: w }),
                        }),
                        (0, i.jsx)(c.A, {
                            className: x.IC,
                            height: 14,
                            width: 14,
                            color: r.A.unsafe_rawColors.WHITE.css,
                        }),
                    ],
                }),
            (0, i.jsx)(d.xs, { disabled: !0, checked: !1 }),
        ],
    });
};
