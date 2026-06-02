n.d(t, { n: () => f, N: () => _ });
var l = n(627968),
    r = n(64700),
    i = n(17928),
    a = n(637141),
    s = n(606267),
    o = n(826469),
    u = n(351906),
    c = n(120700),
    d = n(944355),
    p = n(722847),
    m = n(186460);
let h = new Set([c.C.ORB_CHECKOUT]);
function A() {
    let e = (0, p.t4)((e) => e.unifiedCheckoutFlow);
    return null != e && h.has(e) ? null : (0, l.jsx)(d.Z4, { className: m.K });
}
var C = n(364995),
    E = n(655857),
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
                renderCustomPaymentSourceSelectorContent: _,
                resolveGiftCardCheckboxProps: f,
                resolveDisabledState: T,
            } = e,
            { setPaymentSourceId: N, paymentSourceId: v } = I({ setPaymentSourceId: t, paymentSourceId: n }),
            {
                giftCardsEnabled: g,
                giftCardCheckboxProps: x,
                walletCoversSubtotal: R,
                basePaymentSourceDropdownProps: M,
                isSubscriptionPaidByWallet: b,
                hidePersonalInformation: L,
            } = ((e) => {
                let { paymentSourceId: t, setPaymentSourceId: n, location: l, subscriptionPaymentSourceId: a } = e,
                    { hasInvoiceOrderContextLoaded: o, checkoutPaymentSources: c } = (0, C.t)(),
                    d = (0, p.t4)((e) => e.checkoutInvoiceError),
                    {
                        dropdownPaymentSources: m,
                        giftCardsEnabled: h,
                        dropdownPaymentSourceId: A,
                        handleDropdownPaymentSourceChange: E,
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
                    f = (0, i.bG)([u.A], () => u.A.hidePersonalInformation ?? !1);
                return {
                    giftCardsEnabled: h,
                    giftCardCheckboxProps: y,
                    walletCoversSubtotal: P,
                    basePaymentSourceDropdownProps: r.useMemo(
                        () => ({
                            selectedPaymentSourceId: A,
                            paymentSources: m,
                            defaultPaymentSourceId: _,
                            hidePersonalInformation: f,
                            onChange: E,
                            dropdownLoading: !o && null == d,
                        }),
                        [A, m, _, f, E, o, d],
                    ),
                    isSubscriptionPaidByWallet: S,
                    hidePersonalInformation: f,
                };
            })({ paymentSourceId: v, setPaymentSourceId: N, location: m, subscriptionPaymentSourceId: y }),
            { priceOptions: j, setCurrency: O } = (0, p.t4)((e) => ({
                priceOptions: e.checkoutPriceOptions,
                setCurrency: e.setCheckoutCurrency,
            })),
            { dropdownCurrencies: w, displayCurrency: D } = (0, E.Jn)(),
            U = r.useMemo(() => (null != T ? T(c, { isSubscriptionPaidByWallet: b }) : (c ?? !1)), [c, b, T]),
            k = r.useMemo(() => {
                if (null != _)
                    return _({
                        isSubscriptionPaidByWallet: b,
                        selectedSource: M.paymentSources.find((e) => e.id === M.selectedPaymentSourceId),
                        hidePersonalInformation: L,
                    });
            }, [_, b, M, L]),
            G = r.useMemo(() => {
                if (!P)
                    return {
                        label: S.intl.string(S.t["/AAR02"]),
                        selectedCurrency: j.currency ?? D,
                        currencies: w,
                        onChange: O,
                        disabled: U,
                    };
            }, [P, j.currency, D, w, O, U]),
            Y = r.useMemo(() => ({ ...M, ...o, onPaymentSourceAdd: h }), [M, h, o]),
            F = r.useMemo(
                () => (null != f ? f(x, { isSubscriptionPaidByWallet: b, selectorDisabled: U }) : x),
                [x, f, b, U],
            ),
            B = null != F && !0 === F.locked;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(d.nL, {
                    label: a,
                    giftCardsEnabled: g,
                    giftCardCheckboxProps: F,
                    paymentSourceDropdownProps: Y,
                    showCheckboxAboveDropdown: R || B,
                    disabled: U,
                    currencySelectProps: G,
                    customSelectorContent: k,
                }),
                g ? (0, l.jsx)(A, {}) : null,
            ],
        });
    },
    f = (e) => {
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
                    let { isSubscriptionPaidByWallet: n } = t;
                    return e || (s && !n);
                },
                [s],
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
            resolveGiftCardCheckboxProps: u,
            resolveDisabledState: c,
            renderCustomPaymentSourceSelectorContent: d,
            subscriptionPaymentSourceId: t,
        });
    },
    I = (e) => {
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
