t.d(n, { Z: () => j });
var r = t(200651);
t(192379);
var o = t(442837),
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
    h = t(179828),
    g = t(228168),
    y = t(388032),
    I = t(349966);
function j(e) {
    let { user: n, currentUser: t, displayProfile: j, guildId: v, subsection: x, onClose: _ } = e,
        { trackUserProfileAction: Z } = (0, d.KZ)(),
        O = (0, o.e7)([c.Z], () => c.Z.getGuild(v)),
        N = (0, o.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        P = (0, o.e7)([s.Z, a.Z], () => s.Z.getChannel(a.Z.getChannelId()));
    return (0, r.jsxs)(i.zJl, {
        fade: !0,
        className: I.scroller,
        children: [
            (null == j ? void 0 : j.bio) != null &&
                (null == j ? void 0 : j.bio) !== '' &&
                (0, r.jsx)(p.Z, {
                    userBio: j.bio,
                    setLineClamp: !1
                }),
            (null == N ? void 0 : N.popularApplicationCommandIds) != null &&
                null != P &&
                (0, r.jsx)(f.Z, {
                    applicationId: N.id,
                    commandIds: N.popularApplicationCommandIds,
                    channel: P,
                    guildId: v,
                    onClick: _
                }),
            null != O &&
                (0, r.jsx)(h.Z, {
                    user: n,
                    currentUser: t,
                    guild: O,
                    scrollIntoView: x === g.Tb.ROLES
                }),
            (0, r.jsx)(m.Z, {
                heading: y.NW.string(y.t['A//N4u']),
                children: (0, r.jsx)(b.Z, {
                    userId: n.id,
                    guildId: v,
                    tooltipDelay: g.vB
                })
            }),
            (0, r.jsx)(m.Z, {
                heading: y.NW.string(y.t['mQKv+v']),
                scrollIntoView: x === g.Tb.NOTE,
                children: (0, r.jsx)(l.Z, {
                    userId: n.id,
                    className: I.note,
                    autoFocus: x === g.Tb.NOTE,
                    onUpdate: () => Z({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
