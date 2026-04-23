n.d(t, { A: () => h });
var a = n(627968);
n(64700);
var i = n(311907),
    l = n(573613),
    r = n(734057),
    s = n(309010),
    o = n(622543),
    d = n(987112),
    c = n(389996),
    _ = n(743987),
    u = n(900179),
    p = n(280645),
    m = n(928223),
    f = n(518477),
    x = n(985018),
    g = n(741036);
function h(e) {
    let { user: t, displayProfile: n, guildId: h, onClose: A } = e,
        b = (0, i.bG)([o.A], () => o.A.getUserProfile(t.id)?.application),
        v = (0, i.bG)([r.A, s.A], () => r.A.getChannel(s.A.getChannelId()));
    return (0, a.jsxs)(l.Ip, {
        fade: !0,
        className: g.XG,
        children: [
            (0, a.jsx)(c.E, { userBio: n?.bio, setLineClamp: !1 }),
            b?.popularApplicationCommandIds != null &&
                null != v &&
                (0, a.jsx)(d.A, {
                    applicationId: b.id,
                    commandIds: b.popularApplicationCommandIds,
                    channel: v,
                    guildId: h,
                    onClick: A,
                }),
            n?.guildId != null && (0, a.jsx)(p.A, { userId: t.id, guildId: n.guildId }),
            (0, a.jsx)(u.A, {
                heading: x.intl.string(x.t["A//N4k"]),
                children: (0, a.jsx)(_.A, { userId: t.id, guildId: h, tooltipDelay: f.In }),
            }),
            (0, a.jsx)(m.A, { userId: t.id }),
        ],
    });
}
