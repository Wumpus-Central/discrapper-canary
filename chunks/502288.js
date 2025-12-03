n.d(t, { o8: () => c }), n(361932), n(187205);
var r = n(887003),
    i = n(55935),
    a = n(70956),
    o = n(74538),
    s = n(388032);
let l = (e) => e.rewardsConfig.rewards.filter((e) => e.type === r.w.FRACTIONAL_PREMIUM),
    c = (e) => {
        let t = l(e).flatMap((e) => Array(e.quantity).fill(e.skuId)),
            n = (0, o.xG)(t),
            r = {
                days: s.t.fYmirx,
                hours: s.t["C3RO+g"],
                minutes: s.t.r77oHc,
            },
            c = (0, i.TD)(0, n * a.Z.Millis.HOUR);
        return s.intl.formatToPlainString(s.t["4SqnVD"], { time: (0, i.QX)(c, r) });
    };
