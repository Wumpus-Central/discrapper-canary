t.d(n, { Z: () => b });
var l = t(54381);
t(473749);
var i = t(442837),
    o = t(481060),
    r = t(592125),
    a = t(944486),
    c = t(621853),
    s = t(172351),
    d = t(280885),
    u = t(900927),
    f = t(678738),
    m = t(179828),
    p = t(878566),
    x = t(228168),
    h = t(388032),
    v = t(199912);
function b(e) {
    let { user: n, currentUser: t, displayProfile: b, guildId: j, onClose: g } = e,
        I = (0, i.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        y = (0, i.e7)([r.Z, a.Z], () => r.Z.getChannel(a.Z.getChannelId()));
    return (0, l.jsxs)(o.zJl, {
        fade: !0,
        className: v.scroller,
        children: [
            (null == b ? void 0 : b.bio) != null &&
                (null == b ? void 0 : b.bio) !== "" &&
                (0, l.jsx)(d.Z, {
                    userBio: b.bio,
                    setLineClamp: !1,
                }),
            (null == I ? void 0 : I.popularApplicationCommandIds) != null &&
                null != y &&
                (0, l.jsx)(s.Z, {
                    applicationId: I.id,
                    commandIds: I.popularApplicationCommandIds,
                    channel: y,
                    guildId: j,
                    onClick: g,
                }),
            (null == b ? void 0 : b.guildId) != null &&
                (0, l.jsx)(m.Z, {
                    user: n,
                    currentUser: t,
                    guildId: b.guildId,
                }),
            (0, l.jsx)(f.Z, {
                heading: h.intl.string(h.t["A//N4k"]),
                children: (0, l.jsx)(u.Z, {
                    userId: n.id,
                    guildId: j,
                    tooltipDelay: x.vB,
                }),
            }),
            (0, l.jsx)(p.Z, { userId: n.id }),
        ],
    });
}
