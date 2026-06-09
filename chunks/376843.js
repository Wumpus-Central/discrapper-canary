n.d(t, { n: () => I, N: () => _ });
var l = n(627968),
    r = n(64700),
    i = n(17928),
    a = n(637141),
    s = n(606267),
    o = n(826469),
    u = n(351906),
    c = n(120700),
    d = n(944355),
    p = n(211159),
    m = n(186460);
let h = new Set([c.C.ORB_CHECKOUT]);
function A() {
    let e = (0, p.t4)((e) => e.unifiedCheckoutFlow);
    return null != e && h.has(e) ? null : (0, l.jsx)(d.Z4, { className: m.K });
}
var E = n(364995),
    C = n(655857),
    y = n(165272),
    P = n(327105),
    S = n(375708);
let _ = (e) => {
        let {
                setPaymentSourceId: t,
                paymentSourceId: n,
                label: a,
                additionalPaymentSourceDropdownProps: o,
                disabled: c,
                location: m,
                onPaymentSourceAdd: h,
                subscriptionPaymentSourceId: y,
                hideCurrencySelect: P,
                resolveInternalState: _,
                renderCustomPaymentSourceSelectorContent: I,
            } = e,
            { setPaymentSourceId: T, paymentSourceId: N } = f({ setPaymentSourceId: t, paymentSourceId: n }),
            {
                giftCardsEnabled: v,
                giftCardCheckboxProps: g,
                walletCoversSubtotal: x,
                basePaymentSourceDropdownProps: R,
                isSubscriptionPaidByWallet: M,
                hidePersonalInformation: b,
            } = ((e) => {
                let { paymentSourceId: t, setPaymentSourceId: n, location: l, subscriptionPaymentSourceId: a } = e,
                    { hasInvoiceOrderContextLoaded: o, checkoutPaymentSources: c } = (0, E.t)(),
                    d = (0, p.t4)((e) => e.checkoutInvoiceError),
                    {
                        dropdownPaymentSources: m,
                        giftCardsEnabled: h,
                        dropdownPaymentSourceId: A,
                        handleDropdownPaymentSourceChange: C,
                        giftCardCheckboxProps: y,
                        walletCoversSubtotal: P,
                        isSubscriptionPaidByWallet: S,
                    } = (0, s.Y0)({
                        checkoutPaymentSources: c,
                        paymentSourceId: t,
                        setPaymentSourceId: n,
                        location: l ?? "BaseStatefulPaymentSourceSelector",
                        isReady: o,
                        subscriptionPaymentSourceId: a,
                    }),
                    _ = r.useMemo(() => {
                        let e = m.find((e) => e.isDefault);
                        return null != e ? e.id : void 0;
                    }, [m]),
                    I = (0, i.bG)([u.A], () => u.A.hidePersonalInformation ?? !1);
                return {
                    giftCardsEnabled: h,
                    giftCardCheckboxProps: y,
                    walletCoversSubtotal: P,
                    basePaymentSourceDropdownProps: r.useMemo(
                        () => ({
                            selectedPaymentSourceId: A,
                            paymentSources: m,
                            defaultPaymentSourceId: _,
                            hidePersonalInformation: I,
                            onChange: C,
                            dropdownLoading: !o && null == d,
                        }),
                        [A, m, _, I, C, o, d],
                    ),
                    isSubscriptionPaidByWallet: S,
                    hidePersonalInformation: I,
                };
            })({ paymentSourceId: N, setPaymentSourceId: T, location: m, subscriptionPaymentSourceId: y }),
            { priceOptions: L, setCurrency: j } = (0, p.t4)((e) => ({
                priceOptions: e.checkoutPriceOptions,
                setCurrency: e.setCheckoutCurrency,
            })),
            { dropdownCurrencies: O, displayCurrency: w } = (0, C.Jn)(),
            { giftCardCheckboxProps: D, disabled: U } = r.useMemo(() => {
                let e = c ?? !1;
                return null != _
                    ? _({ giftCardCheckboxProps: g, disabled: e }, { isSubscriptionPaidByWallet: M })
                    : { giftCardCheckboxProps: g, disabled: e };
            }, [_, g, c, M]),
            k = null != D && !0 === D.locked,
            G = r.useMemo(() => {
                if (null != I)
                    return I({
                        isSubscriptionPaidByWallet: M,
                        selectedSource: R.paymentSources.find((e) => e.id === R.selectedPaymentSourceId),
                        hidePersonalInformation: b,
                    });
            }, [I, M, R, b]),
            F = r.useMemo(() => {
                if (!P)
                    return {
                        label: S.intl.string(S.t["/AAR02"]),
                        selectedCurrency: L.currency ?? w,
                        currencies: O,
                        onChange: j,
                        disabled: U,
                    };
            }, [P, L.currency, w, O, j, U]),
            Y = r.useMemo(() => ({ ...R, ...o, onPaymentSourceAdd: h }), [R, h, o]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(d.nL, {
                    label: a,
                    giftCardsEnabled: v,
                    giftCardCheckboxProps: D,
                    paymentSourceDropdownProps: Y,
                    showCheckboxAboveDropdown: x || k,
                    disabled: U,
                    currencySelectProps: F,
                    customSelectorContent: G,
                }),
                v ? (0, l.jsx)(A, {}) : null,
            ],
        });
    },
    I = (e) => {
        let { premiumSubscriptionPaymentSourceId: t, ...n } = e,
            { disableSourceChangeTooltipText: i, hasLockedPaymentSource: s } = r.useMemo(
                () =>
                    null != t
                        ? {
                              hasLockedPaymentSource: !0,
                              disableSourceChangeTooltipText: S.intl.string(P.default.UdSuwf),
                          }
                        : { hasLockedPaymentSource: !1, disableSourceChangeTooltipText: void 0 },
                [t],
            ),
            u = r.useCallback(
                (e, t) => {
                    let { isSubscriptionPaidByWallet: n, selectorDisabled: l } = t;
                    if (null == e) return null;
                    let r = s && n,
                        a = s ? i : void 0,
                        o = !r && (e.disabled || l),
                        u = a ?? e.disabledTooltip;
                    return { ...e, disabled: o, disabledTooltip: u, locked: r, showDisabledInfoIcon: null == a };
                },
                [s, i],
            ),
            c = r.useCallback(
                (e, t) => {
                    let { isSubscriptionPaidByWallet: n } = t,
                        l = e.disabled || (s && !n);
                    return {
                        giftCardCheckboxProps: u(e.giftCardCheckboxProps, {
                            isSubscriptionPaidByWallet: n,
                            selectorDisabled: l,
                        }),
                        disabled: l,
                    };
                },
                [s, u],
            ),
            d = r.useCallback(
                (e) => {
                    let { isSubscriptionPaidByWallet: t, selectedSource: n, hidePersonalInformation: r } = e;
                    if (!s || t || null == i || null == n) return null;
                    let u = n instanceof o.A ? n.source : n,
                        { brand: c, label: d } = (0, a.Sm)(u, r);
                    return (0, l.jsx)(y.S, { label: d ?? "", icon: c ?? void 0, tooltipText: i });
                },
                [s, i],
            );
        return (0, l.jsx)(_, {
            ...n,
            resolveInternalState: c,
            renderCustomPaymentSourceSelectorContent: d,
            subscriptionPaymentSourceId: t,
        });
    },
    f = (e) => {
        let { setPaymentSourceId: t, paymentSourceId: n } = (0, p.t4)((e) => ({
                setPaymentSourceId: e.setPaymentSourceId,
                paymentSourceId: e.paymentSourceId,
            })),
            { setPaymentSourceId: l, paymentSourceId: i } = r.useMemo(
                () => ({
                    setPaymentSourceId: void 0 !== e.setPaymentSourceId ? e.setPaymentSourceId : t,
                    paymentSourceId: void 0 !== e.paymentSourceId ? e.paymentSourceId : n,
                }),
                [e.setPaymentSourceId, e.paymentSourceId, t, n],
            );
        return { setPaymentSourceId: l, paymentSourceId: i };
    };
