n.d(t, { Z: () => v });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(913527),
    s = n.n(a),
    c = n(481060),
    u = n(739566),
    d = n(318713),
    p = n(223021),
    m = n(942951),
    f = n(594174),
    g = n(55935),
    _ = n(764295),
    h = n(388032),
    b = n(424271),
    E = n(724913),
    C = n(328756);
let v = (e) => {
    let { reportingUserId: t, guildId: n, compact: l, channel: a, messageId: v, reportedTimestamp: O } = e,
        y = f.default.getUser(t),
        x = i.useMemo(() => (l ? (0, p.Z)((0, g.vc)(s()(), "LT")) : null), [l]),
        j = (0, m.l)({
            user: y,
            channelId: a.id,
            guildId: n,
            messageId: v,
        })((0, u.JZ)(y, a)),
        I = null != y ? y.getAvatarURL(n, (0, c.pxk)(c.EFr.SIZE_16)) : C,
        S =
            null != y
                ? h.intl.format(_.default["+zqXZm"], {
                      username: y.username,
                      onUserClick: j,
                  })
                : h.intl.string(_.default.xpRjfX);
    return (0, r.jsxs)("div", {
        className: o()(E.messageSpine, E.repliedMessage, x),
        children: [
            (0, r.jsx)(c.qEK, {
                src: I,
                size: c.EFr.SIZE_16,
                className: b.avatar,
                "aria-label": "",
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: b.username,
                children: S,
            }),
            (0, r.jsxs)(c.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                children: [
                    (0, r.jsx)("span", {
                        className: b.timestampSeparator,
                        children: "\u2022",
                    }),
                    (0, r.jsx)(d.Z, {
                        timestamp: O,
                        className: b.timestamp,
                    }),
                ],
            }),
        ],
    });
};
