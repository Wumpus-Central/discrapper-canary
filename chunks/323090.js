t.d(n, { Z: () => v });
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
    y = t(678738),
    m = t(179828),
    g = t(228168),
    I = t(388032),
    j = t(349966);
function v(e) {
    var n;
    let { user: t, currentUser: v, displayProfile: h, subsection: _, onClose: x } = e,
        { trackUserProfileAction: O } = (0, d.KZ)(),
        Z = (0, o.e7)([c.Z], () => ((null == h ? void 0 : h.guildId) != null ? c.Z.getGuild(h.guildId) : null)),
        P = (0, o.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        N = (0, o.e7)([s.Z, a.Z], () => s.Z.getChannel(a.Z.getChannelId()));
    return (0, r.jsxs)(i.zJl, {
        fade: !0,
        className: j.scroller,
        children: [
            (null == h ? void 0 : h.bio) != null &&
                (null == h ? void 0 : h.bio) !== '' &&
                (0, r.jsx)(p.Z, {
                    userBio: h.bio,
                    setLineClamp: !1
                }),
            (null == P ? void 0 : P.popularApplicationCommandIds) != null &&
                null != N &&
                (0, r.jsx)(f.Z, {
                    applicationId: P.id,
                    commandIds: P.popularApplicationCommandIds,
                    channel: N,
                    guildId: null != (n = null == h ? void 0 : h.guildId) ? n : void 0,
                    onClick: x
                }),
            null != Z &&
                (0, r.jsx)(m.Z, {
                    user: t,
                    currentUser: v,
                    guild: Z,
                    scrollIntoView: _ === g.Tb.ROLES
                }),
            (0, r.jsx)(y.Z, {
                heading: I.NW.string(I.t['A//N4u']),
                children: (0, r.jsx)(b.Z, {
                    userId: t.id,
                    guildId: null == h ? void 0 : h.guildId,
                    tooltipDelay: g.vB
                })
            }),
            (0, r.jsx)(y.Z, {
                heading: I.NW.string(I.t['mQKv+v']),
                scrollIntoView: _ === g.Tb.NOTE,
                children: (0, r.jsx)(l.Z, {
                    userId: t.id,
                    className: j.note,
                    autoFocus: _ === g.Tb.NOTE,
                    onUpdate: () => O({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
