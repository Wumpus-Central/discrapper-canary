n.d(t, { Z: () => g }), n(388685);
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    s = n(692547),
    a = n(481060),
    o = n(259580),
    c = n(196345),
    u = n(137158),
    d = n(388032),
    m = n(664305);
let g = function (e) {
    let { channelId: t, formField: n, index: i, isDragEnabled: g, isDropHovered: p, onDrop: h, onEdit: f, onRemove: x, canRemove: b, title: j, actionsLocation: _, fieldStyle: v } = e,
        O = n.values,
        C = O.slice(0, 1),
        y = O.length - C.length;
    return (0, r.jsxs)(u.Z, {
        field: n,
        index: i,
        isDragEnabled: g,
        isDropHovered: p,
        onDrop: h,
        onEdit: f,
        onRemove: x,
        title: j,
        canRemove: b,
        actionsLocation: _,
        fieldStyle: v,
        children: [
            (0, r.jsx)(c.EK, {
                className: l()(m.fieldBackground, { [m.withFooter]: 0 !== y }),
                terms: C,
                channelId: t
            }),
            0 !== y &&
                (0, r.jsxs)(a.P3F, {
                    className: l()(m.fieldFooterContainer, m.clickable),
                    onClick: f,
                    children: [
                        (0, r.jsx)(a.R94, {
                            className: m.clickable,
                            children: d.intl.format(d.t.jnhD0d, { count: y })
                        }),
                        (0, r.jsx)(o.Z, {
                            className: m.termsFieldCaretIcon,
                            height: 14,
                            width: 14,
                            color: s.Z.unsafe_rawColors.WHITE_500.css
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
