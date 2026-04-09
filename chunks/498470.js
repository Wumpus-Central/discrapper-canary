s.d(t, { h: () => c });
var i = s(232582),
    a = s(532794),
    n = s(976860),
    l = s(788868),
    r = s(652215);
function c(e) {
    let { buttonAction: t, analyticsLocations: s = [], analyticsLocation: c, onClose: o } = e;
    switch (t) {
        case i.dz.OPEN_MARKETING_PAGE:
            return () => {
                (0, n.pX)(r.BVt.APPLICATION_STORE), o?.();
            };
        case i.dz.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
                (0, a.A)({
                    subscriptionTier: l.pe.TIER_1,
                    analyticsLocations: s,
                    analyticsObject: { ...c, object: r.ZSU.BUTTON_CTA, objectType: r.AnalyticsObjectTypes.TIER_1 },
                    onClose: (e) => {
                        e && o?.();
                    },
                });
        case i.dz.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, a.A)({ analyticsLocations: s });
        case i.dz.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
            return () =>
                (0, a.A)({
                    subscriptionTier: l.pe.TIER_2,
                    initialPlanId: l.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: s,
                    analyticsObject: { ...c, object: r.ZSU.BUTTON_CTA, objectType: r.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && o?.();
                    },
                });
        case i.dz.OPEN_TIER_2_PAYMENT_MODAL:
        case i.dz.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () =>
                (0, a.A)({
                    subscriptionTier: l.pe.TIER_2,
                    analyticsLocations: s,
                    analyticsObject: { ...c, object: r.ZSU.BUTTON_CTA, objectType: r.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && o?.();
                    },
                });
    }
}
