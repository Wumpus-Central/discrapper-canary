r.d(t, { P5: () => P, PaymentContextProvider: () => A });
var n = r(627968),
    a = r(64700),
    l = r(342393),
    i = r(989349),
    u = r.n(i),
    s = r(688810),
    o = r(531260),
    c = r(626584),
    d = r(174459),
    p = r(38405),
    f = r(652215);
let _ = new c.A("CheckoutErrorBoundary.tsx");
class m extends a.PureComponent {
    state = { error: null, info: null };
    componentDidCatch(e, t) {
        let {
                loadId: r,
                selectedSkuId: n,
                selectedPlanId: a,
                isGift: l,
                purchaseType: i,
                locationStack: u,
                additionalAnalyticsData: s,
            } = this.props,
            o = this.props.shouldRethrowError,
            c = { loadId: r, selectedSkuId: n, selectedPlanId: a, isGift: l, purchaseType: i, locationStack: u },
            m = {
                tags: {
                    app_context: "billing",
                    checkout_error: "true",
                    billing_context: "checkout",
                    ...(o ? { crashed: "true" } : {}),
                },
                extra: { ...c, ...(s ?? {}), ...(t ?? {}) },
            };
        p.A.captureException(e, m), _.error("Checkout error occurred:", { error: e, additionalErrorContext: c });
        let h = "string" == typeof e ? e : e.message;
        if (
            (d.default.track(f.HAw.PAYMENT_FLOW_ERROR, {
                load_id: r,
                crashed: o,
                error_message: h,
                location_stack: u ?? [],
                ...s,
            }),
            this.setState({ error: e, info: t }),
            null != this.props.onUnhandledError && this.props.onUnhandledError(e, t, m),
            this.props.shouldRethrowError)
        )
            throw e;
    }
    render() {
        return null != this.state.error
            ? null != this.props.renderCustomErrorComponent
                ? this.props.renderCustomErrorComponent(this.state.error, this.state.info)
                : null
            : this.props.children;
    }
}
var h = r(426398),
    y = r(722847),
    I = r(886243),
    E = r(786300),
    S = r(795791),
    v = r(615310),
    C = r(87952),
    w = r(788868);
let [x, P, g] = (0, E.A)();
function A(e) {
    let {
            stepConfigs: t,
            breadcrumbs: r,
            loadId: l,
            discoverySessionId: i,
            purchaseType: u = f.VVm.SUBSCRIPTION,
            overrideCustomCheckoutFlow: s,
            ...o
        } = e,
        c = JSON.stringify(o.skuIDs),
        d = a.useMemo(() => o.skuIDs, [c]),
        p = (0, S.$w)(),
        _ = a.useMemo(
            () => ({
                skuIds: d,
                isGift: o.isGift ?? !1,
                referralTrialOfferId: o.referralTrialOfferId ?? null,
                activeSubscription: o.activeSubscription ?? null,
                excludeSubscriptionPlansBySKU: o.excludeSubscriptionPlansBySKU ?? !1,
                purchaseType: u,
                defaultPlanId: o.defaultPlanId,
                referralCode: o.referralCode,
                customCheckoutFlow: s ?? p,
                unifiedCheckoutFlow: o.unifiedCheckoutFlow,
                paymentGateway: o.paymentGateway,
                applicationId: o.applicationId ?? w.tv,
            }),
            [
                d,
                u,
                o.isGift,
                o.referralTrialOfferId,
                o.activeSubscription,
                o.excludeSubscriptionPlansBySKU,
                o.applicationId,
                o.defaultPlanId,
                o.referralCode,
                s,
                p,
                o.unifiedCheckoutFlow,
                o.paymentGateway,
            ],
        );
    return (0, n.jsx)(v.mz, {
        stepConfigs: t,
        breadcrumbs: r,
        children: (0, n.jsx)(I.P, {
            loadId: l,
            discoverySessionId: i,
            checkoutInitParameters: _,
            children: (0, n.jsx)(k, { ...o, purchaseType: u }),
        }),
    });
}
function k(e) {
    let { shouldCrashOnUnhandledError: t = !0, onUnhandledError: r, children: i } = e,
        c = (0, C.A)(),
        { paymentSources: d, hasPaymentSources: p } = (0, h.jm)(),
        _ = a.useRef(p),
        {
            contextMetadata: I,
            unifiedCheckoutFlow: E,
            purchaseType: S,
            isGift: v,
            activeSubscription: w,
            selectedSkuId: P,
            selectedPlanId: g,
            paymentSourceId: A,
            paymentGateway: k,
        } = (0, y.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            purchaseType: e.purchaseType,
            isGift: e.isGift,
            activeSubscription: e.activeSubscription,
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
            paymentSourceId: e.paymentSourceId,
            paymentGateway: e.paymentGateway,
        })),
        { purchaseErrorBlockRef: R } = (function () {
            let e = a.useRef(null),
                { purchaseError: t, setPurchaseError: r } = (0, y.t4)((e) => ({
                    purchaseError: e.purchaseError,
                    setPurchaseError: e.setPurchaseError,
                }));
            return (
                a.useEffect(() => {
                    null != t && null != e.current && e.current.scrollIntoView({ behavior: "smooth" });
                }, [t]),
                { purchaseError: t, setPurchaseError: r, purchaseErrorBlockRef: e }
            );
        })(),
        [T, b] = a.useState(null),
        [j, O] = a.useState(null),
        [N, M] = a.useState(null),
        G = a.useRef(null != w ? w.planId : null);
    a.useEffect(() => {
        null == G.current && null != w && (G.current = w.planId);
    }, [w]);
    let { endsAt: B } = (0, o.A)({ forceFetch: !1, excludeReverseTrial: !0 }),
        U = a.useRef(B.isSame(u()(0)) ? null : B);
    a.useEffect(() => {
        null != U.current || B.isSame(u()(0)) || (U.current = B);
    }, [B]);
    let F = null != A && null != d[A] ? d[A]?.type : null,
        D = a.useMemo(
            () => ({ payment_source_id: A, payment_gateway: k, payment_source_type: F, checkout_flow: E }),
            [A, k, F, E],
        ),
        L = (0, s.Db)();
    return (0, n.jsx)(x.Provider, {
        value: {
            stripe: c,
            purchaseErrorBlockRef: R,
            bodyNode: T,
            setBodyNode: b,
            footerNode: j,
            setFooterNode: O,
            modalOverlayNode: N,
            setModalOverlayNode: M,
            startingFractionalPremiumEndsAtRef: U,
            startedPaymentFlowWithPaymentSourcesRef: _,
            startingPremiumSubscriptionPlanIdRef: G,
        },
        children: (0, n.jsx)(l.Elements, {
            options: f.XL8,
            stripe: c,
            children: (0, n.jsx)(m, {
                shouldRethrowError: t,
                locationStack: L,
                onUnhandledError: r,
                loadId: I.loadId,
                selectedSkuId: P ?? null,
                selectedPlanId: g ?? null,
                isGift: v,
                purchaseType: S,
                additionalAnalyticsData: D,
                children: i,
            }),
        }),
    });
}
