n.d(t, { Z: () => O });
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
    _ = n(55935),
    g = n(130883),
    h = n(388032),
    b = n(537670),
    E = n(848697),
    C = n(328756);
let O = (e) => {
    let { reportingUserId: t, guildId: n, compact: l, channel: o, messageId: O, reportedTimestamp: y } = e,
        v = f.default.getUser(t),
        x = i.useMemo(() => (l ? (0, p.Z)((0, _.vc)(s()(), 'LT')) : null), [l]),
        I = (0, m.l)({
            user: v,
            channelId: o.id,
            guildId: n,
            messageId: O
        })((0, u.JZ)(v, o)),
        j = null != v ? v.getAvatarURL(n, (0, c.pxk)(c.EFr.SIZE_16)) : C,
        S =
            null != v
                ? h.intl.format(g.default['+zqXZm'], {
                      username: v.username,
                      onUserClick: I
                  })
                : h.intl.string(g.default.xpRjfX);
    return (0, r.jsxs)('div', {
        className: a()(E.messageSpine, E.repliedMessage, x),
        children: [
            (0, r.jsx)(c.qEK, {
                src: j,
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
                        timestamp: y,
                        className: b.timestamp
                    })
                ]
            })
        ]
    });
};
