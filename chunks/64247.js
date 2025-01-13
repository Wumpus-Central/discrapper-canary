n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(438536),
    a = n(214906),
    o = n(346479),
    s = n(723170),
    c = n(124368);
function d(e) {
    let { channel: t, closePopout: n, onSelect: d, navId: u, label: m } = e,
        h = (0, l.Z)(t, 'Notifications Bell'),
        f = (0, a.Z)(t),
        p = (0, s.B)(t);
    return (0, i.jsxs)(r.Menu, {
        navId: u,
        onClose: n,
        'aria-label': m,
        onSelect: d,
        children: [
            (0, i.jsxs)(r.MenuGroup, {
                children: [t.isForumPost() ? h : null, f]
            }),
            (0, i.jsx)(r.MenuGroup, {
                children: (0, c.zb)().map((e) => {
                    let { setting: n, label: l } = e;
                    return (0, i.jsx)(
                        r.MenuRadioItem,
                        {
                            group: 'thread-notifications',
                            id: ''.concat(n),
                            label: l,
                            action: () => o.Z.setNotificationSettings(t, { flags: n }),
                            checked: n === p
                        },
                        n
                    );
                })
            })
        ]
    });
}
