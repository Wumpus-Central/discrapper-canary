var s = n(477900);
n(582128);
var a = n(855986),
    r = n(189213),
    e = n(760711),
    l = n(71393),
    d = n(200662),
    u = n(792996);
n.d(
    i,
    {},
    {
        default: function (t) {
            let { defaultMemberPermissions: i, guildId: n, onClose: c, transitionState: o } = t,
                p = (0, a.bG)([l.A], () => l.A.getGuild(n), [n]),
                g = (0, d.eR)(i);
            return (0, s.jsx)(r.a, {
                "aria-label": u.intl.string(u.t.vusPtq),
                transitionState: o,
                title: u.intl.string(u.t["4gMlpQ"]),
                onClose: c,
                actions: [{ variant: "primary", text: u.intl.string(u.t.i4jeWR), onClick: c }],
                children: (0, s.jsx)(e.A, { grantedPermissions: g, guild: p }),
            });
        },
    },
);
