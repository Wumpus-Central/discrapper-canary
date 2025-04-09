n.d(t, { Z: () => g }), n(388685);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(692547),
    l = n(481060),
    o = n(259580),
    c = n(196345),
    d = n(137158),
    u = n(388032),
    m = n(664305);
let g = function (e) {
    let { channelId: t, formField: n, index: i, isDragEnabled: g, isDropHovered: p, onDrop: f, onEdit: h, onRemove: b, canRemove: x, title: j, actionsLocation: N, fieldStyle: v } = e,
        _ = n.values,
        y = _.slice(0, 1),
        O = _.length - y.length;
    return (0, r.jsxs)(d.Z, {
        field: n,
        index: i,
        isDragEnabled: g,
        isDropHovered: p,
        onDrop: f,
        onEdit: h,
        onRemove: b,
        title: j,
        canRemove: x,
        actionsLocation: N,
        fieldStyle: v,
        children: [
            (0, r.jsx)(c.EK, {
                className: s()(m.fieldBackground, { [m.withFooter]: 0 !== O }),
                terms: y,
                channelId: t
            }),
            0 !== O &&
                (0, r.jsxs)(l.P3F, {
                    className: s()(m.fieldFooterContainer, m.clickable),
                    onClick: h,
                    children: [
                        (0, r.jsx)(l.R94, {
                            className: m.clickable,
                            children: u.NW.format(u.t.jnhD0d, { count: O })
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
