n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(388032);
let s = (e) => {
    let { onChangeAvatar: t, onChangeAvatarDecoration: n, onClose: s, className: o } = e;
    return (0, i.jsxs)(r.v2r, {
        className: o,
        onClose: s,
        onSelect: void 0,
        navId: 'user-settings-change-avatar',
        'aria-label': a.intl.string(a.t.ldIeAQ),
        children: [
            (0, i.jsx)(r.sNh, {
                id: 'change-avatar',
                action: t,
                label: a.intl.string(a.t['4OynCA'])
            }),
            (0, i.jsx)(r.sNh, {
                id: 'change-avatar-decoration',
                action: n,
                label: a.intl.string(a.t['Tna/TU'])
            })
        ]
    });
};
