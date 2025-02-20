n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(388032);
let a = (e) => {
    let { onChangeAvatar: t, onChangeAvatarDecoration: n, onClose: a, className: s } = e;
    return (0, r.jsxs)(i.v2r, {
        className: s,
        onClose: a,
        onSelect: void 0,
        navId: 'user-settings-change-avatar',
        'aria-label': o.NW.string(o.t.ldIeAQ),
        children: [
            (0, r.jsx)(i.sNh, {
                id: 'change-avatar',
                action: t,
                label: o.NW.string(o.t['4OynCA'])
            }),
            (0, r.jsx)(i.sNh, {
                id: 'change-avatar-decoration',
                action: n,
                label: o.NW.string(o.t['Tna/TU'])
            })
        ]
    });
};
