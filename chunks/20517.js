var i = n(463347),
    r = n(334465),
    a = n(652215),
    s = n(746080),
    l = n(792996),
    o = n(191850);
let d = a.BVt.CHANNEL(i.pv.guildId(), s.VV.CONJURE, ":projectId?");
n.d(
    t,
    {},
    {
        r: function (e) {
            let { pathname: t, search: n = "", hash: i = "" } = e;
            return t === a.BVt.FRIENDS
                ? { routePath: t, routeLabel: l.intl.string(l.t.TdEu5X) }
                : t.startsWith(a.BVt.COLLECTIBLES_SHOP)
                  ? { routePath: a.BVt.COLLECTIBLES_SHOP, routeLabel: l.intl.string(l.t.pWG4ze) }
                  : t.startsWith(a.BVt.QUEST_HOME)
                    ? { routePath: a.BVt.QUEST_HOME, routeLabel: l.intl.string(l.t.JALI2K) }
                    : t.startsWith(a.BVt.APPLICATION_STORE)
                      ? { routePath: a.BVt.APPLICATION_STORE, routeLabel: l.intl.string(l.t.Ipxkog) }
                      : null != (0, r.B)(t, { path: d, exact: !0 })
                        ? { routePath: `${t}${n}${i}`, routeLabel: l.intl.string(o.default.uk6jhJ) }
                        : null;
        },
    },
);
