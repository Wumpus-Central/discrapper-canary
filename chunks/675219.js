n.d(t, { o: () => g }), n(321073);
var l = n(627968),
    r = n(835245),
    i = n(192308),
    s = n(166532),
    a = n(546042),
    o = n(721252),
    u = n(310829),
    d = n(285871),
    c = n(945477),
    C = n(302425),
    p = n(982291),
    m = n(684477),
    E = n(331611),
    A = n(69882),
    h = n(652215),
    f = n(985018);
let _ = {
    [d.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, disablePaymentAuthSteps: !0, predicateStepType: "unified" },
    [d.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
    [d.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
    [d.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1 },
    [d.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
    [d.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !1 },
    [d.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
    [d.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
    [d.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1 },
    [d.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1 },
};
class g {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = C.Y[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = _[e]);
    }
    getUnifiedStepDefinition(e) {
        return this.tenantCheckoutFlowConfig.UnifiedCheckoutStepDefinitions[e];
    }
    generateRenderHeader() {
        let { UnifiedCheckoutCustomHeader: e } = this.tenantCheckoutFlowConfig;
        if (null != e) return (t, n, r) => (0, l.jsx)(e, { plan: t, onClose: n, step: r });
    }
    getPredicateStepConfig() {
        let { predicateStepType: e } = this.internalCheckoutFlowControls;
        return "one_time_payment" === e
            ? o.kJ
            : "unified" === e
              ? {
                    key: null,
                    renderStep: (e) => (0, l.jsx)(E.e, { paymentModalStepProps: e, defaultStep: s.pn.REVIEW }),
                }
              : { key: null, renderStep: (e) => (0, l.jsx)(a.I, { ...e }) };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== d.C.ORB_CHECKOUT)
            return {
                key: s.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, l.jsx)(p.c, {
                        paymentModalStepProps: e,
                        returnStep: s.pn.REVIEW,
                        returnStepIfNoPaymentSources: t && n ? s.pn.GIFT_CUSTOMIZATION : void 0,
                    }),
                options: { renderHeader: !0 },
            };
    }
    getGiftCustomizationStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        return t && n
            ? {
                  key: s.pn.GIFT_CUSTOMIZATION,
                  renderStep: (e) =>
                      (0, l.jsx)(m.E, {
                          paymentModalStepProps: e,
                          unifiedStepDefinition: this.getUnifiedStepDefinition(s.pn.GIFT_CUSTOMIZATION),
                      }),
                  options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => f.intl.string(f.t["W685+b"]) },
              }
            : void 0;
    }
    getReviewStepConfig() {
        let e = this.getUnifiedStepDefinition(s.pn.REVIEW);
        return (0, c.B)(e)
            ? o.r2
            : {
                  key: s.pn.REVIEW,
                  renderStep: (t) => (0, l.jsx)(A.Pw, { paymentModalStepProps: t, unifiedStepDefinition: e }),
                  options: { useBreadcrumbLabel: () => f.intl.string(f.t.QBnNHq) },
              };
    }
    createDefinedStepConfigsArray(e) {
        return e.filter((e) => null != e);
    }
    generateCheckoutStepConfigs(e) {
        let { isGift: t } = e,
            { CUSTOM_CONFIRM_STEP_CONFIG: n } = this.tenantCheckoutFlowConfig,
            { disablePaymentAuthSteps: l } = this.internalCheckoutFlowControls,
            r = this.getPredicateStepConfig(),
            i = this.getGiftCustomizationStepConfig({ isGift: t }),
            a = this.getAddPaymentStepConfig({ isGift: t }),
            u = this.getReviewStepConfig(),
            d = this.createDefinedStepConfigsArray([r, i, a, ...(l ? [] : o.hh), u]);
        return null != n && d.push({ key: s.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), d;
    }
    getApplicationIdFor1PShopSKU(e) {
        return this.checkoutFlow === d.C.ORB_CHECKOUT
            ? (0, u.P)(e)
            : this.checkoutFlow === d.C.COLLECTIBLES_CHECKOUT
              ? h.FYj
              : void 0;
    }
    openCheckoutModal(e) {
        let {
                openModalOptions: t,
                flowSpecificOptions: s,
                giftContextProps: a,
                onComplete: o,
                onClose: u,
                skuId: d,
                loadId: c,
                discoverySessionId: C,
                applicationId: p,
                analyticsSourceLocation: m,
                analyticsLocations: E,
            } = e,
            A = c ?? (0, r.A)(),
            { modalKey: h } = t,
            f = this.generateRenderHeader(),
            _ = p ?? this.getApplicationIdFor1PShopSKU(d),
            g = !1,
            T = s ?? void 0;
        return (0, i.openModalLazy)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("87298").then(n.bind(n, 246681)),
                    t = this.generateCheckoutStepConfigs({ isGift: !!(null != a && a.isGift) });
                return (n) =>
                    (0, l.jsx)(e, {
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: t,
                        onComplete: (e) => {
                            null != o && o(e), (g = !0);
                        },
                        onClose: u,
                        renderHeader: f,
                        skuId: d,
                        loadId: A,
                        discoverySessionId: C,
                        applicationId: _,
                        analyticsLocations: E,
                        analyticsSourceLocation: m,
                        renderModalProps: n,
                        giftContextProps: a,
                        flowSpecificOptions: T,
                    });
            },
            {
                ...t,
                onCloseRequest() {
                    null != t.onCloseRequest && t.onCloseRequest(g, A), (0, i.closeModal)(h);
                },
                modalKey: h,
            },
        );
    }
}
