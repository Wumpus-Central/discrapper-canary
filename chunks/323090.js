t.d(n, { Z: () => j });
var o = t(951288);
t(647438);
var r = t(442837),
    l = t(481060),
    i = t(666520),
    c = t(592125),
    a = t(944486),
    s = t(785717),
    d = t(621853),
    u = t(172351),
    f = t(280885),
    p = t(900927),
    m = t(678738),
    x = t(179828),
    b = t(228168),
    h = t(388032),
    g = t(438160);
function j(e) {
    let { user: n, currentUser: t, displayProfile: j, guildId: v, subsection: y, onClose: _ } = e,
        { trackUserProfileAction: I } = (0, s.KZ)(),
        O = (0, r.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        Z = (0, r.e7)([c.Z, a.Z], () => c.Z.getChannel(a.Z.getChannelId()));
    return (0, o.jsxs)(l.zJl, {
        fade: !0,
        className: g.scroller,
        children: [
            (null == j ? void 0 : j.bio) != null &&
                (null == j ? void 0 : j.bio) !== "" &&
                (0, o.jsx)(f.Z, {
                    userBio: j.bio,
                    setLineClamp: !1,
                }),
            (null == O ? void 0 : O.popularApplicationCommandIds) != null &&
                null != Z &&
                (0, o.jsx)(u.Z, {
                    applicationId: O.id,
                    commandIds: O.popularApplicationCommandIds,
                    channel: Z,
                    guildId: v,
                    onClick: _,
                }),
            (null == j ? void 0 : j.guildId) != null &&
                (0, o.jsx)(x.Z, {
                    user: n,
                    currentUser: t,
                    guildId: j.guildId,
                    scrollIntoView: y === b.Tb.ROLES,
                }),
            (0, o.jsx)(m.Z, {
                heading: h.intl.string(h.t["A//N4u"]),
                children: (0, o.jsx)(p.Z, {
                    userId: n.id,
                    guildId: v,
                    tooltipDelay: b.vB,
                }),
            }),
            (0, o.jsx)(m.Z, {
                heading: h.intl.string(h.t["mQKv+v"]),
                scrollIntoView: y === b.Tb.NOTE,
                children: (0, o.jsx)(i.Z, {
                    userId: n.id,
                    className: g.note,
                    autoFocus: y === b.Tb.NOTE,
                    onUpdate: () => I({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
