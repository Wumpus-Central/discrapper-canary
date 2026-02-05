n.d(t, { b: () => o });
var i = n(64700),
    l = n(311907),
    s = n(476370),
    a = n(795816),
    r = n(933958);
let o = (e) => {
    let { surface: t, skipFetchingShelf: n = !0 } = e,
        o = (0, l.bG)([r.Ay], () => r.Ay.getState());
    return (
        (0, i.useEffect)(() => {
            var e;
            (null == (e = o.lastCheckedForBadgeableActivities) || new Date(e).getTime() < Date.now() - 432e5) &&
                !n &&
                (0, a.LV)({ guildId: null });
        }, [o.lastCheckedForBadgeableActivities, n]),
        (0, i.useMemo)(() => (0, s.C)({ storeState: o, surface: t }), [o, t])
    );
};
