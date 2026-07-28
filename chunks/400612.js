n.d(t, { KY: () => c, ME: () => u, u$: () => l });
var s,
    r = n(582128),
    i = n(800471),
    a = n(316915),
    l =
        (((s = {}).PREMIUM_GIFT = "PREMIUM_GIFT"),
        (s.PREMIUM_WITH_TRIAL = "PREMIUM_WITH_TRIAL"),
        (s.SUBSCRIPTION_NEW_PURCHASE = "SUBSCRIPTION_NEW_PURCHASE"),
        (s.SUBSCRIPTION_SWITCH_PLAN = "SUBSCRIPTION_SWITCH_PLAN"),
        (s.LOADING = "LOADING"),
        s);
let u = new Set(["SUBSCRIPTION_NEW_PURCHASE", "SUBSCRIPTION_SWITCH_PLAN"]);
function c(e) {
    let {
            invoiceTypeDiscriminator: t,
            subscriptionPlan: n,
            invoiceError: s,
            shouldSetPurchasePreviewErrorFromInvoice: l,
        } = e,
        {
            checkoutInvoicePreview: u,
            renewalInvoicePreview: c,
            setPurchasePreviewError: o,
        } = (0, a.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            renewalInvoicePreview: e.renewalInvoicePreview,
            setPurchasePreviewError: e.setPurchasePreviewError,
        })),
        d = r.useMemo(() => (0, i.U)(u, n), [u, n]);
    return (
        r.useEffect(() => {
            l && o(s);
        }, [s, l, o]),
        {
            discriminatedInvoicePreview: r.useMemo(
                () =>
                    (function (e) {
                        let {
                            error: t,
                            invoiceTypeDiscriminator: n,
                            proratedInvoicePreview: s,
                            renewalInvoicePreview: r,
                            planSwitchLoading: i,
                        } = e;
                        if (null != t) return null;
                        if (i);
                        else if ("PREMIUM_GIFT" === n && null != s) return { type: "PREMIUM_GIFT", invoicePreview: s };
                        else if ("PREMIUM_WITH_TRIAL" === n && null != s)
                            return { type: "PREMIUM_WITH_TRIAL", invoicePreview: s, renewalInvoicePreview: r };
                        else if (null != s && null != r)
                            return { type: "SUBSCRIPTION_NEW_PURCHASE", invoicePreview: s, renewalInvoicePreview: r };
                        return { type: "LOADING", invoicePreview: null };
                    })({
                        invoiceTypeDiscriminator: t,
                        error: s,
                        proratedInvoicePreview: u,
                        renewalInvoicePreview: c,
                        planSwitchLoading: d,
                    }),
                [t, s, u, c, d],
            ),
        }
    );
}
