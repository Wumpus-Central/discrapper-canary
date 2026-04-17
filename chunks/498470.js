n.d(t, { h: () => c });
var i = n(232582),
    r = n(532794),
    a = n(976860),
    s = n(553081),
    l = n(788868),
    o = n(652215);
function c(e) {
    let { buttonAction: t, deeplinkSection: n, analyticsLocations: c = [], analyticsLocation: d, onClose: u } = e;
    switch (t) {
        case i.dz.OPEN_MARKETING_PAGE:
            return () => {
                let e =
                    null != n && "" !== n
                        ? `${o.BVt.APPLICATION_STORE}?${s.x6}=${encodeURIComponent(n)}`
                        : o.BVt.APPLICATION_STORE;
                (0, a.pX)(e), u?.();
            };
        case i.dz.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
                (0, r.A)({
                    subscriptionTier: l.pe.TIER_1,
                    analyticsLocations: c,
                    analyticsObject: { ...d, object: o.ZSU.BUTTON_CTA, objectType: o.AnalyticsObjectTypes.TIER_1 },
                    onClose: (e) => {
                        e && u?.();
                    },
                });
        case i.dz.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, r.A)({ analyticsLocations: c });
        case i.dz.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
            return () =>
                (0, r.A)({
                    subscriptionTier: l.pe.TIER_2,
                    initialPlanId: l.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: c,
                    analyticsObject: { ...d, object: o.ZSU.BUTTON_CTA, objectType: o.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && u?.();
                    },
                });
        case i.dz.OPEN_TIER_2_PAYMENT_MODAL:
        case i.dz.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () =>
                (0, r.A)({
                    subscriptionTier: l.pe.TIER_2,
                    analyticsLocations: c,
                    analyticsObject: { ...d, object: o.ZSU.BUTTON_CTA, objectType: o.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && u?.();
                    },
                });
    }
}
