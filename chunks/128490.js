t.d(n, { A: () => m });
var i = t(627968);
t(64700);
var a = t(311907),
    s = t(397927),
    l = t(734057),
    r = t(309010),
    o = t(622543),
    d = t(987112),
    c = t(389996),
    u = t(743987),
    _ = t(900179),
    A = t(280645),
    x = t(928223),
    p = t(518477),
    g = t(985018),
    I = t(824860);
function m(e) {
    let { user: n, displayProfile: t, guildId: m, onClose: f } = e,
        h = (0, a.bG)([o.A], () => o.A.getUserProfile(n.id)?.application),
        b = (0, a.bG)([l.A, r.A], () => l.A.getChannel(r.A.getChannelId()));
    return (0, i.jsxs)(s.IpV, {
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
                    guildId: m,
                    onClick: f,
                }),
            t?.guildId != null && (0, i.jsx)(A.A, { userId: n.id, guildId: t.guildId }),
            (0, i.jsx)(_.A, {
                heading: g.intl.string(g.t["A//N4k"]),
                children: (0, i.jsx)(u.A, { userId: n.id, guildId: m, tooltipDelay: p.In }),
            }),
            (0, i.jsx)(x.A, { userId: n.id }),
        ],
    });
}
