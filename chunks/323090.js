n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var l = n(442837),
    o = n(481060),
    i = n(666520),
    a = n(592125),
    c = n(944486),
    s = n(785717),
    d = n(621853),
    u = n(172351),
    f = n(280885),
    p = n(900927),
    m = n(678738),
    g = n(179828),
    b = n(228168),
    j = n(388032),
    y = n(349966);
function h(e) {
    let { user: t, currentUser: n, displayProfile: h, guildId: v, subsection: O, onClose: x } = e,
        { trackUserProfileAction: _ } = (0, s.KZ)(),
        I = (0, l.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        P = (0, l.e7)([a.Z, c.Z], () => a.Z.getChannel(c.Z.getChannelId()));
    return (0, r.jsxs)(o.zJl, {
        fade: !0,
        className: y.scroller,
        children: [
            (null == h ? void 0 : h.bio) != null &&
                (null == h ? void 0 : h.bio) !== "" &&
                (0, r.jsx)(f.Z, {
                    userBio: h.bio,
                    setLineClamp: !1,
                }),
            (null == I ? void 0 : I.popularApplicationCommandIds) != null &&
                null != P &&
                (0, r.jsx)(u.Z, {
                    applicationId: I.id,
                    commandIds: I.popularApplicationCommandIds,
                    channel: P,
                    guildId: v,
                    onClick: x,
                }),
            (null == h ? void 0 : h.guildId) != null &&
                (0, r.jsx)(g.Z, {
                    user: t,
                    currentUser: n,
                    guildId: h.guildId,
                    scrollIntoView: O === b.Tb.ROLES,
                }),
            (0, r.jsx)(m.Z, {
                heading: j.intl.string(j.t["A//N4u"]),
                children: (0, r.jsx)(p.Z, {
                    userId: t.id,
                    guildId: v,
                    tooltipDelay: b.vB,
                }),
            }),
            (0, r.jsx)(m.Z, {
                heading: j.intl.string(j.t["mQKv+v"]),
                scrollIntoView: O === b.Tb.NOTE,
                children: (0, r.jsx)(i.Z, {
                    userId: t.id,
                    className: y.note,
                    autoFocus: O === b.Tb.NOTE,
                    onUpdate: () => _({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
