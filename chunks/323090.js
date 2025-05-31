t.d(n, { Z: () => x });
var l = t(255367);
t(73800);
var r = t(442837),
    i = t(481060),
    o = t(666520),
    s = t(592125),
    a = t(430824),
    c = t(944486),
    u = t(785717),
    d = t(621853),
    f = t(172351),
    p = t(280885),
    g = t(900927),
    v = t(678738),
    j = t(179828),
    b = t(228168),
    h = t(388032),
    m = t(349966);
function x(e) {
    let { user: n, currentUser: t, displayProfile: x, guildId: O, subsection: Z, onClose: y } = e,
        { trackUserProfileAction: P } = (0, u.KZ)(),
        I = (0, r.e7)([a.Z], () => a.Z.getGuild(O)),
        E = (0, r.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        T = (0, r.e7)([s.Z, c.Z], () => s.Z.getChannel(c.Z.getChannelId()));
    return (0, l.jsxs)(i.zJl, {
        fade: !0,
        className: m.scroller,
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
                    guildId: O,
                    onClick: y
                }),
            null != I &&
                (0, l.jsx)(j.Z, {
                    user: n,
                    currentUser: t,
                    guild: I,
                    scrollIntoView: Z === b.Tb.ROLES
                }),
            (0, l.jsx)(v.Z, {
                heading: h.intl.string(h.t['A//N4u']),
                children: (0, l.jsx)(g.Z, {
                    userId: n.id,
                    guildId: O,
                    tooltipDelay: b.vB
                })
            }),
            (0, l.jsx)(v.Z, {
                heading: h.intl.string(h.t['mQKv+v']),
                scrollIntoView: Z === b.Tb.NOTE,
                children: (0, l.jsx)(o.Z, {
                    userId: n.id,
                    className: m.note,
                    autoFocus: Z === b.Tb.NOTE,
                    onUpdate: () => P({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
