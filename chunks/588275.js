n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(239091),
    o = n(246364),
    a = n(937111),
    s = n(914010),
    c = n(451478),
    d = n(325257),
    u = n(674552),
    h = n(981631);
function p(e, t) {
    (0, r.jW)(e, async () => {
        let { default: e } = await n.e('6368').then(n.bind(n, 987999));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                guild: t
            });
    });
}
function m(e) {
    let { guildNode: t, height: n } = e,
        r = t.id,
        m = (0, l.e7)([a.Z], () => a.Z.getRequest(r)),
        g = (0, l.e7)([a.Z], () => a.Z.getJoinRequestGuild(r), [r]),
        f = (0, l.e7)([c.Z], () => c.Z.isFocused()),
        _ = (0, l.e7)([s.Z], () => s.Z.getGuildId());
    return null == g
        ? null
        : (0, i.jsx)(d.Z, {
              guildNode: t,
              guild: g,
              animatable: f,
              draggable: !1,
              selected: r === _,
              preloadOnClick: !1,
              contextMenu: p,
              lowerBadge: (null == m ? void 0 : m.applicationStatus) === o.wB.REJECTED ? (0, u.jt)({ guildJoinRequestStatus: m.applicationStatus }) : void 0,
              route: h.Z5c.GUILD_MEMBER_VERIFICATION(r),
              height: n
          });
}
