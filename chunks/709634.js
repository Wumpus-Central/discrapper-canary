n.d(t, { A: () => O });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(989349),
    l = n.n(o),
    c = n(397927),
    u = n(763754),
    d = n(449859),
    f = n(943815),
    p = n(447215),
    _ = n(287809),
    h = n(405269),
    m = n(641131),
    g = n(985018),
    E = n(197172),
    b = n(679740),
    y = n(513653);
let O = (e) => {
    let { reportingUserId: t, guildId: n, compact: a, channel: o, messageId: O, reportedTimestamp: A } = e,
        v = _.default.getUser(t),
        S = i.useMemo(() => (a ? (0, f.A)((0, h.i$)(l()(), "LT")) : null), [a]),
        I = (0, p.P)({
            user: v,
            channelId: o.id,
            guildId: n,
            messageId: O,
        })((0, u.m2)(v, o)),
        T = null != v ? v.getAvatarURL(n, (0, c.FT9)(c._3J.SIZE_16)) : y,
        C =
            null != v
                ? g.intl.format(m.default["+zqXZs"], {
                      username: v.username,
                      onUserClick: I,
                  })
                : g.intl.string(m.default.xpRjfS);
    return (0, r.jsxs)("div", {
        className: s()(b.NB, b.JZ, S),
        children: [
            (0, r.jsx)(c.euF, {
                src: T,
                size: c._3J.SIZE_16,
                className: E.my,
                "aria-label": "",
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                className: E.Xh,
                children: C,
            }),
            (0, r.jsxs)(c.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: [
                    (0, r.jsx)("span", {
                        className: E.Ek,
                        children: "\u2022",
                    }),
                    (0, r.jsx)(d.A, {
                        timestamp: A,
                        className: E.vE,
                    }),
                ],
            }),
        ],
    });
};
