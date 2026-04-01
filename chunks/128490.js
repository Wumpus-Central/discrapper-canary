t.d(n, { A: () => g });
var i = t(627968);
t(64700);
var a = t(311907),
    s = t(397927),
    r = t(734057),
    l = t(309010),
    o = t(622543),
    d = t(987112),
    c = t(389996),
    u = t(743987),
    _ = t(900179),
    p = t(280645),
    x = t(928223),
    A = t(518477),
    f = t(985018),
    m = t(824860);
function g(e) {
    let { user: n, displayProfile: t, guildId: g, onClose: I } = e,
        h = (0, a.bG)([o.A], () => o.A.getUserProfile(n.id)?.application),
        b = (0, a.bG)([r.A, l.A], () => r.A.getChannel(l.A.getChannelId()));
    return (0, i.jsxs)(s.IpV, {
        fade: !0,
        className: m.XG,
        children: [
            (0, i.jsx)(c.E, { userBio: t?.bio, setLineClamp: !1 }),
            h?.popularApplicationCommandIds != null &&
                null != b &&
                (0, i.jsx)(d.A, {
                    applicationId: h.id,
                    commandIds: h.popularApplicationCommandIds,
                    channel: b,
                    guildId: g,
                    onClick: I,
                }),
            t?.guildId != null && (0, i.jsx)(p.A, { userId: n.id, guildId: t.guildId }),
            (0, i.jsx)(_.A, {
                heading: f.intl.string(f.t["A//N4k"]),
                children: (0, i.jsx)(u.A, { userId: n.id, guildId: g, tooltipDelay: A.In }),
            }),
            (0, i.jsx)(x.A, { userId: n.id }),
        ],
    });
}
