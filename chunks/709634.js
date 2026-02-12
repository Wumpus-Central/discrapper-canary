n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(989349),
    o = n.n(s),
    d = n(397927),
    c = n(763754),
    u = n(449859),
    m = n(943815),
    _ = n(447215),
    h = n(287809),
    p = n(405269),
    g = n(641131),
    A = n(985018),
    f = n(197172),
    x = n(679740),
    E = n(513653);
let C = (e) => {
    let { reportingUserId: t, guildId: n, compact: a, channel: s, messageId: C, reportedTimestamp: I } = e,
        T = h.default.getUser(t),
        v = l.useMemo(() => (a ? (0, m.A)((0, p.i$)(o()(), "LT")) : null), [a]),
        N = (0, _.P)({ user: T, channelId: s.id, guildId: n, messageId: C })((0, c.m2)(T, s)),
        S = null != T ? T.getAvatarURL(n, (0, d.FT9)(d._3J.SIZE_16)) : E,
        b =
            null != T
                ? A.intl.format(g.default["+zqXZs"], { username: T.username, onUserClick: N })
                : A.intl.string(g.default.xpRjfS);
    return (0, i.jsxs)("div", {
        className: r()(x.NB, x.JZ, v),
        children: [
            (0, i.jsx)(d.euF, { src: S, size: d._3J.SIZE_16, className: f.my, "aria-label": "" }),
            (0, i.jsx)(d.Text, { variant: "text-sm/medium", color: "text-subtle", className: f.Xh, children: b }),
            (0, i.jsxs)(d.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: [
                    (0, i.jsx)("span", { className: f.Ek, children: "•" }),
                    (0, i.jsx)(u.A, { timestamp: I, className: f.vE }),
                ],
            }),
        ],
    });
};
