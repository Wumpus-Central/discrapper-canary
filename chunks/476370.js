"use strict";
function i(e) {
    let { storeState: t, surface: n } = e,
        i = Date.now(),
        r = t.dateRangesForSurfaces?.[n];
    return null != r && new Date(r.fromDate).getTime() < i && new Date(r.untilDate).getTime() > i
        ? Math.floor(new Date(r.fromDate).getTime() / 1e3)
        : 0;
}
n.d(t, { C: () => i });
