n.d(t, { Z: () => y });
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
    h = n(55935),
    g = n(720068),
    _ = n(388032),
    b = n(920968),
    E = n(161441),
    x = n(328756);
let y = (e) => {
    let { reportingUserId: t, guildId: n, compact: l, channel: o, messageId: y, reportedTimestamp: v } = e,
        O = f.default.getUser(t),
        j = i.useMemo(() => (l ? (0, p.Z)((0, h.vc)(s()(), 'LT')) : null), [l]),
        C = (0, m.l)({
            user: O,
            channelId: o.id,
            guildId: n,
            messageId: y
        })((0, u.JZ)(O, o)),
        S = null != O ? O.getAvatarURL(n, (0, c.pxk)(c.EFr.SIZE_16)) : x,
        I =
            null != O
                ? _.intl.format(g.default['+zqXZm'], {
                      username: O.username,
                      onUserClick: C
                  })
                : _.intl.string(g.default.xpRjfX);
    return (0, r.jsxs)('div', {
        className: a()(E.messageSpine, E.repliedMessage, j),
        children: [
            (0, r.jsx)(c.qEK, {
                src: S,
                size: c.EFr.SIZE_16,
                className: b.avatar,
                'aria-label': ''
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: b.username,
                children: I
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
                        timestamp: v,
                        className: b.timestamp
                    })
                ]
            })
        ]
    });
};
