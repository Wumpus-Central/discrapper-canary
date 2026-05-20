n.d(t, { N: () => E, n: () => y });
var l = n(627968),
    a = n(64700),
    i = n(17928),
    r = n(637141),
    s = n(606267),
    o = n(826469),
    u = n(834252),
    c = n(351906),
    d = n(364995),
    p = n(944355),
    m = n(165272),
    h = n(94420),
    C = n(375708);
let A = (e) => {
        let {
                label: t,
                additionalPaymentSourceDropdownProps: n,
                disabled: r,
                setPaymentSourceId: o,
                location: m,
                onPaymentSourceAdd: h,
                paymentSourceId: A,
                subscriptionPaymentSourceId: y,
                hideCurrencySelect: E,
                renderCustomPaymentSourceSelectorContent: P,
                resolveGiftCardCheckboxProps: S,
                resolveDisabledState: _,
            } = e,
            {
                giftCardsEnabled: T,
                giftCardCheckboxProps: f,
                walletCoversSubtotal: I,
                basePaymentSourceDropdownProps: N,
                isSubscriptionPaidByWallet: x,
                hidePersonalInformation: g,
            } = ((e) => {
                let { paymentSourceId: t, setPaymentSourceId: n, location: l, subscriptionPaymentSourceId: r } = e,
                    { hasInvoiceOrderContextLoaded: o, checkoutPaymentSources: u } = (0, d.t)(),
                    {
                        dropdownPaymentSources: p,
                        giftCardsEnabled: m,
                        dropdownPaymentSourceId: h,
                        handleDropdownPaymentSourceChange: C,
                        giftCardCheckboxProps: A,
                        walletCoversSubtotal: y,
                        isSubscriptionPaidByWallet: E,
                    } = (0, s.Y0)({
                        checkoutPaymentSources: u,
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
                    S = (0, i.bG)([c.A], () => c.A.hidePersonalInformation ?? !1);
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
            })({ paymentSourceId: A, setPaymentSourceId: o, location: m, subscriptionPaymentSourceId: y }),
            { priceOptions: v, currencies: M, displayCurrency: b, setCurrency: j } = (0, u.P5)(),
            R = a.useMemo(() => (null != _ ? _(r, { isSubscriptionPaidByWallet: x }) : (r ?? !1)), [r, x, _]),
            L = a.useMemo(() => {
                if (null != P)
                    return P({
                        isSubscriptionPaidByWallet: x,
                        selectedSource: N.paymentSources.find((e) => e.id === N.selectedPaymentSourceId),
                        hidePersonalInformation: g,
                    });
            }, [P, x, N, g]),
            O = a.useMemo(() => {
                if (!E)
                    return {
                        label: C.intl.string(C.t["/AAR02"]),
                        selectedCurrency: v.currency ?? b,
                        currencies: M,
                        onChange: j,
                        disabled: R,
                    };
            }, [E, v.currency, b, M, j, R]),
            D = a.useMemo(() => ({ ...N, ...n, onPaymentSourceAdd: h }), [N, h, n]),
            w = a.useMemo(
                () => (null != S ? S(f, { isSubscriptionPaidByWallet: x, selectorDisabled: R }) : f),
                [f, S, x, R],
            ),
            U = null != w && !0 === w.locked;
        return (0, l.jsx)(p.nL, {
            label: t,
            giftCardsEnabled: T,
            giftCardCheckboxProps: w,
            paymentSourceDropdownProps: D,
            showCheckboxAboveDropdown: (I || U) && !R,
            disabled: R,
            currencySelectProps: O,
            customSelectorContent: L,
        });
    },
    y = (e) => {
        let { premiumSubscriptionPaymentSourceId: t, ...n } = e,
            { disableSourceChangeTooltipText: i, hasLockedPaymentSource: s } = a.useMemo(
                () =>
                    null != t
                        ? { hasLockedPaymentSource: !0, disableSourceChangeTooltipText: C.intl.string(C.t.XiuuV9) }
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
        return (0, l.jsx)(E, {
            ...n,
            resolveGiftCardCheckboxProps: u,
            resolveDisabledState: c,
            renderCustomPaymentSourceSelectorContent: d,
            subscriptionPaymentSourceId: t,
        });
    },
    E = (e) => {
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
        return (0, l.jsx)(A, { ...e, setPaymentSourceId: i, paymentSourceId: r });
    };
