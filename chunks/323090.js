t.d(n, { Z: () => Z });
var i = t(200651);
t(192379);
var l = t(442837),
    o = t(481060),
    s = t(666520),
    r = t(592125),
    a = t(430824),
    d = t(944486),
    c = t(785717),
    u = t(621853),
    I = t(172351),
    f = t(280885),
    p = t(900927),
    x = t(678738),
    m = t(179828),
    h = t(228168),
    _ = t(388032),
    v = t(869731);
function Z(e) {
    var n;
    let { user: t, currentUser: Z, displayProfile: g, subsection: j, onClose: E } = e,
        { trackUserProfileAction: y } = (0, c.KZ)(),
        N = (0, l.e7)([a.Z], () => ((null == g ? void 0 : g.guildId) != null ? a.Z.getGuild(g.guildId) : null)),
        T = (0, l.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        b = (0, l.e7)([r.Z, d.Z], () => r.Z.getChannel(d.Z.getChannelId()));
    return (0, i.jsxs)(o.zJl, {
        fade: !0,
        className: v.scroller,
        children: [
            (null == g ? void 0 : g.bio) != null &&
                (null == g ? void 0 : g.bio) !== '' &&
                (0, i.jsx)(f.Z, {
                    userBio: g.bio,
                    setLineClamp: !1
                }),
            (null == T ? void 0 : T.popularApplicationCommandIds) != null &&
                null != b &&
                (0, i.jsx)(I.Z, {
                    applicationId: T.id,
                    commandIds: T.popularApplicationCommandIds,
                    channel: b,
                    guildId: null !== (n = null == g ? void 0 : g.guildId) && void 0 !== n ? n : void 0,
                    onClick: E
                }),
            null != N &&
                (0, i.jsx)(m.Z, {
                    user: t,
                    currentUser: Z,
                    guild: N,
                    scrollIntoView: j === h.Tb.ROLES
                }),
            (0, i.jsx)(x.Z, {
                heading: _.intl.string(_.t['A//N4u']),
                children: (0, i.jsx)(p.Z, {
                    userId: t.id,
                    guildId: null == g ? void 0 : g.guildId,
                    tooltipDelay: h.vB
                })
            }),
            (0, i.jsx)(x.Z, {
                heading: _.intl.string(_.t.PbMNh4),
                scrollIntoView: j === h.Tb.NOTE,
                children: (0, i.jsx)(s.Z, {
                    userId: t.id,
                    className: v.note,
                    autoFocus: j === h.Tb.NOTE,
                    onUpdate: () => y({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
