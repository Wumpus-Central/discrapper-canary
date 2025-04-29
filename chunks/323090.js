t.d(n, { Z: () => Z });
var l = t(200651);
t(192379);
var r = t(442837),
    i = t(481060),
    o = t(666520),
    s = t(592125),
    a = t(430824),
    d = t(944486),
    c = t(785717),
    u = t(621853),
    f = t(172351),
    h = t(280885),
    p = t(900927),
    g = t(678738),
    j = t(179828),
    v = t(228168),
    m = t(388032),
    x = t(349966);
function Z(e) {
    let { user: n, currentUser: t, displayProfile: Z, guildId: b, subsection: O, onClose: y } = e,
        { trackUserProfileAction: I } = (0, c.KZ)(),
        E = (0, r.e7)([a.Z], () => a.Z.getGuild(b)),
        P = (0, r.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        T = (0, r.e7)([s.Z, d.Z], () => s.Z.getChannel(d.Z.getChannelId()));
    return (0, l.jsxs)(i.zJl, {
        fade: !0,
        className: x.scroller,
        children: [
            (null == Z ? void 0 : Z.bio) != null &&
                (null == Z ? void 0 : Z.bio) !== '' &&
                (0, l.jsx)(h.Z, {
                    userBio: Z.bio,
                    setLineClamp: !1
                }),
            (null == P ? void 0 : P.popularApplicationCommandIds) != null &&
                null != T &&
                (0, l.jsx)(f.Z, {
                    applicationId: P.id,
                    commandIds: P.popularApplicationCommandIds,
                    channel: T,
                    guildId: b,
                    onClick: y
                }),
            null != E &&
                (0, l.jsx)(j.Z, {
                    user: n,
                    currentUser: t,
                    guild: E,
                    scrollIntoView: O === v.Tb.ROLES
                }),
            (0, l.jsx)(g.Z, {
                heading: m.intl.string(m.t['A//N4u']),
                children: (0, l.jsx)(p.Z, {
                    userId: n.id,
                    guildId: b,
                    tooltipDelay: v.vB
                })
            }),
            (0, l.jsx)(g.Z, {
                heading: m.intl.string(m.t['mQKv+v']),
                scrollIntoView: O === v.Tb.NOTE,
                children: (0, l.jsx)(o.Z, {
                    userId: n.id,
                    className: x.note,
                    autoFocus: O === v.Tb.NOTE,
                    onUpdate: () => I({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
