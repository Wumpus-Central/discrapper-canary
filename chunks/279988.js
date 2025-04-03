n.d(t, { Z: () => p }), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    c = n(692547),
    s = n(481060),
    a = n(259580),
    l = n(196345),
    u = n(137158),
    d = n(388032),
    f = n(664305);
let p = function (e) {
    let { channelId: t, formField: n, index: i, isDragEnabled: p, isDropHovered: b, onDrop: j, onEdit: y, onRemove: m, canRemove: g, title: O, actionsLocation: h, fieldStyle: v } = e,
        x = n.values,
        P = x.slice(0, 1),
        w = x.length - P.length;
    return (0, r.jsxs)(u.Z, {
        field: n,
        index: i,
        isDragEnabled: p,
        isDropHovered: b,
        onDrop: j,
        onEdit: y,
        onRemove: m,
        title: O,
        canRemove: g,
        actionsLocation: h,
        fieldStyle: v,
        children: [
            (0, r.jsx)(l.EK, {
                className: o()(f.fieldBackground, { [f.withFooter]: 0 !== w }),
                terms: P,
                channelId: t
            }),
            0 !== w &&
                (0, r.jsxs)(s.P3F, {
                    className: o()(f.fieldFooterContainer, f.clickable),
                    onClick: y,
                    children: [
                        (0, r.jsx)(s.R94, {
                            className: f.clickable,
                            children: d.NW.format(d.t.jnhD0d, { count: w })
                        }),
                        (0, r.jsx)(a.Z, {
                            className: f.termsFieldCaretIcon,
                            height: 14,
                            width: 14,
                            color: c.Z.unsafe_rawColors.WHITE_500.css
                        })
                    ]
                }),
            (0, r.jsx)(l.G0, {
                disabled: !0,
                checked: !1
            })
        ]
    });
};
