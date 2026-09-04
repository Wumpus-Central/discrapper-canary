n.d(t, { od: () => N }), n(321073);
var r = n(477900),
    l = n(582128),
    o = n(132500),
    i = n(192308),
    a = n(231723),
    s = n(228366),
    u = n(166532),
    c = n(925847),
    d = n(310829),
    h = n(174459),
    C = n(75304),
    m = n(145659),
    p = n(241440),
    f = n(568451),
    g = n(982291),
    E = n(852607),
    S = n(331611),
    y = n(169797),
    x = n(652215);
n(322076);
var _ = n(202541),
    I = n(375708);
let A = {
        [C.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, excludePaymentAuthSteps: !0, predicateStepType: "unified" },
        [C.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [C.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [C.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
        [C.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [C.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [C.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [C.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
        [C.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "one_time_payment" },
        [C.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
        [C.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
    },
    k = (0, l.lazy)(() =>
        Promise.all([n.e("339384"), n.e("793438"), n.e("154791"), n.e("725246"), n.e("414648"), n.e("208430")])
            .then(n.bind(n, 427325))
            .then((e) => {
                let { UnifiedCheckoutInstance: t } = e;
                return { default: t };
            }),
    );
function v(e) {
    return (0, r.jsx)(k, { ...e });
}
class N {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = f.Y[e];
        if (
            !(function (e, t) {
                return null != t && t.implemented && t.flowType === e;
            })(e, t)
        )
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = A[e]),
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
              ? E.kO
              : "subscription" === t
                ? E.r3
                : {
                      key: null,
                      renderStep: (e) => (0, r.jsx)(S.e, { paymentModalStepProps: e, defaultStep: u.pn.REVIEW }),
                  };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== C.C.ORB_CHECKOUT)
            return {
                key: u.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(g.c, {
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
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => I.intl.string(I.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(u.pn.REVIEW);
        return {
            key: u.pn.REVIEW,
            renderStep: (t) => (0, r.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => I.intl.string(I.t.QBnNHq) },
        };
    }
    createDefinedStepConfigsArray(e) {
        return e.filter((e) => null != e);
    }
    generateCheckoutStepConfigs(e) {
        let { isGift: t } = e,
            { CUSTOM_CONFIRM_STEP_CONFIG: n, STEPS_BEFORE_CHECKOUT: r = [] } = this.tenantCheckoutFlowConfig,
            { excludePaymentAuthSteps: l } = this.internalCheckoutFlowControls,
            o = this.getPredicateStepConfig(),
            i = this.getGiftCustomizationStepConfig({ isGift: t }),
            a = this.getAddPaymentStepConfig({ isGift: t }),
            s = this.getReviewStepConfig(),
            c = this.createDefinedStepConfigsArray([o, ...(null != i ? [i] : []), ...r, a, ...(l ? [] : E.PL), s]);
        return null != n && c.push({ key: u.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c;
    }
    getApplicationId(e) {
        return this.checkoutFlow === C.C.ORB_CHECKOUT && null != e
            ? (0, d.P)(e)
            : this.checkoutFlow === C.C.COLLECTIBLES_CHECKOUT
              ? x.FYj
              : this.checkoutFlow === C.C.PREMIUM_CHECKOUT
                ? _.tv
                : void 0;
    }
    trackPaymentFlowCanceled(e) {
        let {
            loadId: t,
            skuId: n,
            skuProductLine: r,
            applicationId: l,
            discoverySessionId: o,
            analyticsLocation: i,
            analyticsLocations: a,
            analyticsObject: s,
            analyticsSourceLocation: u,
            isGift: c,
            eligibleForTrial: d,
        } = e;
        h.default.track(x.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: o,
            payment_type: x.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: c,
            sku_id: n,
            sku_product_line: r,
            application_id: l,
            location: i ?? s,
            location_stack: a,
            source: u,
            eligible_for_trial: d,
            payment_modal_version: "v2",
            checkout_design: m.r.UNIFIED,
            checkout_flow: this.checkoutFlow,
            ...(this.checkoutFlow === C.C.PREMIUM_CHECKOUT ? { subscription_type: x.rzx.PREMIUM } : {}),
            ...this.override_analytic_params,
        });
    }
    getStandaloneLoadId() {
        return (0, c.A)() ?? (0, o.A)();
    }
    renderCheckoutInstance(e) {
        let {
                giftContextProps: t,
                checkoutHandlers: { onComplete: u, onClose: c } = {},
                checkoutConfiguration: {
                    skuId: d,
                    skuProductLine: h,
                    discoverySessionId: C,
                    applicationId: m,
                    activeSubscription: f,
                    initialPaymentSourceId: g,
                },
                unifiedCheckoutProviderProps: { analyticsLocations: E, analyticsSourceLocation: S },
                forwardedPaymentModalProps: { analyticsObject: x, ..._ } = {},
                tenantParams: I,
            } = e,
            A = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            k = arguments.length > 2 ? arguments[2] : void 0,
            N = arguments.length > 3 ? arguments[3] : void 0,
            j = { current: N ?? (0, o.A)() },
            w = { current: null },
            { modalKey: T } = k,
            F = this.generateRenderHeader(),
            P = m ?? this.getApplicationId(d),
            b = !!(null != t && t.isGift),
            O = !1,
            R = {
                ..._,
                checkoutFlow: this.checkoutFlow,
                checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                stepConfigs: this.generateCheckoutStepConfigs({ isGift: b }),
                onComplete: (e) => {
                    null != u && u(e), (O = !0);
                },
                onClose: c,
                renderHeader: F,
                skuId: d ?? null,
                tenantParams: I ?? {},
                loadId: j.current,
                onOrderCreated: function (e) {
                    (j.current = e.id), (w.current = e);
                },
                discoverySessionId: C,
                activeSubscription: f ?? null,
                initialPaymentSourceId: g ?? null,
                applicationId: P,
                analyticsLocations: E,
                analyticsObject: x,
                analyticsSourceLocation: S,
                giftContextProps: t,
            };
        if ("modal" === A)
            return (0, i.openModalLazy)(
                async () => {
                    let { UnifiedCheckoutInstance: e } = await Promise.all([
                        n.e("339384"),
                        n.e("793438"),
                        n.e("154791"),
                        n.e("725246"),
                        n.e("414648"),
                        n.e("208430"),
                    ]).then(n.bind(n, 427325));
                    return (t) => (0, r.jsx)(e, { ...R, renderModalProps: t });
                },
                {
                    ...k,
                    onCloseRequest: () => {
                        null != k.onCloseRequest && k.onCloseRequest(O, j.current),
                            k.skipCloseModalOnCloseRequest || (0, i.closeModal)(T);
                    },
                    onCloseCallback: () => {
                        s.h.dispatch({ type: "CHECKOUT_MODAL_CLOSE", didSucceed: O }),
                            O ||
                                ((0, p.S)({ checkoutSucceeded: O, order: w.current }),
                                this.trackPaymentFlowCanceled({
                                    loadId: j.current,
                                    skuId: d,
                                    skuProductLine: h,
                                    applicationId: P,
                                    discoverySessionId: C,
                                    analyticsLocation: _.analyticsLocation,
                                    analyticsLocations: E,
                                    analyticsObject: x,
                                    analyticsSourceLocation: S,
                                    isGift: b,
                                    eligibleForTrial: null != _.trialId,
                                })),
                            null != k.onCloseCallback && k.onCloseCallback(O),
                            null != c && c(O, d);
                    },
                    modalKey: T,
                },
            );
        {
            let e = _.paymentModalOnClose ?? c,
                t = { transitionState: a.ip.ENTERED, onClose: () => (null != e && e(!1), Promise.resolve()) };
            return (0, r.jsx)(l.Suspense, {
                fallback: (0, r.jsx)(y.KT, {}),
                children: (0, r.jsx)(v, { ...R, paymentModalOnClose: e, renderModalProps: t }),
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
