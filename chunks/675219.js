n.d(t, { od: () => y }), n(321073);
var r = n(477900),
    l = n(582128),
    i = n(132500),
    o = n(192308),
    u = n(231723),
    s = n(228366),
    a = n(166532),
    c = n(925847),
    d = n(310829),
    E = n(174459),
    C = n(75304),
    _ = n(145659),
    h = n(241440),
    A = n(559260),
    p = n(982291),
    I = n(852607),
    S = n(331611),
    f = n(480642),
    N = n(652215);
n(322076);
var T = n(202541),
    g = n(375708);
let m = {
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
    R = (0, l.lazy)(() =>
        Promise.all([n.e("797"), n.e("93438"), n.e("54791"), n.e("25246"), n.e("14648"), n.e("8430")])
            .then(n.bind(n, 427325))
            .then((e) => {
                let { UnifiedCheckoutInstance: t } = e;
                return { default: t };
            }),
    );
function P(e) {
    return (0, r.jsx)(R, { ...e });
}
class y {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = A.Y[e];
        if (
            !(function (e, t) {
                return null != t && t.implemented && t.flowType === e;
            })(e, t)
        )
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = m[e]),
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
              ? I.kO
              : "subscription" === t
                ? I.r3
                : {
                      key: null,
                      renderStep: (e) => (0, r.jsx)(S.e, { paymentModalStepProps: e, defaultStep: a.pn.REVIEW }),
                  };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== C.C.ORB_CHECKOUT)
            return {
                key: a.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(p.c, {
                        checkoutFlow: this.checkoutFlow,
                        paymentModalStepProps: e,
                        returnStep: a.pn.REVIEW,
                        returnStepIfNoPaymentSources: t && n ? a.pn.GIFT_CUSTOMIZATION : void 0,
                    }),
                options: { renderHeader: !0 },
            };
    }
    getGiftCustomizationStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls,
            l = this.getCheckoutStep(a.pn.GIFT_CUSTOMIZATION);
        if (t && n && null != l)
            return {
                key: a.pn.GIFT_CUSTOMIZATION,
                renderStep: (e) => (0, r.jsx)(l, { ...e }),
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => g.intl.string(g.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(a.pn.REVIEW);
        return {
            key: a.pn.REVIEW,
            renderStep: (t) => (0, r.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => g.intl.string(g.t.QBnNHq) },
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
            u = this.getAddPaymentStepConfig({ isGift: t }),
            s = this.getReviewStepConfig(),
            c = this.createDefinedStepConfigsArray([i, ...(null != o ? [o] : []), ...r, u, ...(l ? [] : I.PL), s]);
        return null != n && c.push({ key: a.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c;
    }
    getApplicationId(e) {
        return this.checkoutFlow === C.C.ORB_CHECKOUT && null != e
            ? (0, d.P)(e)
            : this.checkoutFlow === C.C.COLLECTIBLES_CHECKOUT
              ? N.FYj
              : this.checkoutFlow === C.C.PREMIUM_CHECKOUT
                ? T.tv
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
            analyticsLocations: u,
            analyticsObject: s,
            analyticsSourceLocation: a,
            isGift: c,
            eligibleForTrial: d,
        } = e;
        E.default.track(N.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: i,
            payment_type: N.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: c,
            sku_id: n,
            sku_product_line: r,
            application_id: l,
            location: o ?? s,
            location_stack: u,
            source: a,
            eligible_for_trial: d,
            payment_modal_version: "v2",
            checkout_design: _.r.UNIFIED,
            checkout_flow: this.checkoutFlow,
            ...(this.checkoutFlow === C.C.PREMIUM_CHECKOUT ? { subscription_type: N.rzx.PREMIUM } : {}),
            ...this.override_analytic_params,
        });
    }
    getStandaloneLoadId() {
        return (0, c.A)() ?? (0, i.A)();
    }
    renderCheckoutInstance(e) {
        let {
                giftContextProps: t,
                checkoutHandlers: { onComplete: a, onClose: c } = {},
                checkoutConfiguration: {
                    skuId: d,
                    skuProductLine: E,
                    discoverySessionId: C,
                    applicationId: _,
                    activeSubscription: A,
                    initialPaymentSourceId: p,
                },
                unifiedCheckoutProviderProps: { analyticsLocations: I, analyticsSourceLocation: S },
                forwardedPaymentModalProps: { analyticsObject: N, ...T } = {},
                tenantParams: g,
            } = e,
            m = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            R = arguments.length > 2 ? arguments[2] : void 0,
            y = arguments.length > 3 ? arguments[3] : void 0,
            O = { current: y ?? (0, i.A)() },
            L = { current: null },
            { modalKey: U } = R,
            F = this.generateRenderHeader(),
            M = _ ?? this.getApplicationId(d),
            G = !!(null != t && t.isGift),
            D = !1,
            v = {
                ...T,
                checkoutFlow: this.checkoutFlow,
                checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                stepConfigs: this.generateCheckoutStepConfigs({ isGift: G }),
                onComplete: (e) => {
                    null != a && a(e), (D = !0);
                },
                onClose: c,
                renderHeader: F,
                skuId: d ?? null,
                tenantParams: g ?? {},
                loadId: O.current,
                onOrderCreated: function (e) {
                    (O.current = e.id), (L.current = e);
                },
                discoverySessionId: C,
                activeSubscription: A ?? null,
                initialPaymentSourceId: p ?? null,
                applicationId: M,
                analyticsLocations: I,
                analyticsObject: N,
                analyticsSourceLocation: S,
                giftContextProps: t,
            };
        if ("modal" === m)
            return (0, o.openModalLazy)(
                async () => {
                    let { UnifiedCheckoutInstance: e } = await Promise.all([
                        n.e("797"),
                        n.e("93438"),
                        n.e("54791"),
                        n.e("25246"),
                        n.e("14648"),
                        n.e("8430"),
                    ]).then(n.bind(n, 427325));
                    return (t) => (0, r.jsx)(e, { ...v, renderModalProps: t });
                },
                {
                    ...R,
                    onCloseRequest: () => {
                        null != R.onCloseRequest && R.onCloseRequest(D, O.current),
                            R.skipCloseModalOnCloseRequest || (0, o.closeModal)(U);
                    },
                    onCloseCallback: () => {
                        s.h.dispatch({ type: "CHECKOUT_MODAL_CLOSE", didSucceed: D }),
                            D ||
                                ((0, h.S)({ checkoutSucceeded: D, order: L.current }),
                                this.trackPaymentFlowCanceled({
                                    loadId: O.current,
                                    skuId: d,
                                    skuProductLine: E,
                                    applicationId: M,
                                    discoverySessionId: C,
                                    analyticsLocation: T.analyticsLocation,
                                    analyticsLocations: I,
                                    analyticsObject: N,
                                    analyticsSourceLocation: S,
                                    isGift: G,
                                    eligibleForTrial: null != T.trialId,
                                })),
                            null != R.onCloseCallback && R.onCloseCallback(D),
                            null != c && c(D, d);
                    },
                    modalKey: U,
                },
            );
        {
            let e = T.paymentModalOnClose ?? c,
                t = { transitionState: u.ip.ENTERED, onClose: () => (null != e && e(!1), Promise.resolve()) };
            return (0, r.jsx)(l.Suspense, {
                fallback: (0, r.jsx)(f.KT, {}),
                children: (0, r.jsx)(P, { ...v, paymentModalOnClose: e, renderModalProps: t }),
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
