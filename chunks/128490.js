n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    a = n(734057),
    r = n(309010),
    d = n(622543),
    o = n(987112),
    c = n(389996),
    u = n(743987),
    A = n(900179),
    x = n(280645),
    m = n(928223),
    p = n(518477),
    h = n(985018),
    f = n(195723);
function g(e) {
    let { user: t, displayProfile: n, guildId: g, onClose: I } = e,
        j = (0, s.bG)([d.A], () => d.A.getUserProfile(t.id)?.application),
        _ = (0, s.bG)([a.A, r.A], () => a.A.getChannel(r.A.getChannelId()));
    return (0, i.jsxs)(l.IpV, {
        fade: !0,
        className: f.XG,
        children: [
            n?.bio != null && n?.bio !== "" && (0, i.jsx)(c.A, { userBio: n.bio, setLineClamp: !1 }),
            j?.popularApplicationCommandIds != null &&
                null != _ &&
                (0, i.jsx)(o.A, {
                    applicationId: j.id,
                    commandIds: j.popularApplicationCommandIds,
                    channel: _,
                    guildId: g,
                    onClick: I,
                }),
            n?.guildId != null && (0, i.jsx)(x.A, { userId: t.id, guildId: n.guildId }),
            (0, i.jsx)(A.A, {
                heading: h.intl.string(h.t["A//N4k"]),
                children: (0, i.jsx)(u.A, { userId: t.id, guildId: g, tooltipDelay: p.In }),
            }),
            (0, i.jsx)(m.A, { userId: t.id }),
        ],
    });
}
