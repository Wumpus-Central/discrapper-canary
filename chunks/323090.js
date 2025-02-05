t.d(n, { Z: () => g });
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
    m = t(172351),
    x = t(280885),
    p = t(900927),
    I = t(678738),
    f = t(179828),
    h = t(228168),
    v = t(388032),
    Z = t(64406);
function g(e) {
    var n;
    let { user: t, currentUser: g, displayProfile: _, subsection: j, onClose: E } = e,
        { trackUserProfileAction: N } = (0, c.KZ)(),
        y = (0, l.e7)([a.Z], () => ((null == _ ? void 0 : _.guildId) != null ? a.Z.getGuild(_.guildId) : null)),
        T = (0, l.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        P = (0, l.e7)([r.Z, d.Z], () => r.Z.getChannel(d.Z.getChannelId()));
    return (0, i.jsxs)(o.zJl, {
        fade: !0,
        className: Z.scroller,
        children: [
            (null == _ ? void 0 : _.bio) != null &&
                (null == _ ? void 0 : _.bio) !== '' &&
                (0, i.jsx)(x.Z, {
                    userBio: _.bio,
                    setLineClamp: !1
                }),
            (null == T ? void 0 : T.popularApplicationCommandIds) != null &&
                null != P &&
                (0, i.jsx)(m.Z, {
                    applicationId: T.id,
                    commandIds: T.popularApplicationCommandIds,
                    channel: P,
                    guildId: null !== (n = null == _ ? void 0 : _.guildId) && void 0 !== n ? n : void 0,
                    onClick: E
                }),
            null != y &&
                (0, i.jsx)(f.Z, {
                    user: t,
                    currentUser: g,
                    guild: y,
                    scrollIntoView: j === h.Tb.ROLES
                }),
            (0, i.jsx)(I.Z, {
                heading: v.intl.string(v.t['A//N4u']),
                children: (0, i.jsx)(p.Z, {
                    userId: t.id,
                    guildId: null == _ ? void 0 : _.guildId,
                    tooltipDelay: h.vB
                })
            }),
            (0, i.jsx)(I.Z, {
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
