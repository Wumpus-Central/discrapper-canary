r.d(t, { P5: () => C, PaymentContextProvider: () => _ });
var n = r(627968),
    l = r(64700),
    u = r(342393),
    a = r(688810),
    i = r(626584),
    s = r(174459),
    c = r(38405),
    o = r(652215);
let d = new i.A("CheckoutErrorBoundary.tsx");
class p extends l.PureComponent {
    state = { error: null, info: null };
    componentDidCatch(e, t) {
        let {
                loadId: r,
                selectedSkuId: n,
                selectedPlanId: l,
                isGift: u,
                purchaseType: a,
                locationStack: i,
                additionalAnalyticsData: p,
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
                extra: { ...h, ...(p ?? {}), ...(t ?? {}) },
            };
        c.A.captureException(e, m), d.error("Checkout error occurred:", { error: e, additionalErrorContext: h });
        let y = "string" == typeof e ? e : e.message;
        if (
            (s.default.track(o.HAw.PAYMENT_FLOW_ERROR, {
                load_id: r,
                crashed: f,
                error_message: y,
                location_stack: i ?? [],
                ...p,
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
var f = r(426398),
    h = r(571878),
    m = r(611333),
    y = r(786300),
    I = r(795791),
    v = r(615310),
    x = r(87952),
    S = r(788868);
let [E, C, P] = (0, y.A)();
function _(e) {
    let {
            stepConfigs: t,
            breadcrumbs: r,
            loadId: u,
            discoverySessionId: a,
            purchaseType: i = o.VVm.SUBSCRIPTION,
            overrideCustomCheckoutFlow: s,
            ...c
        } = e,
        d = JSON.stringify(c.skuIDs),
        p = l.useMemo(() => c.skuIDs, [d]),
        f = (0, I.$w)(),
        h = l.useMemo(
            () => ({
                skuIds: p,
                isGift: c.isGift ?? !1,
                referralTrialOfferId: c.referralTrialOfferId ?? null,
                activeSubscription: c.activeSubscription ?? null,
                excludeSubscriptionPlansBySKU: c.excludeSubscriptionPlansBySKU ?? !1,
                purchaseType: i,
                defaultPlanId: c.defaultPlanId,
                referralCode: c.referralCode,
                customCheckoutFlow: s ?? f,
                unifiedCheckoutFlow: c.unifiedCheckoutFlow,
                paymentGateway: c.paymentGateway,
                applicationId: c.applicationId ?? S.tv,
            }),
            [
                p,
                i,
                c.isGift,
                c.referralTrialOfferId,
                c.activeSubscription,
                c.excludeSubscriptionPlansBySKU,
                c.applicationId,
                c.defaultPlanId,
                c.referralCode,
                s,
                f,
                c.unifiedCheckoutFlow,
                c.paymentGateway,
            ],
        );
    return (0, n.jsx)(v.mz, {
        stepConfigs: t,
        breadcrumbs: r,
        children: (0, n.jsx)(m.P, {
            loadId: u,
            discoverySessionId: a,
            checkoutInitParameters: h,
            children: (0, n.jsx)(k, { ...c, purchaseType: i }),
        }),
    });
}
function k(e) {
    let { shouldCrashOnUnhandledError: t = !0, onUnhandledError: r, children: i } = e,
        s = (0, x.A)(),
        { paymentSources: c } = (0, f.jm)(),
        {
            contextMetadata: d,
            unifiedCheckoutFlow: m,
            purchaseType: y,
            isGift: I,
            selectedSkuId: v,
            selectedPlanId: S,
            paymentSourceId: C,
            paymentGateway: P,
        } = (0, h.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            purchaseType: e.purchaseType,
            isGift: e.isGift,
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
            paymentSourceId: e.paymentSourceId,
            paymentGateway: e.paymentGateway,
        })),
        { purchaseErrorBlockRef: _ } = (function () {
            let e = l.useRef(null),
                { purchaseError: t, setPurchaseError: r } = (0, h.t4)((e) => ({
                    purchaseError: e.purchaseError,
                    setPurchaseError: e.setPurchaseError,
                }));
            return (
                l.useEffect(() => {
                    null != t && null != e.current && e.current.scrollIntoView({ behavior: "smooth" });
                }, [t]),
                { purchaseError: t, setPurchaseError: r, purchaseErrorBlockRef: e }
            );
        })(),
        [k, w] = l.useState(null),
        [j, g] = l.useState(null),
        [b, R] = l.useState(null),
        A = null != C && null != c[C] ? c[C]?.type : null,
        T = l.useMemo(
            () => ({ payment_source_id: C, payment_gateway: P, payment_source_type: A, checkout_flow: m }),
            [C, P, A, m],
        ),
        G = (0, a.Db)();
    return (0, n.jsx)(E.Provider, {
        value: {
            stripe: s,
            purchaseErrorBlockRef: _,
            bodyNode: k,
            setBodyNode: w,
            footerNode: j,
            setFooterNode: g,
            modalOverlayNode: b,
            setModalOverlayNode: R,
        },
        children: (0, n.jsx)(u.Elements, {
            options: o.XL8,
            stripe: s,
            children: (0, n.jsx)(p, {
                shouldRethrowError: t,
                locationStack: G,
                onUnhandledError: r,
                loadId: d.loadId,
                selectedSkuId: v ?? null,
                selectedPlanId: S ?? null,
                isGift: I,
                purchaseType: y,
                additionalAnalyticsData: T,
                children: i,
            }),
        }),
    });
}
