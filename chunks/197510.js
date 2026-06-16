"use strict";
n.d(t, { M: () => C });
var i = n(627968),
    r = n(64700),
    s = n(688810),
    a = n(795791),
    o = n(615310),
    l = n(192308),
    u = n(139033),
    c = n(626584),
    d = n(174459),
    _ = n(38405),
    h = n(71804),
    f = n(652215),
    p = n(375708);
let E = new c.A("CheckoutErrorBoundary.tsx");
class m extends r.PureComponent {
    state = { error: null, info: null };
    closeCheckoutAndShowAlert() {
        (0, l.closeAllModals)(),
            (0, u.A)({
                title: p.intl.string(p.t.iufib1),
                subtitle: p.intl.string(p.t.ZUEGFn),
                confirmText: p.intl.string(p.t.TyCVIq),
            });
    }
    getCrashedFlag(e) {
        return e instanceof h.v
            ? "rethrow" === e.errorHandlingBehavior
            : "rethrow" === this.props.errorHandlingBehavior;
    }
    emitSentryException(e, t) {
        let {
                loadId: n,
                selectedSkuId: i,
                selectedPlanId: r,
                skuIds: s,
                isGift: a,
                purchaseType: o,
                locationStack: l,
                additionalAnalyticsData: u,
            } = this.props,
            c = this.getCrashedFlag(e),
            d = {
                loadId: n,
                selectedSkuId: i,
                selectedPlanId: r,
                isGift: a,
                purchaseType: o,
                skuIds: s,
                locationStack: l,
                ...(e instanceof h.v ? { checkoutErrorExtraInformation: e.extraSentryInformation } : {}),
            },
            f = {
                tags: {
                    app_context: "billing",
                    checkout_error: "true",
                    billing_context: "checkout",
                    ...(c ? { crashed: "true" } : {}),
                },
                extra: { ...d, ...(u ?? {}), ...(null != t ? { reactErrorInfo: t } : {}) },
            };
        return (
            _.A.captureException(e, f),
            E.error("Checkout error occurred:", { error: e, additionalErrorContext: d }),
            { sentryErrorOptions: f }
        );
    }
    emitPaymentFlowErrorAnalytics(e) {
        let t = this.getCrashedFlag(e),
            { loadId: n, locationStack: i, additionalAnalyticsData: r } = this.props,
            s = "string" == typeof e ? e : e.message;
        d.default.track(f.HAw.PAYMENT_FLOW_ERROR, {
            load_id: n,
            crashed: t,
            error_message: s,
            location_stack: i ?? [],
            ...r,
        });
    }
    componentDidCatch(e, t) {
        let { sentryErrorOptions: n } = this.emitSentryException(e, t);
        if (
            (this.emitPaymentFlowErrorAnalytics(e),
            this.setState({ error: e, info: t }),
            null != this.props.onUnhandledError && this.props.onUnhandledError(e, t, n),
            e instanceof h.v)
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
var g = n(426398),
    A = n(738909),
    I = n(211159),
    T = n(536547),
    S = n(783327),
    y = n(788868);
function C(e) {
    let {
            stepConfigs: t,
            breadcrumbs: n,
            loadId: s,
            discoverySessionId: l,
            purchaseType: u = f.VVm.SUBSCRIPTION,
            overrideCustomCheckoutFlow: c,
            ...d
        } = e,
        _ = JSON.stringify(d.skuIDs),
        h = r.useMemo(() => d.skuIDs, [_]),
        p = (0, a.$w)(),
        E = r.useMemo(
            () => ({
                skuIds: h,
                isGift: d.isGift ?? !1,
                referralTrialOfferId: d.referralTrialOfferId ?? null,
                activeSubscription: d.activeSubscription ?? null,
                excludeSubscriptionPlansBySKU: d.excludeSubscriptionPlansBySKU ?? !1,
                purchaseType: u,
                defaultPlanId: d.defaultPlanId,
                referralCode: d.referralCode,
                customCheckoutFlow: c ?? p,
                unifiedCheckoutFlow: d.unifiedCheckoutFlow,
                paymentGateway: d.paymentGateway,
                applicationId: d.applicationId ?? y.tv,
            }),
            [
                h,
                u,
                d.isGift,
                d.referralTrialOfferId,
                d.activeSubscription,
                d.excludeSubscriptionPlansBySKU,
                d.applicationId,
                d.defaultPlanId,
                d.referralCode,
                c,
                p,
                d.unifiedCheckoutFlow,
                d.paymentGateway,
            ],
        );
    return (0, i.jsx)(o.mz, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, i.jsx)(T.P, {
            loadId: s,
            discoverySessionId: l,
            checkoutInitParameters: E,
            children: (0, i.jsx)(N, { ...d, skuIDs: h, purchaseType: u }),
        }),
    });
}
function N(e) {
    let { errorHandlingBehavior: t = "rethrow", onUnhandledError: n, skuIDs: a, children: o } = e,
        { paymentSources: l } = (0, g.jm)(),
        {
            contextMetadata: u,
            unifiedCheckoutFlow: c,
            purchaseType: d,
            isGift: _,
            selectedSkuId: h,
            selectedPlanId: f,
            paymentSourceId: p,
            paymentGateway: E,
        } = (0, I.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            purchaseType: e.purchaseType,
            isGift: e.isGift,
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
            paymentSourceId: e.paymentSourceId,
            paymentGateway: e.paymentGateway,
        })),
        T = null != p && null != l[p] ? l[p]?.type : null,
        y = r.useMemo(
            () => ({ payment_source_id: p, payment_gateway: E, payment_source_type: T, checkout_flow: c }),
            [p, E, T, c],
        ),
        C = (0, s.Db)();
    return (0, i.jsx)(A.yv, {
        children: (0, i.jsx)(S.R, {
            children: (0, i.jsx)(m, {
                errorHandlingBehavior: t,
                locationStack: C,
                onUnhandledError: n,
                loadId: u.loadId,
                selectedSkuId: h ?? null,
                selectedPlanId: f ?? null,
                isGift: _,
                skuIds: a,
                purchaseType: d,
                additionalAnalyticsData: y,
                children: o,
            }),
        }),
    });
}
