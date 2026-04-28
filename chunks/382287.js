"use strict";
n.d(t, { LJ: () => u, WQ: () => _, fJ: () => d }), n(321073);
var i = n(565150),
    r = n(550642),
    s = n(453771),
    a = n(927578),
    o = n(788868),
    l = n(985018);
function _(e, t) {
    let n = s.Hb(s.o2(t));
    return a.Ay.isPremium(e, o.PremiumTypes.TIER_2)
        ? l.intl.formatToPlainString(l.t.fxEKdS, { maxSize: n })
        : a.Ay.isPremium(e, o.PremiumTypes.TIER_1)
          ? l.intl.formatToPlainString(l.t["Nr+LsZ"], { maxSize: n })
          : l.intl.formatToPlainString(l.t.fxEKdS, { maxSize: n });
}
function d(e, t) {
    let n = (0, r.R8)({ location: "web.filesExceedUploadLimits" });
    if (n.enabled) {
        let i = s.o2(t),
            a = (0, r.Jy)(n, i);
        return Array.from(e).some((e) => e.size > a) || s.Aw(e);
    }
    return s.SH(e, t) || s.Aw(e);
}
function u(e) {
    return e.reduce((e, t) => (t.item.platform === i.xz.WEB && e.push(t.item.file), e), []);
}
