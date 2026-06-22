"use strict";
n.d(t, { h: () => _, x: () => d });
var i = n(232582),
    r = n(403581),
    s = n(532794),
    a = n(976860),
    o = n(44724),
    l = n(217936),
    u = n(788868),
    c = n(652215);
function d(e) {
    let { buttonAction: t } = e;
    return (t ?? i.dz.UNSPECIFIED) === i.dz.OPEN_SOCIAL_LAYER_STOREFRONT ? { icon: void 0 } : { icon: r.t };
}
function _(e) {
    let {
        buttonAction: t,
        deeplinkSection: n,
        applicationId: r,
        analyticsLocations: d = [],
        analyticsLocation: _,
        onClose: h,
    } = e;
    switch (t) {
        case i.dz.OPEN_SOCIAL_LAYER_STOREFRONT:
            return () => {
                null != r && (0, o.default)({ applicationId: r }), h?.();
            };
        case i.dz.OPEN_MARKETING_PAGE:
            return () => {
                let e =
                    null != n && "" !== n
                        ? `${c.BVt.APPLICATION_STORE}?${l.x6}=${encodeURIComponent(n)}`
                        : c.BVt.APPLICATION_STORE;
                (0, a.pX)(e), h?.();
            };
        case i.dz.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
                (0, s.A)({
                    subscriptionTier: u.pe.TIER_1,
                    analyticsLocations: d,
                    analyticsObject: { ..._, object: c.ZSU.BUTTON_CTA, objectType: c.AnalyticsObjectTypes.TIER_1 },
                    onClose: (e) => {
                        e && h?.();
                    },
                });
        case i.dz.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, s.A)({ analyticsLocations: d });
        case i.dz.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
            return () =>
                (0, s.A)({
                    subscriptionTier: u.pe.TIER_2,
                    initialPlanId: u.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: d,
                    analyticsObject: { ..._, object: c.ZSU.BUTTON_CTA, objectType: c.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && h?.();
                    },
                });
        case i.dz.OPEN_TIER_2_PAYMENT_MODAL:
        case i.dz.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () =>
                (0, s.A)({
                    subscriptionTier: u.pe.TIER_2,
                    analyticsLocations: d,
                    analyticsObject: { ..._, object: c.ZSU.BUTTON_CTA, objectType: c.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && h?.();
                    },
                });
    }
}
