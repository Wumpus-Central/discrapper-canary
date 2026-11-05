var l = n(855986),
    r = n(287809),
    o = n(20805),
    i = n(327098);
n.d(
    e,
    {},
    {
        u: function (t) {
            let e = (0, l.bG)([r.default], () => r.default.getUser(t.author_id)),
                { activity: n, embeddedActivity: a } = (0, i.A)(t);
            if (null == n)
                return {
                    isRich: !1,
                    appName: (0, o.zD)(t) ? t.extra.game_name : void 0,
                    user: e,
                    activity: void 0,
                    embeddedActivity: void 0,
                    state: void 0,
                    details: void 0,
                    party: void 0,
                };
            let s = n.assets?.large_image != null || n.assets?.small_image != null,
                c = n.assets?.large_text != null || n.assets?.small_text != null,
                u = n.name ?? ("game_name" in t.extra ? t.extra.game_name : void 0),
                d = n.details,
                x = n.state,
                C = n.party;
            return {
                isRich: s || c || null != d || null != x || null != C,
                user: e,
                activity: n,
                state: x,
                details: d,
                party: C,
                appName: u,
                embeddedActivity: a,
            };
        },
    },
);
