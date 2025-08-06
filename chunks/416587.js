n.d(t, { O: () => r });
let r = (e) => {
    var t;
    let { storeState: n, surface: r } = e,
        i = Date.now(),
        o = null == (t = n.dateRangesForSurfaces) ? void 0 : t[r];
    return null != o && new Date(o.fromDate).getTime() < i && new Date(o.untilDate).getTime() > i ? Math.floor(new Date(o.fromDate).getTime() / 1000) : 0;
};
