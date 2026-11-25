var l = n(855986),
    i = n(287809),
    a = n(20805),
    r = n(327098);
n.d(
    t,
    {},
    {
        u: function (e) {
            let t = (0, l.bG)([i.default], () => i.default.getUser(e.author_id)),
                { activity: n, embeddedActivity: s } = (0, r.A)(e);
            if (null == n)
                return {
                    isRich: !1,
                    appName: (0, a.zD)(e) ? e.extra.game_name : void 0,
                    user: t,
                    activity: void 0,
                    embeddedActivity: void 0,
                    state: void 0,
                    details: void 0,
                    party: void 0,
                };
            let o = n.assets?.large_image != null || n.assets?.small_image != null,
                u = n.assets?.large_text != null || n.assets?.small_text != null,
                c = n.name ?? ("game_name" in e.extra ? e.extra.game_name : void 0),
                d = n.details,
                m = n.state,
                A = n.party;
            return {
                isRich: o || u || null != d || null != m || null != A,
                user: t,
                activity: n,
                state: m,
                details: d,
                party: A,
                appName: c,
                embeddedActivity: s,
            };
        },
    },
);
