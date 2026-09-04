n.d(t, { p: () => m });
var l = n(477900),
    i = n(582128),
    r = n(166532),
    a = n(994143),
    s = n(465657),
    o = n(721836),
    u = n(375708);
let c = (e) => {
    let { handlePaymentSourceAdd: t } = e;
    return (0, l.jsx)(a.RL, { handlePaymentSourceAdd: t });
};
class d {
    isGift;
    isFree;
    constructor({ isGift: e, isFree: t }) {
        (this.isGift = e), (this.isFree = t);
    }
    resolveDisabledPurchase(e, t) {
        let { isSelectedPaymentSourceDisabled: n, purchasePreviewError: l, invoicePreview: i } = t;
        return !!e.disablePurchase || !!n || null == i || null != l;
    }
    resolveInternalState = (e, t) => ({ disablePurchase: this.resolveDisabledPurchase(e, t) });
    resolveReviewButtonLabel() {
        return this.isGift
            ? u.intl.string(u.t.ouo4FK)
            : this.isFree
              ? u.intl.string(u.t["302tKP"])
              : u.intl.string(u.t.ExD0Ng);
    }
    resolveTenantReviewButtonProps = (e) => {
        let { onReviewButtonClick: t, loading: n, disabled: l } = e;
        return {
            variant: "active",
            text: this.resolveReviewButtonLabel(),
            dataTestId: "purchase",
            onClick: t,
            loading: n,
            disabled: l,
        };
    };
}
function m(e) {
    let { isGift: t, invoicePreview: n } = (0, o.t4)((e) => ({
            isGift: e.isGift,
            invoicePreview: e.checkoutInvoicePreview,
        })),
        a = n?.total === 0,
        u = e.handleStepChange,
        m = i.useCallback(() => {
            if (t) return void u(r.pn.GIFT_CUSTOMIZATION);
        }, [u, t]),
        p = i.useMemo(() => new d({ isGift: t, isFree: a }), [t, a]);
    return (0, l.jsx)(s.Y, {
        ...e,
        isBackButtonEligible: t,
        onFooterBackClick: m,
        renderStepBody: c,
        resolveInternalState: p.resolveInternalState,
        resolveTenantReviewButtonProps: p.resolveTenantReviewButtonProps,
    });
}
