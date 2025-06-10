t.d(n, { Z: () => b });
var l = t(255367);
t(73800);
var r = t(442837),
    i = t(481060),
    o = t(666520),
    s = t(592125),
    a = t(944486),
    c = t(785717),
    u = t(621853),
    d = t(172351),
    f = t(280885),
    p = t(900927),
    g = t(678738),
    v = t(179828),
    j = t(228168),
    h = t(388032),
    m = t(349966);
function b(e) {
    let { user: n, currentUser: t, displayProfile: b, guildId: x, subsection: O, onClose: y } = e,
        { trackUserProfileAction: Z } = (0, c.KZ)(),
        I = (0, r.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        P = (0, r.e7)([s.Z, a.Z], () => s.Z.getChannel(a.Z.getChannelId()));
    return (0, l.jsxs)(i.zJl, {
        fade: !0,
        className: m.scroller,
        children: [
            (null == b ? void 0 : b.bio) != null &&
                (null == b ? void 0 : b.bio) !== '' &&
                (0, l.jsx)(f.Z, {
                    userBio: b.bio,
                    setLineClamp: !1
                }),
            (null == I ? void 0 : I.popularApplicationCommandIds) != null &&
                null != P &&
                (0, l.jsx)(d.Z, {
                    applicationId: I.id,
                    commandIds: I.popularApplicationCommandIds,
                    channel: P,
                    guildId: x,
                    onClick: y
                }),
            (null == b ? void 0 : b.guildId) != null &&
                (0, l.jsx)(v.Z, {
                    user: n,
                    currentUser: t,
                    guildId: b.guildId,
                    scrollIntoView: O === j.Tb.ROLES
                }),
            (0, l.jsx)(g.Z, {
                heading: h.intl.string(h.t['A//N4u']),
                children: (0, l.jsx)(p.Z, {
                    userId: n.id,
                    guildId: x,
                    tooltipDelay: j.vB
                })
            }),
            (0, l.jsx)(g.Z, {
                heading: h.intl.string(h.t['mQKv+v']),
                scrollIntoView: O === j.Tb.NOTE,
                children: (0, l.jsx)(o.Z, {
                    userId: n.id,
                    className: m.note,
                    autoFocus: O === j.Tb.NOTE,
                    onUpdate: () => Z({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
