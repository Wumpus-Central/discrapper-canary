t.d(s, { KY: () => u, ME: () => c, u$: () => l });
var n,
    r = t(582128),
    a = t(800471),
    i = t(721836),
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
            invoiceTypeDiscriminator: s,
            subscriptionPlan: t,
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
        d = r.useMemo(() => (0, a.U)(c, t), [c, t]);
    return (
        r.useEffect(() => {
            l && o(n);
        }, [n, l, o]),
        {
            discriminatedInvoicePreview: r.useMemo(
                () =>
                    (function (e) {
                        let {
                            error: s,
                            invoiceTypeDiscriminator: t,
                            proratedInvoicePreview: n,
                            renewalInvoicePreview: r,
                            planSwitchLoading: a,
                        } = e;
                        if (null != s) return null;
                        if (a);
                        else if ("PREMIUM_GIFT" === t && null != n) return { type: "PREMIUM_GIFT", invoicePreview: n };
                        else if ("PREMIUM_WITH_TRIAL" === t && null != n)
                            return { type: "PREMIUM_WITH_TRIAL", invoicePreview: n, renewalInvoicePreview: r };
                        else if (null != n && null != r)
                            return { type: "SUBSCRIPTION_NEW_PURCHASE", invoicePreview: n, renewalInvoicePreview: r };
                        return { type: "LOADING", invoicePreview: null };
                    })({
                        invoiceTypeDiscriminator: s,
                        error: n,
                        proratedInvoicePreview: c,
                        renewalInvoicePreview: u,
                        planSwitchLoading: d,
                    }),
                [s, n, c, u, d],
            ),
        }
    );
}
