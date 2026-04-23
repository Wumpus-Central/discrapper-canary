"use strict";
n.d(t, { o: () => I }), n(321073);
var r = n(627968),
    i = n(835245),
    s = n(192308),
    a = n(166532),
    o = n(546042),
    l = n(721252),
    u = n(310829),
    c = n(285871),
    d = n(945477),
    _ = n(302425),
    f = n(982291),
    p = n(684477),
    h = n(331611),
    E = n(69882),
    m = n(652215),
    g = n(985018);
let A = {
    [c.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, disablePaymentAuthSteps: !0, predicateStepType: "unified" },
    [c.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
    [c.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
    [c.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1 },
    [c.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
    [c.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !1 },
    [c.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
    [c.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
    [c.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1 },
    [c.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1 },
};
class I {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = _.Y[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = A[e]);
    }
    getUnifiedStepDefinition(e) {
        return this.tenantCheckoutFlowConfig.UnifiedCheckoutStepDefinitions[e];
    }
    generateRenderHeader() {
        let { UnifiedCheckoutCustomHeader: e } = this.tenantCheckoutFlowConfig;
        if (null != e) return (t, n, i) => (0, r.jsx)(e, { plan: t, onClose: n, step: i });
    }
    getPredicateStepConfig() {
        let { predicateStepType: e } = this.internalCheckoutFlowControls;
        return "one_time_payment" === e
            ? l.kJ
            : "unified" === e
              ? {
                    key: null,
                    renderStep: (e) => (0, r.jsx)(h.e, { paymentModalStepProps: e, defaultStep: a.pn.REVIEW }),
                }
              : { key: null, renderStep: (e) => (0, r.jsx)(o.I, { ...e }) };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== c.C.ORB_CHECKOUT)
            return {
                key: a.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(f.c, {
                        paymentModalStepProps: e,
                        returnStep: a.pn.REVIEW,
                        returnStepIfNoPaymentSources: t && n ? a.pn.GIFT_CUSTOMIZATION : void 0,
                    }),
                options: { renderHeader: !0 },
            };
    }
    getGiftCustomizationStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        return t && n
            ? {
                  key: a.pn.GIFT_CUSTOMIZATION,
                  renderStep: (e) =>
                      (0, r.jsx)(p.E, {
                          paymentModalStepProps: e,
                          unifiedStepDefinition: this.getUnifiedStepDefinition(a.pn.GIFT_CUSTOMIZATION),
                      }),
                  options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => g.intl.string(g.t["W685+b"]) },
              }
            : void 0;
    }
    getReviewStepConfig() {
        let e = this.getUnifiedStepDefinition(a.pn.REVIEW);
        return (0, d.B)(e)
            ? l.r2
            : {
                  key: a.pn.REVIEW,
                  renderStep: (t) => (0, r.jsx)(E.Pw, { paymentModalStepProps: t, unifiedStepDefinition: e }),
                  options: { useBreadcrumbLabel: () => g.intl.string(g.t.QBnNHq) },
              };
    }
    createDefinedStepConfigsArray(e) {
        return e.filter((e) => null != e);
    }
    generateCheckoutStepConfigs(e) {
        let { isGift: t } = e,
            { CUSTOM_CONFIRM_STEP_CONFIG: n } = this.tenantCheckoutFlowConfig,
            { disablePaymentAuthSteps: r } = this.internalCheckoutFlowControls,
            i = this.getPredicateStepConfig(),
            s = this.getGiftCustomizationStepConfig({ isGift: t }),
            o = this.getAddPaymentStepConfig({ isGift: t }),
            u = this.getReviewStepConfig(),
            c = this.createDefinedStepConfigsArray([i, s, o, ...(r ? [] : l.hh), u]);
        return null != n && c.push({ key: a.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c;
    }
    getApplicationIdFor1PShopSKU(e) {
        return this.checkoutFlow === c.C.ORB_CHECKOUT
            ? (0, u.P)(e)
            : this.checkoutFlow === c.C.COLLECTIBLES_CHECKOUT
              ? m.FYj
              : void 0;
    }
    openCheckoutModal(e) {
        let {
                openModalOptions: t,
                flowSpecificOptions: a,
                giftContextProps: o,
                onComplete: l,
                onClose: u,
                skuId: c,
                loadId: d,
                discoverySessionId: _,
                applicationId: f,
                analyticsSourceLocation: p,
                analyticsLocations: h,
            } = e,
            E = d ?? (0, i.A)(),
            { modalKey: m } = t,
            g = this.generateRenderHeader(),
            A = f ?? this.getApplicationIdFor1PShopSKU(c),
            I = !1,
            T = a ?? void 0;
        return (0, s.openModalLazy)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("87298").then(n.bind(n, 246681)),
                    t = this.generateCheckoutStepConfigs({ isGift: !!(null != o && o.isGift) });
                return (n) =>
                    (0, r.jsx)(e, {
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: t,
                        onComplete: (e) => {
                            null != l && l(e), (I = !0);
                        },
                        onClose: u,
                        renderHeader: g,
                        skuId: c,
                        loadId: E,
                        discoverySessionId: _,
                        applicationId: A,
                        analyticsLocations: h,
                        analyticsSourceLocation: p,
                        renderModalProps: n,
                        giftContextProps: o,
                        flowSpecificOptions: T,
                    });
            },
            {
                ...t,
                onCloseRequest() {
                    null != t.onCloseRequest && t.onCloseRequest(I, E), (0, s.closeModal)(m);
                },
                modalKey: m,
            },
        );
    }
}
