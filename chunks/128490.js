t.d(n, { A: () => h });
var i = t(627968);
t(64700);
var s = t(311907),
    r = t(397927),
    a = t(734057),
    l = t(309010),
    o = t(622543),
    d = t(987112),
    c = t(389996),
    u = t(743987),
    A = t(900179),
    _ = t(280645),
    m = t(928223),
    x = t(518477),
    p = t(985018),
    f = t(47049);
function h(e) {
    let { user: n, displayProfile: t, guildId: h, onClose: g } = e,
        I = (0, s.bG)([o.A], () => o.A.getUserProfile(n.id)?.application),
        j = (0, s.bG)([a.A, l.A], () => a.A.getChannel(l.A.getChannelId()));
    return (0, i.jsxs)(r.IpV, {
        fade: !0,
        className: f.XG,
        children: [
            (0, i.jsx)(c.E, { userBio: t?.bio, setLineClamp: !1 }),
            I?.popularApplicationCommandIds != null &&
                null != j &&
                (0, i.jsx)(d.A, {
                    applicationId: I.id,
                    commandIds: I.popularApplicationCommandIds,
                    channel: j,
                    guildId: h,
                    onClick: g,
                }),
            t?.guildId != null && (0, i.jsx)(_.A, { userId: n.id, guildId: t.guildId }),
            (0, i.jsx)(A.A, {
                heading: p.intl.string(p.t["A//N4k"]),
                children: (0, i.jsx)(u.A, { userId: n.id, guildId: h, tooltipDelay: x.In }),
            }),
            (0, i.jsx)(m.A, { userId: n.id }),
        ],
    });
}
