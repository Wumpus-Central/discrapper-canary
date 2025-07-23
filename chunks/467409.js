n.d(t, { i: () => l });
var r = n(704215),
    i = n(314897),
    a = n(68985),
    o = n(211644),
    s = n(57207);
let l = (e) => {
    let t = a.Z.hasUserHitDCCap(),
        n = (0, o.cv)(),
        l = i.default.getId(),
        c = !(0, s.G5)(l, e),
        u = (0, o.og)(),
        d = null != u ? r.z[u] : 'None',
        _ = (0, o.Do)();
    return {
        dailyCapReached: t,
        inCooldown: n,
        inAccountTenureRestriction: c,
        lastContentShown: d,
        currentFatigableWinner: null != _ ? r.z[_] : 'None',
        lastDismissibleContentWinner: d
    };
};
