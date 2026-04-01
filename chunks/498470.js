"use strict";
s.d(t, { h: () => c });
var r = s(232582),
    i = s(532794),
    n = s(976860),
    a = s(788868),
    l = s(652215);
function c(e) {
    let { buttonAction: t, analyticsLocations: s = [], analyticsLocation: c, onClose: u } = e;
    switch (t) {
        case r.dz.OPEN_MARKETING_PAGE:
            return () => {
                (0, n.pX)(l.BVt.APPLICATION_STORE), u?.();
            };
        case r.dz.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
                (0, i.A)({
                    subscriptionTier: a.pe.TIER_1,
                    analyticsLocations: s,
                    analyticsObject: { ...c, object: l.ZSU.BUTTON_CTA, objectType: l.AnalyticsObjectTypes.TIER_1 },
                    onClose: (e) => {
                        e && u?.();
                    },
                });
        case r.dz.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, i.A)({ analyticsLocations: s });
        case r.dz.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
            return () =>
                (0, i.A)({
                    subscriptionTier: a.pe.TIER_2,
                    initialPlanId: a.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: s,
                    analyticsObject: { ...c, object: l.ZSU.BUTTON_CTA, objectType: l.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && u?.();
                    },
                });
        case r.dz.OPEN_TIER_2_PAYMENT_MODAL:
        case r.dz.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () =>
                (0, i.A)({
                    subscriptionTier: a.pe.TIER_2,
                    analyticsLocations: s,
                    analyticsObject: { ...c, object: l.ZSU.BUTTON_CTA, objectType: l.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && u?.();
                    },
                });
    }
}
