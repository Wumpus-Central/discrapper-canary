n.d(t, { FL: () => d, $X: () => c, Lz: () => o });
var i = n(855986),
    r = n(287809),
    a = n(945810),
    s = n(773527);
let l = (0, a.mj)({
    kind: "user",
    name: "2026-09-hexagon-campaign-client",
    defaultConfig: { enabled: !1, questHomeRedirect: !1 },
    variations: {
        0: { enabled: !1, questHomeRedirect: !1 },
        1: { enabled: !0, questHomeRedirect: !0 },
        2: { enabled: !0, questHomeRedirect: !1 },
    },
});
function o(e, t) {
    let n = l.useConfig({ location: t }).enabled,
        a = (0, i.bG)([r.default], () => r.default.getCurrentUser()?.premiumType);
    return (0, s.U5)({ perk: e, premiumType: a, isCampaignEnabled: n });
}
function d(e, t) {
    return (0, s.U5)({
        perk: e,
        premiumType: r.default.getCurrentUser()?.premiumType,
        isCampaignEnabled: l.getConfig({ location: t }).enabled,
    });
}
function c(e, t) {
    return (0, s.YY)(e, r.default.getCurrentUser()?.premiumType, t);
}
