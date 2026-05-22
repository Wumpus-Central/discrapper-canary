n.d(t, { N: () => P, n: () => E });
var l = n(627968),
    a = n(64700),
    i = n(17928),
    r = n(637141),
    s = n(606267),
    o = n(826469),
    u = n(351906),
    c = n(364995),
    d = n(655857),
    p = n(944355),
    m = n(165272),
    h = n(671744),
    C = n(327105),
    A = n(375708);
let y = (e) => {
        let {
                label: t,
                additionalPaymentSourceDropdownProps: n,
                disabled: r,
                setPaymentSourceId: o,
                location: m,
                onPaymentSourceAdd: C,
                paymentSourceId: y,
                subscriptionPaymentSourceId: E,
                hideCurrencySelect: P,
                renderCustomPaymentSourceSelectorContent: S,
                resolveGiftCardCheckboxProps: f,
                resolveDisabledState: _,
            } = e,
            {
                giftCardsEnabled: T,
                giftCardCheckboxProps: I,
                walletCoversSubtotal: x,
                basePaymentSourceDropdownProps: N,
                isSubscriptionPaidByWallet: g,
                hidePersonalInformation: v,
            } = ((e) => {
                let { paymentSourceId: t, setPaymentSourceId: n, location: l, subscriptionPaymentSourceId: r } = e,
                    { hasInvoiceOrderContextLoaded: o, checkoutPaymentSources: d } = (0, c.t)(),
                    {
                        dropdownPaymentSources: p,
                        giftCardsEnabled: m,
                        dropdownPaymentSourceId: h,
                        handleDropdownPaymentSourceChange: C,
                        giftCardCheckboxProps: A,
                        walletCoversSubtotal: y,
                        isSubscriptionPaidByWallet: E,
                    } = (0, s.Y0)({
                        checkoutPaymentSources: d,
                        paymentSourceId: t,
                        setPaymentSourceId: n,
                        location: l ?? "BaseStatefulPaymentSourceSelector",
                        isReady: o,
                        subscriptionPaymentSourceId: r,
                    }),
                    P = a.useMemo(() => {
                        let e = p.find((e) => e.isDefault);
                        return null != e ? e.id : void 0;
                    }, [p]),
                    S = (0, i.bG)([u.A], () => u.A.hidePersonalInformation ?? !1);
                return {
                    giftCardsEnabled: m,
                    giftCardCheckboxProps: A,
                    walletCoversSubtotal: y,
                    basePaymentSourceDropdownProps: a.useMemo(
                        () => ({
                            selectedPaymentSourceId: h,
                            paymentSources: p,
                            defaultPaymentSourceId: P,
                            hidePersonalInformation: S,
                            onChange: C,
                        }),
                        [h, p, P, S, C],
                    ),
                    isSubscriptionPaidByWallet: E,
                    hidePersonalInformation: S,
                };
            })({ paymentSourceId: y, setPaymentSourceId: o, location: m, subscriptionPaymentSourceId: E }),
            { priceOptions: M, setCurrency: b } = (0, h.t4)((e) => ({
                priceOptions: e.checkoutPriceOptions,
                setCurrency: e.setCheckoutCurrency,
            })),
            { dropdownCurrencies: j, displayCurrency: R } = (0, d.Jn)(),
            L = a.useMemo(() => (null != _ ? _(r, { isSubscriptionPaidByWallet: g }) : (r ?? !1)), [r, g, _]),
            O = a.useMemo(() => {
                if (null != S)
                    return S({
                        isSubscriptionPaidByWallet: g,
                        selectedSource: N.paymentSources.find((e) => e.id === N.selectedPaymentSourceId),
                        hidePersonalInformation: v,
                    });
            }, [S, g, N, v]),
            D = a.useMemo(() => {
                if (!P)
                    return {
                        label: A.intl.string(A.t["/AAR02"]),
                        selectedCurrency: M.currency ?? R,
                        currencies: j,
                        onChange: b,
                        disabled: L,
                    };
            }, [P, M.currency, R, j, b, L]),
            w = a.useMemo(() => ({ ...N, ...n, onPaymentSourceAdd: C }), [N, C, n]),
            U = a.useMemo(
                () => (null != f ? f(I, { isSubscriptionPaidByWallet: g, selectorDisabled: L }) : I),
                [I, f, g, L],
            ),
            k = null != U && !0 === U.locked;
        return (0, l.jsx)(p.nL, {
            label: t,
            giftCardsEnabled: T,
            giftCardCheckboxProps: U,
            paymentSourceDropdownProps: w,
            showCheckboxAboveDropdown: (x || k) && !L,
            disabled: L,
            currencySelectProps: D,
            customSelectorContent: O,
        });
    },
    E = (e) => {
        let { premiumSubscriptionPaymentSourceId: t, ...n } = e,
            { disableSourceChangeTooltipText: i, hasLockedPaymentSource: s } = a.useMemo(
                () =>
                    null != t
                        ? {
                              hasLockedPaymentSource: !0,
                              disableSourceChangeTooltipText: A.intl.string(C.default.UdSuwf),
                          }
                        : { hasLockedPaymentSource: !1, disableSourceChangeTooltipText: void 0 },
                [t],
            ),
            u = a.useCallback(
                (e, t) => {
                    let { isSubscriptionPaidByWallet: n, selectorDisabled: l } = t;
                    if (null == e) return null;
                    let a = s && n,
                        r = s ? i : void 0,
                        o = !a && (e.disabled || l),
                        u = r ?? e.disabledTooltip;
                    return { ...e, disabled: o, disabledTooltip: u, locked: a, showDisabledInfoIcon: null == r };
                },
                [s, i],
            ),
            c = a.useCallback(
                (e, t) => {
                    let { isSubscriptionPaidByWallet: n } = t;
                    return e || (s && !n);
                },
                [s],
            ),
            d = a.useCallback(
                (e) => {
                    let { isSubscriptionPaidByWallet: t, selectedSource: n, hidePersonalInformation: a } = e;
                    if (!s || t || null == i || null == n) return null;
                    let u = n instanceof o.A ? n.source : n,
                        { brand: c, label: d } = (0, r.Sm)(u, a);
                    return (0, l.jsx)(m.S, { label: d ?? "", icon: c ?? void 0, tooltipText: i });
                },
                [s, i],
            );
        return (0, l.jsx)(P, {
            ...n,
            resolveGiftCardCheckboxProps: u,
            resolveDisabledState: c,
            renderCustomPaymentSourceSelectorContent: d,
            subscriptionPaymentSourceId: t,
        });
    },
    P = (e) => {
        let { setPaymentSourceId: t, paymentSourceId: n } = (0, h.t4)((e) => ({
                setPaymentSourceId: e.setPaymentSourceId,
                paymentSourceId: e.paymentSourceId,
            })),
            { setPaymentSourceId: i, paymentSourceId: r } = a.useMemo(
                () => ({
                    setPaymentSourceId: void 0 !== e.setPaymentSourceId ? e.setPaymentSourceId : t,
                    paymentSourceId: void 0 !== e.paymentSourceId ? e.paymentSourceId : n,
                }),
                [e.setPaymentSourceId, e.paymentSourceId, t, n],
            );
        return (0, l.jsx)(y, { ...e, setPaymentSourceId: i, paymentSourceId: r });
    };
