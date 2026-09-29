(i.d(t, { LJ: () => u, WQ: () => p, fJ: () => m }), i(321073));
var r = i(565150),
    n = i(409481),
    l = i(820465),
    o = i(453771),
    a = i(158045),
    s = i(202541),
    d = i(375708);
function p(e, t, i) {
    let r = o.Hb(i ?? o.o2(t));
    return a.Ay.isPremium(e, s.PremiumTypes.TIER_2)
        ? d.intl.formatToPlainString(d.t.fxEKdS, { maxSize: r })
        : a.Ay.isPremium(e, s.PremiumTypes.TIER_1)
          ? d.intl.formatToPlainString(d.t["Nr+LsZ"], { maxSize: r })
          : d.intl.formatToPlainString(d.t.fxEKdS, { maxSize: r });
}
function m(e) {
    let { files: t, guildId: i, canDeferSizeChecks: r = !0 } = e;
    if (r && (0, l.M)()) return !1;
    let a = (0, n.C)(o.o2(i));
    return Array.from(t).some((e) => e.size > a) || o.Aw(t);
}
function u(e) {
    return e.reduce((e, t) => (t.item.platform === r.xz.WEB && e.push(t.item.file), e), []);
}
