n.d(t, { n: () => j, N: () => R });
var l = n(477900),
    i = n(582128),
    r = n(452027),
    a = n(17928),
    s = n(637141),
    o = n(803694),
    u = n(176095),
    c = n(826469),
    d = n(351906),
    p = n(997101);
let m = (0, n(945810).mj)({
    name: "2026-06-pix-for-otp",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var h = n(120700),
    C = n(936477),
    f = n(87725),
    E = n(652215),
    S = n(327105),
    y = n(375708),
    A = n(746692);
let P = new Set([h.C.ORB_CHECKOUT]);
function I(e) {
    let { onGiftCardRedeemed: t } = e,
        n = (0, f.t4)((e) => e.unifiedCheckoutFlow);
    return null != n && P.has(n) ? null : (0, l.jsx)(C.Z4, { className: A.K, onComplete: t });
}
function g(e) {
    var t;
    let { onPaymentSourceAdd: n } = e,
        { enabled: r } = ((t = { location: "CheckoutStatefulPayWithPixLink" }), { enabled: m.useConfig(t).enabled }),
        a = i.useCallback(() => n({ linkWalletEnabled: !1 }), [n]);
    return r ? (0, l.jsx)(C.y, { className: A.K, text: y.intl.string(S.default.JPRQ9L), onClick: a }) : null;
}
function _(e) {
    let { onPaymentSourceAdd: t } = e,
        n = (0, f.t4)((e) => e.unifiedCheckoutFlow),
        {
            isGift: i,
            checkoutPaymentSources: r,
            checkoutStoreCountry: a,
        } = (0, f.t4)((e) => ({
            isGift: e.isGift,
            checkoutPaymentSources: e.get("checkoutPaymentSources"),
            checkoutStoreCountry: e.get("checkoutStoreCountry"),
        })),
        s = (n === h.C.COLLECTIBLES_CHECKOUT && !i) || (n === h.C.PREMIUM_CHECKOUT && i),
        o = a === p.d.BR,
        u = r.some((e) => e.type === E.hes.PIX);
    return s && o && !u && null != t ? (0, l.jsx)(g, { onPaymentSourceAdd: t }) : null;
}
var v = n(655857),
    T = n(87730),
    x = n(165272),
    N = n(451636),
    b = n(714573);
function R(e) {
    let {
            setPaymentSourceId: t,
            paymentSourceId: n,
            label: c,
            additionalPaymentSourceDropdownProps: p,
            disabled: m,
            location: h,
            onPaymentSourceAdd: C,
            subscriptionPaymentSourceId: E,
            hideCurrencySelect: S,
            resolveInternalState: A,
            renderCustomPaymentSourceSelectorContent: P,
        } = e,
        { setPaymentSourceId: g, paymentSourceId: x } = (function (e) {
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
        [R, j] = i.useState(!1),
        {
            giftCardsEnabled: M,
            giftCardCheckboxProps: O,
            walletCoversSubtotal: L,
            basePaymentSourceDropdownProps: k,
            isSubscriptionPaidByWallet: w,
            hidePersonalInformation: U,
        } = (function (e) {
            let {
                    paymentSourceId: t,
                    setPaymentSourceId: n,
                    location: l,
                    subscriptionPaymentSourceId: r,
                    pendingGiftCardWalletSelection: s,
                    setPendingGiftCardWalletSelection: c,
                } = e,
                {
                    isCheckoutDataLoading: p,
                    checkoutPaymentSources: m,
                    hasCheckoutContextLoaded: h,
                } = (0, f.t4)((e) => ({
                    isCheckoutDataLoading: e.get("isCheckoutDataLoading"),
                    checkoutPaymentSources: e.get("checkoutPaymentSources"),
                    hasCheckoutContextLoaded: e.get("hasCheckoutContextLoaded"),
                })),
                {
                    dropdownPaymentSources: C,
                    giftCardsEnabled: E,
                    dropdownPaymentSourceId: S,
                    handleDropdownPaymentSourceChange: y,
                    giftCardCheckboxProps: A,
                    walletCoversSubtotal: P,
                    isSubscriptionPaidByWallet: I,
                    giftCardWallet: g,
                    isGiftCardCreditsChecked: _,
                    isWalletBalanceLoaded: v,
                    handleGiftCardCreditsToggle: T,
                } = (0, o.Y0)({
                    checkoutPaymentSources: m,
                    paymentSourceId: t,
                    setPaymentSourceId: n,
                    location: l ?? "BaseStatefulPaymentSourceSelector",
                    isReady: h,
                    subscriptionPaymentSourceId: r,
                });
            !(function (e) {
                let {
                        giftCardWallet: t,
                        isWalletBalanceLoaded: n,
                        walletCoversSubtotal: l,
                        isGiftCardCreditsChecked: r,
                        subscriptionPaymentSourceId: s,
                        handleGiftCardCreditsToggle: o,
                        pendingGiftCardWalletSelection: c,
                        setPendingGiftCardWalletSelection: d,
                    } = e,
                    p = (0, a.bG)([u.A], () => null != t && u.A.getIsFetching(t.id), [t]),
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
                            if ((null != s && s !== t.id) || r) return void d(!1);
                            if (l) {
                                o(!0), d(!1);
                                return;
                            }
                            m.current && d(!1);
                        }
                    }
                }, [c, t, p, n, l, r, s, o, d]);
            })({
                giftCardWallet: g,
                isWalletBalanceLoaded: v,
                walletCoversSubtotal: P,
                isGiftCardCreditsChecked: _,
                subscriptionPaymentSourceId: r,
                handleGiftCardCreditsToggle: T,
                pendingGiftCardWalletSelection: s,
                setPendingGiftCardWalletSelection: c,
            });
            let x = i.useMemo(() => {
                    let e = C.find((e) => e.isDefault);
                    return null != e ? e.id : void 0;
                }, [C]),
                N = (0, a.bG)([d.A], () => d.A.hidePersonalInformation ?? !1);
            return {
                giftCardsEnabled: E,
                giftCardCheckboxProps: A,
                walletCoversSubtotal: P,
                basePaymentSourceDropdownProps: i.useMemo(
                    () => ({
                        selectedPaymentSourceId: S,
                        paymentSources: C,
                        defaultPaymentSourceId: x,
                        hidePersonalInformation: N,
                        onChange: y,
                        dropdownLoading: p,
                    }),
                    [S, C, x, N, y, p],
                ),
                isSubscriptionPaidByWallet: I,
                hidePersonalInformation: N,
            };
        })({
            paymentSourceId: x,
            setPaymentSourceId: g,
            location: h,
            subscriptionPaymentSourceId: E,
            pendingGiftCardWalletSelection: R,
            setPendingGiftCardWalletSelection: j,
        }),
        {
            priceOptions: D,
            setCurrency: G,
            expressCheckoutSubmitting: F,
        } = (0, f.t4)((e) => ({
            priceOptions: e.checkoutPriceOptions,
            setCurrency: e.setCheckoutCurrency,
            expressCheckoutSubmitting: e.expressCheckoutSubmitting,
        })),
        { dropdownCurrencies: B, displayCurrency: H } = (0, v.Jn)(),
        Y = i.useCallback(() => j(!0), []),
        W = i.useMemo(() => F || (m ?? !1), [F, m]),
        { giftCardCheckboxProps: V, disabled: K } = i.useMemo(
            () =>
                null != A
                    ? A({ giftCardCheckboxProps: O, disabled: W }, { isSubscriptionPaidByWallet: w })
                    : { giftCardCheckboxProps: O, disabled: W },
            [W, A, O, w],
        ),
        q = null != V && !0 === V.locked,
        Z = i.useMemo(() => {
            if (null != P)
                return P({
                    isSubscriptionPaidByWallet: w,
                    selectedSource: k.paymentSources.find((e) => e.id === k.selectedPaymentSourceId),
                    hidePersonalInformation: U,
                });
        }, [P, w, k, U]),
        z = i.useMemo(() => {
            if (!S)
                return {
                    label: y.intl.string(y.t["/AAR02"]),
                    selectedCurrency: D.currency ?? H,
                    currencies: B,
                    onChange: G,
                    disabled: K,
                };
        }, [S, D.currency, H, B, G, K]),
        Q = i.useMemo(() => ({ ...k, ...p, onPaymentSourceAdd: C }), [k, C, p]),
        $ = null != V && V.checked,
        J = L || q,
        X = i.useMemo(() => {
            if (!M || null == V) return null;
            let e = J ? b.r : b.K,
                t = V.disabled || K;
            return (0, l.jsx)(T.o, { ...V, className: e, disabled: t });
        }, [M, V, J, K]),
        ee = J && M && $,
        et = null != Z,
        en = i.useMemo(() => (null != Z ? Z : (0, l.jsx)(s.Ay, { ...Q, disabled: K })), [Z, K, Q]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(r.D, {
                label: c,
                children: [J && X, !ee && en, !J && X, !et && !ee && void 0 !== z && (0, l.jsx)(N.q, { ...z })],
            }),
            M ? (0, l.jsx)(I, { onGiftCardRedeemed: Y }) : null,
            (0, l.jsx)(_, { onPaymentSourceAdd: C }),
        ],
    });
}
function j(e) {
    let { premiumSubscriptionPaymentSourceId: t, ...n } = e,
        { disableSourceChangeTooltipText: r, hasLockedPaymentSource: a } = i.useMemo(
            () =>
                null != t
                    ? { hasLockedPaymentSource: !0, disableSourceChangeTooltipText: y.intl.string(S.default.UdSuwf) }
                    : { hasLockedPaymentSource: !1, disableSourceChangeTooltipText: void 0 },
            [t],
        ),
        o = i.useCallback(
            (e, t) => {
                let { isSubscriptionPaidByWallet: n, selectorDisabled: l } = t;
                if (null == e) return null;
                let i = a && n,
                    s = a ? r : void 0,
                    o = !i && (e.disabled || l),
                    u = s ?? e.disabledTooltip;
                return { ...e, disabled: o, disabledTooltip: u, locked: i, showDisabledInfoIcon: null == s };
            },
            [a, r],
        ),
        u = i.useCallback(
            (e, t) => {
                let { isSubscriptionPaidByWallet: n } = t,
                    l = e.disabled || (a && !n);
                return {
                    giftCardCheckboxProps: o(e.giftCardCheckboxProps, {
                        isSubscriptionPaidByWallet: n,
                        selectorDisabled: l,
                    }),
                    disabled: l,
                };
            },
            [a, o],
        ),
        d = i.useCallback(
            (e) => {
                let { isSubscriptionPaidByWallet: t, selectedSource: n, hidePersonalInformation: i } = e;
                if (!a || t || null == r || null == n) return null;
                let o = n instanceof c.A ? n.source : n,
                    { brand: u, label: d } = (0, s.Sm)(o, i);
                return (0, l.jsx)(x.S, { label: d ?? "", icon: u ?? void 0, tooltipText: r });
            },
            [a, r],
        );
    return (0, l.jsx)(R, {
        ...n,
        resolveInternalState: u,
        renderCustomPaymentSourceSelectorContent: d,
        subscriptionPaymentSourceId: t,
    });
}
