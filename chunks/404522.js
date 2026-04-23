s.d(t, { b: () => a });
var i = s(64700),
    n = s(311907),
    r = s(476370),
    l = s(795816),
    o = s(933958);
let a = (e) => {
    let { surface: t, skipFetchingShelf: s = !0 } = e,
        a = (0, n.bG)([o.Ay], () => o.Ay.getState());
    return (
        (0, i.useEffect)(() => {
            var e;
            (null == (e = a.lastCheckedForBadgeableActivities) || new Date(e).getTime() < Date.now() - 432e5) &&
                !s &&
                (0, l.LV)({ guildId: null });
        }, [a.lastCheckedForBadgeableActivities, s]),
        (0, i.useMemo)(() => (0, r.C)({ storeState: a, surface: t }), [a, t])
    );
};
