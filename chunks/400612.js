n.d(t, { KY: () => u, ME: () => s, u$: () => l });
var r,
    i = n(582128),
    a = n(281044),
    l =
        (((r = {}).PREMIUM_GIFT = "PREMIUM_GIFT"),
        (r.PREMIUM_WITH_TRIAL = "PREMIUM_WITH_TRIAL"),
        (r.SUBSCRIPTION_NEW_PURCHASE = "SUBSCRIPTION_NEW_PURCHASE"),
        (r.SUBSCRIPTION_SWITCH_PLAN = "SUBSCRIPTION_SWITCH_PLAN"),
        (r.LOADING = "LOADING"),
        r);
let s = new Set(["SUBSCRIPTION_NEW_PURCHASE", "SUBSCRIPTION_SWITCH_PLAN"]);
function u(e) {
    let { invoiceTypeDiscriminator: t, invoiceError: n, shouldSetPurchasePreviewErrorFromInvoice: r } = e,
        {
            checkoutInvoicePreview: l,
            renewalInvoicePreview: s,
            setPurchasePreviewError: u,
            isPlanSwitchLoading: c,
        } = (0, a.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            renewalInvoicePreview: e.renewalInvoicePreview,
            setPurchasePreviewError: e.setPurchasePreviewError,
            isPlanSwitchLoading: e.getIsPlanSwitchLoading(),
        }));
    return (
        i.useEffect(() => {
            r && u(n);
        }, [n, r, u]),
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
                        error: n,
                        proratedInvoicePreview: l,
                        renewalInvoicePreview: s,
                        planSwitchLoading: c,
                    }),
                [t, n, l, s, c],
            ),
        }
    );
}
