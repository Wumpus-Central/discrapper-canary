s.d(t, { KY: () => u, ME: () => c, u$: () => l });
var n,
    r = s(582128),
    a = s(800471),
    i = s(721836),
    l =
        (((n = {}).PREMIUM_GIFT = "PREMIUM_GIFT"),
        (n.PREMIUM_WITH_TRIAL = "PREMIUM_WITH_TRIAL"),
        (n.SUBSCRIPTION_NEW_PURCHASE = "SUBSCRIPTION_NEW_PURCHASE"),
        (n.SUBSCRIPTION_SWITCH_PLAN = "SUBSCRIPTION_SWITCH_PLAN"),
        (n.LOADING = "LOADING"),
        n);
let c = new Set(["SUBSCRIPTION_NEW_PURCHASE", "SUBSCRIPTION_SWITCH_PLAN"]);
function u(e) {
    let {
            invoiceTypeDiscriminator: t,
            subscriptionPlan: s,
            invoiceError: n,
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
        d = r.useMemo(() => (0, a.U)(c, s), [c, s]);
    return (
        r.useEffect(() => {
            l && o(n);
        }, [n, l, o]),
        {
            discriminatedInvoicePreview: r.useMemo(
                () =>
                    (function (e) {
                        let {
                            error: t,
                            invoiceTypeDiscriminator: s,
                            proratedInvoicePreview: n,
                            renewalInvoicePreview: r,
                            planSwitchLoading: a,
                        } = e;
                        if (null != t) return null;
                        if (a);
                        else if ("PREMIUM_GIFT" === s && null != n) return { type: "PREMIUM_GIFT", invoicePreview: n };
                        else if ("PREMIUM_WITH_TRIAL" === s && null != n)
                            return { type: "PREMIUM_WITH_TRIAL", invoicePreview: n, renewalInvoicePreview: r };
                        else if (null != n && null != r)
                            return { type: "SUBSCRIPTION_NEW_PURCHASE", invoicePreview: n, renewalInvoicePreview: r };
                        return { type: "LOADING", invoicePreview: null };
                    })({
                        invoiceTypeDiscriminator: t,
                        error: n,
                        proratedInvoicePreview: c,
                        renewalInvoicePreview: u,
                        planSwitchLoading: d,
                    }),
                [t, n, c, u, d],
            ),
        }
    );
}
