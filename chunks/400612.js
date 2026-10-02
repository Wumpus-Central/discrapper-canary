s.d(t, { KY: () => u, ME: () => c, u$: () => l });
var r,
    n = s(582128),
    a = s(800471),
    i = s(661899),
    l =
        (((r = {}).PREMIUM_GIFT = "PREMIUM_GIFT"),
        (r.PREMIUM_WITH_TRIAL = "PREMIUM_WITH_TRIAL"),
        (r.SUBSCRIPTION_NEW_PURCHASE = "SUBSCRIPTION_NEW_PURCHASE"),
        (r.SUBSCRIPTION_SWITCH_PLAN = "SUBSCRIPTION_SWITCH_PLAN"),
        (r.LOADING = "LOADING"),
        r);
let c = new Set(["SUBSCRIPTION_NEW_PURCHASE", "SUBSCRIPTION_SWITCH_PLAN"]);
function u(e) {
    let {
            invoiceTypeDiscriminator: t,
            subscriptionPlan: s,
            invoiceError: r,
            shouldSetPurchasePreviewErrorFromInvoice: l,
        } = e,
        {
            checkoutInvoicePreview: c,
            renewalInvoicePreview: u,
            setPurchasePreviewError: o,
        } = (0, i.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            renewalInvoicePreview: e.renewalInvoicePreview,
            setPurchasePreviewError: e.setPurchasePreviewError,
        })),
        d = n.useMemo(() => (0, a.U)(c, s), [c, s]);
    return (
        n.useEffect(() => {
            l && o(r);
        }, [r, l, o]),
        {
            discriminatedInvoicePreview: n.useMemo(
                () =>
                    (function (e) {
                        let {
                            error: t,
                            invoiceTypeDiscriminator: s,
                            proratedInvoicePreview: r,
                            renewalInvoicePreview: n,
                            planSwitchLoading: a,
                        } = e;
                        if (null != t) return null;
                        if (a);
                        else if ("PREMIUM_GIFT" === s && null != r) return { type: "PREMIUM_GIFT", invoicePreview: r };
                        else if ("PREMIUM_WITH_TRIAL" === s && null != r)
                            return { type: "PREMIUM_WITH_TRIAL", invoicePreview: r, renewalInvoicePreview: n };
                        else if (null != r && null != n)
                            return { type: "SUBSCRIPTION_NEW_PURCHASE", invoicePreview: r, renewalInvoicePreview: n };
                        return { type: "LOADING", invoicePreview: null };
                    })({
                        invoiceTypeDiscriminator: t,
                        error: r,
                        proratedInvoicePreview: c,
                        renewalInvoicePreview: u,
                        planSwitchLoading: d,
                    }),
                [t, r, c, u, d],
            ),
        }
    );
}
