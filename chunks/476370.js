n.d(t, { C: () => r });
let r = (e) => {
    var t;
    let { storeState: n, surface: r } = e,
        i = Date.now(),
        a = null == (t = n.dateRangesForSurfaces) ? void 0 : t[r];
    return null != a && new Date(a.fromDate).getTime() < i && new Date(a.untilDate).getTime() > i
        ? Math.floor(new Date(a.fromDate).getTime() / 1000)
        : 0;
};
