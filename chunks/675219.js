"use strict";
n.d(t, { o: () => T }), n(321073);
var r = n(627968),
    i = n(835245),
    a = n(397927),
    s = n(166532),
    o = n(546042),
    l = n(721252),
    u = n(310829),
    c = n(285871),
    d = n(945477),
    _ = n(302425),
    f = n(982291),
    p = n(684477),
    h = n(331611),
    m = n(69882),
    g = n(652215),
    E = n(985018);
let A = (e, t) => null != t && t.implemented && t.flowType === e,
    I = {
        [c.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, disablePaymentAuthSteps: !0, predicateStepType: "unified" },
        [c.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [c.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [c.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1 },
    };
class T {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = _.Y[e];
        if (!A(e, t)) throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = I[e]);
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
                    renderStep: (e) => (0, r.jsx)(h.e, { paymentModalStepProps: e, defaultStep: s.pn.REVIEW }),
                }
              : { key: null, renderStep: (e) => (0, r.jsx)(o.I, { ...e }) };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== c.C.ORB_CHECKOUT)
            return {
                key: s.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(f.c, {
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
                      (0, r.jsx)(p.E, {
                          paymentModalStepProps: e,
                          unifiedStepDefinition: this.getUnifiedStepDefinition(s.pn.GIFT_CUSTOMIZATION),
                      }),
                  options: { isLargeModal: !0, useBreadcrumbLabel: () => E.intl.string(E.t["W685+b"]) },
              }
            : void 0;
    }
    getReviewStepConfig() {
        let e = this.getUnifiedStepDefinition(s.pn.REVIEW);
        return (0, d.B)(e)
            ? l.r2
            : {
                  key: s.pn.REVIEW,
                  renderStep: (t) => (0, r.jsx)(m.Pw, { paymentModalStepProps: t, unifiedStepDefinition: e }),
                  options: { useBreadcrumbLabel: () => E.intl.string(E.t.QBnNHq) },
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
            a = this.getGiftCustomizationStepConfig({ isGift: t }),
            o = this.getAddPaymentStepConfig({ isGift: t }),
            u = this.getReviewStepConfig(),
            c = this.createDefinedStepConfigsArray([i, a, o, ...(r ? [] : l.hh), u]);
        return null != n && c.push({ key: s.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c;
    }
    getApplicationId(e) {
        return this.checkoutFlow === c.C.ORB_CHECKOUT
            ? (0, u.p)(e)
            : this.checkoutFlow === c.C.COLLECTIBLES_CHECKOUT
              ? g.FYj
              : void 0;
    }
    openCheckoutModal(e) {
        let {
                openModalOptions: t,
                flowSpecificOptions: s,
                giftContextProps: o,
                onComplete: l,
                onClose: u,
                skuId: c,
                loadId: d,
                applicationId: _,
                analyticsSourceLocation: f,
                analyticsLocations: p,
            } = e,
            h = d ?? (0, i.A)(),
            { modalKey: m } = t,
            g = this.generateRenderHeader(),
            E = _ ?? this.getApplicationId(c),
            A = !1,
            I = s ?? void 0;
        return (0, a.mMO)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("87298").then(n.bind(n, 246681));
                return (t) =>
                    (0, r.jsx)(e, {
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: this.generateCheckoutStepConfigs({ isGift: !!(null != o && o.isGift) }),
                        onComplete: (e) => {
                            null != l && l(e), (A = !0);
                        },
                        onClose: u,
                        renderHeader: g,
                        skuId: c,
                        loadId: h,
                        applicationId: E,
                        analyticsLocations: p,
                        analyticsSourceLocation: f,
                        renderModalProps: t,
                        giftContextProps: o,
                        flowSpecificOptions: I,
                    });
            },
            {
                ...t,
                onCloseRequest() {
                    null != t.onCloseRequest && t.onCloseRequest(A, h), (0, a.OoC)(m);
                },
                modalKey: m,
            },
        );
    }
}
