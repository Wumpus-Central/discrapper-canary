"use strict";
n.d(t, { j: () => o, v: () => s.v });
var i = n(260447),
    r = n(174459),
    s = n(71804),
    a = n(652215);
class o extends i.z {
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
            isGift: a,
            purchaseType: o,
            locationStack: l,
        } = this.props;
        return {
            loadId: t,
            selectedSkuId: n,
            selectedPlanId: i,
            isGift: a,
            purchaseType: o,
            skuIds: r,
            locationStack: l,
            ...(e instanceof s.v ? { checkoutErrorExtraInformation: e.extraSentryInformation } : {}),
        };
    }
    onErrorCaught(e) {
        this.emitPaymentFlowErrorAnalytics(e);
    }
    emitPaymentFlowErrorAnalytics(e) {
        let t = this.getCrashedFlag(e),
            { loadId: n, locationStack: i, additionalAnalyticsData: s } = this.props,
            o = "string" == typeof e ? e : e.message;
        r.default.track(a.HAw.PAYMENT_FLOW_ERROR, {
            load_id: n,
            crashed: t,
            error_message: o,
            location_stack: i ?? [],
            ...s,
        });
    }
}
