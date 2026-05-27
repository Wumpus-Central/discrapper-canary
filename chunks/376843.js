n.d(t, { n: () => T, N: () => _ });
var l = n(627968),
    i = n(64700),
    r = n(17928),
    a = n(637141),
    s = n(606267),
    o = n(826469),
    u = n(351906),
    c = n(834252),
    d = n(120700),
    p = n(944355),
    m = n(186460);
let h = new Set([d.C.ORB_CHECKOUT]);
function C() {
    let { unifiedCheckoutFlow: e } = (0, c.P5)();
    return null != e && h.has(e) ? null : (0, l.jsx)(p.Z4, { className: m.K });
}
var A = n(364995),
    y = n(655857),
    E = n(165272),
    P = n(722847),
    S = n(327105),
    f = n(375708);
let _ = (e) => {
        let {
                setPaymentSourceId: t,
                paymentSourceId: n,
                label: a,
                additionalPaymentSourceDropdownProps: o,
                disabled: c,
                location: d,
                onPaymentSourceAdd: m,
                subscriptionPaymentSourceId: h,
                hideCurrencySelect: E,
                renderCustomPaymentSourceSelectorContent: S,
                resolveGiftCardCheckboxProps: _,
                resolveDisabledState: T,
            } = e,
            { setPaymentSourceId: x, paymentSourceId: N } = I({ setPaymentSourceId: t, paymentSourceId: n }),
            {
                giftCardsEnabled: g,
                giftCardCheckboxProps: v,
                walletCoversSubtotal: M,
                basePaymentSourceDropdownProps: b,
                isSubscriptionPaidByWallet: j,
                hidePersonalInformation: R,
            } = ((e) => {
                let { paymentSourceId: t, setPaymentSourceId: n, location: l, subscriptionPaymentSourceId: a } = e,
                    { hasInvoiceOrderContextLoaded: o, checkoutPaymentSources: c } = (0, A.t)(),
                    d = (0, P.t4)((e) => e.checkoutInvoiceError),
                    {
                        dropdownPaymentSources: p,
                        giftCardsEnabled: m,
                        dropdownPaymentSourceId: h,
                        handleDropdownPaymentSourceChange: C,
                        giftCardCheckboxProps: y,
                        walletCoversSubtotal: E,
                        isSubscriptionPaidByWallet: S,
                    } = (0, s.Y0)({
                        checkoutPaymentSources: c,
                        paymentSourceId: t,
                        setPaymentSourceId: n,
                        location: l ?? "BaseStatefulPaymentSourceSelector",
                        isReady: o,
                        subscriptionPaymentSourceId: a,
                    }),
                    f = i.useMemo(() => {
                        let e = p.find((e) => e.isDefault);
                        return null != e ? e.id : void 0;
                    }, [p]),
                    _ = (0, r.bG)([u.A], () => u.A.hidePersonalInformation ?? !1);
                return {
                    giftCardsEnabled: m,
                    giftCardCheckboxProps: y,
                    walletCoversSubtotal: E,
                    basePaymentSourceDropdownProps: i.useMemo(
                        () => ({
                            selectedPaymentSourceId: h,
                            paymentSources: p,
                            defaultPaymentSourceId: f,
                            hidePersonalInformation: _,
                            onChange: C,
                            dropdownLoading: !o && null == d,
                        }),
                        [h, p, f, _, C, o, d],
                    ),
                    isSubscriptionPaidByWallet: S,
                    hidePersonalInformation: _,
                };
            })({ paymentSourceId: N, setPaymentSourceId: x, location: d, subscriptionPaymentSourceId: h }),
            { priceOptions: L, setCurrency: O } = (0, P.t4)((e) => ({
                priceOptions: e.checkoutPriceOptions,
                setCurrency: e.setCheckoutCurrency,
            })),
            { dropdownCurrencies: D, displayCurrency: w } = (0, y.Jn)(),
            U = i.useMemo(() => (null != T ? T(c, { isSubscriptionPaidByWallet: j }) : (c ?? !1)), [c, j, T]),
            k = i.useMemo(() => {
                if (null != S)
                    return S({
                        isSubscriptionPaidByWallet: j,
                        selectedSource: b.paymentSources.find((e) => e.id === b.selectedPaymentSourceId),
                        hidePersonalInformation: R,
                    });
            }, [S, j, b, R]),
            G = i.useMemo(() => {
                if (!E)
                    return {
                        label: f.intl.string(f.t["/AAR02"]),
                        selectedCurrency: L.currency ?? w,
                        currencies: D,
                        onChange: O,
                        disabled: U,
                    };
            }, [E, L.currency, w, D, O, U]),
            Y = i.useMemo(() => ({ ...b, ...o, onPaymentSourceAdd: m }), [b, m, o]),
            F = i.useMemo(
                () => (null != _ ? _(v, { isSubscriptionPaidByWallet: j, selectorDisabled: U }) : v),
                [v, _, j, U],
            ),
            B = null != F && !0 === F.locked;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(p.nL, {
                    label: a,
                    giftCardsEnabled: g,
                    giftCardCheckboxProps: F,
                    paymentSourceDropdownProps: Y,
                    showCheckboxAboveDropdown: M || B,
                    disabled: U,
                    currencySelectProps: G,
                    customSelectorContent: k,
                }),
                g ? (0, l.jsx)(C, {}) : null,
            ],
        });
    },
    T = (e) => {
        let { premiumSubscriptionPaymentSourceId: t, ...n } = e,
            { disableSourceChangeTooltipText: r, hasLockedPaymentSource: s } = i.useMemo(
                () =>
                    null != t
                        ? {
                              hasLockedPaymentSource: !0,
                              disableSourceChangeTooltipText: f.intl.string(S.default.UdSuwf),
                          }
                        : { hasLockedPaymentSource: !1, disableSourceChangeTooltipText: void 0 },
                [t],
            ),
            u = i.useCallback(
                (e, t) => {
                    let { isSubscriptionPaidByWallet: n, selectorDisabled: l } = t;
                    if (null == e) return null;
                    let i = s && n,
                        a = s ? r : void 0,
                        o = !i && (e.disabled || l),
                        u = a ?? e.disabledTooltip;
                    return { ...e, disabled: o, disabledTooltip: u, locked: i, showDisabledInfoIcon: null == a };
                },
                [s, r],
            ),
            c = i.useCallback(
                (e, t) => {
                    let { isSubscriptionPaidByWallet: n } = t;
                    return e || (s && !n);
                },
                [s],
            ),
            d = i.useCallback(
                (e) => {
                    let { isSubscriptionPaidByWallet: t, selectedSource: n, hidePersonalInformation: i } = e;
                    if (!s || t || null == r || null == n) return null;
                    let u = n instanceof o.A ? n.source : n,
                        { brand: c, label: d } = (0, a.Sm)(u, i);
                    return (0, l.jsx)(E.S, { label: d ?? "", icon: c ?? void 0, tooltipText: r });
                },
                [s, r],
            );
        return (0, l.jsx)(_, {
            ...n,
            resolveGiftCardCheckboxProps: u,
            resolveDisabledState: c,
            renderCustomPaymentSourceSelectorContent: d,
            subscriptionPaymentSourceId: t,
        });
    },
    I = (e) => {
        let { setPaymentSourceId: t, paymentSourceId: n } = (0, P.t4)((e) => ({
                setPaymentSourceId: e.setPaymentSourceId,
                paymentSourceId: e.paymentSourceId,
            })),
            { setPaymentSourceId: l, paymentSourceId: r } = i.useMemo(
                () => ({
                    setPaymentSourceId: void 0 !== e.setPaymentSourceId ? e.setPaymentSourceId : t,
                    paymentSourceId: void 0 !== e.paymentSourceId ? e.paymentSourceId : n,
                }),
                [e.setPaymentSourceId, e.paymentSourceId, t, n],
            );
        return { setPaymentSourceId: l, paymentSourceId: r };
    };
