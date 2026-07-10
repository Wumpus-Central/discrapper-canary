n.d(t, { j9: () => R, od: () => P }), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(132500),
    a = n(192308),
    o = n(231723),
    s = n(166532),
    u = n(925847),
    c = n(310829),
    d = n(174459),
    m = n(75304),
    E = n(145659),
    C = n(241440),
    p = n(496920),
    h = n(982291),
    _ = n(291767),
    S = n(331611),
    I = n(169797),
    f = n(652215);
n(322076);
var N = n(202541),
    A = n(375708);
let y = {
        [m.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, excludePaymentAuthSteps: !0, predicateStepType: "unified" },
        [m.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [m.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [m.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
        [m.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [m.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [m.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [m.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
        [m.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "one_time_payment" },
        [m.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
    },
    T = (0, r.lazy)(() =>
        Promise.all([n.e("11005"), n.e("93438"), n.e("25246"), n.e("33319"), n.e("8430")])
            .then(n.bind(n, 427325))
            .then((e) => {
                let { UnifiedCheckoutInstance: t } = e;
                return { default: t };
            }),
    ),
    g = (e) => (0, l.jsx)(T, { ...e });
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
            (this.internalCheckoutFlowControls = y[e]),
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
              ? _.kO
              : "subscription" === t
                ? _.r3
                : {
                      key: null,
                      renderStep: (e) => (0, l.jsx)(S.e, { paymentModalStepProps: e, defaultStep: s.pn.REVIEW }),
                  };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== m.C.ORB_CHECKOUT)
            return {
                key: s.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, l.jsx)(h.c, {
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
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => A.intl.string(A.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(s.pn.REVIEW);
        return {
            key: s.pn.REVIEW,
            renderStep: (t) => (0, l.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => A.intl.string(A.t.QBnNHq) },
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
            a = this.getGiftCustomizationStepConfig({ isGift: t }),
            o = this.getAddPaymentStepConfig({ isGift: t }),
            u = this.getReviewStepConfig(),
            c = this.createDefinedStepConfigsArray([i, ...(null != a ? [a] : []), ...l, o, ...(r ? [] : _.PL), u]);
        return null != n && c.push({ key: s.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c;
    }
    getApplicationId(e) {
        return this.checkoutFlow === m.C.ORB_CHECKOUT && null != e
            ? (0, c.P)(e)
            : this.checkoutFlow === m.C.COLLECTIBLES_CHECKOUT
              ? f.FYj
              : this.checkoutFlow === m.C.PREMIUM_CHECKOUT
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
            analyticsLocation: a,
            analyticsLocations: o,
            analyticsObject: s,
            analyticsSourceLocation: u,
            isGift: c,
            eligibleForTrial: C,
        } = e;
        d.default.track(f.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: i,
            payment_type: f.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: c,
            sku_id: n,
            sku_product_line: l,
            application_id: r,
            location: a ?? s,
            location_stack: o,
            source: u,
            eligible_for_trial: C,
            payment_modal_version: "v2",
            checkout_design: E.r.UNIFIED,
            checkout_flow: this.checkoutFlow,
            ...(this.checkoutFlow === m.C.PREMIUM_CHECKOUT ? { subscription_type: f.rzx.PREMIUM } : {}),
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
                    discoverySessionId: m,
                    applicationId: E,
                    activeSubscription: p,
                },
                unifiedCheckoutProviderProps: { analyticsLocations: h, analyticsSourceLocation: _ },
                forwardedPaymentModalProps: { analyticsObject: S, ...f } = {},
                tenantParams: N,
            } = e,
            A = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            y = arguments.length > 2 ? arguments[2] : void 0,
            T = arguments.length > 3 ? arguments[3] : void 0,
            P = { current: T ?? (0, i.A)() },
            R = { current: null },
            { modalKey: x } = y,
            O = this.generateRenderHeader(),
            v = E ?? this.getApplicationId(c),
            j = !!(null != t && t.isGift),
            L = !1,
            M = {
                ...f,
                checkoutFlow: this.checkoutFlow,
                checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                stepConfigs: this.generateCheckoutStepConfigs({ isGift: j }),
                onComplete: (e) => {
                    null != s && s(e), (L = !0);
                },
                onClose: u,
                renderHeader: O,
                skuId: c ?? null,
                tenantParams: N ?? {},
                loadId: P.current,
                onOrderCreated: function (e) {
                    (P.current = e.id), (R.current = e);
                },
                discoverySessionId: m,
                activeSubscription: p ?? null,
                applicationId: v,
                analyticsLocations: h,
                analyticsObject: S,
                analyticsSourceLocation: _,
                giftContextProps: t,
            };
        if ("modal" === A)
            return (0, a.openModalLazy)(
                async () => {
                    let { UnifiedCheckoutInstance: e } = await Promise.all([
                        n.e("11005"),
                        n.e("93438"),
                        n.e("25246"),
                        n.e("33319"),
                        n.e("8430"),
                    ]).then(n.bind(n, 427325));
                    return (t) => (0, l.jsx)(e, { ...M, renderModalProps: t });
                },
                {
                    ...y,
                    onCloseRequest: () => {
                        null != y.onCloseRequest && y.onCloseRequest(L, P.current),
                            y.skipCloseModalOnCloseRequest || (0, a.closeModal)(x);
                    },
                    onCloseCallback: () => {
                        L ||
                            ((0, C.S)({ checkoutSucceeded: L, order: R.current }),
                            this.trackPaymentFlowCanceled({
                                loadId: P.current,
                                skuId: c,
                                skuProductLine: d,
                                applicationId: v,
                                discoverySessionId: m,
                                analyticsLocation: f.analyticsLocation,
                                analyticsLocations: h,
                                analyticsObject: S,
                                analyticsSourceLocation: _,
                                isGift: j,
                                eligibleForTrial: null != f.trialId,
                            })),
                            null != y.onCloseCallback && y.onCloseCallback(L),
                            null != u && u(L, c);
                    },
                    modalKey: x,
                },
            );
        {
            let e = f.paymentModalOnClose ?? u,
                t = { transitionState: o.ip.ENTERED, onClose: () => (null != e && e(!1), Promise.resolve()) };
            return (0, l.jsx)(r.Suspense, {
                fallback: (0, l.jsx)(I.KT, {}),
                children: (0, l.jsx)(g, { ...M, paymentModalOnClose: e, renderModalProps: t }),
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
                  l = r.useMemo(() => new P({ checkoutFlow: t }), [t]),
                  [i] = r.useState(() => l.getStandaloneLoadId());
              return l.renderStandaloneCheckout(n, i);
          })
        : null;
