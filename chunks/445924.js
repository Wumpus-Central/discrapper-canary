n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(388032);
let o = (e) => {
    let { onChangeAvatar: t, onChangeAvatarDecoration: n, onClose: o, className: s } = e;
    return (0, r.jsxs)(i.v2r, {
        className: s,
        onClose: o,
        onSelect: void 0,
        navId: 'user-settings-change-avatar',
        'aria-label': a.NW.string(a.t.ldIeAQ),
        children: [
            (0, r.jsx)(i.sNh, {
                id: 'change-avatar',
                action: t,
                label: a.NW.string(a.t['4OynCA'])
            }),
            (0, r.jsx)(i.sNh, {
                id: 'change-avatar-decoration',
                action: n,
                label: a.NW.string(a.t['Tna/TU'])
            })
        ]
    });
};
