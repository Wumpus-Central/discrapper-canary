n.d(t, { LJ: () => u, WQ: () => o, fJ: () => d }), n(321073);
var i = n(565150),
    a = n(453771),
    r = n(927578),
    l = n(788868),
    s = n(985018);
function o(e, t) {
    let n = a.Hb(a.o2(t));
    return r.Ay.isPremium(e, l.PremiumTypes.TIER_2)
        ? s.intl.formatToPlainString(s.t.fxEKdS, { maxSize: n })
        : r.Ay.isPremium(e, l.PremiumTypes.TIER_1)
          ? s.intl.formatToPlainString(s.t["Nr+LsZ"], { maxSize: n })
          : s.intl.formatToPlainString(s.t.fxEKdS, { maxSize: n });
}
function d(e, t) {
    return a.SH(e, t) || a.Aw(e);
}
function u(e) {
    return e.reduce((e, t) => (t.item.platform === i.xz.WEB && e.push(t.item.file), e), []);
}
