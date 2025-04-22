t.d(n, { Z: () => x });
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
    m = t(900927),
    b = t(678738),
    h = t(179828),
    g = t(228168),
    j = t(388032),
    v = t(349966);
function x(e) {
    let { user: n, currentUser: t, displayProfile: x, guildId: y, subsection: I, onClose: O } = e,
        { trackUserProfileAction: Z } = (0, d.KZ)(),
        _ = (0, o.e7)([c.Z], () => c.Z.getGuild(y)),
        P = (0, o.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        E = (0, o.e7)([s.Z, a.Z], () => s.Z.getChannel(a.Z.getChannelId()));
    return (0, r.jsxs)(i.zJl, {
        fade: !0,
        className: v.scroller,
        children: [
            (null == x ? void 0 : x.bio) != null &&
                (null == x ? void 0 : x.bio) !== '' &&
                (0, r.jsx)(p.Z, {
                    userBio: x.bio,
                    setLineClamp: !1
                }),
            (null == P ? void 0 : P.popularApplicationCommandIds) != null &&
                null != E &&
                (0, r.jsx)(f.Z, {
                    applicationId: P.id,
                    commandIds: P.popularApplicationCommandIds,
                    channel: E,
                    guildId: y,
                    onClick: O
                }),
            null != _ &&
                (0, r.jsx)(h.Z, {
                    user: n,
                    currentUser: t,
                    guild: _,
                    scrollIntoView: I === g.Tb.ROLES
                }),
            (0, r.jsx)(b.Z, {
                heading: j.intl.string(j.t['A//N4u']),
                children: (0, r.jsx)(m.Z, {
                    userId: n.id,
                    guildId: y,
                    tooltipDelay: g.vB
                })
            }),
            (0, r.jsx)(b.Z, {
                heading: j.intl.string(j.t['mQKv+v']),
                scrollIntoView: I === g.Tb.NOTE,
                children: (0, r.jsx)(l.Z, {
                    userId: n.id,
                    className: v.note,
                    autoFocus: I === g.Tb.NOTE,
                    onUpdate: () => Z({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
