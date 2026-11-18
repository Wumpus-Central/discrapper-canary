n(321073);
var l = n(477900),
    i = n(582128),
    o = n(115560),
    r = n(192308),
    a = n(231723),
    u = n(73153),
    s = n(166532),
    c = n(925847),
    d = n(310829),
    C = n(505274),
    h = n(129230),
    p = n(998312),
    m = n(145659),
    f = n(241440),
    E = n(132422),
    _ = n(982291),
    g = n(615456),
    A = n(331611),
    y = n(169797),
    S = n(260273),
    T = n(652215);
n(322076);
var N = n(682901),
    k = n(792996);
let x = {
        [p.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, excludePaymentAuthSteps: !0, predicateStepType: "unified" },
        [p.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [p.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [p.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
        [p.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [p.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [p.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [p.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
        [p.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "one_time_payment" },
        [p.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
        [p.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
        [p.C.PAST_DUE_MAGIC_LINK_CHECKOUT]: { allowGiftCustomization: !1 },
    },
    O = (0, i.lazy)(() =>
        Promise.all([n.e(339384), n.e(154791), n.e(725246), n.e(476375), n.e(208430)])
            .then(n.bind(n, 427325))
            .then((e) => {
                let { UnifiedCheckoutInstance: t } = e;
                return { default: t };
            }),
    );
function I(e) {
    return (0, l.jsx)(O, { ...e });
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
                    (this.internalCheckoutFlowControls = x[e]),
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
                        let { handleClose: n, step: i } = t;
                        return (0, l.jsx)(e, { onClose: n, step: i });
                    };
            }
            getPredicateStepConfig() {
                let { CUSTOM_PREDICATE_STEP_CONFIG: e } = this.tenantCheckoutFlowConfig,
                    { predicateStepType: t } = this.internalCheckoutFlowControls;
                return null != e
                    ? { key: null, renderStep: e.renderStep, options: e.options }
                    : "one_time_payment" === t
                      ? g.kO
                      : "subscription" === t
                        ? g.r3
                        : {
                              key: null,
                              renderStep: (e) =>
                                  (0, l.jsx)(A.e, { paymentModalStepProps: e, defaultStep: s.pn.REVIEW }),
                          };
            }
            getAddPaymentStepConfig(e) {
                let { isGift: t } = e,
                    { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
                if (this.checkoutFlow !== p.C.ORB_CHECKOUT)
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
                    i = this.getCheckoutStep(s.pn.GIFT_CUSTOMIZATION);
                if (t && n && null != i)
                    return {
                        key: s.pn.GIFT_CUSTOMIZATION,
                        renderStep: (e) => (0, l.jsx)(i, { ...e }),
                        options: {
                            modalSizeGetter: () => "xl",
                            useBreadcrumbLabel: () => k.intl.string(k.t["W685+b"]),
                        },
                    };
            }
            getReviewStepConfig() {
                let e = this.getCheckoutStep(s.pn.REVIEW);
                return {
                    key: s.pn.REVIEW,
                    renderStep: (t) => (0, l.jsx)(e, { ...t }),
                    options: { useBreadcrumbLabel: () => k.intl.string(k.t.QBnNHq) },
                };
            }
            createDefinedStepConfigsArray(e) {
                return e.filter((e) => null != e);
            }
            generateCheckoutStepConfigs(e) {
                let { isGift: t } = e,
                    { CUSTOM_CONFIRM_STEP_CONFIG: n, STEPS_BEFORE_CHECKOUT: l = [] } = this.tenantCheckoutFlowConfig,
                    { excludePaymentAuthSteps: i } = this.internalCheckoutFlowControls,
                    o = this.getPredicateStepConfig(),
                    r = this.getGiftCustomizationStepConfig({ isGift: t }),
                    a = this.getAddPaymentStepConfig({ isGift: t }),
                    u = this.getReviewStepConfig(),
                    c = this.createDefinedStepConfigsArray([
                        o,
                        ...(null != r ? [r] : []),
                        ...l,
                        a,
                        ...(i ? [] : g.PL),
                        u,
                    ]);
                return (null != n && c.push({ key: s.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c);
            }
            getApplicationId(e) {
                return this.checkoutFlow === p.C.ORB_CHECKOUT && null != e
                    ? (0, d.P)(e)
                    : this.checkoutFlow === p.C.COLLECTIBLES_CHECKOUT
                      ? T.FYj
                      : this.checkoutFlow === p.C.PREMIUM_CHECKOUT
                        ? N.tv
                        : void 0;
            }
            trackPaymentFlowCanceled(e) {
                let {
                        loadId: t,
                        skuId: n,
                        skuProductLine: l,
                        applicationId: i,
                        discoverySessionId: o,
                        analyticsLocation: r,
                        analyticsLocations: a,
                        analyticsObject: u,
                        analyticsSourceLocation: s,
                        isGift: c,
                        eligibleForTrial: d,
                    } = e,
                    f = C.A.balance;
                h.default.track(T.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: t,
                    discovery_session_id: o,
                    payment_type: T.frM[this.checkoutFlowConfiguration.purchaseType],
                    is_gift: c,
                    sku_id: n,
                    sku_product_line: l,
                    application_id: i,
                    location: r ?? u,
                    location_stack: a,
                    source: s,
                    eligible_for_trial: d,
                    payment_modal_version: "v2",
                    checkout_design: m.r.UNIFIED,
                    checkout_flow: this.checkoutFlow,
                    virtual_currency_balance: f,
                    ...(this.checkoutFlow === p.C.PREMIUM_CHECKOUT ? { subscription_type: T.rzx.PREMIUM } : {}),
                    ...this.override_analytic_params,
                });
            }
            getStandaloneLoadId() {
                return (0, c.A)() ?? (0, o.A)();
            }
            renderCheckoutInstance(e) {
                let {
                        giftContextProps: t,
                        checkoutHandlers: { onComplete: s, onClose: c } = {},
                        checkoutConfiguration: {
                            skuId: d,
                            skuProductLine: C,
                            discoverySessionId: h,
                            applicationId: p,
                            activeSubscription: m,
                        },
                        sharedCheckoutParams: E = S.iz,
                        unifiedCheckoutProviderProps: { analyticsLocations: _, analyticsSourceLocation: g },
                        forwardedPaymentModalProps: { analyticsObject: A, ...T } = {},
                        tenantParams: N,
                    } = e,
                    k = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
                    x = arguments.length > 2 ? arguments[2] : void 0,
                    O = arguments.length > 3 ? arguments[3] : void 0,
                    v = { current: O ?? (0, o.A)() },
                    w = { current: null },
                    { modalKey: j } = x,
                    P = this.generateRenderHeader(),
                    F = p ?? this.getApplicationId(d),
                    b = !!(null != t && t.isGift),
                    M = !1,
                    R = {
                        ...T,
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: this.generateCheckoutStepConfigs({ isGift: b }),
                        onComplete: (e) => {
                            (null != s && s(e), (M = !0));
                        },
                        onClose: c,
                        renderHeader: P,
                        skuId: d ?? null,
                        tenantParams: N ?? {},
                        loadId: v.current,
                        onOrderCreated: function (e) {
                            ((v.current = e.id), (w.current = e));
                        },
                        discoverySessionId: h,
                        activeSubscription: m ?? null,
                        sharedCheckoutParams: E,
                        applicationId: F,
                        analyticsLocations: _,
                        analyticsObject: A,
                        analyticsSourceLocation: g,
                        giftContextProps: t,
                    };
                if ("modal" === k)
                    return (0, r.mM)(
                        async () => {
                            let { UnifiedCheckoutInstance: e } = await Promise.all([
                                n.e(339384),
                                n.e(154791),
                                n.e(725246),
                                n.e(476375),
                                n.e(208430),
                            ]).then(n.bind(n, 427325));
                            return (t) => (0, l.jsx)(e, { ...R, renderModalProps: t });
                        },
                        {
                            ...x,
                            onCloseRequest: () => {
                                (null != x.onCloseRequest && x.onCloseRequest(M, v.current),
                                    x.skipCloseModalOnCloseRequest || (0, r.Oo)(j, x.contextKey));
                            },
                            onCloseCallback: () => {
                                (u.h.dispatch({ type: "CHECKOUT_MODAL_CLOSE", didSucceed: M }),
                                    M ||
                                        ((0, f.S)({ checkoutSucceeded: M, order: w.current }),
                                        this.trackPaymentFlowCanceled({
                                            loadId: v.current,
                                            skuId: d,
                                            skuProductLine: C,
                                            applicationId: F,
                                            discoverySessionId: h,
                                            analyticsLocation: T.analyticsLocation,
                                            analyticsLocations: _,
                                            analyticsObject: A,
                                            analyticsSourceLocation: g,
                                            isGift: b,
                                            eligibleForTrial: null != E.trialId,
                                        })),
                                    null != x.onCloseCallback && x.onCloseCallback(M),
                                    null != c && c(M, d));
                            },
                            modalKey: j,
                        },
                    );
                {
                    let e = T.paymentModalOnClose ?? c,
                        t = { transitionState: a.ip.ENTERED, onClose: () => (null != e && e(!1), Promise.resolve()) };
                    return (0, l.jsx)(i.Suspense, {
                        fallback: (0, l.jsx)(y.KT, {}),
                        children: (0, l.jsx)(I, { ...R, paymentModalOnClose: e, renderModalProps: t }),
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
