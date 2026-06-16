a.d(t, { h: () => o });
var s = a(232582),
    i = a(532794),
    n = a(976860),
    r = a(217936),
    l = a(788868),
    c = a(652215);
function o(e) {
    let { buttonAction: t, deeplinkSection: a, analyticsLocations: o = [], analyticsLocation: d, onClose: u } = e;
    switch (t) {
        case s.dz.OPEN_MARKETING_PAGE:
            return () => {
                let e =
                    null != a && "" !== a
                        ? `${c.BVt.APPLICATION_STORE}?${r.x6}=${encodeURIComponent(a)}`
                        : c.BVt.APPLICATION_STORE;
                (0, n.pX)(e), u?.();
            };
        case s.dz.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
                (0, i.A)({
                    subscriptionTier: l.pe.TIER_1,
                    analyticsLocations: o,
                    analyticsObject: { ...d, object: c.ZSU.BUTTON_CTA, objectType: c.AnalyticsObjectTypes.TIER_1 },
                    onClose: (e) => {
                        e && u?.();
                    },
                });
        case s.dz.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, i.A)({ analyticsLocations: o });
        case s.dz.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
            return () =>
                (0, i.A)({
                    subscriptionTier: l.pe.TIER_2,
                    initialPlanId: l.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: o,
                    analyticsObject: { ...d, object: c.ZSU.BUTTON_CTA, objectType: c.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && u?.();
                    },
                });
        case s.dz.OPEN_TIER_2_PAYMENT_MODAL:
        case s.dz.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () =>
                (0, i.A)({
                    subscriptionTier: l.pe.TIER_2,
                    analyticsLocations: o,
                    analyticsObject: { ...d, object: c.ZSU.BUTTON_CTA, objectType: c.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && u?.();
                    },
                });
    }
}
