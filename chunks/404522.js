n.d(t, { b: () => o });
var i = n(64700),
    l = n(17928),
    a = n(476370),
    r = n(795816),
    s = n(933958);
let o = (e) => {
    let { surface: t, skipFetchingShelf: n = !0 } = e,
        o = (0, l.bG)([s.Ay], () => s.Ay.getState());
    return (
        (0, i.useEffect)(() => {
            var e;
            (null == (e = o.lastCheckedForBadgeableActivities) || new Date(e).getTime() < Date.now() - 432e5) &&
                !n &&
                (0, r.LV)({ guildId: null });
        }, [o.lastCheckedForBadgeableActivities, n]),
        (0, i.useMemo)(() => (0, a.C)({ storeState: o, surface: t }), [o, t])
    );
};
