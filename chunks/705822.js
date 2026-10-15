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
                };
            let i = e.get("hasFiatCheckoutPaymentSources"),
                r = e.getExpressCheckoutSubmitting(),
                a = e.getExpressCheckoutLoading(),
                s = !i || r;
            return {
                shouldMountExpressCheckoutElement: s,
                shouldExpressCheckoutBeVisible: s && "unavailable" !== e.expressCheckoutStatus,
                shouldDisablePaymentSelect: i ? r : a,
                isLoading: a,
                isSubmitting: r,
                isExpressCheckoutEnabledForFooter: "review_footer" === n.configurationType,
                isExpressCheckoutEnabledForPaymentSelect: "payment_selector" === n.configurationType,
            };
        },
        getExpressCheckoutConfig: (e) => {
            let { unifiedCheckoutFlow: n, isGift: i } = t();
            return null == n || !s.has(n) || i
                ? null
                : r.I.getConfig({ location: e ?? "StripeExpressCheckoutStoreSlice" }, { autoTrackExposure: null != e });
        },
        getIsExpressCheckoutEnabled: (e) => {
            let n = t().getExpressCheckoutConfig(e);
            return null != n && n.enabled;
        },
    };
}
