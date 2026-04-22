a.d(t, { A: () => x });
var n = a(627968);
a(64700);
var i = a(311907),
    l = a(573613),
    r = a(734057),
    d = a(309010),
    o = a(622543),
    s = a(987112),
    c = a(389996),
    _ = a(743987),
    u = a(900179),
    m = a(280645),
    p = a(928223),
    g = a(518477),
    b = a(985018),
    f = a(26988);
function x(e) {
    let { user: t, displayProfile: a, guildId: x, onClose: h } = e,
        A = (0, i.bG)([o.A], () => o.A.getUserProfile(t.id)?.application),
        v = (0, i.bG)([r.A, d.A], () => r.A.getChannel(d.A.getChannelId()));
    return (0, n.jsxs)(l.Ip, {
        fade: !0,
        className: f.XG,
        children: [
            (0, n.jsx)(c.E, { userBio: a?.bio, setLineClamp: !1 }),
            A?.popularApplicationCommandIds != null &&
                null != v &&
                (0, n.jsx)(s.A, {
                    applicationId: A.id,
                    commandIds: A.popularApplicationCommandIds,
                    channel: v,
                    guildId: x,
                    onClick: h,
                }),
            a?.guildId != null && (0, n.jsx)(m.A, { userId: t.id, guildId: a.guildId }),
            (0, n.jsx)(u.A, {
                heading: b.intl.string(b.t["A//N4k"]),
                children: (0, n.jsx)(_.A, { userId: t.id, guildId: x, tooltipDelay: g.In }),
            }),
            (0, n.jsx)(p.A, { userId: t.id }),
        ],
    });
}
