"use strict";
n.d(t, { P: () => g });
var r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(311907),
    o = n(937008),
    l = n(156312),
    u = n(566980),
    c = n(800471),
    d = n(543767),
    _ = n(299301),
    f = n(97352),
    p = n(94420),
    h = n(699595),
    m = n(788868);
let E = (e) => {
        let { selectedPlanId: t } = e,
            { purchaseState: n } = (0, l.P5)(),
            r = (0, a.bG)([f.A], () => f.A.get(t));
        s()(null != r, "Missing plan");
        let i = [{ planId: r.id, quantity: 1 }],
            o = n === u.h.PURCHASING || n === u.h.COMPLETED;
        return { subscriptionPlan: r, purchaseState: n, purchaseDisabled: o, newItems: i };
    },
    g = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                trialId: i,
                metadata: s,
                isInOneStepSubscriptionCheckout: a = !1,
                isTrial: u = !1,
            } = e,
            f = (0, p.t4)((e) => e.selectedSkuId),
            {
                activeSubscription: g,
                contextMetadata: A,
                setPurchasePreviewError: I,
                isEligibleForDiscount: T,
            } = (0, l.P5)(),
            { isGift: S } = (0, o.Pv)(),
            { subscriptionPlan: y, purchaseDisabled: v, newItems: N } = E({ selectedPlanId: t }),
            [C, R] = (0, d.Kq)({
                items: N,
                renewal: !1,
                preventFetch: S || v,
                applyEntitlements: !0,
                paymentSourceId: n.paymentSourceId,
                currency: n.currency,
                trialId: i,
                metadata: s,
            }),
            O = r.useMemo(() => {
                if (u && null != C) return C;
            }, [u, C]),
            [b, D] = (0, d.Kq)({
                subscriptionId: g?.id,
                items: N,
                renewal: !0,
                preventFetch: S || v,
                trialId: i,
                paymentSourceId: n.paymentSourceId,
                currency: n.currency,
                metadata: s,
            });
        (0, p.Tr)(b);
        let [L, w] = (0, d.FP)({
                paymentSourceId: n.paymentSourceId,
                skuId: f,
                subscriptionPlanId: t,
                currency: n.currency,
                preventFetch: !S || v,
                loadId: A.loadId,
            }),
            M = r.useMemo(() => (S ? L : C), [S, L, C]);
        (0, p.F0)(M);
        let [P, x] = (0, d.Kq)({
            items: [{ planId: m.gD.PREMIUM_MONTH_TIER_2, quantity: 1 }],
            renewal: !1,
            preventFetch: !T,
            trialId: i,
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
            metadata: s,
        });
        (0, h.c)(P, T);
        let k = r.useMemo(() => R ?? D ?? x ?? w, [R, D, x, w]);
        r.useEffect(() => {
            I(k);
        }, [k, I]);
        let U = r.useMemo(() => (null != C ? C.subscriptionPeriodEnd : void 0), [C]),
            G = r.useMemo(() => (0, c.UB)(a, C, y), [a, C, y]),
            F = r.useMemo(
                () =>
                    (0, _.yf)({
                        error: k,
                        isGift: S,
                        oneTimePurchaseNitroGiftInvoicePreview: L,
                        trialInvoicePreview: O,
                        proratedInvoicePreview: C,
                        renewalInvoicePreview: b,
                        planSwitchLoading: G,
                    }),
                [k, S, L, O, C, b, G],
            );
        return {
            checkoutInvoicePreview: M,
            invoiceSummaryTypeWithPreview: F,
            discountInvoicePreview: P,
            oneTimePurchaseNitroGiftInvoicePreview: L,
            trialInvoicePreview: O,
            proratedInvoicePreview: C,
            renewalInvoicePreview: b,
            purchaseDisabled: v,
            subscriptionPlan: y,
            invoiceError: k,
            subscriptionPeriodEnd: U,
        };
    };
