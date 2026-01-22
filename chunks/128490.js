t.d(l, {
    A: () => h,
});
var n = t(627968);
t(64700);
var i = t(311907),
    r = t(397927),
    s = t(734057),
    a = t(309010),
    o = t(622543),
    d = t(987112),
    c = t(389996),
    u = t(743987),
    f = t(900179),
    p = t(280645),
    m = t(928223),
    x = t(518477),
    A = t(985018),
    j = t(195723);

function h(e) {
    let { user: l, displayProfile: t, guildId: h, onClose: g } = e,
        v = (0, i.bG)([o.A], () => {
            var e;
            return null == (e = o.A.getUserProfile(l.id)) ? void 0 : e.application;
        }),
        b = (0, i.bG)([s.A, a.A], () => s.A.getChannel(a.A.getChannelId()));
    return (0, n.jsxs)(r.IpV, {
        fade: !0,
        className: j.XG,
        children: [
            (null == t ? void 0 : t.bio) != null &&
                (null == t ? void 0 : t.bio) !== "" &&
                (0, n.jsx)(c.A, {
                    userBio: t.bio,
                    setLineClamp: !1,
                }),
            (null == v ? void 0 : v.popularApplicationCommandIds) != null &&
                null != b &&
                (0, n.jsx)(d.A, {
                    applicationId: v.id,
                    commandIds: v.popularApplicationCommandIds,
                    channel: b,
                    guildId: h,
                    onClick: g,
                }),
            (null == t ? void 0 : t.guildId) != null &&
                (0, n.jsx)(p.A, {
                    userId: l.id,
                    guildId: t.guildId,
                }),
            (0, n.jsx)(f.A, {
                heading: A.intl.string(A.t["A//N4k"]),
                children: (0, n.jsx)(u.A, {
                    userId: l.id,
                    guildId: h,
                    tooltipDelay: x.In,
                }),
            }),
            (0, n.jsx)(m.A, {
                userId: l.id,
            }),
        ],
    });
}
