var i = r(200651);
r(192379);
var a = r(481060),
    o = r(388032);
let s = (e) => {
    let { onChangeAvatar: n, onChangeAvatarDecoration: r, onClose: s, className: l } = e;
    return (0, i.jsxs)(a.Menu, {
        className: l,
        onClose: s,
        onSelect: void 0,
        navId: 'user-settings-change-avatar',
        'aria-label': o.intl.string(o.t.ldIeAQ),
        children: [
            (0, i.jsx)(a.MenuItem, {
                id: 'change-avatar',
                action: n,
                label: o.intl.string(o.t['4OynCA'])
            }),
            (0, i.jsx)(a.MenuItem, {
                id: 'change-avatar-decoration',
                action: r,
                label: o.intl.string(o.t['Tna/TU'])
            })
        ]
    });
};
n.Z = s;
