n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(989349),
    o = n.n(r),
    d = n(778712),
    c = n(97808),
    u = n(834730),
    m = n(763754),
    _ = n(449859),
    h = n(943815),
    p = n(447215),
    g = n(287809),
    A = n(405269),
    f = n(221314),
    x = n(985018),
    C = n(237507),
    E = n(334211),
    I = n(513653);
let v = (e) => {
    let { reportingUserId: t, guildId: n, compact: a, channel: r, messageId: v, reportedTimestamp: b } = e,
        T = g.default.getUser(t),
        S = l.useMemo(() => (a ? (0, h.A)((0, A.i$)(o()(), "LT")) : null), [a]),
        y = (0, p.P)({ user: T, channelId: r.id, guildId: n, messageId: v })((0, m.m2)(T, r)),
        N = null != T ? T.getAvatarURL(n, (0, d.FT)(d._3.SIZE_16)) : I,
        j =
            null != T
                ? x.intl.format(f.default["+zqXZs"], { username: T.username, onUserClick: y })
                : x.intl.string(f.default.xpRjfS);
    return (0, i.jsxs)("div", {
        className: s()(E.NB, E.JZ, S),
        children: [
            (0, i.jsx)(c.eu, { src: N, size: d._3.SIZE_16, className: C.my, "aria-label": "" }),
            (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", className: C.Xh, children: j }),
            (0, i.jsxs)(u.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: [
                    (0, i.jsx)("span", { className: C.Ek, children: "•" }),
                    (0, i.jsx)(_.A, { timestamp: b, className: C.vE }),
                ],
            }),
        ],
    });
};
