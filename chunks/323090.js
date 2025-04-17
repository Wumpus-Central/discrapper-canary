t.d(n, { Z: () => j });
var o = t(200651);
t(192379);
var r = t(442837),
    i = t(481060),
    l = t(666520),
    s = t(592125),
    c = t(430824),
    a = t(944486),
    d = t(785717),
    u = t(621853),
    f = t(172351),
    p = t(280885),
    b = t(900927),
    m = t(678738),
    I = t(179828),
    h = t(228168),
    g = t(388032),
    y = t(349966);
function j(e) {
    let { user: n, currentUser: t, displayProfile: j, guildId: v, subsection: x, onClose: _ } = e,
        { trackUserProfileAction: Z } = (0, d.KZ)(),
        O = (0, r.e7)([c.Z], () => c.Z.getGuild(v)),
        N = (0, r.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        E = (0, r.e7)([s.Z, a.Z], () => s.Z.getChannel(a.Z.getChannelId()));
    return (0, o.jsxs)(i.zJl, {
        fade: !0,
        className: y.scroller,
        children: [
            (null == j ? void 0 : j.bio) != null &&
                (null == j ? void 0 : j.bio) !== '' &&
                (0, o.jsx)(p.Z, {
                    userBio: j.bio,
                    setLineClamp: !1
                }),
            (null == N ? void 0 : N.popularApplicationCommandIds) != null &&
                null != E &&
                (0, o.jsx)(f.Z, {
                    applicationId: N.id,
                    commandIds: N.popularApplicationCommandIds,
                    channel: E,
                    guildId: v,
                    onClick: _
                }),
            null != O &&
                (0, o.jsx)(I.Z, {
                    user: n,
                    currentUser: t,
                    guild: O,
                    scrollIntoView: x === h.Tb.ROLES
                }),
            (0, o.jsx)(m.Z, {
                heading: g.NW.string(g.t['A//N4u']),
                children: (0, o.jsx)(b.Z, {
                    userId: n.id,
                    guildId: v,
                    tooltipDelay: h.vB
                })
            }),
            (0, o.jsx)(m.Z, {
                heading: g.NW.string(g.t['mQKv+v']),
                scrollIntoView: x === h.Tb.NOTE,
                children: (0, o.jsx)(l.Z, {
                    userId: n.id,
                    className: y.note,
                    autoFocus: x === h.Tb.NOTE,
                    onUpdate: () => Z({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
