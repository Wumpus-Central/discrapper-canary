n.d(t, { Z: () => g }), n(388685);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    l = n(692547),
    a = n(481060),
    o = n(259580),
    c = n(196345),
    d = n(137158),
    u = n(388032),
    m = n(664305);
let g = function (e) {
    let { channelId: t, formField: n, index: i, isDragEnabled: g, isDropHovered: p, onDrop: h, onEdit: f, onRemove: x, canRemove: b, title: j, actionsLocation: N, fieldStyle: _ } = e,
        v = n.values,
        O = v.slice(0, 1),
        C = v.length - O.length;
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
        actionsLocation: N,
        fieldStyle: _,
        children: [
            (0, r.jsx)(c.EK, {
                className: s()(m.fieldBackground, { [m.withFooter]: 0 !== C }),
                terms: O,
                channelId: t
            }),
            0 !== C &&
                (0, r.jsxs)(a.P3F, {
                    className: s()(m.fieldFooterContainer, m.clickable),
                    onClick: f,
                    children: [
                        (0, r.jsx)(a.R94, {
                            className: m.clickable,
                            children: u.NW.format(u.t.jnhD0d, { count: C })
                        }),
                        (0, r.jsx)(o.Z, {
                            className: m.termsFieldCaretIcon,
                            height: 14,
                            width: 14,
                            color: l.Z.unsafe_rawColors.WHITE_500.css
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
