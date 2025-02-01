i.d(n, { Z: () => g });
var t = i(200651);
i(192379);
var l = i(442837),
    o = i(481060),
    s = i(666520),
    r = i(592125),
    a = i(430824),
    d = i(944486),
    c = i(785717),
    u = i(621853),
    m = i(172351),
    x = i(280885),
    p = i(900927),
    f = i(678738),
    I = i(179828),
    h = i(228168),
    v = i(388032),
    Z = i(64406);
function g(e) {
    var n;
    let { user: i, currentUser: g, displayProfile: _, subsection: j, onClose: E } = e,
        { trackUserProfileAction: N } = (0, c.KZ)(),
        y = (0, l.e7)([a.Z], () => ((null == _ ? void 0 : _.guildId) != null ? a.Z.getGuild(_.guildId) : null)),
        T = (0, l.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(i.id)) || void 0 === e ? void 0 : e.application;
        }),
        P = (0, l.e7)([r.Z, d.Z], () => r.Z.getChannel(d.Z.getChannelId()));
    return (0, t.jsxs)(o.zJl, {
        fade: !0,
        className: Z.scroller,
        children: [
            (null == _ ? void 0 : _.bio) != null &&
                (null == _ ? void 0 : _.bio) !== '' &&
                (0, t.jsx)(x.Z, {
                    userBio: _.bio,
                    setLineClamp: !1
                }),
            (null == T ? void 0 : T.popularApplicationCommandIds) != null &&
                null != P &&
                (0, t.jsx)(m.Z, {
                    applicationId: T.id,
                    commandIds: T.popularApplicationCommandIds,
                    channel: P,
                    guildId: null !== (n = null == _ ? void 0 : _.guildId) && void 0 !== n ? n : void 0,
                    onClick: E
                }),
            null != y &&
                (0, t.jsx)(I.Z, {
                    user: i,
                    currentUser: g,
                    guild: y,
                    scrollIntoView: j === h.Tb.ROLES
                }),
            (0, t.jsx)(f.Z, {
                heading: v.intl.string(v.t['A//N4u']),
                children: (0, t.jsx)(p.Z, {
                    userId: i.id,
                    guildId: null == _ ? void 0 : _.guildId,
                    tooltipDelay: h.vB
                })
            }),
            (0, t.jsx)(f.Z, {
                heading: v.intl.string(v.t.PbMNh4),
                scrollIntoView: j === h.Tb.NOTE,
                children: (0, t.jsx)(s.Z, {
                    userId: i.id,
                    className: Z.note,
                    autoFocus: j === h.Tb.NOTE,
                    onUpdate: () => N({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
