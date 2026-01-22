n.d(t, {
    b: () => o,
});
var r = n(64700),
    l = n(311907),
    i = n(476370),
    a = n(795816),
    s = n(933958);
let o = (e) => {
    let { surface: t, skipFetchingShelf: n = !0 } = e,
        o = (0, l.bG)([s.Ay], () => s.Ay.getState());
    return (
        (0, r.useEffect)(() => {
            var e;
            (null == (e = o.lastCheckedForBadgeableActivities) || new Date(e).getTime() < Date.now() - 432e5) &&
                !n &&
                (0, a.LV)({
                    guildId: null,
                });
        }, [o.lastCheckedForBadgeableActivities, n]),
        (0, r.useMemo)(
            () =>
                (0, i.C)({
                    storeState: o,
                    surface: t,
                }),
            [o, t],
        )
    );
};
