n.d(t, { Z: () => O });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(913527),
    l = n.n(s),
    c = n(481060),
    u = n(739566),
    d = n(318713),
    f = n(223021),
    _ = n(942951),
    p = n(594174),
    h = n(55935),
    m = n(764295),
    g = n(388032),
    E = n(424271),
    b = n(724913),
    y = n(328756);
let O = (e) => {
    let { reportingUserId: t, guildId: n, compact: o, channel: s, messageId: O, reportedTimestamp: v } = e,
        I = p.default.getUser(t),
        T = i.useMemo(() => (o ? (0, f.Z)((0, h.vc)(l()(), "LT")) : null), [o]),
        S = (0, _.l)({
            user: I,
            channelId: s.id,
            guildId: n,
            messageId: O,
        })((0, u.JZ)(I, s)),
        A = null != I ? I.getAvatarURL(n, (0, c.pxk)(c.EFr.SIZE_16)) : y,
        N =
            null != I
                ? g.intl.format(m.default["+zqXZm"], {
                      username: I.username,
                      onUserClick: S,
                  })
                : g.intl.string(m.default.xpRjfX);
    return (0, r.jsxs)("div", {
        className: a()(b.messageSpine, b.repliedMessage, T),
        children: [
            (0, r.jsx)(c.qEK, {
                src: A,
                size: c.EFr.SIZE_16,
                className: E.avatar,
                "aria-label": "",
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: E.username,
                children: N,
            }),
            (0, r.jsxs)(c.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                children: [
                    (0, r.jsx)("span", {
                        className: E.timestampSeparator,
                        children: "\u2022",
                    }),
                    (0, r.jsx)(d.Z, {
                        timestamp: v,
                        className: E.timestamp,
                    }),
                ],
            }),
        ],
    });
};
