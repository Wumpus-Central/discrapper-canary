n.d(t, { Z: () => o });
var s = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(377171),
    r = n(357410);
let o = i.forwardRef(function (e, t) {
    let { isInventory: n, style: i, children: o } = e;
    return (0, s.jsxs)('div', {
        ref: t,
        className: r.desktopTooltip,
        style: {
            marginTop: n ? 8 : 0,
            ...i
        },
        children: [
            (0, s.jsx)(l.d3s, {
                size: 'custom',
                className: r.infoIcon,
                height: n ? 16 : 12,
                width: n ? 16 : 12,
                color: n ? a.Z.TEXT_MUTED : a.Z.WHITE
            }),
            (0, s.jsx)(l.Text, {
                color: n ? 'text-muted' : 'always-white',
                variant: n ? 'text-xs/normal' : 'text-xxs/normal',
                children: o
            })
        ]
    });
});
