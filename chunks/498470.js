"use strict";
n.d(t, { h: () => u });
var i = n(232582),
    r = n(532794),
    s = n(976860),
    a = n(332732),
    o = n(788868),
    l = n(652215);
function u(e) {
    let { buttonAction: t, deeplinkSection: n, analyticsLocations: u = [], analyticsLocation: c, onClose: d } = e;
    switch (t) {
        case i.dz.OPEN_MARKETING_PAGE:
            return () => {
                let e =
                    null != n && "" !== n
                        ? `${l.BVt.APPLICATION_STORE}?${a.x6}=${encodeURIComponent(n)}`
                        : l.BVt.APPLICATION_STORE;
                (0, s.pX)(e), d?.();
            };
        case i.dz.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
                (0, r.A)({
                    subscriptionTier: o.pe.TIER_1,
                    analyticsLocations: u,
                    analyticsObject: { ...c, object: l.ZSU.BUTTON_CTA, objectType: l.AnalyticsObjectTypes.TIER_1 },
                    onClose: (e) => {
                        e && d?.();
                    },
                });
        case i.dz.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, r.A)({ analyticsLocations: u });
        case i.dz.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
            return () =>
                (0, r.A)({
                    subscriptionTier: o.pe.TIER_2,
                    initialPlanId: o.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: u,
                    analyticsObject: { ...c, object: l.ZSU.BUTTON_CTA, objectType: l.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && d?.();
                    },
                });
        case i.dz.OPEN_TIER_2_PAYMENT_MODAL:
        case i.dz.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () =>
                (0, r.A)({
                    subscriptionTier: o.pe.TIER_2,
                    analyticsLocations: u,
                    analyticsObject: { ...c, object: l.ZSU.BUTTON_CTA, objectType: l.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && d?.();
                    },
                });
    }
}
