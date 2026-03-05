n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(989349),
    o = n.n(s),
    d = n(397927),
    c = n(763754),
    u = n(449859),
    _ = n(943815),
    m = n(447215),
    h = n(287809),
    p = n(405269),
    g = n(733045),
    A = n(985018),
    x = n(67642),
    f = n(222590),
    C = n(513653);
let E = (e) => {
    let { reportingUserId: t, guildId: n, compact: r, channel: s, messageId: E, reportedTimestamp: I } = e,
        b = h.default.getUser(t),
        T = l.useMemo(() => (r ? (0, _.A)((0, p.i$)(o()(), "LT")) : null), [r]),
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
