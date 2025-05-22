t.d(n, { Z: () => x });
var l = t(255367);
t(73800);
var r = t(442837),
    i = t(481060),
    o = t(666520),
    s = t(592125),
    c = t(430824),
    u = t(944486),
    a = t(785717),
    d = t(621853),
    f = t(172351),
    p = t(280885),
    g = t(900927),
    h = t(678738),
    v = t(179828),
    j = t(228168),
    m = t(388032),
    b = t(349966);
function x(e) {
    let { user: n, currentUser: t, displayProfile: x, guildId: Z, subsection: y, onClose: O } = e,
        { trackUserProfileAction: I } = (0, a.KZ)(),
        P = (0, r.e7)([c.Z], () => c.Z.getGuild(Z)),
        E = (0, r.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        T = (0, r.e7)([s.Z, u.Z], () => s.Z.getChannel(u.Z.getChannelId()));
    return (0, l.jsxs)(i.zJl, {
        fade: !0,
        className: b.scroller,
        children: [
            (null == x ? void 0 : x.bio) != null &&
                (null == x ? void 0 : x.bio) !== '' &&
                (0, l.jsx)(p.Z, {
                    userBio: x.bio,
                    setLineClamp: !1
                }),
            (null == E ? void 0 : E.popularApplicationCommandIds) != null &&
                null != T &&
                (0, l.jsx)(f.Z, {
                    applicationId: E.id,
                    commandIds: E.popularApplicationCommandIds,
                    channel: T,
                    guildId: Z,
                    onClick: O
                }),
            null != P &&
                (0, l.jsx)(v.Z, {
                    user: n,
                    currentUser: t,
                    guild: P,
                    scrollIntoView: y === j.Tb.ROLES
                }),
            (0, l.jsx)(h.Z, {
                heading: m.intl.string(m.t['A//N4u']),
                children: (0, l.jsx)(g.Z, {
                    userId: n.id,
                    guildId: Z,
                    tooltipDelay: j.vB
                })
            }),
            (0, l.jsx)(h.Z, {
                heading: m.intl.string(m.t['mQKv+v']),
                scrollIntoView: y === j.Tb.NOTE,
                children: (0, l.jsx)(o.Z, {
                    userId: n.id,
                    className: b.note,
                    autoFocus: y === j.Tb.NOTE,
                    onUpdate: () => I({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
