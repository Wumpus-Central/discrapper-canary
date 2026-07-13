n.d(t, { j9: () => R, od: () => y }), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(132500),
    o = n(192308),
    s = n(231723),
    a = n(166532),
    u = n(925847),
    c = n(310829),
    d = n(174459),
    C = n(75304),
    E = n(145659),
    m = n(241440),
    h = n(194247),
    _ = n(982291),
    S = n(291767),
    I = n(331611),
    f = n(169797),
    A = n(652215);
n(322076);
var p = n(202541),
    N = n(375708);
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
    T = (0, r.lazy)(() =>
        Promise.all([n.e("11005"), n.e("93438"), n.e("54791"), n.e("25246"), n.e("14648"), n.e("8430")])
            .then(n.bind(n, 427325))
            .then((e) => {
                let { UnifiedCheckoutInstance: t } = e;
                return { default: t };
            }),
    ),
    P = (e) => (0, l.jsx)(T, { ...e });
class y {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = h.Y[e];
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
                      renderStep: (e) => (0, l.jsx)(I.e, { paymentModalStepProps: e, defaultStep: a.pn.REVIEW }),
                  };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== C.C.ORB_CHECKOUT)
            return {
                key: a.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, l.jsx)(_.c, {
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
            r = this.getCheckoutStep(a.pn.GIFT_CUSTOMIZATION);
        if (t && n && null != r)
            return {
                key: a.pn.GIFT_CUSTOMIZATION,
                renderStep: (e) => (0, l.jsx)(r, { ...e }),
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => N.intl.string(N.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(a.pn.REVIEW);
        return {
            key: a.pn.REVIEW,
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
            s = this.getAddPaymentStepConfig({ isGift: t }),
            u = this.getReviewStepConfig(),
            c = this.createDefinedStepConfigsArray([i, ...(null != o ? [o] : []), ...l, s, ...(r ? [] : S.PL), u]);
        return null != n && c.push({ key: a.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c;
    }
    getApplicationId(e) {
        return this.checkoutFlow === C.C.ORB_CHECKOUT && null != e
            ? (0, c.P)(e)
            : this.checkoutFlow === C.C.COLLECTIBLES_CHECKOUT
              ? A.FYj
              : this.checkoutFlow === C.C.PREMIUM_CHECKOUT
                ? p.tv
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
            eligibleForTrial: m,
        } = e;
        d.default.track(A.HAw.PAYMENT_FLOW_CANCELED, {
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
            eligible_for_trial: m,
            payment_modal_version: "v2",
            checkout_design: E.r.UNIFIED,
            checkout_flow: this.checkoutFlow,
            ...(this.checkoutFlow === C.C.PREMIUM_CHECKOUT ? { subscription_type: A.rzx.PREMIUM } : {}),
            ...this.override_analytic_params,
        });
    }
    getStandaloneLoadId() {
        return (0, u.A)() ?? (0, i.A)();
    }
    renderCheckoutInstance(e) {
        let {
                giftContextProps: t,
                checkoutHandlers: { onComplete: a, onClose: u } = {},
                checkoutConfiguration: {
                    skuId: c,
                    skuProductLine: d,
                    discoverySessionId: C,
                    applicationId: E,
                    activeSubscription: h,
                },
                unifiedCheckoutProviderProps: { analyticsLocations: _, analyticsSourceLocation: S },
                forwardedPaymentModalProps: { analyticsObject: I, ...A } = {},
                tenantParams: p,
            } = e,
            N = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            g = arguments.length > 2 ? arguments[2] : void 0,
            T = arguments.length > 3 ? arguments[3] : void 0,
            y = { current: T ?? (0, i.A)() },
            R = { current: null },
            { modalKey: x } = g,
            O = this.generateRenderHeader(),
            v = E ?? this.getApplicationId(c),
            L = !!(null != t && t.isGift),
            j = !1,
            U = {
                ...A,
                checkoutFlow: this.checkoutFlow,
                checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                stepConfigs: this.generateCheckoutStepConfigs({ isGift: L }),
                onComplete: (e) => {
                    null != a && a(e), (j = !0);
                },
                onClose: u,
                renderHeader: O,
                skuId: c ?? null,
                tenantParams: p ?? {},
                loadId: y.current,
                onOrderCreated: function (e) {
                    (y.current = e.id), (R.current = e);
                },
                discoverySessionId: C,
                activeSubscription: h ?? null,
                applicationId: v,
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
                        n.e("54791"),
                        n.e("25246"),
                        n.e("14648"),
                        n.e("8430"),
                    ]).then(n.bind(n, 427325));
                    return (t) => (0, l.jsx)(e, { ...U, renderModalProps: t });
                },
                {
                    ...g,
                    onCloseRequest: () => {
                        null != g.onCloseRequest && g.onCloseRequest(j, y.current),
                            g.skipCloseModalOnCloseRequest || (0, o.closeModal)(x);
                    },
                    onCloseCallback: () => {
                        j ||
                            ((0, m.S)({ checkoutSucceeded: j, order: R.current }),
                            this.trackPaymentFlowCanceled({
                                loadId: y.current,
                                skuId: c,
                                skuProductLine: d,
                                applicationId: v,
                                discoverySessionId: C,
                                analyticsLocation: A.analyticsLocation,
                                analyticsLocations: _,
                                analyticsObject: I,
                                analyticsSourceLocation: S,
                                isGift: L,
                                eligibleForTrial: null != A.trialId,
                            })),
                            null != g.onCloseCallback && g.onCloseCallback(j),
                            null != u && u(j, c);
                    },
                    modalKey: x,
                },
            );
        {
            let e = A.paymentModalOnClose ?? u,
                t = { transitionState: s.ip.ENTERED, onClose: () => (null != e && e(!1), Promise.resolve()) };
            return (0, l.jsx)(r.Suspense, {
                fallback: (0, l.jsx)(f.KT, {}),
                children: (0, l.jsx)(P, { ...U, paymentModalOnClose: e, renderModalProps: t }),
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
let R =
    29845 == n.j
        ? r.memo(function (e) {
              let { checkoutFlow: t, params: n } = e,
                  l = r.useMemo(() => new y({ checkoutFlow: t }), [t]),
                  [i] = r.useState(() => l.getStandaloneLoadId());
              return l.renderStandaloneCheckout(n, i);
          })
        : null;
