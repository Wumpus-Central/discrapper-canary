n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(438536),
    a = n(214906),
    s = n(346479),
    o = n(723170),
    c = n(124368);
function u(e) {
    let { channel: t, closePopout: n, onSelect: u, navId: d, label: h } = e,
        p = (0, l.Z)(t, 'Notifications Bell'),
        f = (0, a.Z)(t),
        g = (0, o.B)(t);
    return (0, r.jsxs)(i.v2r, {
        navId: d,
        onClose: n,
        'aria-label': h,
        onSelect: u,
        children: [
            (0, r.jsxs)(i.kSQ, {
                children: [t.isForumPost() ? p : null, f]
            }),
            (0, r.jsx)(i.kSQ, {
                children: (0, c.zb)().map((e) => {
                    let { setting: n, label: l } = e;
                    return (0, r.jsx)(
                        i.k5B,
                        {
                            group: 'thread-notifications',
                            id: ''.concat(n),
                            label: l,
                            action: () => s.Z.setNotificationSettings(t, { flags: n }),
                            checked: n === g
                        },
                        n
                    );
                })
            })
        ]
    });
}
