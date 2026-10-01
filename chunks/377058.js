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
            walletCoversTotal: k,
            basePaymentSourceDropdownProps: w,
            isSubscriptionPaidByWallet: D,
            hidePersonalInformation: U,
            isSplitPaymentMode: G,
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
                    walletCoversTotal: g,
                    isSubscriptionPaidByWallet: P,
                    giftCardWallet: v,
                    isGiftCardCreditsChecked: x,
                    isWalletBalanceLoaded: _,
                    handleGiftCardCreditsToggle: T,
                    isSplitPaymentMode: N,
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
                giftCardWallet: v,
                isWalletBalanceLoaded: _,
                walletCoversSubtotal: I,
                isGiftCardCreditsChecked: x,
                subscriptionPaymentSourceId: a,
                handleGiftCardCreditsToggle: T,
                pendingGiftCardWalletSelection: s,
                setPendingGiftCardWalletSelection: c,
            });
            let b = i.useMemo(() => {
                    let e = f.find((e) => e.isDefault);
                    return null != e ? e.id : void 0;
                }, [f]),
                j = (0, r.bG)([d.A], () => d.A.hidePersonalInformation ?? !1);
            return {
                giftCardsEnabled: S,
                giftCardCheckboxProps: A,
                walletCoversSubtotal: I,
                walletCoversTotal: g,
                basePaymentSourceDropdownProps: i.useMemo(
                    () => ({
                        selectedPaymentSourceId: E,
                        paymentSources: f,
                        defaultPaymentSourceId: b,
                        hidePersonalInformation: j,
                        onChange: y,
                        dropdownLoading: p,
                    }),
                    [E, f, b, j, y, p],
                ),
                isSubscriptionPaidByWallet: P,
                hidePersonalInformation: j,
                isSplitPaymentMode: N,
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
            priceOptions: F,
            setCurrency: B,
            expressCheckoutSubmitting: H,
            isOrderLocked: W,
        } = (0, C.t4)((e) => ({
            priceOptions: e.checkoutPriceOptions,
            setCurrency: e.setCheckoutCurrency,
            expressCheckoutSubmitting: e.expressCheckoutSubmitting,
            isOrderLocked: e.get("isOrderLocked"),
        })),
        { dropdownCurrencies: Y, displayCurrency: V } = (0, P.Jn)(),
        K = i.useCallback(() => R(!0), []),
        q = i.useMemo(() => W || H || (m ?? !1), [W, H, m]),
        { giftCardCheckboxProps: Z, disabled: z } = i.useMemo(
            () =>
                null != A
                    ? A({ giftCardCheckboxProps: M, disabled: q }, { isSubscriptionPaidByWallet: D })
                    : { giftCardCheckboxProps: M, disabled: q },
            [q, A, M, D],
        ),
        $ = null != Z && !0 === Z.locked,
        Q = i.useMemo(() => {
            if (null != x)
                return x({
                    isSubscriptionPaidByWallet: D,
                    selectedSource: w.paymentSources.find((e) => e.id === w.selectedPaymentSourceId),
                    hidePersonalInformation: U,
                });
        }, [x, D, w, U]),
        J = i.useMemo(() => {
            if (!y)
                return {
                    label: E.intl.string(E.t["/AAR02"]),
                    selectedCurrency: F.currency ?? V,
                    currencies: Y,
                    onChange: B,
                    disabled: z,
                };
        }, [y, F.currency, V, Y, B, z]),
        X = i.useMemo(() => ({ ...w, ...p, onPaymentSourceAdd: f }), [w, f, p]),
        ee = null != Z && Z.checked,
        et = G || L || $,
        en = i.useMemo(() => {
            if (!O || null == Z) return null;
            let e = et ? T.r : T.K,
                t = Z.disabled || z;
            return (0, l.jsx)(v.o, { ...Z, className: e, disabled: t });
        }, [O, Z, et, z]),
        el = O && ee,
        ei = el && G && k,
        er = el && !G && et,
        ea = null != Q,
        es = ei && X.paymentSources.length > 0,
        eo = i.useMemo(
            () =>
                null != Q
                    ? Q
                    : (0, l.jsx)(s.Ay, {
                          ...X,
                          disabled: z || es,
                          addPaymentSourceVariant: ei ? "secondary" : "primary",
                      }),
            [Q, z, es, ei, X],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(a.D, {
                label: c,
                children: [et && en, !er && eo, !et && en, !ea && !er && void 0 !== J && (0, l.jsx)(_.q, { ...J })],
            }),
            O ? (0, l.jsx)(I, { onGiftCardRedeemed: K }) : null,
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
