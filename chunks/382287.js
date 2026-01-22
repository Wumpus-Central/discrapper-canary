n.d(t, {
    LJ: () => u,
    WQ: () => l,
    fJ: () => c,
}),
    n(321073);
var r = n(565150),
    i = n(453771),
    a = n(927578),
    s = n(788868),
    o = n(985018);

function l(e, t) {
    let n = i.Hb(i.o2(t));
    return a.Ay.isPremium(e, s.PremiumTypes.TIER_2)
        ? o.intl.formatToPlainString(o.t.fxEKdS, {
              maxSize: n,
          })
        : a.Ay.isPremium(e, s.PremiumTypes.TIER_1)
          ? o.intl.formatToPlainString(o.t["Nr+LsZ"], {
                maxSize: n,
            })
          : o.intl.formatToPlainString(o.t.fxEKdS, {
                maxSize: n,
            });
}

function c(e, t) {
    return i.SH(e, t) || i.Aw(e);
}

function u(e) {
    return e.reduce((e, t) => (t.item.platform === r.xz.WEB && e.push(t.item.file), e), []);
}
