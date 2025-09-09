n.d(t, { h: () => u }), n(388685), n(415506);
var r = n(647438),
    i = n(442837),
    a = n(78839),
    o = n(960048),
    s = n(29920),
    l = n(219333),
    c = n(304426);
function u() {
    let e = (0, i.e7)([a.Z], () => a.Z.getPremiumSubscription()),
        [t, n] = (0, r.useState)(!1);
    return {
        redeemReward: async () => {
            n(!0);
            try {
                var t;
                let n = await (0, s.Ul)({ subscriptionId: null != (t = null == e ? void 0 : e.id) ? t : "" });
                (null == n ? void 0 : n.entitlement)
                    ? (0, l.j)({ campaignID: c.C })
                    : o.Z.captureException(Error("Failed to redeem September 2025 Marketing Moment reward"));
            } catch (e) {
                o.Z.captureException(e);
            } finally {
                n(!1);
            }
        },
        isLoading: t,
    };
}
