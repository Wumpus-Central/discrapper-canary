n.d(t, { j: () => s, v: () => r.v });
var l = n(260447),
    i = n(174459),
    r = n(71804),
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
            skuIds: i,
            isGift: a,
            purchaseType: s,
            locationStack: o,
            checkoutStepsHistory: u,
        } = this.props;
        return {
            loadId: t,
            selectedSkuId: n,
            selectedPlanId: l,
            isGift: a,
            purchaseType: s,
            skuIds: i,
            locationStack: o,
            checkoutStepsHistory:
                null != u ? u.map((e) => (e.toLowerCase().includes("auth") ? e.replaceAll("auth", "a") : e)) : [],
            ...(e instanceof r.v ? { checkoutErrorExtraInformation: e.extraSentryInformation } : {}),
        };
    }
    onErrorCaught(e, t, n) {
        this.emitPaymentFlowErrorAnalytics(e, n);
    }
    emitPaymentFlowErrorAnalytics(e, t) {
        let n = this.getCrashedFlag(e),
            { loadId: l, locationStack: r, additionalAnalyticsData: s } = this.props,
            o = "string" == typeof e ? e : e.message;
        i.default.track(a.HAw.PAYMENT_FLOW_ERROR, {
            load_id: l,
            crashed: n,
            error_message: o,
            sentry_event_id: t,
            location_stack: r ?? [],
            ...s,
        });
    }
}
