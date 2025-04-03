n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(438536),
    l = n(214906),
    o = n(346479),
    s = n(723170),
    c = n(124368);
function u(e) {
    let { channel: t, closePopout: n, onSelect: u, navId: d, label: p } = e,
        m = (0, a.Z)(t, 'Notifications Bell'),
        f = (0, l.Z)(t),
        h = (0, s.B)(t);
    return (0, r.jsxs)(i.v2r, {
        navId: d,
        onClose: n,
        'aria-label': p,
        onSelect: u,
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
                            action: () => o.Z.setNotificationSettings(t, { flags: n }),
                            checked: n === h
                        },
                        n
                    );
                })
            })
        ]
    });
}
