t.d(n, { Z: () => g });
var l = t(54381);
t(473749);
var i = t(442837),
    o = t(481060),
    r = t(666520),
    s = t(592125),
    a = t(944486),
    c = t(785717),
    d = t(621853),
    u = t(172351),
    m = t(280885),
    p = t(900927),
    f = t(678738),
    x = t(179828),
    h = t(228168),
    v = t(388032),
    j = t(54966);
function g(e) {
    let { user: n, currentUser: t, displayProfile: g, guildId: b, subsection: I, onClose: y } = e,
        { trackUserProfileAction: Z } = (0, c.KZ)(),
        _ = (0, i.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        O = (0, i.e7)([s.Z, a.Z], () => s.Z.getChannel(a.Z.getChannelId()));
    return (0, l.jsxs)(o.zJl, {
        fade: !0,
        className: j.scroller,
        children: [
            (null == g ? void 0 : g.bio) != null &&
                (null == g ? void 0 : g.bio) !== "" &&
                (0, l.jsx)(m.Z, {
                    userBio: g.bio,
                    setLineClamp: !1,
                }),
            (null == _ ? void 0 : _.popularApplicationCommandIds) != null &&
                null != O &&
                (0, l.jsx)(u.Z, {
                    applicationId: _.id,
                    commandIds: _.popularApplicationCommandIds,
                    channel: O,
                    guildId: b,
                    onClick: y,
                }),
            (null == g ? void 0 : g.guildId) != null &&
                (0, l.jsx)(x.Z, {
                    user: n,
                    currentUser: t,
                    guildId: g.guildId,
                    scrollIntoView: I === h.Tb.ROLES,
                }),
            (0, l.jsx)(f.Z, {
                heading: v.intl.string(v.t["A//N4k"]),
                children: (0, l.jsx)(p.Z, {
                    userId: n.id,
                    guildId: b,
                    tooltipDelay: h.vB,
                }),
            }),
            (0, l.jsx)(f.Z, {
                heading: v.intl.string(v.t["mQKv+v"]),
                scrollIntoView: I === h.Tb.NOTE,
                children: (0, l.jsx)(r.Z, {
                    userId: n.id,
                    className: j.note,
                    autoFocus: I === h.Tb.NOTE,
                    onUpdate: () => Z({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
