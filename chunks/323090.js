n.d(t, { Z: () => _ });
var r = n(951288);
n(647438);
var o = n(442837),
    i = n(481060),
    l = n(666520),
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
    h = n(388032),
    x = n(54966);
function _(e) {
    let { user: t, currentUser: n, displayProfile: _, guildId: j, subsection: v, onClose: y } = e,
        { trackUserProfileAction: I } = (0, s.KZ)(),
        O = (0, o.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        Z = (0, o.e7)([a.Z, c.Z], () => a.Z.getChannel(c.Z.getChannelId()));
    return (0, r.jsxs)(i.zJl, {
        fade: !0,
        className: x.scroller,
        children: [
            (null == _ ? void 0 : _.bio) != null &&
                (null == _ ? void 0 : _.bio) !== "" &&
                (0, r.jsx)(f.Z, {
                    userBio: _.bio,
                    setLineClamp: !1,
                }),
            (null == O ? void 0 : O.popularApplicationCommandIds) != null &&
                null != Z &&
                (0, r.jsx)(u.Z, {
                    applicationId: O.id,
                    commandIds: O.popularApplicationCommandIds,
                    channel: Z,
                    guildId: j,
                    onClick: y,
                }),
            (null == _ ? void 0 : _.guildId) != null &&
                (0, r.jsx)(b.Z, {
                    user: t,
                    currentUser: n,
                    guildId: _.guildId,
                    scrollIntoView: v === g.Tb.ROLES,
                }),
            (0, r.jsx)(m.Z, {
                heading: h.intl.string(h.t["A//N4u"]),
                children: (0, r.jsx)(p.Z, {
                    userId: t.id,
                    guildId: j,
                    tooltipDelay: g.vB,
                }),
            }),
            (0, r.jsx)(m.Z, {
                heading: h.intl.string(h.t["mQKv+v"]),
                scrollIntoView: v === g.Tb.NOTE,
                children: (0, r.jsx)(l.Z, {
                    userId: t.id,
                    className: x.note,
                    autoFocus: v === g.Tb.NOTE,
                    onUpdate: () => I({ action: "SET_NOTE" }),
                }),
            }),
        ],
    });
}
