n.d(t, { i: () => l });
var r = n(704215),
    i = n(314897),
    o = n(68985),
    a = n(211644),
    s = n(57207);
let l = (e) => {
    let t = o.Z.hasUserHitDCCap(),
        n = (0, a.cv)(),
        l = i.default.getId(),
        c = !(0, s.G5)(l, e),
        u = (0, a.og)(),
        d = null != u ? r.z[u] : "None",
        f = (0, a.Do)();
    return {
        dailyCapReached: t,
        inCooldown: n,
        inAccountTenureRestriction: c,
        lastContentShown: d,
        currentFatigableWinner: null != f ? r.z[f] : "None",
        lastDismissibleContentWinner: d,
    };
};
