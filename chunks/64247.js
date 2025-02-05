n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(438536),
    r = n(214906),
    s = n(346479),
    o = n(723170),
    c = n(124368);
function d(e) {
    let { channel: t, closePopout: n, onSelect: d, navId: u, label: m } = e,
        _ = (0, a.Z)(t, 'Notifications Bell'),
        h = (0, r.Z)(t),
        p = (0, o.B)(t);
    return (0, i.jsxs)(l.v2r, {
        navId: u,
        onClose: n,
        'aria-label': m,
        onSelect: d,
        children: [
            (0, i.jsxs)(l.kSQ, {
                children: [t.isForumPost() ? _ : null, h]
            }),
            (0, i.jsx)(l.kSQ, {
                children: (0, c.zb)().map((e) => {
                    let { setting: n, label: a } = e;
                    return (0, i.jsx)(
                        l.k5B,
                        {
                            group: 'thread-notifications',
                            id: ''.concat(n),
                            label: a,
                            action: () => s.Z.setNotificationSettings(t, { flags: n }),
                            checked: n === p
                        },
                        n
                    );
                })
            })
        ]
    });
}
