n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(239091),
    a = n(246364),
    o = n(937111),
    s = n(914010),
    c = n(451478),
    u = n(325257),
    d = n(674552),
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
function f(e) {
    let { guildNode: t, height: n } = e,
        r = t.id,
        f = (0, l.e7)([o.Z], () => o.Z.getRequest(r)),
        m = (0, l.e7)([o.Z], () => o.Z.getJoinRequestGuild(r), [r]),
        g = (0, l.e7)([c.Z], () => c.Z.isFocused()),
        v = (0, l.e7)([s.Z], () => s.Z.getGuildId());
    return null == m
        ? null
        : (0, i.jsx)(u.Z, {
              guildNode: t,
              guild: m,
              animatable: g,
              draggable: !1,
              selected: r === v,
              preloadOnClick: !1,
              contextMenu: p,
              lowerBadge: (null == f ? void 0 : f.applicationStatus) === a.wB.REJECTED ? (0, d.jt)({ guildJoinRequestStatus: f.applicationStatus }) : void 0,
              route: h.Z5c.GUILD_MEMBER_VERIFICATION(r),
              height: n
          });
}
