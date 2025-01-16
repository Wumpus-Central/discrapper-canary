t(47120);
var i = t(200651);
t(192379);
var l = t(120356),
    a = t.n(l),
    s = t(692547),
    r = t(481060),
    o = t(259580),
    c = t(196345),
    d = t(137158),
    u = t(388032),
    m = t(31619);
n.Z = function (e) {
    let { channelId: n, formField: t, index: l, isDragEnabled: x, isDropHovered: f, onDrop: h, onEdit: g, onRemove: v, canRemove: C, title: j, actionsLocation: p, fieldStyle: T } = e,
        N = t.values,
        I = N.slice(0, 1),
        y = N.length - I.length;
    return (0, i.jsxs)(d.Z, {
        field: t,
        index: l,
        isDragEnabled: x,
        isDropHovered: f,
        onDrop: h,
        onEdit: g,
        onRemove: v,
        title: j,
        canRemove: C,
        actionsLocation: p,
        fieldStyle: T,
        children: [
            (0, i.jsx)(c.EK, {
                className: a()(m.fieldBackground, { [m.withFooter]: 0 !== y }),
                terms: I,
                channelId: n
            }),
            0 !== y &&
                (0, i.jsxs)(r.Clickable, {
                    className: a()(m.fieldFooterContainer, m.clickable),
                    onClick: g,
                    children: [
                        (0, i.jsx)(r.FormText, {
                            className: m.clickable,
                            children: u.intl.format(u.t.jnhD0d, { count: y })
                        }),
                        (0, i.jsx)(o.Z, {
                            className: m.termsFieldCaretIcon,
                            height: 14,
                            width: 14,
                            color: s.Z.unsafe_rawColors.WHITE_500.css
                        })
                    ]
                }),
            (0, i.jsx)(c.G0, {
                disabled: !0,
                checked: !1
            })
        ]
    });
};
