o.d(t, { j9: () => P, od: () => F }), o(321073);
var n = o(477900),
    i = o(582128),
    l = o(132500),
    r = o(192308),
    a = o(231723),
    s = o(228366),
    u = o(166532),
    C = o(925847),
    c = o(310829),
    p = o(174459),
    d = o(75304),
    h = o(145659),
    _ = o(241440),
    k = o(568451),
    S = o(982291),
    f = o(852607),
    m = o(331611),
    E = o(480642),
    T = o(652215);
o(322076);
var w = o(202541),
    g = o(375708);
let O = {
        [d.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, excludePaymentAuthSteps: !0, predicateStepType: "unified" },
        [d.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [d.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [d.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
        [d.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [d.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [d.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [d.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
        [d.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "one_time_payment" },
        [d.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
        [d.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
    },
    y = (0, i.lazy)(() =>
        Promise.all([o.e("339384"), o.e("793438"), o.e("154791"), o.e("725246"), o.e("414648"), o.e("208430")])
            .then(o.bind(o, 427325))
            .then((e) => {
                let { UnifiedCheckoutInstance: t } = e;
                return { default: t };
            }),
    );
function I(e) {
    return (0, n.jsx)(y, { ...e });
}
class F {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = k.Y[e];
        if (
            !(function (e, t) {
                return null != t && t.implemented && t.flowType === e;
            })(e, t)
        )
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = O[e]),
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
                let { handleClose: o, step: i } = t;
                return (0, n.jsx)(e, { onClose: o, step: i });
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
                      renderStep: (e) => (0, n.jsx)(m.e, { paymentModalStepProps: e, defaultStep: u.pn.REVIEW }),
                  };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: o } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== d.C.ORB_CHECKOUT)
            return {
                key: u.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, n.jsx)(S.c, {
                        checkoutFlow: this.checkoutFlow,
                        paymentModalStepProps: e,
                        returnStep: u.pn.REVIEW,
                        returnStepIfNoPaymentSources: t && o ? u.pn.GIFT_CUSTOMIZATION : void 0,
                    }),
                options: { renderHeader: !0 },
            };
    }
    getGiftCustomizationStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: o } = this.internalCheckoutFlowControls,
            i = this.getCheckoutStep(u.pn.GIFT_CUSTOMIZATION);
        if (t && o && null != i)
            return {
                key: u.pn.GIFT_CUSTOMIZATION,
                renderStep: (e) => (0, n.jsx)(i, { ...e }),
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => g.intl.string(g.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(u.pn.REVIEW);
        return {
            key: u.pn.REVIEW,
            renderStep: (t) => (0, n.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => g.intl.string(g.t.QBnNHq) },
        };
    }
    createDefinedStepConfigsArray(e) {
        return e.filter((e) => null != e);
    }
    generateCheckoutStepConfigs(e) {
        let { isGift: t } = e,
            { CUSTOM_CONFIRM_STEP_CONFIG: o, STEPS_BEFORE_CHECKOUT: n = [] } = this.tenantCheckoutFlowConfig,
            { excludePaymentAuthSteps: i } = this.internalCheckoutFlowControls,
            l = this.getPredicateStepConfig(),
            r = this.getGiftCustomizationStepConfig({ isGift: t }),
            a = this.getAddPaymentStepConfig({ isGift: t }),
            s = this.getReviewStepConfig(),
            C = this.createDefinedStepConfigsArray([l, ...(null != r ? [r] : []), ...n, a, ...(i ? [] : f.PL), s]);
        return null != o && C.push({ key: u.pn.CONFIRM, renderStep: o.renderStep, options: o.options }), C;
    }
    getApplicationId(e) {
        return this.checkoutFlow === d.C.ORB_CHECKOUT && null != e
            ? (0, c.P)(e)
            : this.checkoutFlow === d.C.COLLECTIBLES_CHECKOUT
              ? T.FYj
              : this.checkoutFlow === d.C.PREMIUM_CHECKOUT
                ? w.tv
                : void 0;
    }
    trackPaymentFlowCanceled(e) {
        let {
            loadId: t,
            skuId: o,
            skuProductLine: n,
            applicationId: i,
            discoverySessionId: l,
            analyticsLocation: r,
            analyticsLocations: a,
            analyticsObject: s,
            analyticsSourceLocation: u,
            isGift: C,
            eligibleForTrial: c,
        } = e;
        p.default.track(T.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: l,
            payment_type: T.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: C,
            sku_id: o,
            sku_product_line: n,
            application_id: i,
            location: r ?? s,
            location_stack: a,
            source: u,
            eligible_for_trial: c,
            payment_modal_version: "v2",
            checkout_design: h.r.UNIFIED,
            checkout_flow: this.checkoutFlow,
            ...(this.checkoutFlow === d.C.PREMIUM_CHECKOUT ? { subscription_type: T.rzx.PREMIUM } : {}),
            ...this.override_analytic_params,
        });
    }
    getStandaloneLoadId() {
        return (0, C.A)() ?? (0, l.A)();
    }
    renderCheckoutInstance(e) {
        let {
                giftContextProps: t,
                checkoutHandlers: { onComplete: u, onClose: C } = {},
                checkoutConfiguration: {
                    skuId: c,
                    skuProductLine: p,
                    discoverySessionId: d,
                    applicationId: h,
                    activeSubscription: k,
                    initialPaymentSourceId: S,
                },
                unifiedCheckoutProviderProps: { analyticsLocations: f, analyticsSourceLocation: m },
                forwardedPaymentModalProps: { analyticsObject: T, ...w } = {},
                tenantParams: g,
            } = e,
            O = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            y = arguments.length > 2 ? arguments[2] : void 0,
            F = arguments.length > 3 ? arguments[3] : void 0,
            P = { current: F ?? (0, l.A)() },
            U = { current: null },
            { modalKey: M } = y,
            R = this.generateRenderHeader(),
            A = h ?? this.getApplicationId(c),
            H = !!(null != t && t.isGift),
            G = !1,
            L = {
                ...w,
                checkoutFlow: this.checkoutFlow,
                checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                stepConfigs: this.generateCheckoutStepConfigs({ isGift: H }),
                onComplete: (e) => {
                    null != u && u(e), (G = !0);
                },
                onClose: C,
                renderHeader: R,
                skuId: c ?? null,
                tenantParams: g ?? {},
                loadId: P.current,
                onOrderCreated: function (e) {
                    (P.current = e.id), (U.current = e);
                },
                discoverySessionId: d,
                activeSubscription: k ?? null,
                initialPaymentSourceId: S ?? null,
                applicationId: A,
                analyticsLocations: f,
                analyticsObject: T,
                analyticsSourceLocation: m,
                giftContextProps: t,
            };
        if ("modal" === O)
            return (0, r.openModalLazy)(
                async () => {
                    let { UnifiedCheckoutInstance: e } = await Promise.all([
                        o.e("339384"),
                        o.e("793438"),
                        o.e("154791"),
                        o.e("725246"),
                        o.e("414648"),
                        o.e("208430"),
                    ]).then(o.bind(o, 427325));
                    return (t) => (0, n.jsx)(e, { ...L, renderModalProps: t });
                },
                {
                    ...y,
                    onCloseRequest: () => {
                        null != y.onCloseRequest && y.onCloseRequest(G, P.current),
                            y.skipCloseModalOnCloseRequest || (0, r.closeModal)(M);
                    },
                    onCloseCallback: () => {
                        s.h.dispatch({ type: "CHECKOUT_MODAL_CLOSE", didSucceed: G }),
                            G ||
                                ((0, _.S)({ checkoutSucceeded: G, order: U.current }),
                                this.trackPaymentFlowCanceled({
                                    loadId: P.current,
                                    skuId: c,
                                    skuProductLine: p,
                                    applicationId: A,
                                    discoverySessionId: d,
                                    analyticsLocation: w.analyticsLocation,
                                    analyticsLocations: f,
                                    analyticsObject: T,
                                    analyticsSourceLocation: m,
                                    isGift: H,
                                    eligibleForTrial: null != w.trialId,
                                })),
                            null != y.onCloseCallback && y.onCloseCallback(G),
                            null != C && C(G, c);
                    },
                    modalKey: M,
                },
            );
        {
            let e = w.paymentModalOnClose ?? C,
                t = { transitionState: a.ip.ENTERED, onClose: () => (null != e && e(!1), Promise.resolve()) };
            return (0, n.jsx)(i.Suspense, {
                fallback: (0, n.jsx)(E.KT, {}),
                children: (0, n.jsx)(I, { ...L, paymentModalOnClose: e, renderModalProps: t }),
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
let P =
    529845 == o.j
        ? i.memo(function (e) {
              let { checkoutFlow: t, params: o } = e,
                  n = i.useMemo(() => new F({ checkoutFlow: t }), [t]),
                  [l] = i.useState(() => n.getStandaloneLoadId());
              return n.renderStandaloneCheckout(o, l);
          })
        : null;
