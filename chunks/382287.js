"use strict";
n.d(t, { LJ: () => d, WQ: () => o, fJ: () => c }), n(321073);
var i = n(565150),
    r = n(453771),
    a = n(927578),
    l = n(788868),
    s = n(985018);
function o(e, t) {
    let n = r.Hb(r.o2(t));
    return a.Ay.isPremium(e, l.PremiumTypes.TIER_2)
        ? s.intl.formatToPlainString(s.t.fxEKdS, { maxSize: n })
        : a.Ay.isPremium(e, l.PremiumTypes.TIER_1)
          ? s.intl.formatToPlainString(s.t["Nr+LsZ"], { maxSize: n })
          : s.intl.formatToPlainString(s.t.fxEKdS, { maxSize: n });
}
function c(e, t) {
    return r.SH(e, t) || r.Aw(e);
}
function d(e) {
    return e.reduce((e, t) => (t.item.platform === i.xz.WEB && e.push(t.item.file), e), []);
}
