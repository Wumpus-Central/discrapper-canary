n.d(t, { xR: () => a, xb: () => r });
var i,
    s = n(945810),
    r = (((i = {}).ORBS = "orbs"), (i.DISCOUNT = "discount"), i);
let l = (0, s.mj)({
    name: "2026-07-premium-referral-incentives",
    kind: "user",
    defaultConfig: { referralRewardType: null, useAltReferralCardArt: !1 },
    variations: {
        0: { referralRewardType: null, useAltReferralCardArt: !1 },
        1: { referralRewardType: "orbs", useAltReferralCardArt: !1 },
        2: { referralRewardType: "discount", useAltReferralCardArt: !1 },
        3: { referralRewardType: "orbs", useAltReferralCardArt: !0 },
        4: { referralRewardType: "discount", useAltReferralCardArt: !0 },
    },
});
function a(e) {
    let t = l.useConfig({ location: e });
    return {
        referralRewardType: t.referralRewardType,
        useAltReferralCardArt: t.useAltReferralCardArt,
        isInReferralIncentivesTreatment: null != t.referralRewardType,
    };
}
