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
    f = t(172351),
    p = t(280885),
    b = t(900927),
    m = t(678738),
    I = t(179828),
    g = t(228168),
    y = t(388032),
    j = t(349966);
function h(e) {
    var n;
    let { user: t, currentUser: h, displayProfile: v, subsection: x, onClose: _ } = e,
        { trackUserProfileAction: O } = (0, d.KZ)(),
        Z = (0, o.e7)([c.Z], () => ((null == v ? void 0 : v.guildId) != null ? c.Z.getGuild(v.guildId) : null)),
        N = (0, o.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        P = (0, o.e7)([s.Z, a.Z], () => s.Z.getChannel(a.Z.getChannelId()));
    return (0, r.jsxs)(i.zJl, {
        fade: !0,
        className: j.scroller,
        children: [
            (null == v ? void 0 : v.bio) != null &&
                (null == v ? void 0 : v.bio) !== '' &&
                (0, r.jsx)(p.Z, {
                    userBio: v.bio,
                    setLineClamp: !1
                }),
            (null == N ? void 0 : N.popularApplicationCommandIds) != null &&
                null != P &&
                (0, r.jsx)(f.Z, {
                    applicationId: N.id,
                    commandIds: N.popularApplicationCommandIds,
                    channel: P,
                    guildId: null != (n = null == v ? void 0 : v.guildId) ? n : void 0,
                    onClick: _
                }),
            null != Z &&
                (0, r.jsx)(I.Z, {
                    user: t,
                    currentUser: h,
                    guild: Z,
                    scrollIntoView: x === g.Tb.ROLES
                }),
            (0, r.jsx)(m.Z, {
                heading: y.NW.string(y.t['A//N4u']),
                children: (0, r.jsx)(b.Z, {
                    userId: t.id,
                    guildId: null == v ? void 0 : v.guildId,
                    tooltipDelay: g.vB
                })
            }),
            (0, r.jsx)(m.Z, {
                heading: y.NW.string(y.t['mQKv+v']),
                scrollIntoView: x === g.Tb.NOTE,
                children: (0, r.jsx)(l.Z, {
                    userId: t.id,
                    className: j.note,
                    autoFocus: x === g.Tb.NOTE,
                    onUpdate: () => O({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
