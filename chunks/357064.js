"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(442433),
    r = n(513461),
    a = n(212455),
    o = n(967198),
    c = n(531685),
    d = n(330465),
    u = n(65611),
    h = n(652215);
function A(e, t) {
    (0, l.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => (0, i.jsx)(e, { ...n, guild: t });
    });
}
function p(e) {
    let { guildNode: t } = e,
        n = t.id,
        l = (0, s.bG)([a.A], () => a.A.getRequest(n)),
        p = (0, s.bG)([a.A], () => a.A.getJoinRequestGuild(n), [n]),
        g = (0, s.bG)([c.A], () => c.A.isFocused()),
        m = (0, s.bG)([o.A], () => o.A.getGuildId());
    return null == p
        ? null
        : (0, i.jsx)(d.A, {
              guildNode: t,
              guild: p,
              animatable: g,
              draggable: !1,
              selected: n === m,
              preloadOnClick: !1,
              contextMenu: A,
              lowerBadge:
                  l?.applicationStatus === r.B5.REJECTED
                      ? (0, u.eW)({ guildJoinRequestStatus: l.applicationStatus })
                      : void 0,
              route: h.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
