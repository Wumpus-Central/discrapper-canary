n.d(t, { n: () => j, N: () => b });
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
    C = n(504560),
    f = n(652215),
    S = n(583741),
    E = n(660183),
    I = n(170691);
let A = new Set([m.C.ORB_CHECKOUT]);
function g(e) {
    let { onGiftCardRedeemed: t } = e,
        n = (0, C.t4)((e) => e.unifiedCheckoutFlow);
    return null != n && A.has(n) ? null : (0, l.jsx)(h.Z4, { className: I.K, onComplete: t });
}
function y(e) {
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
              className: I.K,
              text: E.intl.string(S.default.JPRQ9L),
              onClick: () => t({ linkWalletEnabled: !1 }),
          })
        : null;
}
var P = n(655857),
    v = n(87730),
    x = n(494903),
    _ = n(165272),
    T = n(451636),
    N = n(571852);
function b(e) {
    let {
            setPaymentSourceId: t,
            paymentSourceId: n,
            label: c,
            additionalPaymentSourceDropdownProps: p,
            disabled: m,
            location: h,
            onPaymentSourceAdd: f,
            subscriptionPaymentSourceId: S,
            hideCurrencySelect: I,
            resolveInternalState: A,
            renderCustomPaymentSourceSelectorContent: _,
        } = e,
        { setPaymentSourceId: b, paymentSourceId: j } = (function (e) {
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
        [R, O] = i.useState(!1),
        {
            giftCardsEnabled: M,
            giftCardCheckboxProps: L,
            walletCoversSubtotal: k,
            walletCoversTotal: w,
            basePaymentSourceDropdownProps: D,
            isSubscriptionPaidByWallet: U,
            hidePersonalInformation: G,
            isSplitPaymentMode: F,
        } = (function (e) {
            let {
                    paymentSourceId: t,
                    setPaymentSourceId: n,
                    location: l,
                    subscriptionPaymentSourceId: a,
                    pendingGiftCardWalletSelection: s,
                    setPendingGiftCardWalletSelection: c,
                } = e,
                { isCheckoutDataLoading: p, hasCheckoutContextLoaded: m } = (0, C.t4)((e) => ({
                    isCheckoutDataLoading: e.get("isCheckoutDataLoading"),
                    hasCheckoutContextLoaded: e.get("hasCheckoutContextLoaded"),
                })),
                {
                    dropdownPaymentSources: h,
                    giftCardsEnabled: f,
                    dropdownPaymentSourceId: S,
                    handleDropdownPaymentSourceChange: E,
                    giftCardCheckboxProps: I,
                    walletCoversSubtotal: A,
                    walletCoversTotal: g,
                    isSubscriptionPaidByWallet: y,
                    giftCardWallet: P,
                    isGiftCardCreditsChecked: v,
                    isWalletBalanceLoaded: x,
                    handleGiftCardCreditsToggle: _,
                    isSplitPaymentMode: T,
                } = (0, o.Y0)({
                    paymentSourceId: t,
                    setPaymentSourceId: n,
                    location: l ?? "BaseStatefulPaymentSourceSelector",
                    isReady: m,
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
                walletCoversSubtotal: A,
                isGiftCardCreditsChecked: v,
                subscriptionPaymentSourceId: a,
                handleGiftCardCreditsToggle: _,
                pendingGiftCardWalletSelection: s,
                setPendingGiftCardWalletSelection: c,
            });
            let N = i.useMemo(() => {
                    let e = h.find((e) => e.isDefault);
                    return null != e ? e.id : void 0;
                }, [h]),
                b = (0, r.bG)([d.A], () => d.A.hidePersonalInformation ?? !1);
            return {
                giftCardsEnabled: f,
                giftCardCheckboxProps: I,
                walletCoversSubtotal: A,
                walletCoversTotal: g,
                basePaymentSourceDropdownProps: i.useMemo(
                    () => ({
                        selectedPaymentSourceId: S,
                        paymentSources: h,
                        defaultPaymentSourceId: N,
                        hidePersonalInformation: b,
                        onChange: E,
                        dropdownLoading: p,
                    }),
                    [S, h, N, b, E, p],
                ),
                isSubscriptionPaidByWallet: y,
                hidePersonalInformation: b,
                isSplitPaymentMode: T,
            };
        })({
            paymentSourceId: j,
            setPaymentSourceId: b,
            location: h,
            subscriptionPaymentSourceId: S,
            pendingGiftCardWalletSelection: R,
            setPendingGiftCardWalletSelection: O,
        }),
        {
            priceOptions: B,
            setCurrency: H,
            expressCheckoutSubmitting: W,
            isOrderLocked: Y,
            refetchInvoicePreviews: V,
        } = (0, C.t4)((e) => ({
            priceOptions: e.checkoutPriceOptions,
            setCurrency: e.setCheckoutCurrency,
            expressCheckoutSubmitting: e.expressCheckoutSubmitting,
            isOrderLocked: e.get("isOrderLocked"),
            refetchInvoicePreviews: e.refetchInvoicePreviews,
        })),
        { dropdownCurrencies: K, displayCurrency: q } = (0, P.Jn)(),
        Z = i.useCallback(() => {
            (O(!0), V());
        }, [V]),
        z = i.useMemo(() => Y || W || (m ?? !1), [Y, W, m]),
        { giftCardCheckboxProps: $, disabled: Q } = i.useMemo(
            () =>
                null != A
                    ? A({ giftCardCheckboxProps: L, disabled: z }, { isSubscriptionPaidByWallet: U })
                    : { giftCardCheckboxProps: L, disabled: z },
            [z, A, L, U],
        ),
        J = null != $ && !0 === $.locked,
        X = i.useMemo(() => {
            if (null != _)
                return _({
                    isSubscriptionPaidByWallet: U,
                    selectedSource: D.paymentSources.find((e) => e.id === D.selectedPaymentSourceId),
                    hidePersonalInformation: G,
                });
        }, [_, U, D, G]),
        ee = i.useMemo(() => {
            if (!I)
                return {
                    label: E.intl.string(E.t["/AAR02"]),
                    selectedCurrency: B.currency ?? q,
                    currencies: K,
                    onChange: H,
                    disabled: Q,
                };
        }, [I, B.currency, q, K, H, Q]),
        et = i.useMemo(() => ({ ...D, ...p, onPaymentSourceAdd: f }), [D, f, p]),
        en = null != $ && $.checked,
        el = F || k || J,
        ei = i.useMemo(() => {
            if (!M || null == $) return null;
            let e = el ? N.r : N.K,
                t = $.disabled || Q;
            return (0, l.jsx)("div", { className: e, children: (0, l.jsx)(v.o, { ...$, disabled: t }) });
        }, [M, $, el, Q]),
        er = M && en,
        ea = er && F && w,
        es = er && !F && el,
        eo = null != X,
        eu = ea && et.paymentSources.length > 0,
        ec = i.useMemo(
            () =>
                null != X
                    ? X
                    : (0, l.jsx)(s.Ay, {
                          ...et,
                          disabled: Q || eu,
                          addPaymentSourceVariant: ea ? "secondary" : "primary",
                      }),
            [X, Q, eu, ea, et],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(a.D, {
                label: c,
                children: [el && ei, !es && ec, !el && ei, !eo && !er && void 0 !== ee && (0, l.jsx)(T.q, { ...ee })],
            }),
            M ? (0, l.jsx)(g, { onGiftCardRedeemed: Z }) : null,
            (0, l.jsx)(y, { onPaymentSourceAdd: f }),
            (0, l.jsx)(x.B, {}),
        ],
    });
}
function j(e) {
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
                return (0, l.jsx)(_.S, { label: d ?? "", icon: u ?? void 0, tooltipText: r });
            },
            [a, r],
        );
    return (0, l.jsx)(b, {
        ...n,
        resolveInternalState: u,
        renderCustomPaymentSourceSelectorContent: d,
        subscriptionPaymentSourceId: t,
    });
}
