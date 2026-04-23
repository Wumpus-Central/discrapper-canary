n.d(t, { LJ: () => d, WQ: () => o, fJ: () => c }), n(321073);
var a = n(565150),
    i = n(453771),
    l = n(927578),
    s = n(788868),
    r = n(985018);
function o(e, t) {
    let n = i.Hb(i.o2(t));
    return l.Ay.isPremium(e, s.PremiumTypes.TIER_2)
        ? r.intl.formatToPlainString(r.t.fxEKdS, { maxSize: n })
        : l.Ay.isPremium(e, s.PremiumTypes.TIER_1)
          ? r.intl.formatToPlainString(r.t["Nr+LsZ"], { maxSize: n })
          : r.intl.formatToPlainString(r.t.fxEKdS, { maxSize: n });
}
function c(e, t) {
    return i.SH(e, t) || i.Aw(e);
}
function d(e) {
    return e.reduce((e, t) => (t.item.platform === a.xz.WEB && e.push(t.item.file), e), []);
}
