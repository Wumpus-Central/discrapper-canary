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
    p = n(997101),
    m = n(120700),
    h = n(936477),
    C = n(87725),
    f = n(652215),
    E = n(327105),
    S = n(375708),
    y = n(746692);
let A = new Set([m.C.ORB_CHECKOUT]);
function P(e) {
    let { onGiftCardRedeemed: t } = e,
        n = (0, C.t4)((e) => e.unifiedCheckoutFlow);
    return null != n && A.has(n) ? null : (0, l.jsx)(h.Z4, { className: y.K, onComplete: t });
}
function I(e) {
    let { onPaymentSourceAdd: t } = e,
        n = (0, C.t4)((e) => e.unifiedCheckoutFlow),
        {
            isGift: i,
            checkoutPaymentSources: r,
            checkoutStoreCountry: a,
        } = (0, C.t4)((e) => ({
            isGift: e.isGift,
            checkoutPaymentSources: e.get("checkoutPaymentSources"),
            checkoutStoreCountry: e.get("checkoutStoreCountry"),
        })),
        s = (n === m.C.COLLECTIBLES_CHECKOUT && !i) || (n === m.C.PREMIUM_CHECKOUT && i),
        o = a === p.d.BR,
        u = r.some((e) => e.type === f.hes.PIX);
    return s && o && !u && null != t
        ? (0, l.jsx)(h.y, {
              className: y.K,
              text: S.intl.string(E.default.JPRQ9L),
              onClick: () => t({ linkWalletEnabled: !1 }),
          })
        : null;
}
var g = n(655857),
    _ = n(87730),
    v = n(165272),
    T = n(451636),
    x = n(714573);
function N(e) {
    let {
            setPaymentSourceId: t,
            paymentSourceId: n,
            label: c,
            additionalPaymentSourceDropdownProps: p,
            disabled: m,
            location: h,
            onPaymentSourceAdd: f,
            subscriptionPaymentSourceId: E,
            hideCurrencySelect: y,
            resolveInternalState: A,
            renderCustomPaymentSourceSelectorContent: v,
        } = e,
        { setPaymentSourceId: N, paymentSourceId: b } = (function (e) {
            let { setPaymentSourceId: t, paymentSourceId: n } = (function () {
                    let {
                            paymentSourceId: e,
                            setPaymentSourceId: t,
                            orderRecord: n,
                            isOrderSyncing: l,
                            orderSyncError: r,
                            setOrderSyncError: a,
                        } = (0, C.t4)((e) => ({
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
                } = (0, C.t4)((e) => ({
                    isCheckoutDataLoading: e.get("isCheckoutDataLoading"),
                    checkoutPaymentSources: e.get("checkoutPaymentSources"),
                    hasCheckoutContextLoaded: e.get("hasCheckoutContextLoaded"),
                })),
                {
                    dropdownPaymentSources: f,
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
                    let e = f.find((e) => e.isDefault);
                    return null != e ? e.id : void 0;
                }, [f]),
                N = (0, a.bG)([d.A], () => d.A.hidePersonalInformation ?? !1);
            return {
                giftCardsEnabled: E,
                giftCardCheckboxProps: A,
                walletCoversSubtotal: P,
                basePaymentSourceDropdownProps: i.useMemo(
                    () => ({
                        selectedPaymentSourceId: S,
                        paymentSources: f,
                        defaultPaymentSourceId: x,
                        hidePersonalInformation: N,
                        onChange: y,
                        dropdownLoading: p,
                    }),
                    [S, f, x, N, y, p],
                ),
                isSubscriptionPaidByWallet: I,
                hidePersonalInformation: N,
            };
        })({
            paymentSourceId: b,
            setPaymentSourceId: N,
            location: h,
            subscriptionPaymentSourceId: E,
            pendingGiftCardWalletSelection: R,
            setPendingGiftCardWalletSelection: j,
        }),
        {
            priceOptions: D,
            setCurrency: G,
            expressCheckoutSubmitting: F,
        } = (0, C.t4)((e) => ({
            priceOptions: e.checkoutPriceOptions,
            setCurrency: e.setCheckoutCurrency,
            expressCheckoutSubmitting: e.expressCheckoutSubmitting,
        })),
        { dropdownCurrencies: B, displayCurrency: H } = (0, g.Jn)(),
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
            if (null != v)
                return v({
                    isSubscriptionPaidByWallet: w,
                    selectedSource: k.paymentSources.find((e) => e.id === k.selectedPaymentSourceId),
                    hidePersonalInformation: U,
                });
        }, [v, w, k, U]),
        z = i.useMemo(() => {
            if (!y)
                return {
                    label: S.intl.string(S.t["/AAR02"]),
                    selectedCurrency: D.currency ?? H,
                    currencies: B,
                    onChange: G,
                    disabled: K,
                };
        }, [y, D.currency, H, B, G, K]),
        Q = i.useMemo(() => ({ ...k, ...p, onPaymentSourceAdd: f }), [k, f, p]),
        $ = null != V && V.checked,
        J = L || q,
        X = i.useMemo(() => {
            if (!M || null == V) return null;
            let e = J ? x.r : x.K,
                t = V.disabled || K;
            return (0, l.jsx)(_.o, { ...V, className: e, disabled: t });
        }, [M, V, J, K]),
        ee = J && M && $,
        et = null != Z,
        en = i.useMemo(() => (null != Z ? Z : (0, l.jsx)(s.Ay, { ...Q, disabled: K })), [Z, K, Q]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(r.D, {
                label: c,
                children: [J && X, !ee && en, !J && X, !et && !ee && void 0 !== z && (0, l.jsx)(T.q, { ...z })],
            }),
            M ? (0, l.jsx)(P, { onGiftCardRedeemed: Y }) : null,
            (0, l.jsx)(I, { onPaymentSourceAdd: f }),
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
                return (0, l.jsx)(v.S, { label: d ?? "", icon: u ?? void 0, tooltipText: r });
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
