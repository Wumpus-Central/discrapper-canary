n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(989349),
    o = n.n(s),
    d = n(397927),
    c = n(763754),
    u = n(449859),
    _ = n(943815),
    m = n(447215),
    h = n(287809),
    p = n(405269),
    g = n(641131),
    A = n(985018),
    x = n(197172),
    f = n(679740),
    C = n(513653);
let E = (e) => {
    let { reportingUserId: t, guildId: n, compact: l, channel: s, messageId: E, reportedTimestamp: I } = e,
        b = h.default.getUser(t),
        T = r.useMemo(() => (l ? (0, _.A)((0, p.i$)(o()(), "LT")) : null), [l]),
        v = (0, m.P)({ user: b, channelId: s.id, guildId: n, messageId: E })((0, c.m2)(b, s)),
        S = null != b ? b.getAvatarURL(n, (0, d.FT9)(d._3J.SIZE_16)) : C,
        y =
            null != b
                ? A.intl.format(g.default["+zqXZs"], { username: b.username, onUserClick: v })
                : A.intl.string(g.default.xpRjfS);
    return (0, i.jsxs)("div", {
        className: a()(f.NB, f.JZ, T),
        children: [
            (0, i.jsx)(d.euF, { src: S, size: d._3J.SIZE_16, className: x.my, "aria-label": "" }),
            (0, i.jsx)(d.Text, { variant: "text-sm/medium", color: "text-subtle", className: x.Xh, children: y }),
            (0, i.jsxs)(d.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: [
                    (0, i.jsx)("span", { className: x.Ek, children: "•" }),
                    (0, i.jsx)(u.A, { timestamp: I, className: x.vE }),
                ],
            }),
        ],
    });
};
