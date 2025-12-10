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
    p = n(942951),
    _ = n(594174),
    m = n(55935),
    h = n(864309),
    g = n(388032),
    E = n(424271),
    b = n(724913),
    y = n(328756);
let O = (e) => {
    let { reportingUserId: t, guildId: n, compact: a, channel: s, messageId: O, reportedTimestamp: v } = e,
        S = _.default.getUser(t),
        I = i.useMemo(() => (a ? (0, f.Z)((0, m.vc)(l()(), "LT")) : null), [a]),
        T = (0, p.l)({
            user: S,
            channelId: s.id,
            guildId: n,
            messageId: O,
        })((0, u.JZ)(S, s)),
        C = null != S ? S.getAvatarURL(n, (0, c.dcp)(c.EFr.SIZE_16)) : y,
        A =
            null != S
                ? g.intl.format(h.default["+zqXZs"], {
                      username: S.username,
                      onUserClick: T,
                  })
                : g.intl.string(h.default.xpRjfS);
    return (0, r.jsxs)("div", {
        className: o()(b.messageSpine, b.repliedMessage, I),
        children: [
            (0, r.jsx)(c.qEK, {
                src: C,
                size: c.EFr.SIZE_16,
                className: E.avatar,
                "aria-label": "",
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                className: E.username,
                children: A,
            }),
            (0, r.jsxs)(c.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
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
