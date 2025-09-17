n.d(t, { h: () => E }), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(78839),
    l = n(626135),
    c = n(960048),
    u = n(538981),
    d = n(29920),
    f = n(219333),
    _ = n(304426),
    p = n(981631);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g() {
    (0, o.ZDy)(async () => {
        let { default: e } = await n.e("75056").then(n.bind(n, 16919));
        return (t) => (0, r.jsx)(e, m({}, t));
    });
}
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, a.e7)([s.Z], () => s.Z.getPremiumSubscription()),
        n = (0, u.r)(),
        [r, o] = (0, i.useState)(!1);
    return {
        redeemReward: async () => {
            o(!0);
            try {
                var r;
                let i = await (0, d.Ul)({ subscriptionId: null != (r = null == t ? void 0 : t.id) ? r : "" });
                l.default.track(p.rMx.PROMOTION_REWARD_REDEMPTION_ATTEMPTED, {
                    redemption_response_eligibility: null == i ? void 0 : i.eligible,
                    redemption_response_reason: null == i ? void 0 : i.reason,
                }),
                    (null == i ? void 0 : i.entitlement)
                        ? ((0, f.j)({ campaignID: _.C }), null == n || n(i.entitlement))
                        : ((null == i ? void 0 : i.reason) === "reward_already_granted"
                              ? ((0, f.j)({ campaignID: _.C }),
                                c.Z.captureMessage("September 2025 Marketing Moment reward already granted"))
                              : c.Z.captureException(Error("Failed to redeem September 2025 Marketing Moment reward")),
                          e || g());
            } catch (e) {
                c.Z.captureException(e);
            } finally {
                o(!1);
            }
        },
        isLoading: r,
    };
}
