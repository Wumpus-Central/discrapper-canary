n.d(t, { od: () => P }), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(132500),
    o = n(192308),
    s = n(231723),
    a = n(228366),
    u = n(166532),
    c = n(925847),
    d = n(310829),
    E = n(174459),
    C = n(75304),
    h = n(145659),
    _ = n(241440),
    m = n(194247),
    S = n(982291),
    I = n(291767),
    p = n(331611),
    f = n(169797),
    A = n(652215);
n(322076);
var N = n(202541),
    T = n(375708);
let g = {
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
    },
    y = (0, r.lazy)(() =>
        Promise.all([n.e("11005"), n.e("93438"), n.e("54791"), n.e("25246"), n.e("14648"), n.e("8430")])
            .then(n.bind(n, 427325))
            .then((e) => {
                let { UnifiedCheckoutInstance: t } = e;
                return { default: t };
            }),
    ),
    R = (e) => (0, l.jsx)(y, { ...e });
class P {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = m.Y[e];
        if (
            !(function (e, t) {
                return null != t && t.implemented && t.flowType === e;
            })(e, t)
        )
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = g[e]),
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
                let { handleClose: n, step: r } = t;
                return (0, l.jsx)(e, { onClose: n, step: r });
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
                      renderStep: (e) => (0, l.jsx)(p.e, { paymentModalStepProps: e, defaultStep: u.pn.REVIEW }),
                  };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== C.C.ORB_CHECKOUT)
            return {
                key: u.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, l.jsx)(S.c, {
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
            r = this.getCheckoutStep(u.pn.GIFT_CUSTOMIZATION);
        if (t && n && null != r)
            return {
                key: u.pn.GIFT_CUSTOMIZATION,
                renderStep: (e) => (0, l.jsx)(r, { ...e }),
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => T.intl.string(T.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(u.pn.REVIEW);
        return {
            key: u.pn.REVIEW,
            renderStep: (t) => (0, l.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => T.intl.string(T.t.QBnNHq) },
        };
    }
    createDefinedStepConfigsArray(e) {
        return e.filter((e) => null != e);
    }
    generateCheckoutStepConfigs(e) {
        let { isGift: t } = e,
            { CUSTOM_CONFIRM_STEP_CONFIG: n, STEPS_BEFORE_CHECKOUT: l = [] } = this.tenantCheckoutFlowConfig,
            { excludePaymentAuthSteps: r } = this.internalCheckoutFlowControls,
            i = this.getPredicateStepConfig(),
            o = this.getGiftCustomizationStepConfig({ isGift: t }),
            s = this.getAddPaymentStepConfig({ isGift: t }),
            a = this.getReviewStepConfig(),
            c = this.createDefinedStepConfigsArray([i, ...(null != o ? [o] : []), ...l, s, ...(r ? [] : I.PL), a]);
        return null != n && c.push({ key: u.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c;
    }
    getApplicationId(e) {
        return this.checkoutFlow === C.C.ORB_CHECKOUT && null != e
            ? (0, d.P)(e)
            : this.checkoutFlow === C.C.COLLECTIBLES_CHECKOUT
              ? A.FYj
              : this.checkoutFlow === C.C.PREMIUM_CHECKOUT
                ? N.tv
                : void 0;
    }
    trackPaymentFlowCanceled(e) {
        let {
            loadId: t,
            skuId: n,
            skuProductLine: l,
            applicationId: r,
            discoverySessionId: i,
            analyticsLocation: o,
            analyticsLocations: s,
            analyticsObject: a,
            analyticsSourceLocation: u,
            isGift: c,
            eligibleForTrial: d,
        } = e;
        E.default.track(A.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: i,
            payment_type: A.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: c,
            sku_id: n,
            sku_product_line: l,
            application_id: r,
            location: o ?? a,
            location_stack: s,
            source: u,
            eligible_for_trial: d,
            payment_modal_version: "v2",
            checkout_design: h.r.UNIFIED,
            checkout_flow: this.checkoutFlow,
            ...(this.checkoutFlow === C.C.PREMIUM_CHECKOUT ? { subscription_type: A.rzx.PREMIUM } : {}),
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
                    skuProductLine: E,
                    discoverySessionId: C,
                    applicationId: h,
                    activeSubscription: m,
                },
                unifiedCheckoutProviderProps: { analyticsLocations: S, analyticsSourceLocation: I },
                forwardedPaymentModalProps: { analyticsObject: p, ...A } = {},
                tenantParams: N,
            } = e,
            T = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            g = arguments.length > 2 ? arguments[2] : void 0,
            y = arguments.length > 3 ? arguments[3] : void 0,
            P = { current: y ?? (0, i.A)() },
            O = { current: null },
            { modalKey: v } = g,
            x = this.generateRenderHeader(),
            U = h ?? this.getApplicationId(d),
            L = !!(null != t && t.isGift),
            w = !1,
            j = {
                ...A,
                checkoutFlow: this.checkoutFlow,
                checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                stepConfigs: this.generateCheckoutStepConfigs({ isGift: L }),
                onComplete: (e) => {
                    null != u && u(e), (w = !0);
                },
                onClose: c,
                renderHeader: x,
                skuId: d ?? null,
                tenantParams: N ?? {},
                loadId: P.current,
                onOrderCreated: function (e) {
                    (P.current = e.id), (O.current = e);
                },
                discoverySessionId: C,
                activeSubscription: m ?? null,
                applicationId: U,
                analyticsLocations: S,
                analyticsObject: p,
                analyticsSourceLocation: I,
                giftContextProps: t,
            };
        if ("modal" === T)
            return (0, o.openModalLazy)(
                async () => {
                    let { UnifiedCheckoutInstance: e } = await Promise.all([
                        n.e("11005"),
                        n.e("93438"),
                        n.e("54791"),
                        n.e("25246"),
                        n.e("14648"),
                        n.e("8430"),
                    ]).then(n.bind(n, 427325));
                    return (t) => (0, l.jsx)(e, { ...j, renderModalProps: t });
                },
                {
                    ...g,
                    onCloseRequest: () => {
                        null != g.onCloseRequest && g.onCloseRequest(w, P.current),
                            g.skipCloseModalOnCloseRequest || (0, o.closeModal)(v);
                    },
                    onCloseCallback: () => {
                        a.h.dispatch({ type: "CHECKOUT_MODAL_CLOSE", didSucceed: w }),
                            w ||
                                ((0, _.S)({ checkoutSucceeded: w, order: O.current }),
                                this.trackPaymentFlowCanceled({
                                    loadId: P.current,
                                    skuId: d,
                                    skuProductLine: E,
                                    applicationId: U,
                                    discoverySessionId: C,
                                    analyticsLocation: A.analyticsLocation,
                                    analyticsLocations: S,
                                    analyticsObject: p,
                                    analyticsSourceLocation: I,
                                    isGift: L,
                                    eligibleForTrial: null != A.trialId,
                                })),
                            null != g.onCloseCallback && g.onCloseCallback(w),
                            null != c && c(w, d);
                    },
                    modalKey: v,
                },
            );
        {
            let e = A.paymentModalOnClose ?? c,
                t = { transitionState: s.ip.ENTERED, onClose: () => (null != e && e(!1), Promise.resolve()) };
            return (0, l.jsx)(r.Suspense, {
                fallback: (0, l.jsx)(f.KT, {}),
                children: (0, l.jsx)(R, { ...j, paymentModalOnClose: e, renderModalProps: t }),
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
