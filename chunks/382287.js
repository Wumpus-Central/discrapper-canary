i.d(t, { LJ: () => m, WQ: () => d, fJ: () => p }), i(321073);
var r = i(565150),
    n = i(550642),
    l = i(453771),
    a = i(428262),
    o = i(202541),
    s = i(375708);
function d(e, t, i) {
    let r = l.Hb(i ?? l.o2(t));
    return a.Ay.isPremium(e, o.PremiumTypes.TIER_2)
        ? s.intl.formatToPlainString(s.t.fxEKdS, { maxSize: r })
        : a.Ay.isPremium(e, o.PremiumTypes.TIER_1)
          ? s.intl.formatToPlainString(s.t["Nr+LsZ"], { maxSize: r })
          : s.intl.formatToPlainString(s.t.fxEKdS, { maxSize: r });
}
function p(e, t) {
    let i = (0, n.R8)({ location: "web.filesExceedUploadLimits" });
    if (i.enabled) {
        let r = l.o2(t),
            a = (0, n.Jy)(i, r);
        return Array.from(e).some((e) => e.size > a) || l.Aw(e);
    }
    return l.SH(e, t) || l.Aw(e);
}
function m(e) {
    return e.reduce((e, t) => (t.item.platform === r.xz.WEB && e.push(t.item.file), e), []);
}
