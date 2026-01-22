n.d(t, {
    u: () => o,
});
var r = n(945810),
    i = n(474090),
    a = n(788868);
let s = (0, r.mj)({
    name: "2025-10-nitro-badge-churn-reminder",
    kind: "user",
    defaultConfig: {
        enabled: !1,
    },
    variations: {
        1: {
            enabled: !0,
        },
    },
});

function o(e, t) {
    let { enabled: n } = s.useConfig({
        location: t,
    });
    return null != e && !!(0, i.YE)(e, a.PremiumTypes.TIER_2) && n;
}
