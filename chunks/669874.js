r.d(t, { j: () => s, v: () => i.v });
var n = r(260447),
    u = r(174459),
    i = r(71804),
    c = r(652215);
class s extends n.z {
    getSentryAppContext() {
        return "billing";
    }
    getSentryTags(e, t) {
        return { ...super.getSentryTags(e, t), checkout_error: "true", billing_context: "checkout" };
    }
    getSentryExtras(e) {
        let {
            loadId: t,
            selectedSkuId: r,
            selectedPlanId: n,
            skuIds: u,
            isGift: c,
            purchaseType: s,
            locationStack: l,
        } = this.props;
        return {
            loadId: t,
            selectedSkuId: r,
            selectedPlanId: n,
            isGift: c,
            purchaseType: s,
            skuIds: u,
            locationStack: l,
            ...(e instanceof i.v ? { checkoutErrorExtraInformation: e.extraSentryInformation } : {}),
        };
    }
    onErrorCaught(e) {
        this.emitPaymentFlowErrorAnalytics(e);
    }
    emitPaymentFlowErrorAnalytics(e) {
        let t = this.getCrashedFlag(e),
            { loadId: r, locationStack: n, additionalAnalyticsData: i } = this.props,
            s = "string" == typeof e ? e : e.message;
        u.default.track(c.HAw.PAYMENT_FLOW_ERROR, {
            load_id: r,
            crashed: t,
            error_message: s,
            location_stack: n ?? [],
            ...i,
        });
    }
}
