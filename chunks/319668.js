"use strict";
n.d(t, { n: () => D, N: () => b });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(637141),
    o = n(606267),
    l = n(176095),
    u = n(826469),
    c = n(351906),
    d = n(997101);
let _ = (0, n(945810).mj)({
    name: "2026-06-pix-for-otp",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var h = n(446044),
    f = n(120700),
    p = n(364995),
    E = n(426398),
    m = n(872452),
    g = n(46332),
    A = n(652215),
    I = n(327105),
    T = n(375708),
    S = n(186460);
let y = new Set([f.C.ORB_CHECKOUT]);
function C(e) {
    let { onGiftCardRedeemed: t } = e,
        n = (0, g.t4)((e) => e.unifiedCheckoutFlow);
    return null != n && y.has(n) ? null : (0, i.jsx)(m.Z4, { className: S.K, onComplete: t });
}
function N(e) {
    var t;
    let { onPaymentSourceAdd: n } = e,
        { enabled: r } = ((t = { location: "CheckoutStatefulPayWithPixLink" }), { enabled: _.useConfig(t).enabled }),
        { enabled: s } = (0, h.Y)({ location: "CheckoutStatefulPayWithPixLink" });
    return r && s ? (0, i.jsx)(m.y, { className: S.K, text: T.intl.string(I.default.JPRQ9L), onClick: n }) : null;
}
function v(e) {
    let { onPaymentSourceAdd: t } = e,
        n = (0, g.t4)((e) => e.unifiedCheckoutFlow),
        r = (0, g.t4)((e) => e.isGift),
        s = (0, p.P)(),
        a = (0, E.kc)(),
        o = (n === f.C.COLLECTIBLES_CHECKOUT && !r) || (n === f.C.PREMIUM_CHECKOUT && r),
        l = s === d.d.BR,
        u = a.some((e) => e.type === A.hes.PIX);
    return o && l && !u && null != t ? (0, i.jsx)(N, { onPaymentSourceAdd: t }) : null;
}
var R = n(655857),
    O = n(165272);
function b(e) {
    let {
            setPaymentSourceId: t,
            paymentSourceId: n,
            label: a,
            additionalPaymentSourceDropdownProps: u,
            disabled: d,
            location: _,
            onPaymentSourceAdd: h,
            subscriptionPaymentSourceId: f,
            hideCurrencySelect: E,
            resolveInternalState: A,
            renderCustomPaymentSourceSelectorContent: I,
        } = e,
        { setPaymentSourceId: S, paymentSourceId: y } = (function (e) {
            let { setPaymentSourceId: t, paymentSourceId: n } = (function () {
                    let {
                            paymentSourceId: e,
                            setPaymentSourceId: t,
                            orderRecord: n,
                            isOrderSyncing: i,
                            orderSyncError: s,
                            setOrderSyncError: a,
                        } = (0, g.t4)((e) => ({
                            paymentSourceId: e.paymentSourceId,
                            setPaymentSourceId: e.setPaymentSourceId,
                            orderRecord: e.orderRecord,
                            isOrderSyncing: e.isOrderSyncing,
                            orderSyncError: e.orderSyncError,
                            setOrderSyncError: e.setOrderSyncError,
                        })),
                        o = null != n;
                    return (
                        (0, r.useEffect)(() => {
                            if (null == n || null == s) return;
                            let e = n.billingFacetRecord;
                            t(null != e ? e.paymentSourceId : null), a(null);
                        }, [n, s, t, a]),
                        {
                            paymentSourceId: e,
                            setPaymentSourceId: t,
                            isOrderSyncing: !!o && i,
                            orderSyncError: o ? s : null,
                        }
                    );
                })(),
                { setPaymentSourceId: i, paymentSourceId: s } = r.useMemo(
                    () => ({
                        setPaymentSourceId: void 0 !== e.setPaymentSourceId ? e.setPaymentSourceId : t,
                        paymentSourceId: void 0 !== e.paymentSourceId ? e.paymentSourceId : n,
                    }),
                    [e.setPaymentSourceId, e.paymentSourceId, t, n],
                );
            return { setPaymentSourceId: i, paymentSourceId: s };
        })({ setPaymentSourceId: t, paymentSourceId: n }),
        [N, O] = r.useState(!1),
        {
            giftCardsEnabled: b,
            giftCardCheckboxProps: D,
            walletCoversSubtotal: L,
            basePaymentSourceDropdownProps: w,
            isSubscriptionPaidByWallet: M,
            hidePersonalInformation: P,
        } = (function (e) {
            let {
                    paymentSourceId: t,
                    setPaymentSourceId: n,
                    location: i,
                    subscriptionPaymentSourceId: a,
                    pendingGiftCardWalletSelection: u,
                    setPendingGiftCardWalletSelection: d,
                } = e,
                { hasInvoiceOrderContextLoaded: _, checkoutPaymentSources: h } = (0, p.t)(),
                f = (0, g.t4)((e) => e.checkoutInvoiceError),
                {
                    dropdownPaymentSources: E,
                    giftCardsEnabled: m,
                    dropdownPaymentSourceId: A,
                    handleDropdownPaymentSourceChange: I,
                    giftCardCheckboxProps: T,
                    walletCoversSubtotal: S,
                    isSubscriptionPaidByWallet: y,
                    giftCardWallet: C,
                    isGiftCardCreditsChecked: N,
                    isWalletBalanceLoaded: v,
                    handleGiftCardCreditsToggle: R,
                } = (0, o.Y0)({
                    checkoutPaymentSources: h,
                    paymentSourceId: t,
                    setPaymentSourceId: n,
                    location: i ?? "BaseStatefulPaymentSourceSelector",
                    isReady: _,
                    subscriptionPaymentSourceId: a,
                });
            !(function (e) {
                let {
                        giftCardWallet: t,
                        isWalletBalanceLoaded: n,
                        walletCoversSubtotal: i,
                        isGiftCardCreditsChecked: a,
                        subscriptionPaymentSourceId: o,
                        handleGiftCardCreditsToggle: u,
                        pendingGiftCardWalletSelection: c,
                        setPendingGiftCardWalletSelection: d,
                    } = e,
                    _ = (0, s.bG)([l.A], () => null != t && l.A.getIsFetching(t.id), [t]),
                    h = r.useRef(!1);
                r.useEffect(() => {
                    if (!c) {
                        h.current = !1;
                        return;
                    }
                    if (null != t) {
                        if (_) {
                            h.current = !0;
                            return;
                        }
                        if (n) {
                            if ((null != o && o !== t.id) || a) return void d(!1);
                            if (i) {
                                u(!0), d(!1);
                                return;
                            }
                            h.current && d(!1);
                        }
                    }
                }, [c, t, _, n, i, a, o, u, d]);
            })({
                giftCardWallet: C,
                isWalletBalanceLoaded: v,
                walletCoversSubtotal: S,
                isGiftCardCreditsChecked: N,
                subscriptionPaymentSourceId: a,
                handleGiftCardCreditsToggle: R,
                pendingGiftCardWalletSelection: u,
                setPendingGiftCardWalletSelection: d,
            });
            let O = r.useMemo(() => {
                    let e = E.find((e) => e.isDefault);
                    return null != e ? e.id : void 0;
                }, [E]),
                b = (0, s.bG)([c.A], () => c.A.hidePersonalInformation ?? !1);
            return {
                giftCardsEnabled: m,
                giftCardCheckboxProps: T,
                walletCoversSubtotal: S,
                basePaymentSourceDropdownProps: r.useMemo(
                    () => ({
                        selectedPaymentSourceId: A,
                        paymentSources: E,
                        defaultPaymentSourceId: O,
                        hidePersonalInformation: b,
                        onChange: I,
                        dropdownLoading: !_ && null == f,
                    }),
                    [A, E, O, b, I, _, f],
                ),
                isSubscriptionPaidByWallet: y,
                hidePersonalInformation: b,
            };
        })({
            paymentSourceId: y,
            setPaymentSourceId: S,
            location: _,
            subscriptionPaymentSourceId: f,
            pendingGiftCardWalletSelection: N,
            setPendingGiftCardWalletSelection: O,
        }),
        { priceOptions: x, setCurrency: k } = (0, g.t4)((e) => ({
            priceOptions: e.checkoutPriceOptions,
            setCurrency: e.setCheckoutCurrency,
        })),
        { dropdownCurrencies: U, displayCurrency: G } = (0, R.Jn)(),
        F = r.useCallback(() => O(!0), []),
        { giftCardCheckboxProps: V, disabled: B } = r.useMemo(() => {
            let e = d ?? !1;
            return null != A
                ? A({ giftCardCheckboxProps: D, disabled: e }, { isSubscriptionPaidByWallet: M })
                : { giftCardCheckboxProps: D, disabled: e };
        }, [A, D, d, M]),
        j = null != V && !0 === V.locked,
        H = r.useMemo(() => {
            if (null != I)
                return I({
                    isSubscriptionPaidByWallet: M,
                    selectedSource: w.paymentSources.find((e) => e.id === w.selectedPaymentSourceId),
                    hidePersonalInformation: P,
                });
        }, [I, M, w, P]),
        Y = r.useMemo(() => {
            if (!E)
                return {
                    label: T.intl.string(T.t["/AAR02"]),
                    selectedCurrency: x.currency ?? G,
                    currencies: U,
                    onChange: k,
                    disabled: B,
                };
        }, [E, x.currency, G, U, k, B]),
        W = r.useMemo(() => ({ ...w, ...u, onPaymentSourceAdd: h }), [w, h, u]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.nL, {
                label: a,
                giftCardsEnabled: b,
                giftCardCheckboxProps: V,
                paymentSourceDropdownProps: W,
                showCheckboxAboveDropdown: L || j,
                disabled: B,
                currencySelectProps: Y,
                customSelectorContent: H,
            }),
            b ? (0, i.jsx)(C, { onGiftCardRedeemed: F }) : null,
            (0, i.jsx)(v, { onPaymentSourceAdd: h }),
        ],
    });
}
function D(e) {
    let { premiumSubscriptionPaymentSourceId: t, ...n } = e,
        { disableSourceChangeTooltipText: s, hasLockedPaymentSource: o } = r.useMemo(
            () =>
                null != t
                    ? { hasLockedPaymentSource: !0, disableSourceChangeTooltipText: T.intl.string(I.default.UdSuwf) }
                    : { hasLockedPaymentSource: !1, disableSourceChangeTooltipText: void 0 },
            [t],
        ),
        l = r.useCallback(
            (e, t) => {
                let { isSubscriptionPaidByWallet: n, selectorDisabled: i } = t;
                if (null == e) return null;
                let r = o && n,
                    a = o ? s : void 0,
                    l = !r && (e.disabled || i),
                    u = a ?? e.disabledTooltip;
                return { ...e, disabled: l, disabledTooltip: u, locked: r, showDisabledInfoIcon: null == a };
            },
            [o, s],
        ),
        c = r.useCallback(
            (e, t) => {
                let { isSubscriptionPaidByWallet: n } = t,
                    i = e.disabled || (o && !n);
                return {
                    giftCardCheckboxProps: l(e.giftCardCheckboxProps, {
                        isSubscriptionPaidByWallet: n,
                        selectorDisabled: i,
                    }),
                    disabled: i,
                };
            },
            [o, l],
        ),
        d = r.useCallback(
            (e) => {
                let { isSubscriptionPaidByWallet: t, selectedSource: n, hidePersonalInformation: r } = e;
                if (!o || t || null == s || null == n) return null;
                let l = n instanceof u.A ? n.source : n,
                    { brand: c, label: d } = (0, a.Sm)(l, r);
                return (0, i.jsx)(O.S, { label: d ?? "", icon: c ?? void 0, tooltipText: s });
            },
            [o, s],
        );
    return (0, i.jsx)(b, {
        ...n,
        resolveInternalState: c,
        renderCustomPaymentSourceSelectorContent: d,
        subscriptionPaymentSourceId: t,
    });
}
