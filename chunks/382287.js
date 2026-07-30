i.d(t, { LJ: () => m, WQ: () => s, fJ: () => p }), i(321073);
var r = i(565150),
    n = i(550642),
    l = i(453771),
    o = i(428262),
    a = i(202541),
    d = i(375708);
function s(e, t, i) {
    let r = l.Hb(i ?? l.o2(t));
    return o.Ay.isPremium(e, a.PremiumTypes.TIER_2)
        ? d.intl.formatToPlainString(d.t.fxEKdS, { maxSize: r })
        : o.Ay.isPremium(e, a.PremiumTypes.TIER_1)
          ? d.intl.formatToPlainString(d.t["Nr+LsZ"], { maxSize: r })
          : d.intl.formatToPlainString(d.t.fxEKdS, { maxSize: r });
}
function p(e, t) {
    let i = (0, n.R8)({ location: "web.filesExceedUploadLimits" });
    if (i.enabled) {
        let r = l.o2(t),
            o = (0, n.Jy)(i, r);
        return Array.from(e).some((e) => e.size > o) || l.Aw(e);
    }
    return l.SH(e, t) || l.Aw(e);
}
function m(e) {
    return e.reduce((e, t) => (t.item.platform === r.xz.WEB && e.push(t.item.file), e), []);
}
