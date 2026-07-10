n.d(t, { od: () => R }), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(132500),
    o = n(192308),
    a = n(231723),
    s = n(166532),
    u = n(925847),
    c = n(310829),
    d = n(174459),
    E = n(75304),
    C = n(145659),
    h = n(241440),
    m = n(496920),
    _ = n(982291),
    S = n(291767),
    I = n(331611),
    f = n(169797),
    p = n(652215);
n(322076);
var A = n(202541),
    N = n(375708);
let g = {
        [E.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, excludePaymentAuthSteps: !0, predicateStepType: "unified" },
        [E.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [E.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [E.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
        [E.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [E.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [E.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [E.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
        [E.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "one_time_payment" },
        [E.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
    },
    y = (0, r.lazy)(() =>
        Promise.all([n.e("11005"), n.e("93438"), n.e("25246"), n.e("33319"), n.e("8430")])
            .then(n.bind(n, 427325))
            .then((e) => {
                let { UnifiedCheckoutInstance: t } = e;
                return { default: t };
            }),
    ),
    T = (e) => (0, l.jsx)(y, { ...e });
class R {
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
              ? S.kO
              : "subscription" === t
                ? S.r3
                : {
                      key: null,
                      renderStep: (e) => (0, l.jsx)(I.e, { paymentModalStepProps: e, defaultStep: s.pn.REVIEW }),
                  };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== E.C.ORB_CHECKOUT)
            return {
                key: s.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, l.jsx)(_.c, {
                        checkoutFlow: this.checkoutFlow,
                        paymentModalStepProps: e,
                        returnStep: s.pn.REVIEW,
                        returnStepIfNoPaymentSources: t && n ? s.pn.GIFT_CUSTOMIZATION : void 0,
                    }),
                options: { renderHeader: !0 },
            };
    }
    getGiftCustomizationStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls,
            r = this.getCheckoutStep(s.pn.GIFT_CUSTOMIZATION);
        if (t && n && null != r)
            return {
                key: s.pn.GIFT_CUSTOMIZATION,
                renderStep: (e) => (0, l.jsx)(r, { ...e }),
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => N.intl.string(N.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(s.pn.REVIEW);
        return {
            key: s.pn.REVIEW,
            renderStep: (t) => (0, l.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => N.intl.string(N.t.QBnNHq) },
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
            a = this.getAddPaymentStepConfig({ isGift: t }),
            u = this.getReviewStepConfig(),
            c = this.createDefinedStepConfigsArray([i, ...(null != o ? [o] : []), ...l, a, ...(r ? [] : S.PL), u]);
        return null != n && c.push({ key: s.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c;
    }
    getApplicationId(e) {
        return this.checkoutFlow === E.C.ORB_CHECKOUT && null != e
            ? (0, c.P)(e)
            : this.checkoutFlow === E.C.COLLECTIBLES_CHECKOUT
              ? p.FYj
              : this.checkoutFlow === E.C.PREMIUM_CHECKOUT
                ? A.tv
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
            analyticsLocations: a,
            analyticsObject: s,
            analyticsSourceLocation: u,
            isGift: c,
            eligibleForTrial: h,
        } = e;
        d.default.track(p.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: i,
            payment_type: p.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: c,
            sku_id: n,
            sku_product_line: l,
            application_id: r,
            location: o ?? s,
            location_stack: a,
            source: u,
            eligible_for_trial: h,
            payment_modal_version: "v2",
            checkout_design: C.r.UNIFIED,
            checkout_flow: this.checkoutFlow,
            ...(this.checkoutFlow === E.C.PREMIUM_CHECKOUT ? { subscription_type: p.rzx.PREMIUM } : {}),
            ...this.override_analytic_params,
        });
    }
    getStandaloneLoadId() {
        return (0, u.A)() ?? (0, i.A)();
    }
    renderCheckoutInstance(e) {
        let {
                giftContextProps: t,
                checkoutHandlers: { onComplete: s, onClose: u } = {},
                checkoutConfiguration: {
                    skuId: c,
                    skuProductLine: d,
                    discoverySessionId: E,
                    applicationId: C,
                    activeSubscription: m,
                },
                unifiedCheckoutProviderProps: { analyticsLocations: _, analyticsSourceLocation: S },
                forwardedPaymentModalProps: { analyticsObject: I, ...p } = {},
                tenantParams: A,
            } = e,
            N = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            g = arguments.length > 2 ? arguments[2] : void 0,
            y = arguments.length > 3 ? arguments[3] : void 0,
            R = { current: y ?? (0, i.A)() },
            P = { current: null },
            { modalKey: O } = g,
            v = this.generateRenderHeader(),
            x = C ?? this.getApplicationId(c),
            U = !!(null != t && t.isGift),
            L = !1,
            j = {
                ...p,
                checkoutFlow: this.checkoutFlow,
                checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                stepConfigs: this.generateCheckoutStepConfigs({ isGift: U }),
                onComplete: (e) => {
                    null != s && s(e), (L = !0);
                },
                onClose: u,
                renderHeader: v,
                skuId: c ?? null,
                tenantParams: A ?? {},
                loadId: R.current,
                onOrderCreated: function (e) {
                    (R.current = e.id), (P.current = e);
                },
                discoverySessionId: E,
                activeSubscription: m ?? null,
                applicationId: x,
                analyticsLocations: _,
                analyticsObject: I,
                analyticsSourceLocation: S,
                giftContextProps: t,
            };
        if ("modal" === N)
            return (0, o.openModalLazy)(
                async () => {
                    let { UnifiedCheckoutInstance: e } = await Promise.all([
                        n.e("11005"),
                        n.e("93438"),
                        n.e("25246"),
                        n.e("33319"),
                        n.e("8430"),
                    ]).then(n.bind(n, 427325));
                    return (t) => (0, l.jsx)(e, { ...j, renderModalProps: t });
                },
                {
                    ...g,
                    onCloseRequest: () => {
                        null != g.onCloseRequest && g.onCloseRequest(L, R.current),
                            g.skipCloseModalOnCloseRequest || (0, o.closeModal)(O);
                    },
                    onCloseCallback: () => {
                        L ||
                            ((0, h.S)({ checkoutSucceeded: L, order: P.current }),
                            this.trackPaymentFlowCanceled({
                                loadId: R.current,
                                skuId: c,
                                skuProductLine: d,
                                applicationId: x,
                                discoverySessionId: E,
                                analyticsLocation: p.analyticsLocation,
                                analyticsLocations: _,
                                analyticsObject: I,
                                analyticsSourceLocation: S,
                                isGift: U,
                                eligibleForTrial: null != p.trialId,
                            })),
                            null != g.onCloseCallback && g.onCloseCallback(L),
                            null != u && u(L, c);
                    },
                    modalKey: O,
                },
            );
        {
            let e = p.paymentModalOnClose ?? u,
                t = { transitionState: a.ip.ENTERED, onClose: () => (null != e && e(!1), Promise.resolve()) };
            return (0, l.jsx)(r.Suspense, {
                fallback: (0, l.jsx)(f.KT, {}),
                children: (0, l.jsx)(T, { ...j, paymentModalOnClose: e, renderModalProps: t }),
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
