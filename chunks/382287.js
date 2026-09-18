(i.d(t, { LJ: () => m, WQ: () => p, fJ: () => d }), i(321073));
var r = i(565150),
    n = i(409481),
    o = i(453771),
    l = i(158045),
    a = i(202541),
    s = i(375708);
function p(e, t, i) {
    let r = o.Hb(i ?? o.o2(t));
    return l.Ay.isPremium(e, a.PremiumTypes.TIER_2)
        ? s.intl.formatToPlainString(s.t.fxEKdS, { maxSize: r })
        : l.Ay.isPremium(e, a.PremiumTypes.TIER_1)
          ? s.intl.formatToPlainString(s.t["Nr+LsZ"], { maxSize: r })
          : s.intl.formatToPlainString(s.t.fxEKdS, { maxSize: r });
}
function d(e, t) {
    let i = (0, n.C)(o.o2(t));
    return Array.from(e).some((e) => e.size > i) || o.Aw(e);
}
function m(e) {
    return e.reduce((e, t) => (t.item.platform === r.xz.WEB && e.push(t.item.file), e), []);
}
