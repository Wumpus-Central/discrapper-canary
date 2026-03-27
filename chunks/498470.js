n.d(t, { h: () => o });
var i = n(232582),
    s = n(532794),
    l = n(976860),
    a = n(788868),
    r = n(652215);
function o(e) {
    let { buttonAction: t, analyticsLocations: n = [], analyticsLocation: o, onClose: d } = e;
    switch (t) {
        case i.dz.OPEN_MARKETING_PAGE:
            return () => {
                (0, l.pX)(r.BVt.APPLICATION_STORE), d?.();
            };
        case i.dz.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
                (0, s.A)({
                    subscriptionTier: a.pe.TIER_1,
                    analyticsLocations: n,
                    analyticsObject: { ...o, object: r.ZSU.BUTTON_CTA, objectType: r.AnalyticsObjectTypes.TIER_1 },
                    onClose: (e) => {
                        e && d?.();
                    },
                });
        case i.dz.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, s.A)({ analyticsLocations: n });
        case i.dz.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
            return () =>
                (0, s.A)({
                    subscriptionTier: a.pe.TIER_2,
                    initialPlanId: a.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: n,
                    analyticsObject: { ...o, object: r.ZSU.BUTTON_CTA, objectType: r.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && d?.();
                    },
                });
        case i.dz.OPEN_TIER_2_PAYMENT_MODAL:
        case i.dz.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () =>
                (0, s.A)({
                    subscriptionTier: a.pe.TIER_2,
                    analyticsLocations: n,
                    analyticsObject: { ...o, object: r.ZSU.BUTTON_CTA, objectType: r.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && d?.();
                    },
                });
    }
}
