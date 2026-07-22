n.d(t, { h: () => T, x: () => u });
var i = n(232582),
    l = n(403581),
    r = n(532794),
    c = n(976860),
    a = n(44724),
    s = n(202541),
    o = n(92737),
    _ = n(652215);
function u(e) {
    let { buttonAction: t } = e;
    return (t ?? i.dz.UNSPECIFIED) === i.dz.OPEN_SOCIAL_LAYER_STOREFRONT ? { icon: void 0 } : { icon: l.t };
}
function T(e) {
    let {
        buttonAction: t,
        deeplinkSection: n,
        applicationId: l,
        analyticsLocations: u = [],
        analyticsLocation: T,
        onClose: A,
    } = e;
    switch (t) {
        case i.dz.OPEN_SOCIAL_LAYER_STOREFRONT:
            return () => {
                null != l && (0, a.default)({ applicationId: l }), A?.();
            };
        case i.dz.OPEN_MARKETING_PAGE:
            return () => {
                let e =
                    null != n && "" !== n
                        ? `${_.BVt.APPLICATION_STORE}?${o.x}=${encodeURIComponent(n)}`
                        : _.BVt.APPLICATION_STORE;
                (0, c.pX)(e), A?.();
            };
        case i.dz.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
                (0, r.A)({
                    subscriptionTier: s.pe.TIER_1,
                    analyticsLocations: u,
                    analyticsObject: { ...T, object: _.ZSU.BUTTON_CTA, objectType: _.AnalyticsObjectTypes.TIER_1 },
                    onClose: (e) => {
                        e && A?.();
                    },
                });
        case i.dz.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, r.A)({ analyticsLocations: u });
        case i.dz.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
            return () =>
                (0, r.A)({
                    subscriptionTier: s.pe.TIER_2,
                    initialPlanId: s.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: u,
                    analyticsObject: { ...T, object: _.ZSU.BUTTON_CTA, objectType: _.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && A?.();
                    },
                });
        case i.dz.OPEN_TIER_2_PAYMENT_MODAL:
        case i.dz.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () =>
                (0, r.A)({
                    subscriptionTier: s.pe.TIER_2,
                    analyticsLocations: u,
                    analyticsObject: { ...T, object: _.ZSU.BUTTON_CTA, objectType: _.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && A?.();
                    },
                });
    }
}
