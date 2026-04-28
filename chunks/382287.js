n.d(t, { LJ: () => d, WQ: () => c, fJ: () => u }), n(321073);
var a = n(565150),
    i = n(550642),
    l = n(453771),
    r = n(927578),
    s = n(788868),
    o = n(985018);
function c(e, t) {
    let n = l.Hb(l.o2(t));
    return r.Ay.isPremium(e, s.PremiumTypes.TIER_2)
        ? o.intl.formatToPlainString(o.t.fxEKdS, { maxSize: n })
        : r.Ay.isPremium(e, s.PremiumTypes.TIER_1)
          ? o.intl.formatToPlainString(o.t["Nr+LsZ"], { maxSize: n })
          : o.intl.formatToPlainString(o.t.fxEKdS, { maxSize: n });
}
function u(e, t) {
    let n = (0, i.R8)({ location: "web.filesExceedUploadLimits" });
    if (n.enabled) {
        let a = l.o2(t),
            r = (0, i.Jy)(n, a);
        return Array.from(e).some((e) => e.size > r) || l.Aw(e);
    }
    return l.SH(e, t) || l.Aw(e);
}
function d(e) {
    return e.reduce((e, t) => (t.item.platform === a.xz.WEB && e.push(t.item.file), e), []);
}
