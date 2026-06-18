"use strict";
n.d(t, { n: () => y, N: () => S });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(637141),
    o = n(606267),
    l = n(176095),
    u = n(826469),
    c = n(351906),
    d = n(120700),
    _ = n(944355),
    h = n(211159),
    f = n(186460);
let p = new Set([d.C.ORB_CHECKOUT]);
function E(e) {
    let { onGiftCardRedeemed: t } = e,
        n = (0, h.t4)((e) => e.unifiedCheckoutFlow);
    return null != n && p.has(n) ? null : (0, i.jsx)(_.Z4, { className: f.K, onComplete: t });
}
var m = n(364995),
    g = n(655857),
    A = n(165272),
    I = n(327105),
    T = n(375708);
let S = (e) => {
        let {
                setPaymentSourceId: t,
                paymentSourceId: n,
                label: a,
                additionalPaymentSourceDropdownProps: u,
                disabled: d,
                location: f,
                onPaymentSourceAdd: p,
                subscriptionPaymentSourceId: A,
                hideCurrencySelect: I,
                resolveInternalState: S,
                renderCustomPaymentSourceSelectorContent: y,
            } = e,
            { setPaymentSourceId: N, paymentSourceId: v } = C({ setPaymentSourceId: t, paymentSourceId: n }),
            [R, O] = r.useState(!1),
            {
                giftCardsEnabled: b,
                giftCardCheckboxProps: D,
                walletCoversSubtotal: L,
                basePaymentSourceDropdownProps: w,
                isSubscriptionPaidByWallet: M,
                hidePersonalInformation: P,
            } = ((e) => {
                let {
                        paymentSourceId: t,
                        setPaymentSourceId: n,
                        location: i,
                        subscriptionPaymentSourceId: a,
                        pendingGiftCardWalletSelection: u,
                        setPendingGiftCardWalletSelection: d,
                    } = e,
                    { hasInvoiceOrderContextLoaded: _, checkoutPaymentSources: f } = (0, m.t)(),
                    p = (0, h.t4)((e) => e.checkoutInvoiceError),
                    {
                        dropdownPaymentSources: E,
                        giftCardsEnabled: g,
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
                        checkoutPaymentSources: f,
                        paymentSourceId: t,
                        setPaymentSourceId: n,
                        location: i ?? "BaseStatefulPaymentSourceSelector",
                        isReady: _,
                        subscriptionPaymentSourceId: a,
                    });
                ((e) => {
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
                    giftCardsEnabled: g,
                    giftCardCheckboxProps: T,
                    walletCoversSubtotal: S,
                    basePaymentSourceDropdownProps: r.useMemo(
                        () => ({
                            selectedPaymentSourceId: A,
                            paymentSources: E,
                            defaultPaymentSourceId: O,
                            hidePersonalInformation: b,
                            onChange: I,
                            dropdownLoading: !_ && null == p,
                        }),
                        [A, E, O, b, I, _, p],
                    ),
                    isSubscriptionPaidByWallet: y,
                    hidePersonalInformation: b,
                };
            })({
                paymentSourceId: v,
                setPaymentSourceId: N,
                location: f,
                subscriptionPaymentSourceId: A,
                pendingGiftCardWalletSelection: R,
                setPendingGiftCardWalletSelection: O,
            }),
            { priceOptions: x, setCurrency: k } = (0, h.t4)((e) => ({
                priceOptions: e.checkoutPriceOptions,
                setCurrency: e.setCheckoutCurrency,
            })),
            { dropdownCurrencies: U, displayCurrency: G } = (0, g.Jn)(),
            F = r.useCallback(() => O(!0), []),
            { giftCardCheckboxProps: V, disabled: B } = r.useMemo(() => {
                let e = d ?? !1;
                return null != S
                    ? S({ giftCardCheckboxProps: D, disabled: e }, { isSubscriptionPaidByWallet: M })
                    : { giftCardCheckboxProps: D, disabled: e };
            }, [S, D, d, M]),
            j = null != V && !0 === V.locked,
            H = r.useMemo(() => {
                if (null != y)
                    return y({
                        isSubscriptionPaidByWallet: M,
                        selectedSource: w.paymentSources.find((e) => e.id === w.selectedPaymentSourceId),
                        hidePersonalInformation: P,
                    });
            }, [y, M, w, P]),
            Y = r.useMemo(() => {
                if (!I)
                    return {
                        label: T.intl.string(T.t["/AAR02"]),
                        selectedCurrency: x.currency ?? G,
                        currencies: U,
                        onChange: k,
                        disabled: B,
                    };
            }, [I, x.currency, G, U, k, B]),
            W = r.useMemo(() => ({ ...w, ...u, onPaymentSourceAdd: p }), [w, p, u]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(_.nL, {
                    label: a,
                    giftCardsEnabled: b,
                    giftCardCheckboxProps: V,
                    paymentSourceDropdownProps: W,
                    showCheckboxAboveDropdown: L || j,
                    disabled: B,
                    currencySelectProps: Y,
                    customSelectorContent: H,
                }),
                b ? (0, i.jsx)(E, { onGiftCardRedeemed: F }) : null,
            ],
        });
    },
    y = (e) => {
        let { premiumSubscriptionPaymentSourceId: t, ...n } = e,
            { disableSourceChangeTooltipText: s, hasLockedPaymentSource: o } = r.useMemo(
                () =>
                    null != t
                        ? {
                              hasLockedPaymentSource: !0,
                              disableSourceChangeTooltipText: T.intl.string(I.default.UdSuwf),
                          }
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
                    return (0, i.jsx)(A.S, { label: d ?? "", icon: c ?? void 0, tooltipText: s });
                },
                [o, s],
            );
        return (0, i.jsx)(S, {
            ...n,
            resolveInternalState: c,
            renderCustomPaymentSourceSelectorContent: d,
            subscriptionPaymentSourceId: t,
        });
    },
    C = (e) => {
        let { setPaymentSourceId: t, paymentSourceId: n } = (0, h.t4)((e) => ({
                setPaymentSourceId: e.setPaymentSourceId,
                paymentSourceId: e.paymentSourceId,
            })),
            { setPaymentSourceId: i, paymentSourceId: s } = r.useMemo(
                () => ({
                    setPaymentSourceId: void 0 !== e.setPaymentSourceId ? e.setPaymentSourceId : t,
                    paymentSourceId: void 0 !== e.paymentSourceId ? e.paymentSourceId : n,
                }),
                [e.setPaymentSourceId, e.paymentSourceId, t, n],
            );
        return { setPaymentSourceId: i, paymentSourceId: s };
    };
