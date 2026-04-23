n.d(t, { h: () => o });
var r = n(232582),
    a = n(532794),
    i = n(976860),
    s = n(553081),
    l = n(788868),
    c = n(652215);
function o(e) {
    let { buttonAction: t, deeplinkSection: n, analyticsLocations: o = [], analyticsLocation: d, onClose: u } = e;
    switch (t) {
        case r.dz.OPEN_MARKETING_PAGE:
            return () => {
                let e =
                    null != n && "" !== n
                        ? `${c.BVt.APPLICATION_STORE}?${s.x6}=${encodeURIComponent(n)}`
                        : c.BVt.APPLICATION_STORE;
                (0, i.pX)(e), u?.();
            };
        case r.dz.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
                (0, a.A)({
                    subscriptionTier: l.pe.TIER_1,
                    analyticsLocations: o,
                    analyticsObject: { ...d, object: c.ZSU.BUTTON_CTA, objectType: c.AnalyticsObjectTypes.TIER_1 },
                    onClose: (e) => {
                        e && u?.();
                    },
                });
        case r.dz.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, a.A)({ analyticsLocations: o });
        case r.dz.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
            return () =>
                (0, a.A)({
                    subscriptionTier: l.pe.TIER_2,
                    initialPlanId: l.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: o,
                    analyticsObject: { ...d, object: c.ZSU.BUTTON_CTA, objectType: c.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && u?.();
                    },
                });
        case r.dz.OPEN_TIER_2_PAYMENT_MODAL:
        case r.dz.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () =>
                (0, a.A)({
                    subscriptionTier: l.pe.TIER_2,
                    analyticsLocations: o,
                    analyticsObject: { ...d, object: c.ZSU.BUTTON_CTA, objectType: c.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && u?.();
                    },
                });
    }
}
