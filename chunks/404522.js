var i = n(582128),
    r = n(855986),
    a = n(476370),
    s = n(933958),
    l = n(445672);
n.d(
    t,
    {},
    {
        b: function (e) {
            let { surface: t, skipFetchingShelf: n = !0 } = e,
                o = (0, r.bG)([s.Ay], () => s.Ay.getState());
            return (
                (0, i.useEffect)(() => {
                    var e;
                    (null == (e = o.lastCheckedForBadgeableActivities) || new Date(e).getTime() < Date.now() - 432e5) &&
                        !n &&
                        (0, l.L)({ guildId: null });
                }, [o.lastCheckedForBadgeableActivities, n]),
                (0, i.useMemo)(() => (0, a.C)({ storeState: o, surface: t }), [o, t])
            );
        },
    },
);
