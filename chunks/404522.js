"use strict";
n.d(t, { b: () => o });
var i = n(64700),
    s = n(311907),
    l = n(476370),
    r = n(795816),
    a = n(933958);
let o = (e) => {
    let { surface: t, skipFetchingShelf: n = !0 } = e,
        o = (0, s.bG)([a.Ay], () => a.Ay.getState());
    return (
        (0, i.useEffect)(() => {
            var e;
            (null == (e = o.lastCheckedForBadgeableActivities) || new Date(e).getTime() < Date.now() - 432e5) &&
                !n &&
                (0, r.LV)({ guildId: null });
        }, [o.lastCheckedForBadgeableActivities, n]),
        (0, i.useMemo)(() => (0, l.C)({ storeState: o, surface: t }), [o, t])
    );
};
