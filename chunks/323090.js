t.d(n, { Z: () => j });
var i = t(200651);
t(192379);
var o = t(442837),
    l = t(481060),
    r = t(666520),
    s = t(592125),
    c = t(430824),
    a = t(944486),
    d = t(785717),
    u = t(621853),
    f = t(172351),
    p = t(280885),
    m = t(900927),
    h = t(678738),
    I = t(179828),
    x = t(228168),
    b = t(388032),
    _ = t(349966);
function j(e) {
    let { user: n, currentUser: t, displayProfile: j, guildId: v, subsection: g, onClose: Z } = e,
        { trackUserProfileAction: y } = (0, d.KZ)(),
        A = (0, o.e7)([c.Z], () => c.Z.getGuild(v)),
        T = (0, o.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        O = (0, o.e7)([s.Z, a.Z], () => s.Z.getChannel(a.Z.getChannelId()));
    return (0, i.jsxs)(l.zJl, {
        fade: !0,
        className: _.scroller,
        children: [
            (null == j ? void 0 : j.bio) != null &&
                (null == j ? void 0 : j.bio) !== '' &&
                (0, i.jsx)(p.Z, {
                    userBio: j.bio,
                    setLineClamp: !1
                }),
            (null == T ? void 0 : T.popularApplicationCommandIds) != null &&
                null != O &&
                (0, i.jsx)(f.Z, {
                    applicationId: T.id,
                    commandIds: T.popularApplicationCommandIds,
                    channel: O,
                    guildId: v,
                    onClick: Z
                }),
            null != A &&
                (0, i.jsx)(I.Z, {
                    user: n,
                    currentUser: t,
                    guild: A,
                    scrollIntoView: g === x.Tb.ROLES
                }),
            (0, i.jsx)(h.Z, {
                heading: b.intl.string(b.t['A//N4u']),
                children: (0, i.jsx)(m.Z, {
                    userId: n.id,
                    guildId: v,
                    tooltipDelay: x.vB
                })
            }),
            (0, i.jsx)(h.Z, {
                heading: b.intl.string(b.t['mQKv+v']),
                scrollIntoView: g === x.Tb.NOTE,
                children: (0, i.jsx)(r.Z, {
                    userId: n.id,
                    className: _.note,
                    autoFocus: g === x.Tb.NOTE,
                    onUpdate: () => y({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
