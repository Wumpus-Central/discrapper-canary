n.d(t, { n: () => R, N: () => b });
var l = n(627968),
    i = n(64700),
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
var m = n(446044),
    C = n(120700),
    h = n(364995),
    E = n(426398),
    A = n(944355),
    f = n(6938),
    y = n(652215),
    S = n(982772),
    P = n(375708),
    T = n(128220);
let I = new Set([C.C.ORB_CHECKOUT]);
function _(e) {
    let { onGiftCardRedeemed: t } = e,
        n = (0, f.t4)((e) => e.unifiedCheckoutFlow);
    return null != n && I.has(n) ? null : (0, l.jsx)(A.Z4, { className: T.K, onComplete: t });
}
function g(e) {
    var t;
    let { onPaymentSourceAdd: n } = e,
        { enabled: r } = ((t = { location: "CheckoutStatefulPayWithPixLink" }), { enabled: p.useConfig(t).enabled }),
        { enabled: a } = (0, m.Y)({ location: "CheckoutStatefulPayWithPixLink" }),
        s = i.useCallback(() => n({ linkWalletEnabled: !1 }), [n]);
    return r && a ? (0, l.jsx)(A.y, { className: T.K, text: P.intl.string(S.default.JPRQ9L), onClick: s }) : null;
}
function x(e) {
    let { onPaymentSourceAdd: t } = e,
        n = (0, f.t4)((e) => e.unifiedCheckoutFlow),
        i = (0, f.t4)((e) => e.isGift),
        r = (0, h.P)(),
        a = (0, E.kc)(),
        s = (n === C.C.COLLECTIBLES_CHECKOUT && !i) || (n === C.C.PREMIUM_CHECKOUT && i),
        o = r === d.d.BR,
        u = a.some((e) => e.type === y.hes.PIX);
    return s && o && !u && null != t ? (0, l.jsx)(g, { onPaymentSourceAdd: t }) : null;
}
var v = n(655857),
    N = n(165272);
function b(e) {
    let {
            setPaymentSourceId: t,
            paymentSourceId: n,
            label: a,
            additionalPaymentSourceDropdownProps: u,
            disabled: d,
            location: p,
            onPaymentSourceAdd: m,
            subscriptionPaymentSourceId: C,
            hideCurrencySelect: E,
            resolveInternalState: y,
            renderCustomPaymentSourceSelectorContent: S,
        } = e,
        { setPaymentSourceId: T, paymentSourceId: I } = (function (e) {
            let { setPaymentSourceId: t, paymentSourceId: n } = (function () {
                    let {
                            paymentSourceId: e,
                            setPaymentSourceId: t,
                            orderRecord: n,
                            isOrderSyncing: l,
                            orderSyncError: r,
                            setOrderSyncError: a,
                        } = (0, f.t4)((e) => ({
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
        [g, N] = i.useState(!1),
        {
            giftCardsEnabled: b,
            giftCardCheckboxProps: R,
            walletCoversSubtotal: M,
            basePaymentSourceDropdownProps: O,
            isSubscriptionPaidByWallet: j,
            hidePersonalInformation: L,
        } = (function (e) {
            let {
                    paymentSourceId: t,
                    setPaymentSourceId: n,
                    location: l,
                    subscriptionPaymentSourceId: a,
                    pendingGiftCardWalletSelection: u,
                    setPendingGiftCardWalletSelection: d,
                } = e,
                { hasInvoiceOrderContextLoaded: p, checkoutPaymentSources: m } = (0, h.t)(),
                C = (0, f.t4)((e) => e.checkoutInvoiceError),
                {
                    dropdownPaymentSources: E,
                    giftCardsEnabled: A,
                    dropdownPaymentSourceId: y,
                    handleDropdownPaymentSourceChange: S,
                    giftCardCheckboxProps: P,
                    walletCoversSubtotal: T,
                    isSubscriptionPaidByWallet: I,
                    giftCardWallet: _,
                    isGiftCardCreditsChecked: g,
                    isWalletBalanceLoaded: x,
                    handleGiftCardCreditsToggle: v,
                } = (0, s.Y0)({
                    checkoutPaymentSources: m,
                    paymentSourceId: t,
                    setPaymentSourceId: n,
                    location: l ?? "BaseStatefulPaymentSourceSelector",
                    isReady: p,
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
                giftCardWallet: _,
                isWalletBalanceLoaded: x,
                walletCoversSubtotal: T,
                isGiftCardCreditsChecked: g,
                subscriptionPaymentSourceId: a,
                handleGiftCardCreditsToggle: v,
                pendingGiftCardWalletSelection: u,
                setPendingGiftCardWalletSelection: d,
            });
            let N = i.useMemo(() => {
                    let e = E.find((e) => e.isDefault);
                    return null != e ? e.id : void 0;
                }, [E]),
                b = (0, r.bG)([c.A], () => c.A.hidePersonalInformation ?? !1);
            return {
                giftCardsEnabled: A,
                giftCardCheckboxProps: P,
                walletCoversSubtotal: T,
                basePaymentSourceDropdownProps: i.useMemo(
                    () => ({
                        selectedPaymentSourceId: y,
                        paymentSources: E,
                        defaultPaymentSourceId: N,
                        hidePersonalInformation: b,
                        onChange: S,
                        dropdownLoading: !p && null == C,
                    }),
                    [y, E, N, b, S, p, C],
                ),
                isSubscriptionPaidByWallet: I,
                hidePersonalInformation: b,
            };
        })({
            paymentSourceId: I,
            setPaymentSourceId: T,
            location: p,
            subscriptionPaymentSourceId: C,
            pendingGiftCardWalletSelection: g,
            setPendingGiftCardWalletSelection: N,
        }),
        { priceOptions: w, setCurrency: D } = (0, f.t4)((e) => ({
            priceOptions: e.checkoutPriceOptions,
            setCurrency: e.setCheckoutCurrency,
        })),
        { dropdownCurrencies: k, displayCurrency: U } = (0, v.Jn)(),
        G = i.useCallback(() => N(!0), []),
        { giftCardCheckboxProps: F, disabled: B } = i.useMemo(() => {
            let e = d ?? !1;
            return null != y
                ? y({ giftCardCheckboxProps: R, disabled: e }, { isSubscriptionPaidByWallet: j })
                : { giftCardCheckboxProps: R, disabled: e };
        }, [y, R, d, j]),
        Y = null != F && !0 === F.locked,
        H = i.useMemo(() => {
            if (null != S)
                return S({
                    isSubscriptionPaidByWallet: j,
                    selectedSource: O.paymentSources.find((e) => e.id === O.selectedPaymentSourceId),
                    hidePersonalInformation: L,
                });
        }, [S, j, O, L]),
        W = i.useMemo(() => {
            if (!E)
                return {
                    label: P.intl.string(P.t["/AAR02"]),
                    selectedCurrency: w.currency ?? U,
                    currencies: k,
                    onChange: D,
                    disabled: B,
                };
        }, [E, w.currency, U, k, D, B]),
        V = i.useMemo(() => ({ ...O, ...u, onPaymentSourceAdd: m }), [O, m, u]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(A.nL, {
                label: a,
                giftCardsEnabled: b,
                giftCardCheckboxProps: F,
                paymentSourceDropdownProps: V,
                showCheckboxAboveDropdown: M || Y,
                disabled: B,
                currencySelectProps: W,
                customSelectorContent: H,
            }),
            b ? (0, l.jsx)(_, { onGiftCardRedeemed: G }) : null,
            (0, l.jsx)(x, { onPaymentSourceAdd: m }),
        ],
    });
}
function R(e) {
    let { premiumSubscriptionPaymentSourceId: t, ...n } = e,
        { disableSourceChangeTooltipText: r, hasLockedPaymentSource: s } = i.useMemo(
            () =>
                null != t
                    ? { hasLockedPaymentSource: !0, disableSourceChangeTooltipText: P.intl.string(S.default.UdSuwf) }
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
                return (0, l.jsx)(N.S, { label: d ?? "", icon: c ?? void 0, tooltipText: r });
            },
            [s, r],
        );
    return (0, l.jsx)(b, {
        ...n,
        resolveInternalState: c,
        renderCustomPaymentSourceSelectorContent: d,
        subscriptionPaymentSourceId: t,
    });
}
