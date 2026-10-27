n.d(t, { e: () => o, i: () => l });
var i,
    r = n(650314),
    a = n(120700);
let s = new Set([a.C.PREMIUM_CHECKOUT, a.C.COLLECTIBLES_CHECKOUT, a.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]);
var l =
    (((i = {}).INITIALIZING = "initializing"),
    (i.SUBMITTING = "submitting"),
    (i.READY = "ready"),
    (i.UNAVAILABLE = "unavailable"),
    i);
function o(e, t) {
    return {
        expressCheckoutStatus: "initializing",
        setExpressCheckoutStatus: (t) => e({ expressCheckoutStatus: t }),
        markExpressCheckoutReady: (t) =>
            e((e) =>
                "submitting" === e.expressCheckoutStatus ? {} : { expressCheckoutStatus: t ? "ready" : "unavailable" },
            ),
        getExpressCheckoutSubmitting: () => {
            let { expressCheckoutStatus: e } = t();
            return "submitting" === e;
        },
        getExpressCheckoutLoading: () => {
            let { expressCheckoutStatus: e } = t();
            return "initializing" === e || "submitting" === e;
        },
        getExpressCheckoutVisibilityState: () => {
            let e = t(),
                n = e.getExpressCheckoutConfig();
            if (null == n || !n.enabled || null == e.get("checkoutContext"))
                return {
                    shouldMountExpressCheckoutElement: !1,
                    shouldExpressCheckoutBeVisible: !1,
                    shouldDisablePaymentSelect: !1,
                    isLoading: !1,
                    isSubmitting: !1,
                    isExpressCheckoutEnabledForFooter: !1,
                    isExpressCheckoutEnabledForPaymentSelect: !1,
                    isExpressCheckoutVisibleInFooter: !1,
                };
            let i = e.get("hasFiatCheckoutPaymentSources"),
                r = e.getExpressCheckoutSubmitting(),
                a = e.getExpressCheckoutLoading(),
                s = e.getIsPlanSwitchLoading(),
                l = !i || r,
                o = l && !s && "unavailable" !== e.expressCheckoutStatus,
                d = "review_footer" === n.configurationType;
            return {
                shouldMountExpressCheckoutElement: l,
                shouldExpressCheckoutBeVisible: o,
                shouldDisablePaymentSelect: i ? r : a,
                isLoading: a,
                isSubmitting: r,
                isExpressCheckoutEnabledForFooter: d,
                isExpressCheckoutEnabledForPaymentSelect: "payment_selector" === n.configurationType,
                isExpressCheckoutVisibleInFooter: d && o,
            };
        },
        getExpressCheckoutConfig: (e) => {
            let { unifiedCheckoutFlow: n, isGift: i } = t(),
                l = (n === a.C.PREMIUM_CHECKOUT || n === a.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT) && i;
            if (null == n || !s.has(n) || l) return null;
            let o = r.I.getConfig(
                { location: e ?? "StripeExpressCheckoutStoreSlice" },
                { autoTrackExposure: null != e },
            );
            return "review_footer" === o.configurationType && n === a.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT ? null : o;
        },
        getIsExpressCheckoutEnabled: (e) => {
            let n = t().getExpressCheckoutConfig(e);
            return null != n && n.enabled;
        },
        getIsPurchaseDisabled: () => {
            let { hasAcceptedTerms: e, get: n } = t(),
                i = n("isOrderLocked"),
                r = n("primaryInvoicesError");
            return !e || i || null != r;
        },
    };
}
