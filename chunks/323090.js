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
    p = t(900927),
    f = t(678738),
    h = t(179828),
    x = t(228168),
    j = t(388032),
    v = t(438160);
function g(e) {
    let { user: n, currentUser: t, displayProfile: g, guildId: b, subsection: y, onClose: I } = e,
        { trackUserProfileAction: Z } = (0, c.KZ)(),
        O = (0, i.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        N = (0, i.e7)([s.Z, a.Z], () => s.Z.getChannel(a.Z.getChannelId()));
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
            (null == O ? void 0 : O.popularApplicationCommandIds) != null &&
                null != N &&
                (0, l.jsx)(u.Z, {
                    applicationId: O.id,
                    commandIds: O.popularApplicationCommandIds,
                    channel: N,
                    guildId: b,
                    onClick: I,
                }),
            (null == g ? void 0 : g.guildId) != null &&
                (0, l.jsx)(h.Z, {
                    user: n,
                    currentUser: t,
                    guildId: g.guildId,
                    scrollIntoView: y === x.Tb.ROLES,
                }),
            (0, l.jsx)(f.Z, {
                heading: j.intl.string(j.t["A//N4u"]),
                children: (0, l.jsx)(p.Z, {
                    userId: n.id,
                    guildId: b,
                    tooltipDelay: x.vB,
                }),
            }),
            (0, l.jsx)(f.Z, {
                heading: j.intl.string(j.t["mQKv+v"]),
                scrollIntoView: y === x.Tb.NOTE,
                children: (0, l.jsx)(o.Z, {
                    userId: n.id,
                    className: v.note,
                    autoFocus: y === x.Tb.NOTE,
                    onUpdate: () => Z({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
