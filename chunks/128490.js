t.d(n, { A: () => h });
var i = t(627968);
t(64700);
var a = t(311907),
    r = t(397927),
    l = t(734057),
    o = t(309010),
    s = t(622543),
    d = t(987112),
    c = t(389996),
    _ = t(743987),
    u = t(900179),
    p = t(280645),
    A = t(928223),
    g = t(518477),
    m = t(985018),
    f = t(824860);
function h(e) {
    let { user: n, displayProfile: t, guildId: h, onClose: x } = e,
        I = (0, a.bG)([s.A], () => s.A.getUserProfile(n.id)?.application),
        b = (0, a.bG)([l.A, o.A], () => l.A.getChannel(o.A.getChannelId()));
    return (0, i.jsxs)(r.IpV, {
        fade: !0,
        className: f.XG,
        children: [
            (0, i.jsx)(c.E, { userBio: t?.bio, setLineClamp: !1 }),
            I?.popularApplicationCommandIds != null &&
                null != b &&
                (0, i.jsx)(d.A, {
                    applicationId: I.id,
                    commandIds: I.popularApplicationCommandIds,
                    channel: b,
                    guildId: h,
                    onClick: x,
                }),
            t?.guildId != null && (0, i.jsx)(p.A, { userId: n.id, guildId: t.guildId }),
            (0, i.jsx)(u.A, {
                heading: m.intl.string(m.t["A//N4k"]),
                children: (0, i.jsx)(_.A, { userId: n.id, guildId: h, tooltipDelay: g.In }),
            }),
            (0, i.jsx)(A.A, { userId: n.id }),
        ],
    });
}
