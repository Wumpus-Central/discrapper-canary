"use strict";
n.d(t, { b: () => l });
var i = n(64700),
    r = n(17928),
    s = n(476370),
    a = n(795816),
    o = n(933958);
let l = (e) => {
    let { surface: t, skipFetchingShelf: n = !0 } = e,
        l = (0, r.bG)([o.Ay], () => o.Ay.getState());
    return (
        (0, i.useEffect)(() => {
            var e;
            (null == (e = l.lastCheckedForBadgeableActivities) || new Date(e).getTime() < Date.now() - 432e5) &&
                !n &&
                (0, a.LV)({ guildId: null });
        }, [l.lastCheckedForBadgeableActivities, n]),
        (0, i.useMemo)(() => (0, s.C)({ storeState: l, surface: t }), [l, t])
    );
};
