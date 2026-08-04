"use strict";
n.d(t, { LJ: () => u, WQ: () => d, fJ: () => c }), n(321073);
var i = n(565150),
    r = n(550642),
    a = n(453771),
    s = n(428262),
    l = n(202541),
    o = n(375708);
function d(e, t, n) {
    let i = a.Hb(n ?? a.o2(t));
    return s.Ay.isPremium(e, l.PremiumTypes.TIER_2)
        ? o.intl.formatToPlainString(o.t.fxEKdS, { maxSize: i })
        : s.Ay.isPremium(e, l.PremiumTypes.TIER_1)
          ? o.intl.formatToPlainString(o.t["Nr+LsZ"], { maxSize: i })
          : o.intl.formatToPlainString(o.t.fxEKdS, { maxSize: i });
}
function c(e, t) {
    let n = (0, r.R8)({ location: "web.filesExceedUploadLimits" });
    if (n.enabled) {
        let i = a.o2(t),
            s = (0, r.Jy)(n, i);
        return Array.from(e).some((e) => e.size > s) || a.Aw(e);
    }
    return a.SH(e, t) || a.Aw(e);
}
function u(e) {
    return e.reduce((e, t) => (t.item.platform === i.xz.WEB && e.push(t.item.file), e), []);
}
