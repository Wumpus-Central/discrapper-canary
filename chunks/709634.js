n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
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
    let { reportingUserId: t, guildId: n, compact: a, channel: s, messageId: E, reportedTimestamp: I } = e,
        v = h.default.getUser(t),
        b = r.useMemo(() => (a ? (0, _.A)((0, p.i$)(o()(), "LT")) : null), [a]),
        T = (0, m.P)({ user: v, channelId: s.id, guildId: n, messageId: E })((0, c.m2)(v, s)),
        y = null != v ? v.getAvatarURL(n, (0, d.FT9)(d._3J.SIZE_16)) : C,
        S =
            null != v
                ? A.intl.format(g.default["+zqXZs"], { username: v.username, onUserClick: T })
                : A.intl.string(g.default.xpRjfS);
    return (0, i.jsxs)("div", {
        className: l()(f.NB, f.JZ, b),
        children: [
            (0, i.jsx)(d.euF, { src: y, size: d._3J.SIZE_16, className: x.my, "aria-label": "" }),
            (0, i.jsx)(d.Text, { variant: "text-sm/medium", color: "text-subtle", className: x.Xh, children: S }),
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
