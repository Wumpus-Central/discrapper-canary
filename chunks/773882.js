n.d(t, { p: () => m });
var l = n(477900),
    i = n(582128),
    r = n(166532),
    a = n(270927),
    s = n(448910),
    o = n(69882),
    u = n(281044),
    c = n(105292);
class d {
    resolveDisabledPurchase(e, t) {
        let { isSelectedPaymentSourceDisabled: n, purchasePreviewError: l, invoicePreview: i } = t;
        return !!e.disablePurchase || !!n || null == i || null != l;
    }
    resolveInternalState = (e, t) => ({ disablePurchase: this.resolveDisabledPurchase(e, t) });
}
function m(e) {
    let {
            isGift: t,
            invoicePreview: n,
            isCheckoutDataLoading: m,
        } = (0, u.t4)((e) => ({
            isGift: e.isGift,
            invoicePreview: e.checkoutInvoicePreview,
            isCheckoutDataLoading: e.get("isCheckoutDataLoading"),
        })),
        p = n?.total === 0,
        C = e.handleStepChange,
        h = i.useCallback(() => {
            if (t) return void C(r.pn.GIFT_CUSTOMIZATION);
        }, [C, t]),
        f = i.useMemo(() => new d(), []),
        E = i.useCallback(
            (e) => {
                let { handlePaymentSourceAdd: t } = e;
                return m
                    ? (0, l.jsx)(o.Ed, { shouldShowUnifiedHeader: !0 })
                    : (0, l.jsx)(a.RL, { handlePaymentSourceAdd: t });
            },
            [m],
        ),
        S = i.useMemo(
            () =>
                (function (e) {
                    let { isGift: t, isFree: n } = e,
                        l = c.intl.string(c.t.ExD0Ng);
                    return (
                        t ? (l = c.intl.string(c.t.ouo4FK)) : n && (l = c.intl.string(c.t["302tKP"])),
                        { variant: "active", text: l, dataTestId: "purchase" }
                    );
                })({ isGift: t, isFree: p }),
            [t, p],
        );
    return (0, l.jsx)(s.Y, {
        ...e,
        isBackButtonEligible: t,
        onFooterBackClick: h,
        renderStepBody: E,
        resolveInternalState: f.resolveInternalState,
        tenantProvidedReviewButtonProps: S,
    });
}
