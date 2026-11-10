n(321073);
var l = n(477900),
    o = n(582128),
    i = n(115560),
    r = n(192308),
    u = n(231723),
    a = n(73153),
    s = n(166532),
    c = n(925847),
    d = n(310829),
    C = n(505274),
    p = n(129230),
    h = n(998312),
    m = n(145659),
    f = n(241440),
    E = n(132422),
    _ = n(982291),
    A = n(615456),
    g = n(331611),
    y = n(169797),
    T = n(260273),
    S = n(652215);
n(322076);
var N = n(682901),
    O = n(792996);
let k = {
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
    I = (0, o.lazy)(() =>
        Promise.all([n.e(339384), n.e(154791), n.e(725246), n.e(476375), n.e(208430)])
            .then(n.bind(n, 427325))
            .then((e) => {
                let { UnifiedCheckoutInstance: t } = e;
                return { default: t };
            }),
    );
function v(e) {
    return (0, l.jsx)(I, { ...e });
}
n.d(
    t,
    {},
    {
        od: class {
            checkoutFlow;
            checkoutFlowConfiguration;
            tenantCheckoutFlowConfig;
            internalCheckoutFlowControls;
            override_analytic_params;
            constructor({ checkoutFlow: e }) {
                this.checkoutFlow = e;
                let t = E.Y[e];
                if (null == t || !t.implemented || t.flowType !== e)
                    throw Error(`Checkout flow ${e} is not implemented`);
                ((this.checkoutFlowConfiguration = t),
                    (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
                    (this.internalCheckoutFlowControls = k[e]),
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
                        let { handleClose: n, step: o } = t;
                        return (0, l.jsx)(e, { onClose: n, step: o });
                    };
            }
            getPredicateStepConfig() {
                let { CUSTOM_PREDICATE_STEP_CONFIG: e } = this.tenantCheckoutFlowConfig,
                    { predicateStepType: t } = this.internalCheckoutFlowControls;
                return null != e
                    ? { key: null, renderStep: e.renderStep, options: e.options }
                    : "one_time_payment" === t
                      ? A.kO
                      : "subscription" === t
                        ? A.r3
                        : {
                              key: null,
                              renderStep: (e) =>
                                  (0, l.jsx)(g.e, { paymentModalStepProps: e, defaultStep: s.pn.REVIEW }),
                          };
            }
            getAddPaymentStepConfig(e) {
                let { isGift: t } = e,
                    { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
                if (this.checkoutFlow !== h.C.ORB_CHECKOUT)
                    return {
                        key: s.pn.ADD_PAYMENT_STEPS,
                        renderStep: (e) =>
                            (0, l.jsx)(_.c, {
                                checkoutFlow: this.checkoutFlow,
                                paymentModalStepProps: e,
                                returnStep: s.pn.REVIEW,
                                isGiftCustomizationEnabled: t && n,
                            }),
                        options: { renderHeader: !0 },
                    };
            }
            getGiftCustomizationStepConfig(e) {
                let { isGift: t } = e,
                    { allowGiftCustomization: n } = this.internalCheckoutFlowControls,
                    o = this.getCheckoutStep(s.pn.GIFT_CUSTOMIZATION);
                if (t && n && null != o)
                    return {
                        key: s.pn.GIFT_CUSTOMIZATION,
                        renderStep: (e) => (0, l.jsx)(o, { ...e }),
                        options: {
                            modalSizeGetter: () => "xl",
                            useBreadcrumbLabel: () => O.intl.string(O.t["W685+b"]),
                        },
                    };
            }
            getReviewStepConfig() {
                let e = this.getCheckoutStep(s.pn.REVIEW);
                return {
                    key: s.pn.REVIEW,
                    renderStep: (t) => (0, l.jsx)(e, { ...t }),
                    options: { useBreadcrumbLabel: () => O.intl.string(O.t.QBnNHq) },
                };
            }
            createDefinedStepConfigsArray(e) {
                return e.filter((e) => null != e);
            }
            generateCheckoutStepConfigs(e) {
                let { isGift: t } = e,
                    { CUSTOM_CONFIRM_STEP_CONFIG: n, STEPS_BEFORE_CHECKOUT: l = [] } = this.tenantCheckoutFlowConfig,
                    { excludePaymentAuthSteps: o } = this.internalCheckoutFlowControls,
                    i = this.getPredicateStepConfig(),
                    r = this.getGiftCustomizationStepConfig({ isGift: t }),
                    u = this.getAddPaymentStepConfig({ isGift: t }),
                    a = this.getReviewStepConfig(),
                    c = this.createDefinedStepConfigsArray([
                        i,
                        ...(null != r ? [r] : []),
                        ...l,
                        u,
                        ...(o ? [] : A.PL),
                        a,
                    ]);
                return (null != n && c.push({ key: s.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c);
            }
            getApplicationId(e) {
                return this.checkoutFlow === h.C.ORB_CHECKOUT && null != e
                    ? (0, d.P)(e)
                    : this.checkoutFlow === h.C.COLLECTIBLES_CHECKOUT
                      ? S.FYj
                      : this.checkoutFlow === h.C.PREMIUM_CHECKOUT
                        ? N.tv
                        : void 0;
            }
            trackPaymentFlowCanceled(e) {
                let {
                        loadId: t,
                        skuId: n,
                        skuProductLine: l,
                        applicationId: o,
                        discoverySessionId: i,
                        analyticsLocation: r,
                        analyticsLocations: u,
                        analyticsObject: a,
                        analyticsSourceLocation: s,
                        isGift: c,
                        eligibleForTrial: d,
                    } = e,
                    f = C.A.balance;
                p.default.track(S.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: t,
                    discovery_session_id: i,
                    payment_type: S.frM[this.checkoutFlowConfiguration.purchaseType],
                    is_gift: c,
                    sku_id: n,
                    sku_product_line: l,
                    application_id: o,
                    location: r ?? a,
                    location_stack: u,
                    source: s,
                    eligible_for_trial: d,
                    payment_modal_version: "v2",
                    checkout_design: m.r.UNIFIED,
                    checkout_flow: this.checkoutFlow,
                    virtual_currency_balance: f,
                    ...(this.checkoutFlow === h.C.PREMIUM_CHECKOUT ? { subscription_type: S.rzx.PREMIUM } : {}),
                    ...this.override_analytic_params,
                });
            }
            getStandaloneLoadId() {
                return (0, c.A)() ?? (0, i.A)();
            }
            renderCheckoutInstance(e) {
                let {
                        giftContextProps: t,
                        checkoutHandlers: { onComplete: s, onClose: c } = {},
                        checkoutConfiguration: {
                            skuId: d,
                            skuProductLine: C,
                            discoverySessionId: p,
                            applicationId: h,
                            activeSubscription: m,
                        },
                        sharedCheckoutParams: E = T.iz,
                        unifiedCheckoutProviderProps: { analyticsLocations: _, analyticsSourceLocation: A },
                        forwardedPaymentModalProps: { analyticsObject: g, ...S } = {},
                        tenantParams: N,
                    } = e,
                    O = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
                    k = arguments.length > 2 ? arguments[2] : void 0,
                    I = arguments.length > 3 ? arguments[3] : void 0,
                    x = { current: I ?? (0, i.A)() },
                    w = { current: null },
                    { modalKey: F } = k,
                    P = this.generateRenderHeader(),
                    j = h ?? this.getApplicationId(d),
                    b = !!(null != t && t.isGift),
                    R = !1,
                    M = {
                        ...S,
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: this.generateCheckoutStepConfigs({ isGift: b }),
                        onComplete: (e) => {
                            (null != s && s(e), (R = !0));
                        },
                        onClose: c,
                        renderHeader: P,
                        skuId: d ?? null,
                        tenantParams: N ?? {},
                        loadId: x.current,
                        onOrderCreated: function (e) {
                            ((x.current = e.id), (w.current = e));
                        },
                        discoverySessionId: p,
                        activeSubscription: m ?? null,
                        sharedCheckoutParams: E,
                        applicationId: j,
                        analyticsLocations: _,
                        analyticsObject: g,
                        analyticsSourceLocation: A,
                        giftContextProps: t,
                    };
                if ("modal" === O)
                    return (0, r.mM)(
                        async () => {
                            let { UnifiedCheckoutInstance: e } = await Promise.all([
                                n.e(339384),
                                n.e(154791),
                                n.e(725246),
                                n.e(476375),
                                n.e(208430),
                            ]).then(n.bind(n, 427325));
                            return (t) => (0, l.jsx)(e, { ...M, renderModalProps: t });
                        },
                        {
                            ...k,
                            onCloseRequest: () => {
                                (null != k.onCloseRequest && k.onCloseRequest(R, x.current),
                                    k.skipCloseModalOnCloseRequest || (0, r.Oo)(F, k.contextKey));
                            },
                            onCloseCallback: () => {
                                (a.h.dispatch({ type: "CHECKOUT_MODAL_CLOSE", didSucceed: R }),
                                    R ||
                                        ((0, f.S)({ checkoutSucceeded: R, order: w.current }),
                                        this.trackPaymentFlowCanceled({
                                            loadId: x.current,
                                            skuId: d,
                                            skuProductLine: C,
                                            applicationId: j,
                                            discoverySessionId: p,
                                            analyticsLocation: S.analyticsLocation,
                                            analyticsLocations: _,
                                            analyticsObject: g,
                                            analyticsSourceLocation: A,
                                            isGift: b,
                                            eligibleForTrial: null != E.trialId,
                                        })),
                                    null != k.onCloseCallback && k.onCloseCallback(R),
                                    null != c && c(R, d));
                            },
                            modalKey: F,
                        },
                    );
                {
                    let e = S.paymentModalOnClose ?? c,
                        t = { transitionState: u.ip.ENTERED, onClose: () => (null != e && e(!1), Promise.resolve()) };
                    return (0, l.jsx)(o.Suspense, {
                        fallback: (0, l.jsx)(y.KT, {}),
                        children: (0, l.jsx)(v, { ...M, paymentModalOnClose: e, renderModalProps: t }),
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
        },
    },
);
