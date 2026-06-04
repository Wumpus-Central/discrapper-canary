r.d(t, { CheckoutRootProvider: () => S });
var n = r(627968),
    l = r(64700),
    u = r(688810),
    a = r(795791),
    i = r(615310),
    s = r(626584),
    c = r(174459),
    o = r(38405),
    d = r(652215);
let p = new s.A("CheckoutErrorBoundary.tsx");
class f extends l.PureComponent {
    state = { error: null, info: null };
    componentDidCatch(e, t) {
        let {
                loadId: r,
                selectedSkuId: n,
                selectedPlanId: l,
                isGift: u,
                purchaseType: a,
                locationStack: i,
                additionalAnalyticsData: s,
            } = this.props,
            f = this.props.shouldRethrowError,
            h = { loadId: r, selectedSkuId: n, selectedPlanId: l, isGift: u, purchaseType: a, locationStack: i },
            m = {
                tags: {
                    app_context: "billing",
                    checkout_error: "true",
                    billing_context: "checkout",
                    ...(f ? { crashed: "true" } : {}),
                },
                extra: { ...h, ...(s ?? {}), ...(t ?? {}) },
            };
        o.A.captureException(e, m), p.error("Checkout error occurred:", { error: e, additionalErrorContext: h });
        let y = "string" == typeof e ? e : e.message;
        if (
            (c.default.track(d.HAw.PAYMENT_FLOW_ERROR, {
                load_id: r,
                crashed: f,
                error_message: y,
                location_stack: i ?? [],
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
    m = r(738909),
    y = r(571878),
    I = r(611333),
    v = r(783327),
    x = r(788868);
function S(e) {
    let {
            stepConfigs: t,
            breadcrumbs: r,
            loadId: u,
            discoverySessionId: s,
            purchaseType: c = d.VVm.SUBSCRIPTION,
            overrideCustomCheckoutFlow: o,
            ...p
        } = e,
        f = JSON.stringify(p.skuIDs),
        h = l.useMemo(() => p.skuIDs, [f]),
        m = (0, a.$w)(),
        y = l.useMemo(
            () => ({
                skuIds: h,
                isGift: p.isGift ?? !1,
                referralTrialOfferId: p.referralTrialOfferId ?? null,
                activeSubscription: p.activeSubscription ?? null,
                excludeSubscriptionPlansBySKU: p.excludeSubscriptionPlansBySKU ?? !1,
                purchaseType: c,
                defaultPlanId: p.defaultPlanId,
                referralCode: p.referralCode,
                customCheckoutFlow: o ?? m,
                unifiedCheckoutFlow: p.unifiedCheckoutFlow,
                paymentGateway: p.paymentGateway,
                applicationId: p.applicationId ?? x.tv,
            }),
            [
                h,
                c,
                p.isGift,
                p.referralTrialOfferId,
                p.activeSubscription,
                p.excludeSubscriptionPlansBySKU,
                p.applicationId,
                p.defaultPlanId,
                p.referralCode,
                o,
                m,
                p.unifiedCheckoutFlow,
                p.paymentGateway,
            ],
        );
    return (0, n.jsx)(i.mz, {
        stepConfigs: t,
        breadcrumbs: r,
        children: (0, n.jsx)(I.P, {
            loadId: u,
            discoverySessionId: s,
            checkoutInitParameters: y,
            children: (0, n.jsx)(E, { ...p, purchaseType: c }),
        }),
    });
}
function E(e) {
    let { shouldCrashOnUnhandledError: t = !0, onUnhandledError: r, children: a } = e,
        { paymentSources: i } = (0, h.jm)(),
        {
            contextMetadata: s,
            unifiedCheckoutFlow: c,
            purchaseType: o,
            isGift: d,
            selectedSkuId: p,
            selectedPlanId: I,
            paymentSourceId: x,
            paymentGateway: S,
        } = (0, y.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            purchaseType: e.purchaseType,
            isGift: e.isGift,
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
            paymentSourceId: e.paymentSourceId,
            paymentGateway: e.paymentGateway,
        })),
        E = null != x && null != i[x] ? i[x]?.type : null,
        C = l.useMemo(
            () => ({ payment_source_id: x, payment_gateway: S, payment_source_type: E, checkout_flow: c }),
            [x, S, E, c],
        ),
        _ = (0, u.Db)();
    return (0, n.jsx)(m.yv, {
        children: (0, n.jsx)(v.R, {
            children: (0, n.jsx)(f, {
                shouldRethrowError: t,
                locationStack: _,
                onUnhandledError: r,
                loadId: s.loadId,
                selectedSkuId: p ?? null,
                selectedPlanId: I ?? null,
                isGift: d,
                purchaseType: o,
                additionalAnalyticsData: C,
                children: a,
            }),
        }),
    });
}
