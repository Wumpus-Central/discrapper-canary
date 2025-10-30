n.d(t, { Z: () => m }), n(388685);
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(692547),
    s = n(481060),
    o = n(259580),
    c = n(196345),
    d = n(137158),
    u = n(388032),
    g = n(866234);
let m = function (e) {
    let {
            channelId: t,
            formField: n,
            index: i,
            isDragEnabled: m,
            isDropHovered: p,
            onDrop: f,
            onEdit: h,
            onRemove: b,
            canRemove: x,
            title: j,
            actionsLocation: v,
            fieldStyle: _,
        } = e,
        C = n.values,
        O = C.slice(0, 1),
        y = C.length - O.length;
    return (0, r.jsxs)(d.Z, {
        field: n,
        index: i,
        isDragEnabled: m,
        isDropHovered: p,
        onDrop: f,
        onEdit: h,
        onRemove: b,
        title: j,
        canRemove: x,
        actionsLocation: v,
        fieldStyle: _,
        children: [
            (0, r.jsx)(c.EK, {
                terms: O,
                channelId: t,
            }),
            0 !== y &&
                (0, r.jsxs)(s.P3F, {
                    className: l()(g.fieldFooterContainer, g.clickable),
                    onClick: h,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            className: g.clickable,
                            children: u.intl.format(u.t.jnhD0S, { count: y }),
                        }),
                        (0, r.jsx)(o.Z, {
                            className: g.termsFieldCaretIcon,
                            height: 14,
                            width: 14,
                            color: a.Z.unsafe_rawColors.WHITE_500.css,
                        }),
                    ],
                }),
            (0, r.jsx)(c.G0, {
                disabled: !0,
                checked: !1,
            }),
        ],
    });
};
