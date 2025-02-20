n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(438536),
    o = n(214906),
    l = n(346479),
    s = n(723170),
    c = n(124368);
function d(e) {
    let { channel: t, closePopout: n, onSelect: d, navId: u, label: p } = e,
        m = (0, a.Z)(t, 'Notifications Bell'),
        f = (0, o.Z)(t),
        h = (0, s.B)(t);
    return (0, r.jsxs)(i.v2r, {
        navId: u,
        onClose: n,
        'aria-label': p,
        onSelect: d,
        children: [
            (0, r.jsxs)(i.kSQ, {
                children: [t.isForumPost() ? m : null, f]
            }),
            (0, r.jsx)(i.kSQ, {
                children: (0, c.zb)().map((e) => {
                    let { setting: n, label: a } = e;
                    return (0, r.jsx)(
                        i.k5B,
                        {
                            group: 'thread-notifications',
                            id: ''.concat(n),
                            label: a,
                            action: () => l.Z.setNotificationSettings(t, { flags: n }),
                            checked: n === h
                        },
                        n
                    );
                })
            })
        ]
    });
}
