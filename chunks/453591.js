n.d(t, { h: () => f }), n(388685), n(415506);
var r = n(647438),
    i = n(442837),
    a = n(78839),
    o = n(960048),
    s = n(538981),
    l = n(29920),
    c = n(219333),
    u = n(951570),
    d = n(304426);
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, i.e7)([a.Z], () => a.Z.getPremiumSubscription()),
        n = (0, s.r)(),
        [f, _] = (0, r.useState)(!1);
    return {
        redeemReward: async () => {
            _(!0);
            try {
                var r;
                let i = await (0, l.Ul)({ subscriptionId: null != (r = null == t ? void 0 : t.id) ? r : "" });
                (null == i ? void 0 : i.entitlement)
                    ? ((0, c.j)({ campaignID: d.C }), null == n || n(i.entitlement))
                    : (e || (0, u.lK)(),
                      o.Z.captureException(Error("Failed to redeem September 2025 Marketing Moment reward")));
            } catch (e) {
                o.Z.captureException(e);
            } finally {
                _(!1);
            }
        },
        isLoading: f,
    };
}
