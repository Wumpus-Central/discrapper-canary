(o.d(t, { j9: () => U, od: () => P }), o(321073));
var n = o(477900),
    i = o(582128),
    l = o(132500),
    r = o(192308),
    a = o(231723),
    s = o(228366),
    C = o(166532),
    u = o(925847),
    c = o(310829),
    p = o(505274),
    d = o(174459),
    h = o(75304),
    _ = o(145659),
    k = o(241440),
    S = o(630502),
    f = o(982291),
    m = o(852607),
    E = o(331611),
    T = o(169797),
    w = o(652215);
o(322076);
var O = o(202541),
    g = o(375708);
let I = {
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
        [h.C.PAST_DUE_MAGIC_LINK_CHECKOUT]: { allowGiftCustomization: !1 },
    },
    y = (0, i.lazy)(() =>
        Promise.all([o.e("339384"), o.e("793438"), o.e("154791"), o.e("725246"), o.e("312665"), o.e("208430")])
            .then(o.bind(o, 427325))
            .then((e) => {
                let { UnifiedCheckoutInstance: t } = e;
                return { default: t };
            }),
    );
function F(e) {
    return (0, n.jsx)(y, { ...e });
}
class P {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = S.Y[e];
        if (
            !(function (e, t) {
                return null != t && t.implemented && t.flowType === e;
            })(e, t)
        )
            throw Error(`Checkout flow ${e} is not implemented`);
        ((this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = I[e]),
            (this.override_analytic_params =
                this.tenantCheckoutFlowConfig.TENANT_PROVIDER_CONFIGS.overrideAnalyticParams));
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
              ? m.kO
              : "subscription" === t
                ? m.r3
                : {
                      key: null,
                      renderStep: (e) => (0, n.jsx)(E.e, { paymentModalStepProps: e, defaultStep: C.pn.REVIEW }),
                  };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: o } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== h.C.ORB_CHECKOUT)
            return {
                key: C.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, n.jsx)(f.c, {
                        checkoutFlow: this.checkoutFlow,
                        paymentModalStepProps: e,
                        returnStep: C.pn.REVIEW,
                        returnStepIfNoPaymentSources: t && o ? C.pn.GIFT_CUSTOMIZATION : void 0,
                    }),
                options: { renderHeader: !0 },
            };
    }
    getGiftCustomizationStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: o } = this.internalCheckoutFlowControls,
            i = this.getCheckoutStep(C.pn.GIFT_CUSTOMIZATION);
        if (t && o && null != i)
            return {
                key: C.pn.GIFT_CUSTOMIZATION,
                renderStep: (e) => (0, n.jsx)(i, { ...e }),
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => g.intl.string(g.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(C.pn.REVIEW);
        return {
            key: C.pn.REVIEW,
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
            u = this.createDefinedStepConfigsArray([l, ...(null != r ? [r] : []), ...n, a, ...(i ? [] : m.PL), s]);
        return (null != o && u.push({ key: C.pn.CONFIRM, renderStep: o.renderStep, options: o.options }), u);
    }
    getApplicationId(e) {
        return this.checkoutFlow === h.C.ORB_CHECKOUT && null != e
            ? (0, c.P)(e)
            : this.checkoutFlow === h.C.COLLECTIBLES_CHECKOUT
              ? w.FYj
              : this.checkoutFlow === h.C.PREMIUM_CHECKOUT
                ? O.tv
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
                analyticsSourceLocation: C,
                isGift: u,
                eligibleForTrial: c,
            } = e,
            k = p.A.balance;
        d.default.track(w.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: l,
            payment_type: w.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: u,
            sku_id: o,
            sku_product_line: n,
            application_id: i,
            location: r ?? s,
            location_stack: a,
            source: C,
            eligible_for_trial: c,
            payment_modal_version: "v2",
            checkout_design: _.r.UNIFIED,
            checkout_flow: this.checkoutFlow,
            virtual_currency_balance: k,
            ...(this.checkoutFlow === h.C.PREMIUM_CHECKOUT ? { subscription_type: w.rzx.PREMIUM } : {}),
            ...this.override_analytic_params,
        });
    }
    getStandaloneLoadId() {
        return (0, u.A)() ?? (0, l.A)();
    }
    renderCheckoutInstance(e) {
        let {
                giftContextProps: t,
                checkoutHandlers: { onComplete: C, onClose: u } = {},
                checkoutConfiguration: {
                    skuId: c,
                    skuProductLine: p,
                    discoverySessionId: d,
                    applicationId: h,
                    activeSubscription: _,
                    initialPaymentSourceId: S,
                },
                unifiedCheckoutProviderProps: { analyticsLocations: f, analyticsSourceLocation: m },
                forwardedPaymentModalProps: { analyticsObject: E, ...w } = {},
                tenantParams: O,
            } = e,
            g = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            I = arguments.length > 2 ? arguments[2] : void 0,
            y = arguments.length > 3 ? arguments[3] : void 0,
            P = { current: y ?? (0, l.A)() },
            U = { current: null },
            { modalKey: M } = I,
            R = this.generateRenderHeader(),
            A = h ?? this.getApplicationId(c),
            G = !!(null != t && t.isGift),
            H = !1,
            L = {
                ...w,
                checkoutFlow: this.checkoutFlow,
                checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                stepConfigs: this.generateCheckoutStepConfigs({ isGift: G }),
                onComplete: (e) => {
                    (null != C && C(e), (H = !0));
                },
                onClose: u,
                renderHeader: R,
                skuId: c ?? null,
                tenantParams: O ?? {},
                loadId: P.current,
                onOrderCreated: function (e) {
                    ((P.current = e.id), (U.current = e));
                },
                discoverySessionId: d,
                activeSubscription: _ ?? null,
                initialPaymentSourceId: S ?? null,
                applicationId: A,
                analyticsLocations: f,
                analyticsObject: E,
                analyticsSourceLocation: m,
                giftContextProps: t,
            };
        if ("modal" === g)
            return (0, r.openModalLazy)(
                async () => {
                    let { UnifiedCheckoutInstance: e } = await Promise.all([
                        o.e("339384"),
                        o.e("793438"),
                        o.e("154791"),
                        o.e("725246"),
                        o.e("312665"),
                        o.e("208430"),
                    ]).then(o.bind(o, 427325));
                    return (t) => (0, n.jsx)(e, { ...L, renderModalProps: t });
                },
                {
                    ...I,
                    onCloseRequest: () => {
                        (null != I.onCloseRequest && I.onCloseRequest(H, P.current),
                            I.skipCloseModalOnCloseRequest || (0, r.closeModal)(M));
                    },
                    onCloseCallback: () => {
                        (s.h.dispatch({ type: "CHECKOUT_MODAL_CLOSE", didSucceed: H }),
                            H ||
                                ((0, k.S)({ checkoutSucceeded: H, order: U.current }),
                                this.trackPaymentFlowCanceled({
                                    loadId: P.current,
                                    skuId: c,
                                    skuProductLine: p,
                                    applicationId: A,
                                    discoverySessionId: d,
                                    analyticsLocation: w.analyticsLocation,
                                    analyticsLocations: f,
                                    analyticsObject: E,
                                    analyticsSourceLocation: m,
                                    isGift: G,
                                    eligibleForTrial: null != w.trialId,
                                })),
                            null != I.onCloseCallback && I.onCloseCallback(H),
                            null != u && u(H, c));
                    },
                    modalKey: M,
                },
            );
        {
            let e = w.paymentModalOnClose ?? u,
                t = { transitionState: a.ip.ENTERED, onClose: () => (null != e && e(!1), Promise.resolve()) };
            return (0, n.jsx)(i.Suspense, {
                fallback: (0, n.jsx)(T.KT, {}),
                children: (0, n.jsx)(F, { ...L, paymentModalOnClose: e, renderModalProps: t }),
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
let U =
    529845 == o.j
        ? i.memo(function (e) {
              let { checkoutFlow: t, params: o } = e,
                  n = i.useMemo(() => new P({ checkoutFlow: t }), [t]),
                  [l] = i.useState(() => n.getStandaloneLoadId());
              return n.renderStandaloneCheckout(o, l);
          })
        : null;
