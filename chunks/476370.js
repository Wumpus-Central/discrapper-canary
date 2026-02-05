"use strict";
n.d(t, { C: () => r });
let r = (e) => {
    let { storeState: t, surface: n } = e,
        r = Date.now(),
        i = t.dateRangesForSurfaces?.[n];
    return null != i && new Date(i.fromDate).getTime() < r && new Date(i.untilDate).getTime() > r
        ? Math.floor(new Date(i.fromDate).getTime() / 1e3)
        : 0;
};
