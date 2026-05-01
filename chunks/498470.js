i.d(t, { h: () => d });
var s = i(232582),
    a = i(532794),
    n = i(976860),
    r = i(332732),
    l = i(788868),
    c = i(652215);
function d(e) {
    let { buttonAction: t, deeplinkSection: i, analyticsLocations: d = [], analyticsLocation: o, onClose: u } = e;
    switch (t) {
        case s.dz.OPEN_MARKETING_PAGE:
            return () => {
                let e =
                    null != i && "" !== i
                        ? `${c.BVt.APPLICATION_STORE}?${r.x6}=${encodeURIComponent(i)}`
                        : c.BVt.APPLICATION_STORE;
                (0, n.pX)(e), u?.();
            };
        case s.dz.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
                (0, a.A)({
                    subscriptionTier: l.pe.TIER_1,
                    analyticsLocations: d,
                    analyticsObject: { ...o, object: c.ZSU.BUTTON_CTA, objectType: c.AnalyticsObjectTypes.TIER_1 },
                    onClose: (e) => {
                        e && u?.();
                    },
                });
        case s.dz.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, a.A)({ analyticsLocations: d });
        case s.dz.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
            return () =>
                (0, a.A)({
                    subscriptionTier: l.pe.TIER_2,
                    initialPlanId: l.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: d,
                    analyticsObject: { ...o, object: c.ZSU.BUTTON_CTA, objectType: c.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && u?.();
                    },
                });
        case s.dz.OPEN_TIER_2_PAYMENT_MODAL:
        case s.dz.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () =>
                (0, a.A)({
                    subscriptionTier: l.pe.TIER_2,
                    analyticsLocations: d,
                    analyticsObject: { ...o, object: c.ZSU.BUTTON_CTA, objectType: c.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && u?.();
                    },
                });
    }
}
