t.d(n, { A: () => f });
var i = t(627968);
t(64700);
var s = t(311907),
    l = t(397927),
    r = t(734057),
    a = t(309010),
    o = t(622543),
    d = t(987112),
    c = t(389996),
    u = t(743987),
    A = t(900179),
    _ = t(280645),
    x = t(928223),
    p = t(518477),
    m = t(985018),
    I = t(47049);
function f(e) {
    let { user: n, displayProfile: t, guildId: f, onClose: g } = e,
        h = (0, s.bG)([o.A], () => o.A.getUserProfile(n.id)?.application),
        b = (0, s.bG)([r.A, a.A], () => r.A.getChannel(a.A.getChannelId()));
    return (0, i.jsxs)(l.IpV, {
        fade: !0,
        className: I.XG,
        children: [
            (0, i.jsx)(c.E, { userBio: t?.bio, setLineClamp: !1 }),
            h?.popularApplicationCommandIds != null &&
                null != b &&
                (0, i.jsx)(d.A, {
                    applicationId: h.id,
                    commandIds: h.popularApplicationCommandIds,
                    channel: b,
                    guildId: f,
                    onClick: g,
                }),
            t?.guildId != null && (0, i.jsx)(_.A, { userId: n.id, guildId: t.guildId }),
            (0, i.jsx)(A.A, {
                heading: m.intl.string(m.t["A//N4k"]),
                children: (0, i.jsx)(u.A, { userId: n.id, guildId: f, tooltipDelay: p.In }),
            }),
            (0, i.jsx)(x.A, { userId: n.id }),
        ],
    });
}
