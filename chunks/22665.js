n.d(t, { Z: () => O });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(481060),
    u = n(739566),
    d = n(318713),
    f = n(223021),
    _ = n(942951),
    p = n(594174),
    h = n(55935),
    m = n(826688),
    g = n(388032),
    E = n(317173),
    b = n(136907),
    y = n(328756);
let O = (e) => {
    let { reportingUserId: t, guildId: n, compact: a, channel: s, messageId: O, reportedTimestamp: v } = e,
        I = p.default.getUser(t),
        T = i.useMemo(() => (a ? (0, f.Z)((0, h.vc)(l()(), "LT")) : null), [a]),
        S = (0, _.l)({
            user: I,
            channelId: s.id,
            guildId: n,
            messageId: O,
        })((0, u.JZ)(I, s)),
        A = null != I ? I.getAvatarURL(n, (0, c.pxk)(c.EFr.SIZE_16)) : y,
        C =
            null != I
                ? g.intl.format(m.default["+zqXZs"], {
                      username: I.username,
                      onUserClick: S,
                  })
                : g.intl.string(m.default.xpRjfS);
    return (0, r.jsxs)("div", {
        className: o()(b.messageSpine, b.repliedMessage, T),
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
                children: C,
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
