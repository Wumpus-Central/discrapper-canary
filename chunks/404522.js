n.d(t, { b: () => o });
var i = n(582128),
    r = n(17928),
    a = n(476370),
    s = n(795816),
    l = n(933958);
function o(e) {
    let { surface: t, skipFetchingShelf: n = !0 } = e,
        o = (0, r.bG)([l.Ay], () => l.Ay.getState());
    return (
        (0, i.useEffect)(() => {
            var e;
            (null == (e = o.lastCheckedForBadgeableActivities) || new Date(e).getTime() < Date.now() - 432e5) &&
                !n &&
                (0, s.LV)({ guildId: null });
        }, [o.lastCheckedForBadgeableActivities, n]),
        (0, i.useMemo)(() => (0, a.C)({ storeState: o, surface: t }), [o, t])
    );
}
