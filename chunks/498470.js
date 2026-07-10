"use strict";
n.d(t, { h: () => _, x: () => u });
var i = n(232582),
    r = n(403581),
    a = n(532794),
    s = n(976860),
    l = n(44724),
    o = n(202541),
    d = n(92737),
    c = n(652215);
function u(e) {
    let { buttonAction: t } = e;
    return (t ?? i.dz.UNSPECIFIED) === i.dz.OPEN_SOCIAL_LAYER_STOREFRONT ? { icon: void 0 } : { icon: r.t };
}
function _(e) {
    let {
        buttonAction: t,
        deeplinkSection: n,
        applicationId: r,
        analyticsLocations: u = [],
        analyticsLocation: _,
        onClose: E,
    } = e;
    switch (t) {
        case i.dz.OPEN_SOCIAL_LAYER_STOREFRONT:
            return () => {
                null != r && (0, l.default)({ applicationId: r }), E?.();
            };
        case i.dz.OPEN_MARKETING_PAGE:
            return () => {
                let e =
                    null != n && "" !== n
                        ? `${c.BVt.APPLICATION_STORE}?${d.x}=${encodeURIComponent(n)}`
                        : c.BVt.APPLICATION_STORE;
                (0, s.pX)(e), E?.();
            };
        case i.dz.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
                (0, a.A)({
                    subscriptionTier: o.pe.TIER_1,
                    analyticsLocations: u,
                    analyticsObject: { ..._, object: c.ZSU.BUTTON_CTA, objectType: c.AnalyticsObjectTypes.TIER_1 },
                    onClose: (e) => {
                        e && E?.();
                    },
                });
        case i.dz.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, a.A)({ analyticsLocations: u });
        case i.dz.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
            return () =>
                (0, a.A)({
                    subscriptionTier: o.pe.TIER_2,
                    initialPlanId: o.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: u,
                    analyticsObject: { ..._, object: c.ZSU.BUTTON_CTA, objectType: c.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && E?.();
                    },
                });
        case i.dz.OPEN_TIER_2_PAYMENT_MODAL:
        case i.dz.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () =>
                (0, a.A)({
                    subscriptionTier: o.pe.TIER_2,
                    analyticsLocations: u,
                    analyticsObject: { ..._, object: c.ZSU.BUTTON_CTA, objectType: c.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && E?.();
                    },
                });
    }
}
