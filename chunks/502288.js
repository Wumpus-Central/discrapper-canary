n.d(t, {
    kb: () => l,
    o8: () => u
}),
    n(361932),
    n(187205);
var r = n(887003),
    i = n(55935),
    a = n(70956),
    o = n(74538),
    s = n(388032);
let l = (e) => {
        let t = (0, o.xG)(e.map((e) => e.skuId));
        return t % 24 == 0 ? s.intl.formatToPlainString(s.t['Cz1G9/'], { days: t / 24 }) : s.intl.formatToPlainString(s.t.J9Lu4u, { hours: t });
    },
    c = (e) => e.rewardsConfig.rewards.filter((e) => e.type === r.w.FRACTIONAL_PREMIUM),
    u = (e) => {
        let t = c(e).flatMap((e) => Array(e.quantity).fill(e.skuId)),
            n = (0, o.xG)(t),
            r = {
                days: s.t.fYmir6,
                hours: s.t['C3RO+v'],
                minutes: s.t.r77oHR
            },
            l = (0, i.TD)(0, n * a.Z.Millis.HOUR);
        return s.intl.formatToPlainString(s.t['4SqnVF'], { time: (0, i.QX)(l, r) });
    };
