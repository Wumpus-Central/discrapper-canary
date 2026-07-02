"use strict";
n.d(t, { LJ: () => d, WQ: () => u, fJ: () => c }), n(321073);
var i = n(565150),
    r = n(550642),
    s = n(453771),
    a = n(428262),
    o = n(202541),
    l = n(375708);
function u(e, t, n) {
    let i = s.Hb(n ?? s.o2(t));
    return a.Ay.isPremium(e, o.PremiumTypes.TIER_2)
        ? l.intl.formatToPlainString(l.t.fxEKdS, { maxSize: i })
        : a.Ay.isPremium(e, o.PremiumTypes.TIER_1)
          ? l.intl.formatToPlainString(l.t["Nr+LsZ"], { maxSize: i })
          : l.intl.formatToPlainString(l.t.fxEKdS, { maxSize: i });
}
function c(e, t) {
    let n = (0, r.R8)({ location: "web.filesExceedUploadLimits" });
    if (n.enabled) {
        let i = s.o2(t),
            a = (0, r.Jy)(n, i);
        return Array.from(e).some((e) => e.size > a) || s.Aw(e);
    }
    return s.SH(e, t) || s.Aw(e);
}
function d(e) {
    return e.reduce((e, t) => (t.item.platform === i.xz.WEB && e.push(t.item.file), e), []);
}
