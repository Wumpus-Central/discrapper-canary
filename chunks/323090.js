t.d(n, { Z: () => h });
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
    f = t(748545),
    p = t(172351),
    m = t(280885),
    I = t(900927),
    b = t(678738),
    g = t(179828),
    v = t(228168),
    y = t(388032),
    j = t(329462);
function h(e) {
    var n;
    let { user: t, currentUser: h, displayProfile: x, subsection: O, onClose: _ } = e,
        { trackUserProfileAction: Z } = (0, d.KZ)(),
        N = (0, o.e7)([c.Z], () => ((null == x ? void 0 : x.guildId) != null ? c.Z.getGuild(x.guildId) : null)),
        P = (0, o.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        E = (0, o.e7)([s.Z, a.Z], () => s.Z.getChannel(a.Z.getChannelId())),
        S = (0, f.kc)({ location: 'BotUserProfileModalInfo' }) ? y.NW.string(y.t['mQKv+v']) : y.NW.string(y.t.PbMNh4);
    return (0, r.jsxs)(i.zJl, {
        fade: !0,
        className: j.scroller,
        children: [
            (null == x ? void 0 : x.bio) != null &&
                (null == x ? void 0 : x.bio) !== '' &&
                (0, r.jsx)(m.Z, {
                    userBio: x.bio,
                    setLineClamp: !1
                }),
            (null == P ? void 0 : P.popularApplicationCommandIds) != null &&
                null != E &&
                (0, r.jsx)(p.Z, {
                    applicationId: P.id,
                    commandIds: P.popularApplicationCommandIds,
                    channel: E,
                    guildId: null !== (n = null == x ? void 0 : x.guildId) && void 0 !== n ? n : void 0,
                    onClick: _
                }),
            null != N &&
                (0, r.jsx)(g.Z, {
                    user: t,
                    currentUser: h,
                    guild: N,
                    scrollIntoView: O === v.Tb.ROLES
                }),
            (0, r.jsx)(b.Z, {
                heading: y.NW.string(y.t['A//N4u']),
                children: (0, r.jsx)(I.Z, {
                    userId: t.id,
                    guildId: null == x ? void 0 : x.guildId,
                    tooltipDelay: v.vB
                })
            }),
            (0, r.jsx)(b.Z, {
                heading: S,
                scrollIntoView: O === v.Tb.NOTE,
                children: (0, r.jsx)(l.Z, {
                    userId: t.id,
                    className: j.note,
                    autoFocus: O === v.Tb.NOTE,
                    onUpdate: () => Z({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
