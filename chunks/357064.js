n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(442433),
    a = n(513461),
    r = n(212455),
    o = n(967198),
    d = n(531685),
    c = n(330465),
    u = n(65611),
    h = n(652215);
function A(e, t) {
    (0, s.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => (0, i.jsx)(e, { ...n, guild: t });
    });
}
function _(e) {
    let { guildNode: t } = e,
        n = t.id,
        s = (0, l.bG)([r.A], () => r.A.getRequest(n)),
        _ = (0, l.bG)([r.A], () => r.A.getJoinRequestGuild(n), [n]),
        m = (0, l.bG)([d.A], () => d.A.isFocused()),
        g = (0, l.bG)([o.A], () => o.A.getGuildId());
    return null == _
        ? null
        : (0, i.jsx)(c.A, {
              guildNode: t,
              guild: _,
              animatable: m,
              draggable: !1,
              selected: n === g,
              preloadOnClick: !1,
              contextMenu: A,
              lowerBadge:
                  s?.applicationStatus === a.B5.REJECTED
                      ? (0, u.eW)({ guildJoinRequestStatus: s.applicationStatus })
                      : void 0,
              route: h.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
