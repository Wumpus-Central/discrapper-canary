n.d(t, { ut: () => i, ws: () => o });
var l = n(64700),
    r = n(652215);
function i(e) {
    let { giftCardWallet: t, dropdownPaymentSources: n, subscriptionPaymentSourceId: l, defaultPaymentSourceId: r } = e;
    if (null != t && (null == l || l === t.id)) return t.id;
    if (null != l) {
        let e = n.find((e) => e.id === l);
        if (null != e && e.enabled) return l;
    }
    if (null != r) {
        let e = n.find((e) => e.id === r);
        if (null != e && e.enabled) return r;
    }
    return n.find((e) => e.enabled)?.id ?? null;
}
class a {
    checkoutPaymentSources;
    isReady;
    pendingPaymentSourceId;
    selectedPaymentSourceId;
    dropdownPaymentSources;
    subscriptionPaymentSourceId;
    giftCardWallet;
    giftCardsEnabled;
    constructor({
        checkoutPaymentSources: e,
        dropdownPaymentSources: t,
        subscriptionPaymentSourceId: n,
        giftCardWallet: l,
        isReady: r,
        pendingPaymentSourceId: i,
        paymentSourceId: a,
        giftCardsEnabled: o,
    }) {
        (this.checkoutPaymentSources = e),
            (this.isReady = r),
            (this.pendingPaymentSourceId = i),
            (this.selectedPaymentSourceId = a),
            (this.dropdownPaymentSources = t),
            (this.subscriptionPaymentSourceId = n),
            (this.giftCardWallet = l),
            (this.giftCardsEnabled = o);
    }
    get hasPaymentSourcesFromCheckoutStore() {
        return this.isReady && this.checkoutPaymentSources.length > 0;
    }
    get isPendingPaymentSourceEqualToCurrent() {
        return null != this.pendingPaymentSourceId && this.pendingPaymentSourceId === this.selectedPaymentSourceId;
    }
    getResolvedPaymentSourceId() {
        return i({
            giftCardWallet: this.giftCardWallet,
            dropdownPaymentSources: this.dropdownPaymentSources,
            subscriptionPaymentSourceId: this.subscriptionPaymentSourceId,
            defaultPaymentSourceId: this.selectedPaymentSourceId,
        });
    }
    shouldSetInitialPaymentSourceId(e) {
        let { hasCheckedInitialPaymentSourceRef: t } = e;
        return !t.current && !!this.hasPaymentSourcesFromCheckoutStore && !this.isPendingPaymentSourceEqualToCurrent;
    }
    checkAndResolveInitialPaymentSourceId(e) {
        let { hasCheckedInitialPaymentSourceRef: t } = e;
        if (!this.shouldSetInitialPaymentSourceId({ hasCheckedInitialPaymentSourceRef: t }))
            return { shouldSet: !1, initialPaymentSourceId: null };
        t.current = !0;
        let n = this.getResolvedPaymentSourceId();
        return n !== this.selectedPaymentSourceId
            ? { shouldSet: !0, initialPaymentSourceId: n }
            : { shouldSet: !1, initialPaymentSourceId: null };
    }
    get isSelectedPaymentSourceValid() {
        return this.checkoutPaymentSources.some((e) =>
            (function (e) {
                let { paymentSource: t, paymentSourceId: n, giftCardsEnabled: l } = e;
                return (t.type !== r.hes.TDS_WALLET || !!l) && null != n && t.id === n && t.enabled;
            })({
                paymentSource: e,
                paymentSourceId: this.selectedPaymentSourceId,
                giftCardsEnabled: this.giftCardsEnabled,
            }),
        );
    }
    shouldSelfCorrectPaymentSourceId(e) {
        let { hasCheckedInitialPaymentSourceRef: t } = e;
        return (
            !!this.hasPaymentSourcesFromCheckoutStore &&
            null != this.selectedPaymentSourceId &&
            !!t.current &&
            !this.isPendingPaymentSourceEqualToCurrent &&
            !this.isSelectedPaymentSourceValid
        );
    }
    resolveSelfCorrectPaymentSourceId(e) {
        let { hasCheckedInitialPaymentSourceRef: t } = e;
        return this.shouldSelfCorrectPaymentSourceId({ hasCheckedInitialPaymentSourceRef: t })
            ? { shouldSet: !0, correctedPaymentSourceId: this.getResolvedPaymentSourceId() }
            : { shouldSet: !1, correctedPaymentSourceId: null };
    }
}
function o(e, t) {
    let n = l.useRef(!1),
        r = l.useMemo(() => new a(t), [t]);
    l.useEffect(() => {
        let { shouldSet: t, initialPaymentSourceId: l } = r.checkAndResolveInitialPaymentSourceId({
            hasCheckedInitialPaymentSourceRef: n,
        });
        t && e(l);
    }, [r, e]),
        l.useEffect(() => {
            let { shouldSet: t, correctedPaymentSourceId: l } = r.resolveSelfCorrectPaymentSourceId({
                hasCheckedInitialPaymentSourceRef: n,
            });
            t && e(l);
        }, [r, e]);
}
