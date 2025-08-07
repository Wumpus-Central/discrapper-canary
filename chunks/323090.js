n.d(t, { Z: () => y });
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
    h = n(349966);
function y(e) {
    let { user: t, currentUser: n, displayProfile: y, guildId: x, subsection: v, onClose: O } = e,
        { trackUserProfileAction: _ } = (0, s.KZ)(),
        I = (0, l.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        P = (0, l.e7)([a.Z, c.Z], () => a.Z.getChannel(c.Z.getChannelId()));
    return (0, r.jsxs)(o.zJl, {
        fade: !0,
        className: h.scroller,
        children: [
            (null == y ? void 0 : y.bio) != null &&
                (null == y ? void 0 : y.bio) !== "" &&
                (0, r.jsx)(f.Z, {
                    userBio: y.bio,
                    setLineClamp: !1,
                }),
            (null == I ? void 0 : I.popularApplicationCommandIds) != null &&
                null != P &&
                (0, r.jsx)(u.Z, {
                    applicationId: I.id,
                    commandIds: I.popularApplicationCommandIds,
                    channel: P,
                    guildId: x,
                    onClick: O,
                }),
            (null == y ? void 0 : y.guildId) != null &&
                (0, r.jsx)(g.Z, {
                    user: t,
                    currentUser: n,
                    guildId: y.guildId,
                    scrollIntoView: v === b.Tb.ROLES,
                }),
            (0, r.jsx)(m.Z, {
                heading: j.intl.string(j.t["A//N4u"]),
                children: (0, r.jsx)(p.Z, {
                    userId: t.id,
                    guildId: x,
                    tooltipDelay: b.vB,
                }),
            }),
            (0, r.jsx)(m.Z, {
                heading: j.intl.string(j.t["mQKv+v"]),
                scrollIntoView: v === b.Tb.NOTE,
                children: (0, r.jsx)(i.Z, {
                    userId: t.id,
                    className: h.note,
                    autoFocus: v === b.Tb.NOTE,
                    onUpdate: () => _({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
