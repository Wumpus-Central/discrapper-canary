n.d(t, { Z: () => f }), n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(692547),
    s = n(481060),
    o = n(259580),
    c = n(196345),
    d = n(137158),
    u = n(388032),
    g = n(938645);
let f = function (e) {
    let {
            channelId: t,
            formField: n,
            index: i,
            isDragEnabled: f,
            isDropHovered: m,
            onDrop: b,
            onEdit: p,
            onRemove: h,
            canRemove: x,
            title: j,
            actionsLocation: v,
            fieldStyle: O,
        } = e,
        C = n.values,
        y = C.slice(0, 1),
        N = C.length - y.length;
    return (0, r.jsxs)(d.Z, {
        field: n,
        index: i,
        isDragEnabled: f,
        isDropHovered: m,
        onDrop: b,
        onEdit: p,
        onRemove: h,
        title: j,
        canRemove: x,
        actionsLocation: v,
        fieldStyle: O,
        children: [
            (0, r.jsx)(c.EK, {
                terms: y,
                channelId: t,
            }),
            0 !== N &&
                (0, r.jsxs)(s.P3F, {
                    className: l()(g.fieldFooterContainer, g.clickable),
                    onClick: p,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            className: g.clickable,
                            children: u.intl.format(u.t.jnhD0S, { count: N }),
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
