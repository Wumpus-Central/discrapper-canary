var i = n(830845),
    r = n(463347),
    a = n(334465),
    s = n(652215),
    l = n(746080),
    o = n(792996),
    d = n(191850);
let c = s.BVt.CHANNEL(r.pv.guildId(), l.VV.CONJURE, ":projectId?"),
    u = s.BVt.CHANNEL(r.pv.guildId(), r.pv.channelId(), ":messageId?");
function _(e) {
    let { pathname: t, search: n = "", hash: i = "" } = e;
    return t === s.BVt.FRIENDS
        ? { routePath: t, routeLabel: o.intl.string(o.t.TdEu5X) }
        : t.startsWith(s.BVt.COLLECTIBLES_SHOP)
          ? { routePath: s.BVt.COLLECTIBLES_SHOP, routeLabel: o.intl.string(o.t.pWG4ze) }
          : t.startsWith(s.BVt.QUEST_HOME)
            ? { routePath: s.BVt.QUEST_HOME, routeLabel: o.intl.string(o.t.JALI2K) }
            : t.startsWith(s.BVt.APPLICATION_STORE)
              ? { routePath: s.BVt.APPLICATION_STORE, routeLabel: o.intl.string(o.t.Ipxkog) }
              : null != (0, a.B)(t, { path: c, exact: !0 })
                ? { routePath: `${t}${n}${i}`, routeLabel: o.intl.string(d.default.uk6jhJ) }
                : null;
}
n.d(
    t,
    {},
    {
        C2: function () {
            return { kind: "route", routePath: s.BVt.FRIENDS, routeLabel: o.intl.string(o.t.TdEu5X) };
        },
        dR: function (e) {
            let { pathname: t, search: n, hash: r } = (0, i.Rr)(e),
                o = _({ pathname: t, search: n, hash: r });
            if (null != o) return { kind: "route", ...o };
            let d = (0, a.B)(t, { path: u, exact: !0 });
            if (null == d || (0, l.jq)(d.params.channelId)) return null;
            let { guildId: c, channelId: E } = d.params;
            return { kind: "channel", channelId: E, guildId: c === s.ME ? null : c };
        },
        nd: function (e) {
            let t = e.split(/[?#]/)[0];
            switch (t) {
                case s.BVt.FRIENDS:
                    return "friends";
                case s.BVt.COLLECTIBLES_SHOP:
                    return "shop";
                case s.BVt.QUEST_HOME:
                    return "quests";
                case s.BVt.APPLICATION_STORE:
                    return "nitro";
                default:
                    return null != (0, a.B)(t, { path: c, exact: !0 }) ? "conjure" : "other";
            }
        },
        rv: _,
    },
);
