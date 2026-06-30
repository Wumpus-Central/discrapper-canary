"use strict";
n.d(t, { n: () => b, N: () => O });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(637141),
    o = n(606267),
    l = n(176095),
    u = n(826469),
    c = n(351906);
let d = (0, n(945810).mj)({
    name: "2026-06-pix-for-otp",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var _ = n(446044),
    h = n(120700),
    f = n(426398),
    p = n(872452),
    E = n(46332),
    m = n(652215),
    g = n(327105),
    A = n(375708),
    I = n(186460);
let T = new Set([h.C.ORB_CHECKOUT]);
function S(e) {
    let { onGiftCardRedeemed: t } = e,
        n = (0, E.t4)((e) => e.unifiedCheckoutFlow);
    return null != n && T.has(n) ? null : (0, i.jsx)(p.Z4, { className: I.K, onComplete: t });
}
function y(e) {
    var t;
    let { onPaymentSourceAdd: n } = e,
        { enabled: r } = ((t = { location: "CheckoutStatefulPayWithPixLink" }), { enabled: d.useConfig(t).enabled }),
        { enabled: s } = (0, _.Y)({ location: "CheckoutStatefulPayWithPixLink" });
    return r && s ? (0, i.jsx)(p.y, { className: I.K, text: A.intl.string(g.default.JPRQ9L), onClick: n }) : null;
}
function C(e) {
    let { onPaymentSourceAdd: t } = e,
        n = (0, E.t4)((e) => e.unifiedCheckoutFlow),
        r = (0, E.t4)((e) => e.isGift),
        s = (0, f.kc)(),
        a = (n === h.C.COLLECTIBLES_CHECKOUT && !r) || (n === h.C.PREMIUM_CHECKOUT && r),
        o = s.some((e) => e.type === m.hes.PIX);
    return !a || o || null == t ? null : (0, i.jsx)(y, { onPaymentSourceAdd: t });
}
var N = n(364995),
    v = n(655857),
    R = n(165272);
function O(e) {
    let {
            setPaymentSourceId: t,
            paymentSourceId: n,
            label: a,
            additionalPaymentSourceDropdownProps: u,
            disabled: d,
            location: _,
            onPaymentSourceAdd: h,
            subscriptionPaymentSourceId: f,
            hideCurrencySelect: m,
            resolveInternalState: g,
            renderCustomPaymentSourceSelectorContent: I,
        } = e,
        { setPaymentSourceId: T, paymentSourceId: y } = (function (e) {
            let { setPaymentSourceId: t, paymentSourceId: n } = (0, E.t4)((e) => ({
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
        })({ setPaymentSourceId: t, paymentSourceId: n }),
        [R, O] = r.useState(!1),
        {
            giftCardsEnabled: b,
            giftCardCheckboxProps: D,
            walletCoversSubtotal: L,
            basePaymentSourceDropdownProps: w,
            isSubscriptionPaidByWallet: M,
            hidePersonalInformation: P,
        } = (function (e) {
            let {
                    paymentSourceId: t,
                    setPaymentSourceId: n,
                    location: i,
                    subscriptionPaymentSourceId: a,
                    pendingGiftCardWalletSelection: u,
                    setPendingGiftCardWalletSelection: d,
                } = e,
                { hasInvoiceOrderContextLoaded: _, checkoutPaymentSources: h } = (0, N.t)(),
                f = (0, E.t4)((e) => e.checkoutInvoiceError),
                {
                    dropdownPaymentSources: p,
                    giftCardsEnabled: m,
                    dropdownPaymentSourceId: g,
                    handleDropdownPaymentSourceChange: A,
                    giftCardCheckboxProps: I,
                    walletCoversSubtotal: T,
                    isSubscriptionPaidByWallet: S,
                    giftCardWallet: y,
                    isGiftCardCreditsChecked: C,
                    isWalletBalanceLoaded: v,
                    handleGiftCardCreditsToggle: R,
                } = (0, o.Y0)({
                    checkoutPaymentSources: h,
                    paymentSourceId: t,
                    setPaymentSourceId: n,
                    location: i ?? "BaseStatefulPaymentSourceSelector",
                    isReady: _,
                    subscriptionPaymentSourceId: a,
                });
            !(function (e) {
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
                giftCardWallet: y,
                isWalletBalanceLoaded: v,
                walletCoversSubtotal: T,
                isGiftCardCreditsChecked: C,
                subscriptionPaymentSourceId: a,
                handleGiftCardCreditsToggle: R,
                pendingGiftCardWalletSelection: u,
                setPendingGiftCardWalletSelection: d,
            });
            let O = r.useMemo(() => {
                    let e = p.find((e) => e.isDefault);
                    return null != e ? e.id : void 0;
                }, [p]),
                b = (0, s.bG)([c.A], () => c.A.hidePersonalInformation ?? !1);
            return {
                giftCardsEnabled: m,
                giftCardCheckboxProps: I,
                walletCoversSubtotal: T,
                basePaymentSourceDropdownProps: r.useMemo(
                    () => ({
                        selectedPaymentSourceId: g,
                        paymentSources: p,
                        defaultPaymentSourceId: O,
                        hidePersonalInformation: b,
                        onChange: A,
                        dropdownLoading: !_ && null == f,
                    }),
                    [g, p, O, b, A, _, f],
                ),
                isSubscriptionPaidByWallet: S,
                hidePersonalInformation: b,
            };
        })({
            paymentSourceId: y,
            setPaymentSourceId: T,
            location: _,
            subscriptionPaymentSourceId: f,
            pendingGiftCardWalletSelection: R,
            setPendingGiftCardWalletSelection: O,
        }),
        { priceOptions: x, setCurrency: k } = (0, E.t4)((e) => ({
            priceOptions: e.checkoutPriceOptions,
            setCurrency: e.setCheckoutCurrency,
        })),
        { dropdownCurrencies: U, displayCurrency: G } = (0, v.Jn)(),
        F = r.useCallback(() => O(!0), []),
        { giftCardCheckboxProps: V, disabled: B } = r.useMemo(() => {
            let e = d ?? !1;
            return null != g
                ? g({ giftCardCheckboxProps: D, disabled: e }, { isSubscriptionPaidByWallet: M })
                : { giftCardCheckboxProps: D, disabled: e };
        }, [g, D, d, M]),
        j = null != V && !0 === V.locked,
        H = r.useMemo(() => {
            if (null != I)
                return I({
                    isSubscriptionPaidByWallet: M,
                    selectedSource: w.paymentSources.find((e) => e.id === w.selectedPaymentSourceId),
                    hidePersonalInformation: P,
                });
        }, [I, M, w, P]),
        Y = r.useMemo(() => {
            if (!m)
                return {
                    label: A.intl.string(A.t["/AAR02"]),
                    selectedCurrency: x.currency ?? G,
                    currencies: U,
                    onChange: k,
                    disabled: B,
                };
        }, [m, x.currency, G, U, k, B]),
        W = r.useMemo(() => ({ ...w, ...u, onPaymentSourceAdd: h }), [w, h, u]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(p.nL, {
                label: a,
                giftCardsEnabled: b,
                giftCardCheckboxProps: V,
                paymentSourceDropdownProps: W,
                showCheckboxAboveDropdown: L || j,
                disabled: B,
                currencySelectProps: Y,
                customSelectorContent: H,
            }),
            b ? (0, i.jsx)(S, { onGiftCardRedeemed: F }) : null,
            (0, i.jsx)(C, { onPaymentSourceAdd: h }),
        ],
    });
}
function b(e) {
    let { premiumSubscriptionPaymentSourceId: t, ...n } = e,
        { disableSourceChangeTooltipText: s, hasLockedPaymentSource: o } = r.useMemo(
            () =>
                null != t
                    ? { hasLockedPaymentSource: !0, disableSourceChangeTooltipText: A.intl.string(g.default.UdSuwf) }
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
                return (0, i.jsx)(R.S, { label: d ?? "", icon: c ?? void 0, tooltipText: s });
            },
            [o, s],
        );
    return (0, i.jsx)(O, {
        ...n,
        resolveInternalState: c,
        renderCustomPaymentSourceSelectorContent: d,
        subscriptionPaymentSourceId: t,
    });
}
