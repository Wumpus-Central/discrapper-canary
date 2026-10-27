n.d(t, { j: () => s, v: () => i.v });
var l = n(260447),
    r = n(174459),
    i = n(71804),
    a = n(652215);
class s extends l.z {
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
            selectedPlanId: l,
            skuIds: r,
            isGift: a,
            purchaseType: s,
            locationStack: u,
            checkoutStepsHistory: c,
        } = this.props;
        return {
            loadId: t,
            selectedSkuId: n,
            selectedPlanId: l,
            isGift: a,
            purchaseType: s,
            skuIds: r,
            locationStack: u,
            checkoutStepsHistory:
                null != c ? c.map((e) => (e.toLowerCase().includes("auth") ? e.replaceAll("auth", "a") : e)) : [],
            ...(e instanceof i.v ? { checkoutErrorExtraInformation: e.extraSentryInformation } : {}),
        };
    }
    onErrorCaught(e, t, n) {
        this.emitPaymentFlowErrorAnalytics(e, n);
    }
    emitPaymentFlowErrorAnalytics(e, t) {
        let n = this.getCrashedFlag(e),
            { loadId: l, locationStack: i, additionalAnalyticsData: s } = this.props,
            u = "string" == typeof e ? e : e.message;
        r.default.track(a.HAw.PAYMENT_FLOW_ERROR, {
            load_id: l,
            crashed: n,
            error_message: u,
            sentry_event_id: t,
            location_stack: i ?? [],
            ...s,
        });
    }
}
