t.d(n, { Z: () => O });
var l = t(200651);
t(192379);
var r = t(442837),
    i = t(481060),
    o = t(666520),
    s = t(592125),
    u = t(430824),
    a = t(944486),
    c = t(785717),
    d = t(621853),
    f = t(172351),
    p = t(280885),
    g = t(900927),
    b = t(678738),
    v = t(179828),
    h = t(228168),
    j = t(388032),
    m = t(349966);
function O(e) {
    let { user: n, currentUser: t, displayProfile: O, guildId: y, subsection: Z, onClose: I } = e,
        { trackUserProfileAction: x } = (0, c.KZ)(),
        P = (0, r.e7)([u.Z], () => u.Z.getGuild(y)),
        E = (0, r.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        T = (0, r.e7)([s.Z, a.Z], () => s.Z.getChannel(a.Z.getChannelId()));
    return (0, l.jsxs)(i.zJl, {
        fade: !0,
        className: m.scroller,
        children: [
            (null == O ? void 0 : O.bio) != null &&
                (null == O ? void 0 : O.bio) !== '' &&
                (0, l.jsx)(p.Z, {
                    userBio: O.bio,
                    setLineClamp: !1
                }),
            (null == E ? void 0 : E.popularApplicationCommandIds) != null &&
                null != T &&
                (0, l.jsx)(f.Z, {
                    applicationId: E.id,
                    commandIds: E.popularApplicationCommandIds,
                    channel: T,
                    guildId: y,
                    onClick: I
                }),
            null != P &&
                (0, l.jsx)(v.Z, {
                    user: n,
                    currentUser: t,
                    guild: P,
                    scrollIntoView: Z === h.Tb.ROLES
                }),
            (0, l.jsx)(b.Z, {
                heading: j.intl.string(j.t['A//N4u']),
                children: (0, l.jsx)(g.Z, {
                    userId: n.id,
                    guildId: y,
                    tooltipDelay: h.vB
                })
            }),
            (0, l.jsx)(b.Z, {
                heading: j.intl.string(j.t['mQKv+v']),
                scrollIntoView: Z === h.Tb.NOTE,
                children: (0, l.jsx)(o.Z, {
                    userId: n.id,
                    className: m.note,
                    autoFocus: Z === h.Tb.NOTE,
                    onUpdate: () => x({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
