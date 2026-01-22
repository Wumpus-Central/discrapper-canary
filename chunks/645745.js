n.d(t, { A: () => g }), n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(827734),
    a = n(397927),
    c = n(147925),
    o = n(273926),
    d = n(243056),
    u = n(985018),
    f = n(592454);
let g = function (e) {
    let {
            channelId: t,
            formField: n,
            index: i,
            isDragEnabled: g,
            isDropHovered: b,
            onDrop: m,
            onEdit: p,
            onRemove: x,
            canRemove: h,
            title: j,
            actionsLocation: O,
            fieldStyle: y,
        } = e,
        v = n.values,
        A = v.slice(0, 1),
        E = v.length - A.length;
    return (0, r.jsxs)(d.A, {
        field: n,
        index: i,
        isDragEnabled: g,
        isDropHovered: b,
        onDrop: m,
        onEdit: p,
        onRemove: x,
        title: j,
        canRemove: h,
        actionsLocation: O,
        fieldStyle: y,
        children: [
            (0, r.jsx)(o.IJ, {
                terms: A,
                channelId: t,
            }),
            0 !== E &&
                (0, r.jsxs)(a.DUT, {
                    className: l()(f.vs, f.vk),
                    onClick: p,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            className: f.vk,
                            children: u.intl.format(u.t.jnhD0S, { count: E }),
                        }),
                        (0, r.jsx)(c.A, {
                            className: f.IC,
                            height: 14,
                            width: 14,
                            color: s.A.unsafe_rawColors.WHITE.css,
                        }),
                    ],
                }),
            (0, r.jsx)(o.xs, {
                disabled: !0,
                checked: !1,
            }),
        ],
    });
};
