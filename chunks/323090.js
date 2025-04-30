t.d(n, { Z: () => x });
var l = t(200651);
t(192379);
var r = t(442837),
    i = t(481060),
    s = t(666520),
    o = t(592125),
    a = t(430824),
    c = t(944486),
    d = t(785717),
    u = t(621853),
    f = t(172351),
    p = t(280885),
    h = t(900927),
    v = t(678738),
    g = t(179828),
    j = t(228168),
    m = t(388032),
    b = t(349966);
function x(e) {
    let { user: n, currentUser: t, displayProfile: x, guildId: Z, subsection: O, onClose: y } = e,
        { trackUserProfileAction: I } = (0, d.KZ)(),
        P = (0, r.e7)([a.Z], () => a.Z.getGuild(Z)),
        E = (0, r.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        N = (0, r.e7)([o.Z, c.Z], () => o.Z.getChannel(c.Z.getChannelId()));
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
                null != N &&
                (0, l.jsx)(f.Z, {
                    applicationId: E.id,
                    commandIds: E.popularApplicationCommandIds,
                    channel: N,
                    guildId: Z,
                    onClick: y
                }),
            null != P &&
                (0, l.jsx)(g.Z, {
                    user: n,
                    currentUser: t,
                    guild: P,
                    scrollIntoView: O === j.Tb.ROLES
                }),
            (0, l.jsx)(v.Z, {
                heading: m.intl.string(m.t['A//N4u']),
                children: (0, l.jsx)(h.Z, {
                    userId: n.id,
                    guildId: Z,
                    tooltipDelay: j.vB
                })
            }),
            (0, l.jsx)(v.Z, {
                heading: m.intl.string(m.t['mQKv+v']),
                scrollIntoView: O === j.Tb.NOTE,
                children: (0, l.jsx)(s.Z, {
                    userId: n.id,
                    className: b.note,
                    autoFocus: O === j.Tb.NOTE,
                    onUpdate: () => I({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
