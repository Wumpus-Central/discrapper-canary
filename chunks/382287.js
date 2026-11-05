i(321073);
var r = i(409481),
    n = i(274652),
    l = i(820465),
    o = i(453771),
    a = i(722178),
    s = i(682901),
    d = i(792996);
i.d(
    t,
    {},
    {
        LJ: function (e) {
            return e.reduce((e, t) => (t.item.platform === n.x.WEB && e.push(t.item.file), e), []);
        },
        WQ: function (e, t, i) {
            let r = o.Hb(i ?? o.o2(t));
            return a.Ay.isPremium(e, s.PremiumTypes.TIER_2)
                ? d.intl.formatToPlainString(d.t.fxEKdS, { maxSize: r })
                : a.Ay.isPremium(e, s.PremiumTypes.TIER_1)
                  ? d.intl.formatToPlainString(d.t["Nr+LsZ"], { maxSize: r })
                  : d.intl.formatToPlainString(d.t.fxEKdS, { maxSize: r });
        },
        fJ: function (e) {
            let { files: t, guildId: i, canDeferSizeChecks: n = !0 } = e;
            if (n && (0, l.M)()) return !1;
            let a = (0, r.C)(o.o2(i));
            return Array.from(t).some((e) => e.size > a) || o.Aw(t);
        },
    },
);
