n.d(t, { od: () => P }), n(321073);
var r = n(477900),
    l = n(582128),
    i = n(132500),
    o = n(192308),
    a = n(231723),
    s = n(228366),
    u = n(166532),
    c = n(925847),
    d = n(310829),
    C = n(174459),
    h = n(75304),
    E = n(145659),
    m = n(241440),
    p = n(568451),
    _ = n(982291),
    f = n(852607),
    S = n(331611),
    A = n(169797),
    I = n(652215);
n(322076);
var g = n(202541),
    N = n(375708);
let T = {
        [h.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, excludePaymentAuthSteps: !0, predicateStepType: "unified" },
        [h.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [h.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [h.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
        [h.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [h.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [h.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [h.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
        [h.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "one_time_payment" },
        [h.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
        [h.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
    },
    y = (0, l.lazy)(() =>
        Promise.all([n.e("339384"), n.e("793438"), n.e("154791"), n.e("725246"), n.e("414648"), n.e("208430")])
            .then(n.bind(n, 427325))
            .then((e) => {
                let { UnifiedCheckoutInstance: t } = e;
                return { default: t };
            }),
    );
function x(e) {
    return (0, r.jsx)(y, { ...e });
}
class P {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = p.Y[e];
        if (
            !(function (e, t) {
                return null != t && t.implemented && t.flowType === e;
            })(e, t)
        )
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = T[e]),
            (this.override_analytic_params =
                this.tenantCheckoutFlowConfig.TENANT_PROVIDER_CONFIGS.overrideAnalyticParams);
    }
    getCheckoutStep(e) {
        return this.tenantCheckoutFlowConfig.CHECKOUT_STEPS[e];
    }
    generateRenderHeader() {
        let { CustomHeaderComponent: e } = this.tenantCheckoutFlowConfig;
        if (null != e)
            return (t) => {
                let { handleClose: n, step: l } = t;
                return (0, r.jsx)(e, { onClose: n, step: l });
            };
    }
    getPredicateStepConfig() {
        let { CUSTOM_PREDICATE_STEP_CONFIG: e } = this.tenantCheckoutFlowConfig,
            { predicateStepType: t } = this.internalCheckoutFlowControls;
        return null != e
            ? { key: null, renderStep: e.renderStep, options: e.options }
            : "one_time_payment" === t
              ? f.kO
              : "subscription" === t
                ? f.r3
                : {
                      key: null,
                      renderStep: (e) => (0, r.jsx)(S.e, { paymentModalStepProps: e, defaultStep: u.pn.REVIEW }),
                  };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== h.C.ORB_CHECKOUT)
            return {
                key: u.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(_.c, {
                        checkoutFlow: this.checkoutFlow,
                        paymentModalStepProps: e,
                        returnStep: u.pn.REVIEW,
                        returnStepIfNoPaymentSources: t && n ? u.pn.GIFT_CUSTOMIZATION : void 0,
                    }),
                options: { renderHeader: !0 },
            };
    }
    getGiftCustomizationStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls,
            l = this.getCheckoutStep(u.pn.GIFT_CUSTOMIZATION);
        if (t && n && null != l)
            return {
                key: u.pn.GIFT_CUSTOMIZATION,
                renderStep: (e) => (0, r.jsx)(l, { ...e }),
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => N.intl.string(N.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(u.pn.REVIEW);
        return {
            key: u.pn.REVIEW,
            renderStep: (t) => (0, r.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => N.intl.string(N.t.QBnNHq) },
        };
    }
    createDefinedStepConfigsArray(e) {
        return e.filter((e) => null != e);
    }
    generateCheckoutStepConfigs(e) {
        let { isGift: t } = e,
            { CUSTOM_CONFIRM_STEP_CONFIG: n, STEPS_BEFORE_CHECKOUT: r = [] } = this.tenantCheckoutFlowConfig,
            { excludePaymentAuthSteps: l } = this.internalCheckoutFlowControls,
            i = this.getPredicateStepConfig(),
            o = this.getGiftCustomizationStepConfig({ isGift: t }),
            a = this.getAddPaymentStepConfig({ isGift: t }),
            s = this.getReviewStepConfig(),
            c = this.createDefinedStepConfigsArray([i, ...(null != o ? [o] : []), ...r, a, ...(l ? [] : f.PL), s]);
        return null != n && c.push({ key: u.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c;
    }
    getApplicationId(e) {
        return this.checkoutFlow === h.C.ORB_CHECKOUT && null != e
            ? (0, d.P)(e)
            : this.checkoutFlow === h.C.COLLECTIBLES_CHECKOUT
              ? I.FYj
              : this.checkoutFlow === h.C.PREMIUM_CHECKOUT
                ? g.tv
                : void 0;
    }
    trackPaymentFlowCanceled(e) {
        let {
            loadId: t,
            skuId: n,
            skuProductLine: r,
            applicationId: l,
            discoverySessionId: i,
            analyticsLocation: o,
            analyticsLocations: a,
            analyticsObject: s,
            analyticsSourceLocation: u,
            isGift: c,
            eligibleForTrial: d,
        } = e;
        C.default.track(I.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: i,
            payment_type: I.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: c,
            sku_id: n,
            sku_product_line: r,
            application_id: l,
            location: o ?? s,
            location_stack: a,
            source: u,
            eligible_for_trial: d,
            payment_modal_version: "v2",
            checkout_design: E.r.UNIFIED,
            checkout_flow: this.checkoutFlow,
            ...(this.checkoutFlow === h.C.PREMIUM_CHECKOUT ? { subscription_type: I.rzx.PREMIUM } : {}),
            ...this.override_analytic_params,
        });
    }
    getStandaloneLoadId() {
        return (0, c.A)() ?? (0, i.A)();
    }
    renderCheckoutInstance(e) {
        let {
                giftContextProps: t,
                checkoutHandlers: { onComplete: u, onClose: c } = {},
                checkoutConfiguration: {
                    skuId: d,
                    skuProductLine: C,
                    discoverySessionId: h,
                    applicationId: E,
                    activeSubscription: p,
                    initialPaymentSourceId: _,
                },
                unifiedCheckoutProviderProps: { analyticsLocations: f, analyticsSourceLocation: S },
                forwardedPaymentModalProps: { analyticsObject: I, ...g } = {},
                tenantParams: N,
            } = e,
            T = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            y = arguments.length > 2 ? arguments[2] : void 0,
            P = arguments.length > 3 ? arguments[3] : void 0,
            R = { current: P ?? (0, i.A)() },
            k = { current: null },
            { modalKey: v } = y,
            w = this.generateRenderHeader(),
            M = E ?? this.getApplicationId(d),
            F = !!(null != t && t.isGift),
            O = !1,
            U = {
                ...g,
                checkoutFlow: this.checkoutFlow,
                checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                stepConfigs: this.generateCheckoutStepConfigs({ isGift: F }),
                onComplete: (e) => {
                    null != u && u(e), (O = !0);
                },
                onClose: c,
                renderHeader: w,
                skuId: d ?? null,
                tenantParams: N ?? {},
                loadId: R.current,
                onOrderCreated: function (e) {
                    (R.current = e.id), (k.current = e);
                },
                discoverySessionId: h,
                activeSubscription: p ?? null,
                initialPaymentSourceId: _ ?? null,
                applicationId: M,
                analyticsLocations: f,
                analyticsObject: I,
                analyticsSourceLocation: S,
                giftContextProps: t,
            };
        if ("modal" === T)
            return (0, o.openModalLazy)(
                async () => {
                    let { UnifiedCheckoutInstance: e } = await Promise.all([
                        n.e("339384"),
                        n.e("793438"),
                        n.e("154791"),
                        n.e("725246"),
                        n.e("414648"),
                        n.e("208430"),
                    ]).then(n.bind(n, 427325));
                    return (t) => (0, r.jsx)(e, { ...U, renderModalProps: t });
                },
                {
                    ...y,
                    onCloseRequest: () => {
                        null != y.onCloseRequest && y.onCloseRequest(O, R.current),
                            y.skipCloseModalOnCloseRequest || (0, o.closeModal)(v);
                    },
                    onCloseCallback: () => {
                        s.h.dispatch({ type: "CHECKOUT_MODAL_CLOSE", didSucceed: O }),
                            O ||
                                ((0, m.S)({ checkoutSucceeded: O, order: k.current }),
                                this.trackPaymentFlowCanceled({
                                    loadId: R.current,
                                    skuId: d,
                                    skuProductLine: C,
                                    applicationId: M,
                                    discoverySessionId: h,
                                    analyticsLocation: g.analyticsLocation,
                                    analyticsLocations: f,
                                    analyticsObject: I,
                                    analyticsSourceLocation: S,
                                    isGift: F,
                                    eligibleForTrial: null != g.trialId,
                                })),
                            null != y.onCloseCallback && y.onCloseCallback(O),
                            null != c && c(O, d);
                    },
                    modalKey: v,
                },
            );
        {
            let e = g.paymentModalOnClose ?? c,
                t = { transitionState: a.ip.ENTERED, onClose: () => (null != e && e(!1), Promise.resolve()) };
            return (0, r.jsx)(l.Suspense, {
                fallback: (0, r.jsx)(A.KT, {}),
                children: (0, r.jsx)(x, { ...U, paymentModalOnClose: e, renderModalProps: t }),
            });
        }
    }
    openCheckoutModal(e) {
        let { modalAPIOptions: t } = e;
        return this.renderCheckoutInstance(e, "modal", t);
    }
    renderStandaloneCheckout(e, t) {
        return this.renderCheckoutInstance(e, "standalone", { modalKey: "standalone-checkout" }, t);
    }
}
