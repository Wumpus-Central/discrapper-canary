var a = t(200651);
t(192379);
var i = t(481060),
    c = t(388032);
n.Z = (e) => {
    let { onChangeAvatar: n, onChangeAvatarDecoration: t, onClose: o, className: s } = e;
    return (0, a.jsxs)(i.Menu, {
        className: s,
        onClose: o,
        onSelect: void 0,
        navId: 'user-settings-change-avatar',
        'aria-label': c.intl.string(c.t.ldIeAQ),
        children: [
            (0, a.jsx)(i.MenuItem, {
                id: 'change-avatar',
                action: n,
                label: c.intl.string(c.t['4OynCA'])
            }),
            (0, a.jsx)(i.MenuItem, {
                id: 'change-avatar-decoration',
                action: t,
                label: c.intl.string(c.t['Tna/TU'])
            })
        ]
    });
};
