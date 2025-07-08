n.d(t, { Z: () => x });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(481060),
    u = n(739566),
    d = n(318713),
    p = n(223021),
    m = n(942951),
    f = n(594174),
    g = n(55935),
    _ = n(130883),
    h = n(388032),
    b = n(537670),
    E = n(848697),
    y = n(328756);
let x = (e) => {
    let { reportingUserId: t, guildId: n, compact: l, channel: o, messageId: x, reportedTimestamp: C } = e,
        v = f.default.getUser(t),
        O = i.useMemo(() => (l ? (0, p.Z)((0, g.vc)(s()(), 'LT')) : null), [l]),
        j = (0, m.l)({
            user: v,
            channelId: o.id,
            guildId: n,
            messageId: x
        })((0, u.JZ)(v, o)),
        I = null != v ? v.getAvatarURL(n, (0, c.pxk)(c.EFr.SIZE_16)) : y,
        S =
            null != v
                ? h.intl.format(_.default['+zqXZm'], {
                      username: v.username,
                      onUserClick: j
                  })
                : h.intl.string(_.default.xpRjfX);
    return (0, r.jsxs)('div', {
        className: a()(E.messageSpine, E.repliedMessage, O),
        children: [
            (0, r.jsx)(c.qEK, {
                src: I,
                size: c.EFr.SIZE_16,
                className: b.avatar,
                'aria-label': ''
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: b.username,
                children: S
            }),
            (0, r.jsxs)(c.Text, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                children: [
                    (0, r.jsx)('span', {
                        className: b.timestampSeparator,
                        children: '\u2022'
                    }),
                    (0, r.jsx)(d.Z, {
                        timestamp: C,
                        className: b.timestamp
                    })
                ]
            })
        ]
    });
};
