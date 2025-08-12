n.d(t, { Z: () => O });
var r = n(255367);
n(73800);
var l = n(442837),
    i = n(481060),
    o = n(666520),
    a = n(592125),
    c = n(944486),
    s = n(785717),
    d = n(621853),
    u = n(172351),
    f = n(280885),
    p = n(900927),
    m = n(678738),
    b = n(179828),
    g = n(228168),
    j = n(388032),
    y = n(926505);
function O(e) {
    let { user: t, currentUser: n, displayProfile: O, guildId: x, subsection: h, onClose: v } = e,
        { trackUserProfileAction: _ } = (0, s.KZ)(),
        I = (0, l.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        P = (0, l.e7)([a.Z, c.Z], () => a.Z.getChannel(c.Z.getChannelId()));
    return (0, r.jsxs)(i.zJl, {
        fade: !0,
        className: y.scroller,
        children: [
            (null == O ? void 0 : O.bio) != null &&
                (null == O ? void 0 : O.bio) !== "" &&
                (0, r.jsx)(f.Z, {
                    userBio: O.bio,
                    setLineClamp: !1,
                }),
            (null == I ? void 0 : I.popularApplicationCommandIds) != null &&
                null != P &&
                (0, r.jsx)(u.Z, {
                    applicationId: I.id,
                    commandIds: I.popularApplicationCommandIds,
                    channel: P,
                    guildId: x,
                    onClick: v,
                }),
            (null == O ? void 0 : O.guildId) != null &&
                (0, r.jsx)(b.Z, {
                    user: t,
                    currentUser: n,
                    guildId: O.guildId,
                    scrollIntoView: h === g.Tb.ROLES,
                }),
            (0, r.jsx)(m.Z, {
                heading: j.intl.string(j.t["A//N4u"]),
                children: (0, r.jsx)(p.Z, {
                    userId: t.id,
                    guildId: x,
                    tooltipDelay: g.vB,
                }),
            }),
            (0, r.jsx)(m.Z, {
                heading: j.intl.string(j.t["mQKv+v"]),
                scrollIntoView: h === g.Tb.NOTE,
                children: (0, r.jsx)(o.Z, {
                    userId: t.id,
                    className: y.note,
                    autoFocus: h === g.Tb.NOTE,
                    onUpdate: () => _({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
