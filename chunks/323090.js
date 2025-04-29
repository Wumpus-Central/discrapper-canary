n.d(t, { Z: () => b });
var l = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    s = n(666520),
    o = n(592125),
    c = n(430824),
    a = n(944486),
    d = n(785717),
    u = n(621853),
    f = n(172351),
    p = n(280885),
    h = n(900927),
    j = n(678738),
    g = n(179828),
    v = n(228168),
    m = n(388032),
    x = n(349966);
function b(e) {
    let { user: t, currentUser: n, displayProfile: b, guildId: O, subsection: Z, onClose: y } = e,
        { trackUserProfileAction: I } = (0, d.KZ)(),
        P = (0, r.e7)([c.Z], () => c.Z.getGuild(O)),
        E = (0, r.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        N = (0, r.e7)([o.Z, a.Z], () => o.Z.getChannel(a.Z.getChannelId()));
    return (0, l.jsxs)(i.zJl, {
        fade: !0,
        className: x.scroller,
        children: [
            (null == b ? void 0 : b.bio) != null &&
                (null == b ? void 0 : b.bio) !== '' &&
                (0, l.jsx)(p.Z, {
                    userBio: b.bio,
                    setLineClamp: !1
                }),
            (null == E ? void 0 : E.popularApplicationCommandIds) != null &&
                null != N &&
                (0, l.jsx)(f.Z, {
                    applicationId: E.id,
                    commandIds: E.popularApplicationCommandIds,
                    channel: N,
                    guildId: O,
                    onClick: y
                }),
            null != P &&
                (0, l.jsx)(g.Z, {
                    user: t,
                    currentUser: n,
                    guild: P,
                    scrollIntoView: Z === v.Tb.ROLES
                }),
            (0, l.jsx)(j.Z, {
                heading: m.intl.string(m.t['A//N4u']),
                children: (0, l.jsx)(h.Z, {
                    userId: t.id,
                    guildId: O,
                    tooltipDelay: v.vB
                })
            }),
            (0, l.jsx)(j.Z, {
                heading: m.intl.string(m.t['mQKv+v']),
                scrollIntoView: Z === v.Tb.NOTE,
                children: (0, l.jsx)(s.Z, {
                    userId: t.id,
                    className: x.note,
                    autoFocus: Z === v.Tb.NOTE,
                    onUpdate: () => I({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
