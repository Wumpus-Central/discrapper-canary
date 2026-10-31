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
                l = e.startingIsInPastDueCheckout && !e.hasAddedPaymentSourceThisSession,
                o = !i || l || r,
                d = o && !s && "unavailable" !== e.expressCheckoutStatus,
                c = "review_footer" === n.configurationType;
            return {
                shouldMountExpressCheckoutElement: o,
                shouldExpressCheckoutBeVisible: d,
                shouldDisablePaymentSelect: (e.startingIsInPastDueCheckout ? e.hasAddedPaymentSourceThisSession : i)
                    ? r
                    : a,
                isLoading: a,
                isSubmitting: r,
                isExpressCheckoutEnabledForFooter: c,
                isExpressCheckoutEnabledForPaymentSelect: "payment_selector" === n.configurationType,
                isExpressCheckoutVisibleInFooter: c && d,
            };
        },
        getExpressCheckoutConfig: (e) => {
            let { unifiedCheckoutFlow: n, isGift: i, startingIsInPastDueCheckout: l } = t(),
                o = (n === a.C.PREMIUM_CHECKOUT || n === a.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT) && i;
            if (null == n || !s.has(n) || o) return null;
            let d = r.I.getConfig({ location: e ?? "CheckoutStore" }, { autoTrackExposure: null != e }),
                c = n === a.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT || l;
            return d.enabled
                ? { ...d, configurationType: c ? "payment_selector" : "review_footer" }
                : { ...d, configurationType: null };
        },
        getIsExpressCheckoutEnabled: (e) => {
            let n = t().getExpressCheckoutConfig(e);
            return null != n && n.enabled;
        },
    };
}
