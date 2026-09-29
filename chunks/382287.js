(i.d(t, { LJ: () => m, WQ: () => d, fJ: () => p }), i(321073));
var r = i(565150),
    n = i(409481),
    l = i(453771),
    o = i(158045),
    a = i(202541),
    s = i(375708);
function d(e, t, i) {
    let r = l.Hb(i ?? l.o2(t));
    return o.Ay.isPremium(e, a.PremiumTypes.TIER_2)
        ? s.intl.formatToPlainString(s.t.fxEKdS, { maxSize: r })
        : o.Ay.isPremium(e, a.PremiumTypes.TIER_1)
          ? s.intl.formatToPlainString(s.t["Nr+LsZ"], { maxSize: r })
          : s.intl.formatToPlainString(s.t.fxEKdS, { maxSize: r });
}
function p(e) {
    let { files: t, guildId: i } = e,
        r = (0, n.C)(l.o2(i));
    return Array.from(t).some((e) => e.size > r) || l.Aw(t);
}
function m(e) {
    return e.reduce((e, t) => (t.item.platform === r.xz.WEB && e.push(t.item.file), e), []);
}
