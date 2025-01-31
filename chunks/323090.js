t.d(n, { Z: () => _ });
var i = t(200651);
t(192379);
var l = t(442837),
    o = t(481060),
    s = t(666520),
    r = t(592125),
    a = t(430824),
    c = t(944486),
    d = t(785717),
    u = t(621853),
    m = t(172351),
    x = t(280885),
    p = t(900927),
    f = t(678738),
    I = t(179828),
    h = t(228168),
    v = t(388032),
    Z = t(64406);
function _(e) {
    var n;
    let { user: t, currentUser: _, displayProfile: g, subsection: j, onClose: E } = e,
        { trackUserProfileAction: N } = (0, d.KZ)(),
        y = (0, l.e7)([a.Z], () => ((null == g ? void 0 : g.guildId) != null ? a.Z.getGuild(g.guildId) : null)),
        T = (0, l.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        P = (0, l.e7)([r.Z, c.Z], () => r.Z.getChannel(c.Z.getChannelId()));
    return (0, i.jsxs)(o.zJl, {
        fade: !0,
        className: Z.scroller,
        children: [
            (null == g ? void 0 : g.bio) != null &&
                (null == g ? void 0 : g.bio) !== '' &&
                (0, i.jsx)(x.Z, {
                    userBio: g.bio,
                    setLineClamp: !1
                }),
            (null == T ? void 0 : T.popularApplicationCommandIds) != null &&
                null != P &&
                (0, i.jsx)(m.Z, {
                    applicationId: T.id,
                    commandIds: T.popularApplicationCommandIds,
                    channel: P,
                    guildId: null !== (n = null == g ? void 0 : g.guildId) && void 0 !== n ? n : void 0,
                    onClick: E
                }),
            null != y &&
                (0, i.jsx)(I.Z, {
                    user: t,
                    currentUser: _,
                    guild: y,
                    scrollIntoView: j === h.Tb.ROLES
                }),
            (0, i.jsx)(f.Z, {
                heading: v.intl.string(v.t['A//N4u']),
                children: (0, i.jsx)(p.Z, {
                    userId: t.id,
                    guildId: null == g ? void 0 : g.guildId,
                    tooltipDelay: h.vB
                })
            }),
            (0, i.jsx)(f.Z, {
                heading: v.intl.string(v.t.PbMNh4),
                scrollIntoView: j === h.Tb.NOTE,
                children: (0, i.jsx)(s.Z, {
                    userId: t.id,
                    className: Z.note,
                    autoFocus: j === h.Tb.NOTE,
                    onUpdate: () => N({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
