n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(100527),
    a = n(769409),
    o = n(739566),
    s = n(834129),
    c = n(388032);
function u(e) {
    let { message: t, usernameHook: n, compact: u } = e,
        d = (0, o.ZP)(t),
        p = n(d);
    return (0, r.jsx)(s.Z, {
        iconNode: (0, r.jsx)(i.vdY, {
            size: 'xs',
            color: 'currentColor'
        }),
        timestamp: t.timestamp,
        compact: u,
        children: c.intl.format(c.t['4wLp29'], {
            username: d.nick,
            usernameHook: p,
            editGroupButton: (0, r.jsx)(
                i.Text,
                {
                    tag: 'span',
                    variant: 'text-md/medium',
                    color: 'text-link',
                    children: c.intl.string(c.t['5Q9+/P'])
                },
                'edit-group-button-'.concat(t.id)
            ),
            onEditGroup: () => (0, a.B)(t.channel_id, l.Z.GROUP_DM_SYSTEM_MESSAGE_ICON)
        })
    });
}
