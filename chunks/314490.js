n.d(t, { p: () => s });
var i = n(647438),
    r = n(442837),
    l = n(416587),
    a = n(566620),
    o = n(317381);
let s = (e) => {
    let { surface: t, skipFetchingShelf: n = !0 } = e,
        s = (0, r.e7)([o.ZP], () => o.ZP.getState());
    return (
        (0, i.useEffect)(() => {
            var e;
            (null == (e = s.lastCheckedForBadgeableActivities) || new Date(e).getTime() < Date.now() - 43200000) &&
                !n &&
                (0, a.w1)({ guildId: null });
        }, [s.lastCheckedForBadgeableActivities, n]),
        (0, i.useMemo)(
            () =>
                (0, l.O)({
                    storeState: s,
                    surface: t,
                }),
            [s, t],
        )
    );
};
