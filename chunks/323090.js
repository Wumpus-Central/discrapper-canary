t.d(n, { Z: () => g });
var r = t(951288);
t(647438);
var l = t(442837),
    o = t(481060),
    i = t(666520),
    c = t(592125),
    s = t(944486),
    a = t(785717),
    d = t(621853),
    u = t(172351),
    f = t(280885),
    m = t(900927),
    p = t(678738),
    h = t(179828),
    x = t(228168),
    b = t(388032),
    j = t(54966);
function g(e) {
    let { user: n, currentUser: t, displayProfile: g, guildId: v, subsection: y, onClose: O } = e,
        { trackUserProfileAction: I } = (0, a.KZ)(),
        _ = (0, l.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        Z = (0, l.e7)([c.Z, s.Z], () => c.Z.getChannel(s.Z.getChannelId()));
    return (0, r.jsxs)(o.zJl, {
        fade: !0,
        className: j.scroller,
        children: [
            (null == g ? void 0 : g.bio) != null &&
                (null == g ? void 0 : g.bio) !== "" &&
                (0, r.jsx)(f.Z, {
                    userBio: g.bio,
                    setLineClamp: !1,
                }),
            (null == _ ? void 0 : _.popularApplicationCommandIds) != null &&
                null != Z &&
                (0, r.jsx)(u.Z, {
                    applicationId: _.id,
                    commandIds: _.popularApplicationCommandIds,
                    channel: Z,
                    guildId: v,
                    onClick: O,
                }),
            (null == g ? void 0 : g.guildId) != null &&
                (0, r.jsx)(h.Z, {
                    user: n,
                    currentUser: t,
                    guildId: g.guildId,
                    scrollIntoView: y === x.Tb.ROLES,
                }),
            (0, r.jsx)(p.Z, {
                heading: b.intl.string(b.t["A//N4u"]),
                children: (0, r.jsx)(m.Z, {
                    userId: n.id,
                    guildId: v,
                    tooltipDelay: x.vB,
                }),
            }),
            (0, r.jsx)(p.Z, {
                heading: b.intl.string(b.t["mQKv+v"]),
                scrollIntoView: y === x.Tb.NOTE,
                children: (0, r.jsx)(i.Z, {
                    userId: n.id,
                    className: j.note,
                    autoFocus: y === x.Tb.NOTE,
                    onUpdate: () => I({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
