t.d(n, { Z: () => v });
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
    j = t(199912);
function v(e) {
    let { user: n, displayProfile: t, guildId: v, onClose: b } = e,
        g = (0, i.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getUserProfile(n.id)) ? void 0 : e.application;
        }),
        I = (0, i.e7)([r.Z, a.Z], () => r.Z.getChannel(a.Z.getChannelId()));
    return (0, l.jsxs)(o.zJl, {
        fade: !0,
        className: j.scroller,
        children: [
            (null == t ? void 0 : t.bio) != null &&
                (null == t ? void 0 : t.bio) !== "" &&
                (0, l.jsx)(d.Z, {
                    userBio: t.bio,
                    setLineClamp: !1,
                }),
            (null == g ? void 0 : g.popularApplicationCommandIds) != null &&
                null != I &&
                (0, l.jsx)(s.Z, {
                    applicationId: g.id,
                    commandIds: g.popularApplicationCommandIds,
                    channel: I,
                    guildId: v,
                    onClick: b,
                }),
            (null == t ? void 0 : t.guildId) != null &&
                (0, l.jsx)(m.Z, {
                    userId: n.id,
                    guildId: t.guildId,
                }),
            (0, l.jsx)(f.Z, {
                heading: h.intl.string(h.t["A//N4k"]),
                children: (0, l.jsx)(u.Z, {
                    userId: n.id,
                    guildId: v,
                    tooltipDelay: x.vB,
                }),
            }),
            (0, l.jsx)(p.Z, { userId: n.id }),
        ],
    });
}
