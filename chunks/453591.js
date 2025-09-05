n.d(t, { h: () => c }), n(415506);
var r = n(442837),
    i = n(78839),
    a = n(960048),
    o = n(29920),
    s = n(219333),
    l = n(304426);
function c() {
    let e = (0, r.e7)([i.Z], () => i.Z.getPremiumSubscription());
    return {
        redeemReward: async () => {
            if (!1 === (0, s.W)({ campaignID: l.C })) {
                var t;
                let n = await (0, o.Ul)({ subscriptionId: null != (t = null == e ? void 0 : e.id) ? t : "" });
                (null == n ? void 0 : n.entitlement)
                    ? (0, s.j)({ campaignID: l.C })
                    : a.Z.captureException(Error("Failed to redeem September 2025 Marketing Moment reward"));
            }
        },
    };
}
