r.d(t, { CheckoutRootProvider: () => g });
var n = r(627968),
    l = r(64700),
    a = r(688810),
    i = r(795791),
    u = r(615310),
    s = r(192308),
    o = r(139033),
    c = r(626584),
    d = r(174459),
    h = r(38405),
    p = r(71804),
    f = r(652215),
    m = r(375708);
let y = new c.A("CheckoutErrorBoundary.tsx");
class I extends l.PureComponent {
    state = { error: null, info: null };
    closeCheckoutAndShowAlert() {
        (0, s.closeAllModals)(),
            (0, o.A)({
                title: m.intl.string(m.t.iufib1),
                subtitle: m.intl.string(m.t.ZUEGFn),
                confirmText: m.intl.string(m.t.TyCVIq),
            });
    }
    getCrashedFlag(e) {
        return e instanceof p.v
            ? "rethrow" === e.errorHandlingBehavior
            : "rethrow" === this.props.errorHandlingBehavior;
    }
    emitSentryException(e, t) {
        let {
                loadId: r,
                selectedSkuId: n,
                selectedPlanId: l,
                skuIds: a,
                isGift: i,
                purchaseType: u,
                locationStack: s,
                additionalAnalyticsData: o,
            } = this.props,
            c = this.getCrashedFlag(e),
            d = {
                loadId: r,
                selectedSkuId: n,
                selectedPlanId: l,
                isGift: i,
                purchaseType: u,
                skuIds: a,
                locationStack: s,
                ...(e instanceof p.v ? { checkoutErrorExtraInformation: e.extraSentryInformation } : {}),
            },
            f = {
                tags: {
                    app_context: "billing",
                    checkout_error: "true",
                    billing_context: "checkout",
                    ...(c ? { crashed: "true" } : {}),
                },
                extra: { ...d, ...(o ?? {}), ...(null != t ? { reactErrorInfo: t } : {}) },
            };
        return (
            h.A.captureException(e, f),
            y.error("Checkout error occurred:", { error: e, additionalErrorContext: d }),
            { sentryErrorOptions: f }
        );
    }
    emitPaymentFlowErrorAnalytics(e) {
        let t = this.getCrashedFlag(e),
            { loadId: r, locationStack: n, additionalAnalyticsData: l } = this.props,
            a = "string" == typeof e ? e : e.message;
        d.default.track(f.HAw.PAYMENT_FLOW_ERROR, {
            load_id: r,
            crashed: t,
            error_message: a,
            location_stack: n ?? [],
            ...l,
        });
    }
    componentDidCatch(e, t) {
        let { sentryErrorOptions: r } = this.emitSentryException(e, t);
        if (
            (this.emitPaymentFlowErrorAnalytics(e),
            this.setState({ error: e, info: t }),
            null != this.props.onUnhandledError && this.props.onUnhandledError(e, t, r),
            e instanceof p.v)
        ) {
            if ("close-and-alert" === e.errorHandlingBehavior) this.closeCheckoutAndShowAlert();
            else throw e;
            return;
        }
        if ("close-and-alert" === this.props.errorHandlingBehavior) this.closeCheckoutAndShowAlert();
        else if ("rethrow" === this.props.errorHandlingBehavior) throw e;
    }
    render() {
        return null != this.state.error
            ? null != this.props.renderCustomErrorComponent
                ? this.props.renderCustomErrorComponent(this.state.error, this.state.info)
                : null
            : this.props.children;
    }
}
var v = r(426398),
    x = r(738909),
    S = r(571878),
    E = r(611333),
    C = r(783327),
    k = r(788868);
function g(e) {
    let {
            stepConfigs: t,
            breadcrumbs: r,
            loadId: a,
            discoverySessionId: s,
            purchaseType: o = f.VVm.SUBSCRIPTION,
            overrideCustomCheckoutFlow: c,
            ...d
        } = e,
        h = JSON.stringify(d.skuIDs),
        p = l.useMemo(() => d.skuIDs, [h]),
        m = (0, i.$w)(),
        y = l.useMemo(
            () => ({
                skuIds: p,
                isGift: d.isGift ?? !1,
                referralTrialOfferId: d.referralTrialOfferId ?? null,
                activeSubscription: d.activeSubscription ?? null,
                excludeSubscriptionPlansBySKU: d.excludeSubscriptionPlansBySKU ?? !1,
                purchaseType: o,
                defaultPlanId: d.defaultPlanId,
                referralCode: d.referralCode,
                customCheckoutFlow: c ?? m,
                unifiedCheckoutFlow: d.unifiedCheckoutFlow,
                paymentGateway: d.paymentGateway,
                applicationId: d.applicationId ?? k.tv,
            }),
            [
                p,
                o,
                d.isGift,
                d.referralTrialOfferId,
                d.activeSubscription,
                d.excludeSubscriptionPlansBySKU,
                d.applicationId,
                d.defaultPlanId,
                d.referralCode,
                c,
                m,
                d.unifiedCheckoutFlow,
                d.paymentGateway,
            ],
        );
    return (0, n.jsx)(u.mz, {
        stepConfigs: t,
        breadcrumbs: r,
        children: (0, n.jsx)(E.P, {
            loadId: a,
            discoverySessionId: s,
            checkoutInitParameters: y,
            children: (0, n.jsx)(w, { ...d, skuIDs: p, purchaseType: o }),
        }),
    });
}
function w(e) {
    let { errorHandlingBehavior: t = "rethrow", onUnhandledError: r, skuIDs: i, children: u } = e,
        { paymentSources: s } = (0, v.jm)(),
        {
            contextMetadata: o,
            unifiedCheckoutFlow: c,
            purchaseType: d,
            isGift: h,
            selectedSkuId: p,
            selectedPlanId: f,
            paymentSourceId: m,
            paymentGateway: y,
        } = (0, S.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            purchaseType: e.purchaseType,
            isGift: e.isGift,
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
            paymentSourceId: e.paymentSourceId,
            paymentGateway: e.paymentGateway,
        })),
        E = null != m && null != s[m] ? s[m]?.type : null,
        k = l.useMemo(
            () => ({ payment_source_id: m, payment_gateway: y, payment_source_type: E, checkout_flow: c }),
            [m, y, E, c],
        ),
        g = (0, a.Db)();
    return (0, n.jsx)(x.yv, {
        children: (0, n.jsx)(C.R, {
            children: (0, n.jsx)(I, {
                errorHandlingBehavior: t,
                locationStack: g,
                onUnhandledError: r,
                loadId: o.loadId,
                selectedSkuId: p ?? null,
                selectedPlanId: f ?? null,
                isGift: h,
                skuIds: i,
                purchaseType: d,
                additionalAnalyticsData: k,
                children: u,
            }),
        }),
    });
}
