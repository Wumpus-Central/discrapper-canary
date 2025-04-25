t.d(n, { Z: () => j });
var i = t(200651);
t(192379);
var o = t(442837),
    l = t(481060),
    r = t(666520),
    s = t(592125),
    a = t(430824),
    c = t(944486),
    d = t(785717),
    u = t(621853),
    f = t(172351),
    m = t(280885),
    p = t(900927),
    h = t(678738),
    x = t(179828),
    I = t(228168),
    v = t(388032),
    b = t(349966);
function j(e) {
    let { user: n, currentUser: t, displayProfile: j, guildId: _, subsection: g, onClose: Z } = e,
        { trackUserProfileAction: y } = (0, d.KZ)(),
        N = (0, o.e7)([a.Z], () => a.Z.getGuild(_)),
        A = (0, o.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        T = (0, o.e7)([s.Z, c.Z], () => s.Z.getChannel(c.Z.getChannelId()));
    return (0, i.jsxs)(l.zJl, {
        fade: !0,
        className: b.scroller,
        children: [
            (null == j ? void 0 : j.bio) != null &&
                (null == j ? void 0 : j.bio) !== '' &&
                (0, i.jsx)(m.Z, {
                    userBio: j.bio,
                    setLineClamp: !1
                }),
            (null == A ? void 0 : A.popularApplicationCommandIds) != null &&
                null != T &&
                (0, i.jsx)(f.Z, {
                    applicationId: A.id,
                    commandIds: A.popularApplicationCommandIds,
                    channel: T,
                    guildId: _,
                    onClick: Z
                }),
            null != N &&
                (0, i.jsx)(x.Z, {
                    user: n,
                    currentUser: t,
                    guild: N,
                    scrollIntoView: g === I.Tb.ROLES
                }),
            (0, i.jsx)(h.Z, {
                heading: v.intl.string(v.t['A//N4u']),
                children: (0, i.jsx)(p.Z, {
                    userId: n.id,
                    guildId: _,
                    tooltipDelay: I.vB
                })
            }),
            (0, i.jsx)(h.Z, {
                heading: v.intl.string(v.t['mQKv+v']),
                scrollIntoView: g === I.Tb.NOTE,
                children: (0, i.jsx)(r.Z, {
                    userId: n.id,
                    className: b.note,
                    autoFocus: g === I.Tb.NOTE,
                    onUpdate: () => y({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
