n.d(t, { b: () => a });
var s = n(64700),
    i = n(17928),
    l = n(476370),
    r = n(795816),
    o = n(933958);
let a = (e) => {
    let { surface: t, skipFetchingShelf: n = !0 } = e,
        a = (0, i.bG)([o.Ay], () => o.Ay.getState());
    return (
        (0, s.useEffect)(() => {
            var e;
            (null == (e = a.lastCheckedForBadgeableActivities) || new Date(e).getTime() < Date.now() - 432e5) &&
                !n &&
                (0, r.LV)({ guildId: null });
        }, [a.lastCheckedForBadgeableActivities, n]),
        (0, s.useMemo)(() => (0, l.C)({ storeState: a, surface: t }), [a, t])
    );
};
