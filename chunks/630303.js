n.d(t, { p: () => p });
var l = n(627968),
    i = n(64700),
    r = n(465657),
    a = n(6938),
    s = n(166532),
    o = n(630934),
    u = n(375708);
let c = (e) => {
    let { handlePaymentSourceAdd: t } = e;
    return (0, l.jsx)(o.Ay, { handlePaymentSourceAdd: t });
};
class d {
    isGift;
    constructor({ isGift: e }) {
        this.isGift = e;
    }
    resolveDisabledPurchase(e, t) {
        let { isSelectedPaymentSourceDisabled: n, purchasePreviewError: l, invoicePreview: i } = t;
        return !!e.disablePurchase || !!n || null == i || null != l;
    }
    resolveInternalState = (e, t) => ({ disablePurchase: this.resolveDisabledPurchase(e, t) });
    resolveReviewButtonLabel() {
        return this.isGift ? u.intl.string(u.t.ouo4FK) : u.intl.string(u.t.ExD0Ng);
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
function p(e) {
    let { isGift: t } = (0, a.t4)((e) => ({ isGift: e.isGift })),
        n = e.handleStepChange,
        o = i.useCallback(() => {
            if (t) return void n(s.pn.GIFT_CUSTOMIZATION);
        }, [n, t]),
        u = i.useMemo(() => new d({ isGift: t }), [t]);
    return (0, l.jsx)(r.Y, {
        ...e,
        isBackButtonEligible: t,
        onFooterBackClick: o,
        renderStepBody: c,
        resolveInternalState: u.resolveInternalState,
        resolveTenantReviewButtonProps: u.resolveTenantReviewButtonProps,
    });
}
