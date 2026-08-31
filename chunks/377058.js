n.d(t, { n: () => b, N: () => N });
var l = n(477900),
    i = n(582128),
    r = n(452027),
    a = n(17928),
    s = n(637141),
    o = n(803694),
    u = n(176095),
    c = n(826469),
    d = n(351906),
    m = n(997101),
    p = n(120700),
    C = n(936477),
    h = n(206441),
    f = n(652215),
    E = n(477729),
    S = n(375708),
    y = n(170691);
let I = new Set([p.C.ORB_CHECKOUT]);
function g(e) {
    let { onGiftCardRedeemed: t } = e,
        n = (0, h.t4)((e) => e.unifiedCheckoutFlow);
    return null != n && I.has(n) ? null : (0, l.jsx)(C.Z4, { className: y.K, onComplete: t });
}
function A(e) {
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
        s = (n === p.C.COLLECTIBLES_CHECKOUT && !i) || (n === p.C.PREMIUM_CHECKOUT && i),
        o = a === m.d.BR,
        u = r.some((e) => e.type === f.hes.PIX);
    return s && o && !u && null != t
        ? (0, l.jsx)(C.y, {
              className: y.K,
              text: S.intl.string(E.default.JPRQ9L),
              onClick: () => t({ linkWalletEnabled: !1 }),
          })
        : null;
}
var P = n(655857),
    v = n(87730),
    x = n(165272),
    _ = n(451636),
    T = n(571852);
function N(e) {
    let {
            setPaymentSourceId: t,
            paymentSourceId: n,
            label: c,
            additionalPaymentSourceDropdownProps: m,
            disabled: p,
            location: C,
            onPaymentSourceAdd: f,
            subscriptionPaymentSourceId: E,
            hideCurrencySelect: y,
            resolveInternalState: I,
            renderCustomPaymentSourceSelectorContent: x,
        } = e,
        { setPaymentSourceId: N, paymentSourceId: b } = (function (e) {
            let { setPaymentSourceId: t, paymentSourceId: n } = (function () {
                    let {
                            paymentSourceId: e,
                            setPaymentSourceId: t,
                            orderRecord: n,
                            isOrderSyncing: l,
                            orderSyncError: i,
                        } = (0, h.t4)((e) => ({
                            paymentSourceId: e.paymentSourceId,
                            setPaymentSourceId: e.setPaymentSourceId,
                            orderRecord: e.orderRecord,
                            isOrderSyncing: e.isOrderSyncing,
                            orderSyncError: e.orderSyncError,
                        })),
                        r = null != n;
                    return {
                        paymentSourceId: e,
                        setPaymentSourceId: t,
                        isOrderSyncing: !!r && l,
                        orderSyncError: r ? i : null,
                    };
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
        [j, R] = i.useState(!1),
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
                    isCheckoutDataLoading: m,
                    checkoutPaymentSources: p,
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
                    handleDropdownPaymentSourceChange: y,
                    giftCardCheckboxProps: I,
                    walletCoversSubtotal: g,
                    isSubscriptionPaidByWallet: A,
                    giftCardWallet: P,
                    isGiftCardCreditsChecked: v,
                    isWalletBalanceLoaded: x,
                    handleGiftCardCreditsToggle: _,
                } = (0, o.Y0)({
                    checkoutPaymentSources: p,
                    paymentSourceId: t,
                    setPaymentSourceId: n,
                    location: l ?? "BaseStatefulPaymentSourceSelector",
                    isReady: C,
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
                    m = (0, a.bG)([u.A], () => null != t && u.A.getIsFetching(t.id), [t]),
                    p = i.useRef(!1);
                i.useEffect(() => {
                    if (!c) {
                        p.current = !1;
                        return;
                    }
                    if (null != t) {
                        if (m) {
                            p.current = !0;
                            return;
                        }
                        if (n) {
                            if ((null != s && s !== t.id) || r) return void d(!1);
                            if (l) {
                                o(!0), d(!1);
                                return;
                            }
                            p.current && d(!1);
                        }
                    }
                }, [c, t, m, n, l, r, s, o, d]);
            })({
                giftCardWallet: P,
                isWalletBalanceLoaded: x,
                walletCoversSubtotal: g,
                isGiftCardCreditsChecked: v,
                subscriptionPaymentSourceId: r,
                handleGiftCardCreditsToggle: _,
                pendingGiftCardWalletSelection: s,
                setPendingGiftCardWalletSelection: c,
            });
            let T = i.useMemo(() => {
                    let e = f.find((e) => e.isDefault);
                    return null != e ? e.id : void 0;
                }, [f]),
                N = (0, a.bG)([d.A], () => d.A.hidePersonalInformation ?? !1);
            return {
                giftCardsEnabled: E,
                giftCardCheckboxProps: I,
                walletCoversSubtotal: g,
                basePaymentSourceDropdownProps: i.useMemo(
                    () => ({
                        selectedPaymentSourceId: S,
                        paymentSources: f,
                        defaultPaymentSourceId: T,
                        hidePersonalInformation: N,
                        onChange: y,
                        dropdownLoading: m,
                    }),
                    [S, f, T, N, y, m],
                ),
                isSubscriptionPaidByWallet: A,
                hidePersonalInformation: N,
            };
        })({
            paymentSourceId: b,
            setPaymentSourceId: N,
            location: C,
            subscriptionPaymentSourceId: E,
            pendingGiftCardWalletSelection: j,
            setPendingGiftCardWalletSelection: R,
        }),
        {
            priceOptions: D,
            setCurrency: G,
            expressCheckoutSubmitting: F,
            isOrderLocked: B,
        } = (0, h.t4)((e) => ({
            priceOptions: e.checkoutPriceOptions,
            setCurrency: e.setCheckoutCurrency,
            expressCheckoutSubmitting: e.expressCheckoutSubmitting,
            isOrderLocked: e.get("isOrderLocked"),
        })),
        { dropdownCurrencies: H, displayCurrency: W } = (0, P.Jn)(),
        Y = i.useCallback(() => R(!0), []),
        V = i.useMemo(() => B || F || (p ?? !1), [B, F, p]),
        { giftCardCheckboxProps: K, disabled: Z } = i.useMemo(
            () =>
                null != I
                    ? I({ giftCardCheckboxProps: O, disabled: V }, { isSubscriptionPaidByWallet: w })
                    : { giftCardCheckboxProps: O, disabled: V },
            [V, I, O, w],
        ),
        q = null != K && !0 === K.locked,
        z = i.useMemo(() => {
            if (null != x)
                return x({
                    isSubscriptionPaidByWallet: w,
                    selectedSource: k.paymentSources.find((e) => e.id === k.selectedPaymentSourceId),
                    hidePersonalInformation: U,
                });
        }, [x, w, k, U]),
        Q = i.useMemo(() => {
            if (!y)
                return {
                    label: S.intl.string(S.t["/AAR02"]),
                    selectedCurrency: D.currency ?? W,
                    currencies: H,
                    onChange: G,
                    disabled: Z,
                };
        }, [y, D.currency, W, H, G, Z]),
        $ = i.useMemo(() => ({ ...k, ...m, onPaymentSourceAdd: f }), [k, f, m]),
        J = null != K && K.checked,
        X = L || q,
        ee = i.useMemo(() => {
            if (!M || null == K) return null;
            let e = X ? T.r : T.K,
                t = K.disabled || Z;
            return (0, l.jsx)(v.o, { ...K, className: e, disabled: t });
        }, [M, K, X, Z]),
        et = X && M && J,
        en = null != z,
        el = i.useMemo(() => (null != z ? z : (0, l.jsx)(s.Ay, { ...$, disabled: Z })), [z, Z, $]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(r.D, {
                label: c,
                children: [X && ee, !et && el, !X && ee, !en && !et && void 0 !== Q && (0, l.jsx)(_.q, { ...Q })],
            }),
            M ? (0, l.jsx)(g, { onGiftCardRedeemed: Y }) : null,
            (0, l.jsx)(A, { onPaymentSourceAdd: f }),
        ],
    });
}
function b(e) {
    let { premiumSubscriptionPaymentSourceId: t, ...n } = e,
        { disableSourceChangeTooltipText: r, hasLockedPaymentSource: a } = i.useMemo(
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
    return (0, l.jsx)(N, {
        ...n,
        resolveInternalState: u,
        renderCustomPaymentSourceSelectorContent: d,
        subscriptionPaymentSourceId: t,
    });
}
