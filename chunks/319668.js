n.d(t, { n: () => x, N: () => _ });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(637141),
    s = n(606267),
    o = n(176095),
    u = n(826469),
    c = n(351906),
    d = n(997101);
let p = (0, n(945810).mj)({
    name: "2026-06-pix-for-otp",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var m = n(120700),
    C = n(936477),
    h = n(87725),
    f = n(652215),
    E = n(327105),
    S = n(375708),
    A = n(746692);
let y = new Set([m.C.ORB_CHECKOUT]);
function P(e) {
    let { onGiftCardRedeemed: t } = e,
        n = (0, h.t4)((e) => e.unifiedCheckoutFlow);
    return null != n && y.has(n) ? null : (0, l.jsx)(C.Z4, { className: A.K, onComplete: t });
}
function I(e) {
    var t;
    let { onPaymentSourceAdd: n } = e,
        { enabled: r } = ((t = { location: "CheckoutStatefulPayWithPixLink" }), { enabled: p.useConfig(t).enabled }),
        a = i.useCallback(() => n({ linkWalletEnabled: !1 }), [n]);
    return r ? (0, l.jsx)(C.y, { className: A.K, text: S.intl.string(E.default.JPRQ9L), onClick: a }) : null;
}
function g(e) {
    let { onPaymentSourceAdd: t } = e,
        n = (0, h.t4)((e) => e.unifiedCheckoutFlow),
        {
            isGift: i,
            checkoutPaymentSources: r,
            checkoutStoreCountry: a,
        } = (0, h.t4)((e) => ({
            isGift: e.isGift,
            checkoutPaymentSources: e.get("checkoutPaymentSources"),
            checkoutStoreCountry: e.get("checkoutStoreCountry"),
        })),
        s = (n === m.C.COLLECTIBLES_CHECKOUT && !i) || (n === m.C.PREMIUM_CHECKOUT && i),
        o = a === d.d.BR,
        u = r.some((e) => e.type === f.hes.PIX);
    return s && o && !u && null != t ? (0, l.jsx)(I, { onPaymentSourceAdd: t }) : null;
}
var v = n(655857),
    T = n(165272);
function _(e) {
    let {
            setPaymentSourceId: t,
            paymentSourceId: n,
            label: a,
            additionalPaymentSourceDropdownProps: u,
            disabled: d,
            location: p,
            onPaymentSourceAdd: m,
            subscriptionPaymentSourceId: f,
            hideCurrencySelect: E,
            resolveInternalState: A,
            renderCustomPaymentSourceSelectorContent: y,
        } = e,
        { setPaymentSourceId: I, paymentSourceId: T } = (function (e) {
            let { setPaymentSourceId: t, paymentSourceId: n } = (function () {
                    let {
                            paymentSourceId: e,
                            setPaymentSourceId: t,
                            orderRecord: n,
                            isOrderSyncing: l,
                            orderSyncError: r,
                            setOrderSyncError: a,
                        } = (0, h.t4)((e) => ({
                            paymentSourceId: e.paymentSourceId,
                            setPaymentSourceId: e.setPaymentSourceId,
                            orderRecord: e.orderRecord,
                            isOrderSyncing: e.isOrderSyncing,
                            orderSyncError: e.orderSyncError,
                            setOrderSyncError: e.setOrderSyncError,
                        })),
                        s = null != n;
                    return (
                        (0, i.useEffect)(() => {
                            if (null == n || null == r) return;
                            let e = n.billingFacetRecord;
                            t(null != e ? e.paymentSourceId : null), a(null);
                        }, [n, r, t, a]),
                        {
                            paymentSourceId: e,
                            setPaymentSourceId: t,
                            isOrderSyncing: !!s && l,
                            orderSyncError: s ? r : null,
                        }
                    );
                })(),
                { setPaymentSourceId: l, paymentSourceId: r } = i.useMemo(
                    () => ({
                        setPaymentSourceId: void 0 !== e.setPaymentSourceId ? e.setPaymentSourceId : t,
                        paymentSourceId: void 0 !== e.paymentSourceId ? e.paymentSourceId : n,
                    }),
                    [e.setPaymentSourceId, e.paymentSourceId, t, n],
                );
            return { setPaymentSourceId: l, paymentSourceId: r };
        })({ setPaymentSourceId: t, paymentSourceId: n }),
        [_, x] = i.useState(!1),
        {
            giftCardsEnabled: N,
            giftCardCheckboxProps: b,
            walletCoversSubtotal: R,
            basePaymentSourceDropdownProps: j,
            isSubscriptionPaidByWallet: M,
            hidePersonalInformation: O,
        } = (function (e) {
            let {
                    paymentSourceId: t,
                    setPaymentSourceId: n,
                    location: l,
                    subscriptionPaymentSourceId: a,
                    pendingGiftCardWalletSelection: u,
                    setPendingGiftCardWalletSelection: d,
                } = e,
                {
                    isCheckoutDataLoading: p,
                    checkoutPaymentSources: m,
                    hasCheckoutContextLoaded: C,
                } = (0, h.t4)((e) => ({
                    isCheckoutDataLoading: e.get("isCheckoutDataLoading"),
                    checkoutPaymentSources: e.get("checkoutPaymentSources"),
                    hasCheckoutContextLoaded: e.get("hasCheckoutContextLoaded"),
                })),
                {
                    dropdownPaymentSources: f,
                    giftCardsEnabled: E,
                    dropdownPaymentSourceId: S,
                    handleDropdownPaymentSourceChange: A,
                    giftCardCheckboxProps: y,
                    walletCoversSubtotal: P,
                    isSubscriptionPaidByWallet: I,
                    giftCardWallet: g,
                    isGiftCardCreditsChecked: v,
                    isWalletBalanceLoaded: T,
                    handleGiftCardCreditsToggle: _,
                } = (0, s.Y0)({
                    checkoutPaymentSources: m,
                    paymentSourceId: t,
                    setPaymentSourceId: n,
                    location: l ?? "BaseStatefulPaymentSourceSelector",
                    isReady: C,
                    subscriptionPaymentSourceId: a,
                });
            !(function (e) {
                let {
                        giftCardWallet: t,
                        isWalletBalanceLoaded: n,
                        walletCoversSubtotal: l,
                        isGiftCardCreditsChecked: a,
                        subscriptionPaymentSourceId: s,
                        handleGiftCardCreditsToggle: u,
                        pendingGiftCardWalletSelection: c,
                        setPendingGiftCardWalletSelection: d,
                    } = e,
                    p = (0, r.bG)([o.A], () => null != t && o.A.getIsFetching(t.id), [t]),
                    m = i.useRef(!1);
                i.useEffect(() => {
                    if (!c) {
                        m.current = !1;
                        return;
                    }
                    if (null != t) {
                        if (p) {
                            m.current = !0;
                            return;
                        }
                        if (n) {
                            if ((null != s && s !== t.id) || a) return void d(!1);
                            if (l) {
                                u(!0), d(!1);
                                return;
                            }
                            m.current && d(!1);
                        }
                    }
                }, [c, t, p, n, l, a, s, u, d]);
            })({
                giftCardWallet: g,
                isWalletBalanceLoaded: T,
                walletCoversSubtotal: P,
                isGiftCardCreditsChecked: v,
                subscriptionPaymentSourceId: a,
                handleGiftCardCreditsToggle: _,
                pendingGiftCardWalletSelection: u,
                setPendingGiftCardWalletSelection: d,
            });
            let x = i.useMemo(() => {
                    let e = f.find((e) => e.isDefault);
                    return null != e ? e.id : void 0;
                }, [f]),
                N = (0, r.bG)([c.A], () => c.A.hidePersonalInformation ?? !1);
            return {
                giftCardsEnabled: E,
                giftCardCheckboxProps: y,
                walletCoversSubtotal: P,
                basePaymentSourceDropdownProps: i.useMemo(
                    () => ({
                        selectedPaymentSourceId: S,
                        paymentSources: f,
                        defaultPaymentSourceId: x,
                        hidePersonalInformation: N,
                        onChange: A,
                        dropdownLoading: p,
                    }),
                    [S, f, x, N, A, p],
                ),
                isSubscriptionPaidByWallet: I,
                hidePersonalInformation: N,
            };
        })({
            paymentSourceId: T,
            setPaymentSourceId: I,
            location: p,
            subscriptionPaymentSourceId: f,
            pendingGiftCardWalletSelection: _,
            setPendingGiftCardWalletSelection: x,
        }),
        {
            priceOptions: L,
            setCurrency: k,
            expressCheckoutSubmitting: w,
        } = (0, h.t4)((e) => ({
            priceOptions: e.checkoutPriceOptions,
            setCurrency: e.setCheckoutCurrency,
            expressCheckoutSubmitting: e.expressCheckoutSubmitting,
        })),
        { dropdownCurrencies: U, displayCurrency: D } = (0, v.Jn)(),
        G = i.useCallback(() => x(!0), []),
        F = i.useMemo(() => w || (d ?? !1), [w, d]),
        { giftCardCheckboxProps: H, disabled: B } = i.useMemo(
            () =>
                null != A
                    ? A({ giftCardCheckboxProps: b, disabled: F }, { isSubscriptionPaidByWallet: M })
                    : { giftCardCheckboxProps: b, disabled: F },
            [F, A, b, M],
        ),
        Y = null != H && !0 === H.locked,
        W = i.useMemo(() => {
            if (null != y)
                return y({
                    isSubscriptionPaidByWallet: M,
                    selectedSource: j.paymentSources.find((e) => e.id === j.selectedPaymentSourceId),
                    hidePersonalInformation: O,
                });
        }, [y, M, j, O]),
        V = i.useMemo(() => {
            if (!E)
                return {
                    label: S.intl.string(S.t["/AAR02"]),
                    selectedCurrency: L.currency ?? D,
                    currencies: U,
                    onChange: k,
                    disabled: B,
                };
        }, [E, L.currency, D, U, k, B]),
        K = i.useMemo(() => ({ ...j, ...u, onPaymentSourceAdd: m }), [j, m, u]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(C.nL, {
                label: a,
                giftCardsEnabled: N,
                giftCardCheckboxProps: H,
                paymentSourceDropdownProps: K,
                showCheckboxAboveDropdown: R || Y,
                disabled: B,
                currencySelectProps: V,
                customSelectorContent: W,
            }),
            N ? (0, l.jsx)(P, { onGiftCardRedeemed: G }) : null,
            (0, l.jsx)(g, { onPaymentSourceAdd: m }),
        ],
    });
}
function x(e) {
    let { premiumSubscriptionPaymentSourceId: t, ...n } = e,
        { disableSourceChangeTooltipText: r, hasLockedPaymentSource: s } = i.useMemo(
            () =>
                null != t
                    ? { hasLockedPaymentSource: !0, disableSourceChangeTooltipText: S.intl.string(E.default.UdSuwf) }
                    : { hasLockedPaymentSource: !1, disableSourceChangeTooltipText: void 0 },
            [t],
        ),
        o = i.useCallback(
            (e, t) => {
                let { isSubscriptionPaidByWallet: n, selectorDisabled: l } = t;
                if (null == e) return null;
                let i = s && n,
                    a = s ? r : void 0,
                    o = !i && (e.disabled || l),
                    u = a ?? e.disabledTooltip;
                return { ...e, disabled: o, disabledTooltip: u, locked: i, showDisabledInfoIcon: null == a };
            },
            [s, r],
        ),
        c = i.useCallback(
            (e, t) => {
                let { isSubscriptionPaidByWallet: n } = t,
                    l = e.disabled || (s && !n);
                return {
                    giftCardCheckboxProps: o(e.giftCardCheckboxProps, {
                        isSubscriptionPaidByWallet: n,
                        selectorDisabled: l,
                    }),
                    disabled: l,
                };
            },
            [s, o],
        ),
        d = i.useCallback(
            (e) => {
                let { isSubscriptionPaidByWallet: t, selectedSource: n, hidePersonalInformation: i } = e;
                if (!s || t || null == r || null == n) return null;
                let o = n instanceof u.A ? n.source : n,
                    { brand: c, label: d } = (0, a.Sm)(o, i);
                return (0, l.jsx)(T.S, { label: d ?? "", icon: c ?? void 0, tooltipText: r });
            },
            [s, r],
        );
    return (0, l.jsx)(_, {
        ...n,
        resolveInternalState: c,
        renderCustomPaymentSourceSelectorContent: d,
        subscriptionPaymentSourceId: t,
    });
}
