n.d(t, { KY: () => c, ME: () => u, u$: () => s });
var r,
    i = n(582128),
    a = n(800471),
    l = n(123816),
    s =
        (((r = {}).PREMIUM_GIFT = "PREMIUM_GIFT"),
        (r.PREMIUM_WITH_TRIAL = "PREMIUM_WITH_TRIAL"),
        (r.SUBSCRIPTION_NEW_PURCHASE = "SUBSCRIPTION_NEW_PURCHASE"),
        (r.SUBSCRIPTION_SWITCH_PLAN = "SUBSCRIPTION_SWITCH_PLAN"),
        (r.LOADING = "LOADING"),
        r);
let u = new Set(["SUBSCRIPTION_NEW_PURCHASE", "SUBSCRIPTION_SWITCH_PLAN"]);
function c(e) {
    let {
            invoiceTypeDiscriminator: t,
            subscriptionPlan: n,
            invoiceError: r,
            shouldSetPurchasePreviewErrorFromInvoice: s,
        } = e,
        {
            checkoutInvoicePreview: u,
            renewalInvoicePreview: c,
            setPurchasePreviewError: o,
        } = (0, l.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            renewalInvoicePreview: e.renewalInvoicePreview,
            setPurchasePreviewError: e.setPurchasePreviewError,
        })),
        d = i.useMemo(() => (0, a.U)(u, n), [u, n]);
    return (
        i.useEffect(() => {
            s && o(r);
        }, [r, s, o]),
        {
            discriminatedInvoicePreview: i.useMemo(
                () =>
                    (function (e) {
                        let {
                            error: t,
                            invoiceTypeDiscriminator: n,
                            proratedInvoicePreview: r,
                            renewalInvoicePreview: i,
                            planSwitchLoading: a,
                        } = e;
                        if (null != t) return null;
                        if (a);
                        else if ("PREMIUM_GIFT" === n && null != r) return { type: "PREMIUM_GIFT", invoicePreview: r };
                        else if ("PREMIUM_WITH_TRIAL" === n && null != r)
                            return { type: "PREMIUM_WITH_TRIAL", invoicePreview: r, renewalInvoicePreview: i };
                        else if (null != r && null != i)
                            return { type: "SUBSCRIPTION_NEW_PURCHASE", invoicePreview: r, renewalInvoicePreview: i };
                        return { type: "LOADING", invoicePreview: null };
                    })({
                        invoiceTypeDiscriminator: t,
                        error: r,
                        proratedInvoicePreview: u,
                        renewalInvoicePreview: c,
                        planSwitchLoading: d,
                    }),
                [t, r, u, c, d],
            ),
        }
    );
}
