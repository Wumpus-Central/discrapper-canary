n.d(t, { h: () => m, x: () => u });
var i = n(232582),
    a = n(403581),
    s = n(532794),
    r = n(976860),
    l = n(44724),
    c = n(205483),
    o = n(202541),
    d = n(652215);
function u(e) {
    let { buttonAction: t } = e;
    return (t ?? i.dz.UNSPECIFIED) === i.dz.OPEN_SOCIAL_LAYER_STOREFRONT ? { icon: void 0 } : { icon: a.t };
}
function m(e) {
    let {
        buttonAction: t,
        deeplinkSection: n,
        applicationId: a,
        analyticsLocations: u = [],
        analyticsLocation: m,
        onClose: A,
    } = e;
    switch (t) {
        case i.dz.OPEN_SOCIAL_LAYER_STOREFRONT:
            return () => {
                null != a && (0, l.default)({ applicationId: a }), A?.();
            };
        case i.dz.OPEN_MARKETING_PAGE:
            return () => {
                let e =
                    null != n && "" !== n
                        ? `${d.BVt.APPLICATION_STORE}?${c.x6}=${encodeURIComponent(n)}`
                        : d.BVt.APPLICATION_STORE;
                (0, r.pX)(e), A?.();
            };
        case i.dz.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
                (0, s.A)({
                    subscriptionTier: o.pe.TIER_1,
                    analyticsLocations: u,
                    analyticsObject: { ...m, object: d.ZSU.BUTTON_CTA, objectType: d.AnalyticsObjectTypes.TIER_1 },
                    onClose: (e) => {
                        e && A?.();
                    },
                });
        case i.dz.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, s.A)({ analyticsLocations: u });
        case i.dz.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
            return () =>
                (0, s.A)({
                    subscriptionTier: o.pe.TIER_2,
                    initialPlanId: o.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: u,
                    analyticsObject: { ...m, object: d.ZSU.BUTTON_CTA, objectType: d.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && A?.();
                    },
                });
        case i.dz.OPEN_TIER_2_PAYMENT_MODAL:
        case i.dz.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            return () =>
                (0, s.A)({
                    subscriptionTier: o.pe.TIER_2,
                    analyticsLocations: u,
                    analyticsObject: { ...m, object: d.ZSU.BUTTON_CTA, objectType: d.AnalyticsObjectTypes.TIER_2 },
                    onClose: (e) => {
                        e && A?.();
                    },
                });
    }
}
