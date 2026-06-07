r.d(t, { CheckoutRootProvider: () => P });
var n = r(627968),
    u = r(64700),
    l = r(688810),
    a = r(795791),
    i = r(615310),
    s = r(192308),
    o = r(139033),
    c = r(626584),
    d = r(174459),
    p = r(38405),
    f = r(71804),
    h = r(652215),
    m = r(375708);
let y = new c.A("CheckoutErrorBoundary.tsx");
class I extends u.PureComponent {
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
        return e instanceof f.v
            ? "rethrow" === e.errorHandlingBehavior
            : "rethrow" === this.props.errorHandlingBehavior;
    }
    emitSentryException(e, t) {
        let {
                loadId: r,
                selectedSkuId: n,
                selectedPlanId: u,
                skuIds: l,
                isGift: a,
                purchaseType: i,
                locationStack: s,
                additionalAnalyticsData: o,
            } = this.props,
            c = this.getCrashedFlag(e),
            d = {
                loadId: r,
                selectedSkuId: n,
                selectedPlanId: u,
                isGift: a,
                purchaseType: i,
                skuIds: l,
                locationStack: s,
                ...(e instanceof f.v ? { checkoutErrorExtraInformation: e.extraSentryInformation } : {}),
            },
            h = {
                tags: {
                    app_context: "billing",
                    checkout_error: "true",
                    billing_context: "checkout",
                    ...(c ? { crashed: "true" } : {}),
                },
                extra: { ...d, ...(o ?? {}), ...(null != t ? { reactErrorInfo: t } : {}) },
            };
        return (
            p.A.captureException(e, h),
            y.error("Checkout error occurred:", { error: e, additionalErrorContext: d }),
            { sentryErrorOptions: h }
        );
    }
    emitPaymentFlowErrorAnalytics(e) {
        let t = this.getCrashedFlag(e),
            { loadId: r, locationStack: n, additionalAnalyticsData: u } = this.props,
            l = "string" == typeof e ? e : e.message;
        d.default.track(h.HAw.PAYMENT_FLOW_ERROR, {
            load_id: r,
            crashed: t,
            error_message: l,
            location_stack: n ?? [],
            ...u,
        });
    }
    componentDidCatch(e, t) {
        let { sentryErrorOptions: r } = this.emitSentryException(e, t);
        if (
            (this.emitPaymentFlowErrorAnalytics(e),
            this.setState({ error: e, info: t }),
            null != this.props.onUnhandledError && this.props.onUnhandledError(e, t, r),
            e instanceof f.v)
        ) {
            if ("close-and-alert" === e.errorHandlingBehavior) this.closeCheckoutAndShowAlert();
            else throw e;
            return;
        }
        if ("close-and-alert" === this.props.errorHandlingBehavior) this.closeCheckoutAndShowAlert();
        else throw (this.props.errorHandlingBehavior, e);
    }
    render() {
        return null != this.state.error
            ? null != this.props.renderCustomErrorComponent
                ? this.props.renderCustomErrorComponent(this.state.error, this.state.info)
                : null
            : this.props.children;
    }
}
var S = r(426398),
    v = r(738909),
    E = r(571878),
    w = r(611333),
    _ = r(783327),
    C = r(788868);
function P(e) {
    let {
            stepConfigs: t,
            breadcrumbs: r,
            loadId: l,
            discoverySessionId: s,
            purchaseType: o = h.VVm.SUBSCRIPTION,
            overrideCustomCheckoutFlow: c,
            ...d
        } = e,
        p = JSON.stringify(d.skuIDs),
        f = u.useMemo(() => d.skuIDs, [p]),
        m = (0, a.$w)(),
        y = u.useMemo(
            () => ({
                skuIds: f,
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
                applicationId: d.applicationId ?? C.tv,
            }),
            [
                f,
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
    return (0, n.jsx)(i.mz, {
        stepConfigs: t,
        breadcrumbs: r,
        children: (0, n.jsx)(w.P, {
            loadId: l,
            discoverySessionId: s,
            checkoutInitParameters: y,
            children: (0, n.jsx)(k, { ...d, skuIDs: f, purchaseType: o }),
        }),
    });
}
function k(e) {
    let { errorHandlingBehavior: t = "rethrow", onUnhandledError: r, skuIDs: a, children: i } = e,
        { paymentSources: s } = (0, S.jm)(),
        {
            contextMetadata: o,
            unifiedCheckoutFlow: c,
            purchaseType: d,
            isGift: p,
            selectedSkuId: f,
            selectedPlanId: h,
            paymentSourceId: m,
            paymentGateway: y,
        } = (0, E.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            purchaseType: e.purchaseType,
            isGift: e.isGift,
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
            paymentSourceId: e.paymentSourceId,
            paymentGateway: e.paymentGateway,
        })),
        w = null != m && null != s[m] ? s[m]?.type : null,
        C = u.useMemo(
            () => ({ payment_source_id: m, payment_gateway: y, payment_source_type: w, checkout_flow: c }),
            [m, y, w, c],
        ),
        P = (0, l.Db)();
    return (0, n.jsx)(v.yv, {
        children: (0, n.jsx)(_.R, {
            children: (0, n.jsx)(I, {
                errorHandlingBehavior: t,
                locationStack: P,
                onUnhandledError: r,
                loadId: o.loadId,
                selectedSkuId: f ?? null,
                selectedPlanId: h ?? null,
                isGift: p,
                skuIds: a,
                purchaseType: d,
                additionalAnalyticsData: C,
                children: i,
            }),
        }),
    });
}
