var i = n(200651),
    s = n(192379),
    l = n(481060),
    r = n(377171),
    o = n(281300);
t.Z = s.forwardRef(function (e, t) {
    let { isInventory: n, style: s, children: a } = e;
    return (0, i.jsxs)('div', {
        ref: t,
        className: o.desktopTooltip,
        style: {
            marginTop: n ? 8 : 0,
            ...s
        },
        children: [
            (0, i.jsx)(l.CircleInformationIcon, {
                size: 'custom',
                className: o.infoIcon,
                height: n ? 16 : 12,
                width: n ? 16 : 12,
                color: n ? r.Z.TEXT_MUTED : r.Z.WHITE
            }),
            (0, i.jsx)(l.Text, {
                color: n ? 'text-muted' : 'always-white',
                variant: n ? 'text-xs/normal' : 'text-xxs/normal',
                children: a
            })
        ]
    });
});
