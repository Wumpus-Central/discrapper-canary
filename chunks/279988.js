(n.d(t, { Z: () => g }), n(388685));
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(692547),
    s = n(481060),
    o = n(259580),
    c = n(196345),
    d = n(137158),
    u = n(388032),
    m = n(664305);
let g = function (e) {
    let { channelId: t, formField: n, index: i, isDragEnabled: g, isDropHovered: p, onDrop: h, onEdit: f, onRemove: x, canRemove: b, title: j, actionsLocation: v, fieldStyle: _ } = e,
        O = n.values,
        y = O.slice(0, 1),
        C = O.length - y.length;
    return (0, r.jsxs)(d.Z, {
        field: n,
        index: i,
        isDragEnabled: g,
        isDropHovered: p,
        onDrop: h,
        onEdit: f,
        onRemove: x,
        title: j,
        canRemove: b,
        actionsLocation: v,
        fieldStyle: _,
        children: [
            (0, r.jsx)(c.EK, {
                className: l()(m.fieldBackground, { [m.withFooter]: 0 !== C }),
                terms: y,
                channelId: t
            }),
            0 !== C &&
                (0, r.jsxs)(s.P3F, {
                    className: l()(m.fieldFooterContainer, m.clickable),
                    onClick: f,
                    children: [
                        (0, r.jsx)(s.R94, {
                            className: m.clickable,
                            children: u.intl.format(u.t.jnhD0d, { count: C })
                        }),
                        (0, r.jsx)(o.Z, {
                            className: m.termsFieldCaretIcon,
                            height: 14,
                            width: 14,
                            color: a.Z.unsafe_rawColors.WHITE_500.css
                        })
                    ]
                }),
            (0, r.jsx)(c.G0, {
                disabled: !0,
                checked: !1
            })
        ]
    });
};
