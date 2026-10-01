n.d(t, { n: () => b, N: () => N });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(452027),
    s = n(637141),
    o = n(803694),
    u = n(176095),
    c = n(826469),
    d = n(351906),
    p = n(997101),
    m = n(120700),
    h = n(25149),
    C = n(263532),
    f = n(652215),
    S = n(583741),
    E = n(375708),
    y = n(170691);
let A = new Set([m.C.ORB_CHECKOUT]);
function I(e) {
    let { onGiftCardRedeemed: t } = e,
        n = (0, C.t4)((e) => e.unifiedCheckoutFlow);
    return null != n && A.has(n) ? null : (0, l.jsx)(h.Z4, { className: y.K, onComplete: t });
}
function g(e) {
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
              text: E.intl.string(S.default.JPRQ9L),
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
            additionalPaymentSourceDropdownProps: p,
            disabled: m,
            location: h,
            onPaymentSourceAdd: f,
            subscriptionPaymentSourceId: S,
            hideCurrencySelect: y,
            resolveInternalState: A,
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
                        } = (0, C.t4)((e) => ({
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
            giftCardsEnabled: O,
            giftCardCheckboxProps: M,
            walletCoversSubtotal: L,
            basePaymentSourceDropdownProps: k,
            isSubscriptionPaidByWallet: w,
            hidePersonalInformation: D,
            isSplitPaymentMode: U,
        } = (function (e) {
            let {
                    paymentSourceId: t,
                    setPaymentSourceId: n,
                    location: l,
                    subscriptionPaymentSourceId: a,
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
                    giftCardsEnabled: S,
                    dropdownPaymentSourceId: E,
                    handleDropdownPaymentSourceChange: y,
                    giftCardCheckboxProps: A,
                    walletCoversSubtotal: I,
                    isSubscriptionPaidByWallet: g,
                    giftCardWallet: P,
                    isGiftCardCreditsChecked: v,
                    isWalletBalanceLoaded: x,
                    handleGiftCardCreditsToggle: _,
                    isSplitPaymentMode: T,
                } = (0, o.Y0)({
                    checkoutPaymentSources: m,
                    paymentSourceId: t,
                    setPaymentSourceId: n,
                    location: l ?? "BaseStatefulPaymentSourceSelector",
                    isReady: h,
                    subscriptionPaymentSourceId: a,
                });
            !(function (e) {
                let {
                        giftCardWallet: t,
                        isWalletBalanceLoaded: n,
                        walletCoversSubtotal: l,
                        isGiftCardCreditsChecked: a,
                        subscriptionPaymentSourceId: s,
                        handleGiftCardCreditsToggle: o,
                        pendingGiftCardWalletSelection: c,
                        setPendingGiftCardWalletSelection: d,
                    } = e,
                    p = (0, r.bG)([u.A], () => null != t && u.A.getIsFetching(t.id), [t]),
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
                                (o(!0), d(!1));
                                return;
                            }
                            m.current && d(!1);
                        }
                    }
                }, [c, t, p, n, l, a, s, o, d]);
            })({
                giftCardWallet: P,
                isWalletBalanceLoaded: x,
                walletCoversSubtotal: I,
                isGiftCardCreditsChecked: v,
                subscriptionPaymentSourceId: a,
                handleGiftCardCreditsToggle: _,
                pendingGiftCardWalletSelection: s,
                setPendingGiftCardWalletSelection: c,
            });
            let N = i.useMemo(() => {
                    let e = f.find((e) => e.isDefault);
                    return null != e ? e.id : void 0;
                }, [f]),
                b = (0, r.bG)([d.A], () => d.A.hidePersonalInformation ?? !1);
            return {
                giftCardsEnabled: S,
                giftCardCheckboxProps: A,
                walletCoversSubtotal: I,
                basePaymentSourceDropdownProps: i.useMemo(
                    () => ({
                        selectedPaymentSourceId: E,
                        paymentSources: f,
                        defaultPaymentSourceId: N,
                        hidePersonalInformation: b,
                        onChange: y,
                        dropdownLoading: p,
                    }),
                    [E, f, N, b, y, p],
                ),
                isSubscriptionPaidByWallet: g,
                hidePersonalInformation: b,
                isSplitPaymentMode: T,
            };
        })({
            paymentSourceId: b,
            setPaymentSourceId: N,
            location: h,
            subscriptionPaymentSourceId: S,
            pendingGiftCardWalletSelection: j,
            setPendingGiftCardWalletSelection: R,
        }),
        {
            priceOptions: G,
            setCurrency: F,
            expressCheckoutSubmitting: B,
            isOrderLocked: H,
        } = (0, C.t4)((e) => ({
            priceOptions: e.checkoutPriceOptions,
            setCurrency: e.setCheckoutCurrency,
            expressCheckoutSubmitting: e.expressCheckoutSubmitting,
            isOrderLocked: e.get("isOrderLocked"),
        })),
        { dropdownCurrencies: W, displayCurrency: Y } = (0, P.Jn)(),
        V = i.useCallback(() => R(!0), []),
        K = i.useMemo(() => H || B || (m ?? !1), [H, B, m]),
        { giftCardCheckboxProps: q, disabled: Z } = i.useMemo(
            () =>
                null != A
                    ? A({ giftCardCheckboxProps: M, disabled: K }, { isSubscriptionPaidByWallet: w })
                    : { giftCardCheckboxProps: M, disabled: K },
            [K, A, M, w],
        ),
        z = null != q && !0 === q.locked,
        $ = i.useMemo(() => {
            if (null != x)
                return x({
                    isSubscriptionPaidByWallet: w,
                    selectedSource: k.paymentSources.find((e) => e.id === k.selectedPaymentSourceId),
                    hidePersonalInformation: D,
                });
        }, [x, w, k, D]),
        Q = i.useMemo(() => {
            if (!y)
                return {
                    label: E.intl.string(E.t["/AAR02"]),
                    selectedCurrency: G.currency ?? Y,
                    currencies: W,
                    onChange: F,
                    disabled: Z,
                };
        }, [y, G.currency, Y, W, F, Z]),
        J = i.useMemo(() => ({ ...k, ...p, onPaymentSourceAdd: f }), [k, f, p]),
        X = null != q && q.checked,
        ee = !U && (L || z),
        et = i.useMemo(() => {
            if (!O || null == q) return null;
            let e = ee ? T.r : T.K,
                t = q.disabled || Z;
            return (0, l.jsx)(v.o, { ...q, className: e, disabled: t });
        }, [O, q, ee, Z]),
        en = ee && O && X,
        el = null != $,
        ei = i.useMemo(() => (null != $ ? $ : (0, l.jsx)(s.Ay, { ...J, disabled: Z })), [$, Z, J]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(a.D, {
                label: c,
                children: [ee && et, !en && ei, !ee && et, !el && !en && void 0 !== Q && (0, l.jsx)(_.q, { ...Q })],
            }),
            O ? (0, l.jsx)(I, { onGiftCardRedeemed: V }) : null,
            (0, l.jsx)(g, { onPaymentSourceAdd: f }),
        ],
    });
}
function b(e) {
    let { premiumSubscriptionPaymentSourceId: t, ...n } = e,
        { disableSourceChangeTooltipText: r, hasLockedPaymentSource: a } = i.useMemo(
            () =>
                null != t
                    ? { hasLockedPaymentSource: !0, disableSourceChangeTooltipText: E.intl.string(S.default.UdSuwf) }
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
