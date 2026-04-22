"use strict";
r.d(t, { LJ: () => d, WQ: () => o, fJ: () => c }), r(321073);
var i = r(565150),
    a = r(453771),
    n = r(927578),
    l = r(788868),
    s = r(985018);
function o(e, t) {
    let r = a.Hb(a.o2(t));
    return n.Ay.isPremium(e, l.PremiumTypes.TIER_2)
        ? s.intl.formatToPlainString(s.t.fxEKdS, { maxSize: r })
        : n.Ay.isPremium(e, l.PremiumTypes.TIER_1)
          ? s.intl.formatToPlainString(s.t["Nr+LsZ"], { maxSize: r })
          : s.intl.formatToPlainString(s.t.fxEKdS, { maxSize: r });
}
function c(e, t) {
    return a.SH(e, t) || a.Aw(e);
}
function d(e) {
    return e.reduce((e, t) => (t.item.platform === i.xz.WEB && e.push(t.item.file), e), []);
}
