t.d(n, { Z: () => g });
var l = t(951288);
t(647438);
var i = t(442837),
    r = t(481060),
    o = t(666520),
    s = t(592125),
    a = t(944486),
    c = t(785717),
    d = t(621853),
    u = t(172351),
    m = t(280885),
    f = t(900927),
    p = t(678738),
    h = t(179828),
    j = t(228168),
    x = t(388032),
    v = t(54966);
function g(e) {
    let { user: n, currentUser: t, displayProfile: g, guildId: b, subsection: y, onClose: O } = e,
        { trackUserProfileAction: Z } = (0, c.KZ)(),
        I = (0, i.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        P = (0, i.e7)([s.Z, a.Z], () => s.Z.getChannel(a.Z.getChannelId()));
    return (0, l.jsxs)(r.zJl, {
        fade: !0,
        className: v.scroller,
        children: [
            (null == g ? void 0 : g.bio) != null &&
                (null == g ? void 0 : g.bio) !== "" &&
                (0, l.jsx)(m.Z, {
                    userBio: g.bio,
                    setLineClamp: !1,
                }),
            (null == I ? void 0 : I.popularApplicationCommandIds) != null &&
                null != P &&
                (0, l.jsx)(u.Z, {
                    applicationId: I.id,
                    commandIds: I.popularApplicationCommandIds,
                    channel: P,
                    guildId: b,
                    onClick: O,
                }),
            (null == g ? void 0 : g.guildId) != null &&
                (0, l.jsx)(h.Z, {
                    user: n,
                    currentUser: t,
                    guildId: g.guildId,
                    scrollIntoView: y === j.Tb.ROLES,
                }),
            (0, l.jsx)(p.Z, {
                heading: x.intl.string(x.t["A//N4u"]),
                children: (0, l.jsx)(f.Z, {
                    userId: n.id,
                    guildId: b,
                    tooltipDelay: j.vB,
                }),
            }),
            (0, l.jsx)(p.Z, {
                heading: x.intl.string(x.t["mQKv+v"]),
                scrollIntoView: y === j.Tb.NOTE,
                children: (0, l.jsx)(o.Z, {
                    userId: n.id,
                    className: v.note,
                    autoFocus: y === j.Tb.NOTE,
                    onUpdate: () => Z({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
