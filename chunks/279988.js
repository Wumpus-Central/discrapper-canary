t.d(n, { Z: () => m }), t(47120);
var i = t(200651);
t(192379);
var l = t(120356),
    s = t.n(l),
    a = t(692547),
    r = t(481060),
    o = t(259580),
    c = t(196345),
    d = t(137158),
    u = t(388032),
    x = t(42497);
let m = function (e) {
    let { channelId: n, formField: t, index: l, isDragEnabled: m, isDropHovered: h, onDrop: f, onEdit: v, onRemove: g, canRemove: j, title: C, actionsLocation: p, fieldStyle: N } = e,
        R = t.values,
        y = R.slice(0, 1),
        w = R.length - y.length;
    return (0, i.jsxs)(d.Z, {
        field: t,
        index: l,
        isDragEnabled: m,
        isDropHovered: h,
        onDrop: f,
        onEdit: v,
        onRemove: g,
        title: C,
        canRemove: j,
        actionsLocation: p,
        fieldStyle: N,
        children: [
            (0, i.jsx)(c.EK, {
                className: s()(x.fieldBackground, { [x.withFooter]: 0 !== w }),
                terms: y,
                channelId: n
            }),
            0 !== w &&
                (0, i.jsxs)(r.P3F, {
                    className: s()(x.fieldFooterContainer, x.clickable),
                    onClick: v,
                    children: [
                        (0, i.jsx)(r.R94, {
                            className: x.clickable,
                            children: u.intl.format(u.t.jnhD0d, { count: w })
                        }),
                        (0, i.jsx)(o.Z, {
                            className: x.termsFieldCaretIcon,
                            height: 14,
                            width: 14,
                            color: a.Z.unsafe_rawColors.WHITE_500.css
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
