t.d(n, { Z: () => j });
var r = t(951288);
t(647438);
var o = t(442837),
    l = t(481060),
    i = t(666520),
    c = t(592125),
    a = t(944486),
    s = t(785717),
    d = t(621853),
    u = t(172351),
    f = t(280885),
    m = t(900927),
    p = t(678738),
    b = t(179828),
    x = t(228168),
    g = t(388032),
    h = t(54966);
function j(e) {
    let { user: n, currentUser: t, displayProfile: j, guildId: v, subsection: _, onClose: y } = e,
        { trackUserProfileAction: I } = (0, s.KZ)(),
        O = (0, o.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        Z = (0, o.e7)([c.Z, a.Z], () => c.Z.getChannel(a.Z.getChannelId()));
    return (0, r.jsxs)(l.zJl, {
        fade: !0,
        className: h.scroller,
        children: [
            (null == j ? void 0 : j.bio) != null &&
                (null == j ? void 0 : j.bio) !== "" &&
                (0, r.jsx)(f.Z, {
                    userBio: j.bio,
                    setLineClamp: !1,
                }),
            (null == O ? void 0 : O.popularApplicationCommandIds) != null &&
                null != Z &&
                (0, r.jsx)(u.Z, {
                    applicationId: O.id,
                    commandIds: O.popularApplicationCommandIds,
                    channel: Z,
                    guildId: v,
                    onClick: y,
                }),
            (null == j ? void 0 : j.guildId) != null &&
                (0, r.jsx)(b.Z, {
                    user: n,
                    currentUser: t,
                    guildId: j.guildId,
                    scrollIntoView: _ === x.Tb.ROLES,
                }),
            (0, r.jsx)(p.Z, {
                heading: g.intl.string(g.t["A//N4u"]),
                children: (0, r.jsx)(m.Z, {
                    userId: n.id,
                    guildId: v,
                    tooltipDelay: x.vB,
                }),
            }),
            (0, r.jsx)(p.Z, {
                heading: g.intl.string(g.t["mQKv+v"]),
                scrollIntoView: _ === x.Tb.NOTE,
                children: (0, r.jsx)(i.Z, {
                    userId: n.id,
                    className: h.note,
                    autoFocus: _ === x.Tb.NOTE,
                    onUpdate: () => I({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
