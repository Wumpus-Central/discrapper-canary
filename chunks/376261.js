var t = r(855986),
    s = r(498642);
r(424994);
var a = r(652215);
r.d(
    u,
    {},
    {
        T: function (e) {
            return (0, t.bG)([s.A], () => {
                if (null == e) return;
                let u = s.A.getMemberCount(e.id),
                    r = e.features.has(a.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER),
                    t = e.features.has(a.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER);
                return r || t ? r : null != u && u < 1e4;
            });
        },
    },
);
