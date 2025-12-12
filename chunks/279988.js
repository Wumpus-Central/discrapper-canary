n.d(t, { Z: () => m }), n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    s = n(692547),
    a = n(481060),
    o = n(259580),
    c = n(196345),
    u = n(137158),
    d = n(388032),
    g = n(31829);
let m = function (e) {
    let {
            channelId: t,
            formField: n,
            index: i,
            isDragEnabled: m,
            isDropHovered: p,
            onDrop: f,
            onEdit: h,
            onRemove: x,
            canRemove: b,
            title: j,
            actionsLocation: _,
            fieldStyle: v,
        } = e,
        O = n.values,
        C = O.slice(0, 1),
        y = O.length - C.length;
    return (0, r.jsxs)(u.Z, {
        field: n,
        index: i,
        isDragEnabled: m,
        isDropHovered: p,
        onDrop: f,
        onEdit: h,
        onRemove: x,
        title: j,
        canRemove: b,
        actionsLocation: _,
        fieldStyle: v,
        children: [
            (0, r.jsx)(c.EK, {
                terms: C,
                channelId: t,
            }),
            0 !== y &&
                (0, r.jsxs)(a.P3F, {
                    className: l()(g.fieldFooterContainer, g.clickable),
                    onClick: h,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            className: g.clickable,
                            children: d.intl.format(d.t.jnhD0S, { count: y }),
                        }),
                        (0, r.jsx)(o.Z, {
                            className: g.termsFieldCaretIcon,
                            height: 14,
                            width: 14,
                            color: s.Z.unsafe_rawColors.WHITE_500.css,
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
