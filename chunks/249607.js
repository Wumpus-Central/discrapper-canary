"use strict";
n.d(t, { j: () => p, v: () => h.v });
var i = n(64700),
    r = n(192308),
    s = n(139033),
    a = n(626584),
    o = n(38405),
    l = n(794400),
    u = n(375708);
let c = new a.A("RevenueErrorBoundary.tsx");
class d extends i.PureComponent {
    state = { error: null, info: null };
    getSentryTags(e, t) {
        return { app_context: this.getSentryAppContext(), ...(t ? { crashed: "true" } : {}) };
    }
    getSentryExtras(e) {
        return e instanceof l.v && null != e.extraSentryInformation ? { ...e.extraSentryInformation } : {};
    }
    onErrorCaught(e, t) {}
    closeAndShowAlert() {
        (0, r.closeAllModals)(),
            (0, s.A)({
                title: u.intl.string(u.t.iufib1),
                subtitle: u.intl.string(u.t.ZUEGFn),
                confirmText: u.intl.string(u.t.TyCVIq),
            });
    }
    getErrorHandlingBehavior(e) {
        return e instanceof l.v ? e.errorHandlingBehavior : this.props.errorHandlingBehavior;
    }
    getCrashedFlag(e) {
        return "rethrow" === this.getErrorHandlingBehavior(e);
    }
    emitSentryException(e, t) {
        let { additionalAnalyticsData: n } = this.props,
            i = this.getCrashedFlag(e),
            r = this.getSentryExtras(e),
            s = {
                tags: this.getSentryTags(e, i),
                extra: { ...r, ...(n ?? {}), ...(null != t ? { reactErrorInfo: t } : {}) },
            };
        return (
            o.A.captureException(e, s),
            c.error("Revenue error occurred:", { error: e, additionalErrorContext: r }),
            { sentryErrorOptions: s }
        );
    }
    componentDidCatch(e, t) {
        let { sentryErrorOptions: n } = this.emitSentryException(e, t);
        if (
            (this.onErrorCaught(e, t),
            this.setState({ error: e, info: t }),
            null != this.props.onErrorReported && this.props.onErrorReported(e, t, n),
            "rethrow" === this.getErrorHandlingBehavior(e))
        )
            throw e;
        this.closeAndShowAlert();
    }
    render() {
        return null != this.state.error
            ? null != this.props.renderCustomErrorComponent
                ? this.props.renderCustomErrorComponent(this.state.error, this.state.info)
                : null
            : this.props.children;
    }
}
var _ = n(174459),
    h = n(71804),
    f = n(652215);
class p extends d {
    getSentryAppContext() {
        return "billing";
    }
    getSentryTags(e, t) {
        return { ...super.getSentryTags(e, t), checkout_error: "true", billing_context: "checkout" };
    }
    getSentryExtras(e) {
        let {
            loadId: t,
            selectedSkuId: n,
            selectedPlanId: i,
            skuIds: r,
            isGift: s,
            purchaseType: a,
            locationStack: o,
        } = this.props;
        return {
            loadId: t,
            selectedSkuId: n,
            selectedPlanId: i,
            isGift: s,
            purchaseType: a,
            skuIds: r,
            locationStack: o,
            ...(e instanceof h.v ? { checkoutErrorExtraInformation: e.extraSentryInformation } : {}),
        };
    }
    onErrorCaught(e) {
        this.emitPaymentFlowErrorAnalytics(e);
    }
    emitPaymentFlowErrorAnalytics(e) {
        let t = this.getCrashedFlag(e),
            { loadId: n, locationStack: i, additionalAnalyticsData: r } = this.props,
            s = "string" == typeof e ? e : e.message;
        _.default.track(f.HAw.PAYMENT_FLOW_ERROR, {
            load_id: n,
            crashed: t,
            error_message: s,
            location_stack: i ?? [],
            ...r,
        });
    }
}
