var n = t(200651);
t(192379);
var a = t(481060),
    r = t(388032);
i.Z = (e) => {
    let { onChangeAvatar: i, onChangeAvatarDecoration: t, onClose: o, className: s } = e;
    return (0, n.jsxs)(a.Menu, {
        className: s,
        onClose: o,
        onSelect: void 0,
        navId: 'user-settings-change-avatar',
        'aria-label': r.intl.string(r.t.ldIeAQ),
        children: [
            (0, n.jsx)(a.MenuItem, {
                id: 'change-avatar',
                action: i,
                label: r.intl.string(r.t['4OynCA'])
            }),
            (0, n.jsx)(a.MenuItem, {
                id: 'change-avatar-decoration',
                action: t,
                label: r.intl.string(r.t['Tna/TU'])
            })
        ]
    });
};
