n.d(t, { h: () => A, x: () => T });
var i = n(308588),
    l = n(403581),
    c = n(532794),
    r = n(976860),
    a = n(44724),
    s = n(202541),
    o = n(92737),
    _ = n(652215);
function T(e) {
    let { buttonAction: t } = e;
    return (t ?? i.d.UNSPECIFIED) === i.d.OPEN_SOCIAL_LAYER_STOREFRONT ? { icon: void 0 } : { icon: l.t };
}
function A(e) {
    let {
        buttonAction: t,
        deeplinkSection: n,
        applicationId: l,
        analyticsLocations: T = [],
        analyticsLocation: A,
        onClose: E,
    } = e;
    switch (t) {
        case i.d.OPEN_SOCIAL_LAYER_STOREFRONT:
            return () => {
                null != l && (0, a.default)({ applicationId: l }), E?.();
            };
        case i.d.OPEN_MARKETING_PAGE:
            return () => {
                let e =
                    null != n && "" !== n
                        ? `${_.BVt.APPLICATION_STORE}?${o.x}=${encodeURIComponent(n)}`
                        : _.BVt.APPLICATION_STORE;
                (0, r.pX)(e), E?.();
            };
        case i.d.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
                (0, c.A)({
                    subscriptionTier: s.pe.TIER_1,
                    analyticsLocations: T,
                    analyticsObject: { ...A, object: _.ZSU.BUTTON_CTA, objectType: _.AnalyticsObjectTypes.TIER_1 },
                    onClose: (e) => {
                        e && E?.();
                    },
                });
        case i.d.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, c.A)({ analyticsLocations: T });
        case i.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
            return () =>
                (0, c.A)({
                    subscriptionTier: s.pe.TIER_2,
                    initialPlanId: s.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: T,
                    analyticsObject: { ...A, object: _.ZSU.BUTTON_CTA, objectType: _.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && E?.();
                    },
                });
        case i.d.OPEN_TIER_2_PAYMENT_MODAL:
        case i.d.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () =>
                (0, c.A)({
                    subscriptionTier: s.pe.TIER_2,
                    analyticsLocations: T,
                    analyticsObject: { ...A, object: _.ZSU.BUTTON_CTA, objectType: _.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && E?.();
                    },
                });
    }
}
