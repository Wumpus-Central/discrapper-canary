t.d(n, { Z: () => j });
var l = t(54381);
t(473749);
var i = t(442837),
    o = t(481060),
    r = t(666520),
    a = t(592125),
    c = t(944486),
    s = t(785717),
    d = t(621853),
    u = t(172351),
    f = t(280885),
    m = t(900927),
    p = t(678738),
    x = t(179828),
    h = t(228168),
    b = t(388032),
    v = t(199912);
function j(e) {
    let { user: n, currentUser: t, displayProfile: j, guildId: g, subsection: I, onClose: y } = e,
        { trackUserProfileAction: Z } = (0, s.KZ)(),
        O = (0, i.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        N = (0, i.e7)([a.Z, c.Z], () => a.Z.getChannel(c.Z.getChannelId()));
    return (0, l.jsxs)(o.zJl, {
        fade: !0,
        className: v.scroller,
        children: [
            (null == j ? void 0 : j.bio) != null &&
                (null == j ? void 0 : j.bio) !== "" &&
                (0, l.jsx)(f.Z, {
                    userBio: j.bio,
                    setLineClamp: !1,
                }),
            (null == O ? void 0 : O.popularApplicationCommandIds) != null &&
                null != N &&
                (0, l.jsx)(u.Z, {
                    applicationId: O.id,
                    commandIds: O.popularApplicationCommandIds,
                    channel: N,
                    guildId: g,
                    onClick: y,
                }),
            (null == j ? void 0 : j.guildId) != null &&
                (0, l.jsx)(x.Z, {
                    user: n,
                    currentUser: t,
                    guildId: j.guildId,
                    scrollIntoView: I === h.Tb.ROLES,
                }),
            (0, l.jsx)(p.Z, {
                heading: b.intl.string(b.t["A//N4k"]),
                children: (0, l.jsx)(m.Z, {
                    userId: n.id,
                    guildId: g,
                    tooltipDelay: h.vB,
                }),
            }),
            (0, l.jsx)(p.Z, {
                heading: b.intl.string(b.t["mQKv+v"]),
                scrollIntoView: I === h.Tb.NOTE,
                children: (0, l.jsx)(r.Z, {
                    userId: n.id,
                    className: v.note,
                    autoFocus: I === h.Tb.NOTE,
                    onUpdate: () => Z({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
