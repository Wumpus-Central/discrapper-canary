t.d(n, {
    Z: function () {
        return Z;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    o = t(481060),
    r = t(666520),
    s = t(592125),
    c = t(430824),
    a = t(944486),
    d = t(785717),
    u = t(621853),
    f = t(172351),
    m = t(280885),
    p = t(900927),
    I = t(678738),
    x = t(179828),
    h = t(228168),
    v = t(388032),
    g = t(64406);
function Z(e) {
    var n;
    let { user: t, currentUser: Z, displayProfile: j, subsection: _, onClose: b } = e,
        { trackUserProfileAction: E } = (0, d.KZ)(),
        N = (0, l.e7)([c.Z], () => ((null == j ? void 0 : j.guildId) != null ? c.Z.getGuild(j.guildId) : null)),
        y = (0, l.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        S = (0, l.e7)([s.Z, a.Z], () => s.Z.getChannel(a.Z.getChannelId()));
    return (0, i.jsxs)(o.ScrollerThin, {
        fade: !0,
        className: g.scroller,
        children: [
            (null == j ? void 0 : j.bio) != null &&
                (null == j ? void 0 : j.bio) !== '' &&
                (0, i.jsx)(m.Z, {
                    userBio: j.bio,
                    setLineClamp: !1
                }),
            (null == y ? void 0 : y.popularApplicationCommandIds) != null &&
                null != S &&
                (0, i.jsx)(f.Z, {
                    applicationId: y.id,
                    commandIds: y.popularApplicationCommandIds,
                    channel: S,
                    guildId: null !== (n = null == j ? void 0 : j.guildId) && void 0 !== n ? n : void 0,
                    onClick: b
                }),
            null != N &&
                (0, i.jsx)(x.Z, {
                    user: t,
                    currentUser: Z,
                    guild: N,
                    scrollIntoView: _ === h.Tb.ROLES
                }),
            (0, i.jsx)(I.Z, {
                heading: v.intl.string(v.t['A//N4u']),
                children: (0, i.jsx)(p.Z, {
                    userId: t.id,
                    guildId: null == j ? void 0 : j.guildId,
                    tooltipDelay: h.vB
                })
            }),
            (0, i.jsx)(I.Z, {
                heading: v.intl.string(v.t.PbMNh4),
                scrollIntoView: _ === h.Tb.NOTE,
                children: (0, i.jsx)(r.Z, {
                    userId: t.id,
                    className: g.note,
                    autoFocus: _ === h.Tb.NOTE,
                    onUpdate: () => E({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
