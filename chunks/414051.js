n.d(t, { n: () => L, N: () => M });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(452027),
    s = n(637141),
    o = n(803694),
    u = n(176095),
    c = n(826469),
    d = n(351906),
    m = n(708791),
    p = n(997101),
    h = n(123816),
    C = n(951305),
    f = n(371710),
    E = n(120700),
    S = n(25149),
    g = n(652215),
    I = n(583741),
    A = n(105292),
    y = n(170691);
let x = new Set([E.C.ORB_CHECKOUT]);
function P(e) {
    let { onGiftCardRedeemed: t } = e,
        n = (0, h.t4)((e) => e.unifiedCheckoutFlow);
    return null != n && x.has(n) ? null : (0, l.jsx)(S.Z4, { className: y.K, onComplete: t });
}
function v(e) {
    let { onPaymentSourceAdd: t } = e,
        n = (0, h.t4)((e) => e.unifiedCheckoutFlow),
        {
            isGift: i,
            checkoutPaymentSources: r,
            checkoutStoreCountry: a,
        } = (0, h.t4)((e) => ({
            isGift: e.isGift,
            checkoutPaymentSources: e.get("checkoutPaymentSources"),
            checkoutStoreCountry: e.get("checkoutStoreCountry"),
        })),
        s = (function () {
            let { isRecurringGift: e } = (0, C.Pv)(),
                t = (0, h.t4)((e) => e.selectedPlanId);
            return e && null != t && (0, f.dI)(t);
        })(),
        o = (n === E.C.COLLECTIBLES_CHECKOUT && !i) || (n === E.C.PREMIUM_CHECKOUT && i && !s),
        u = a === p.d.BR,
        c = r.some((e) => e.type === g.hes.PIX);
    return o && u && !c && null != t
        ? (0, l.jsx)(S.y, {
              className: y.K,
              text: A.intl.string(I.default.JPRQ9L),
              onClick: () => t({ linkWalletEnabled: !1 }),
          })
        : null;
}
var _ = n(655857),
    T = n(87730),
    N = n(494903),
    b = n(165272),
    j = n(451636),
    R = n(969933),
    O = n(571852);
function M(e) {
    let {
            setPaymentSourceId: t,
            paymentSourceId: n,
            label: c,
            additionalPaymentSourceDropdownProps: p,
            disabled: C,
            location: f,
            onPaymentSourceAdd: E,
            subscriptionPaymentSourceId: S,
            hideCurrencySelect: g,
            resolveInternalState: y,
            renderCustomPaymentSourceSelectorContent: x,
        } = e,
        { setPaymentSourceId: b, paymentSourceId: M } = (function (e) {
            let { setPaymentSourceId: t, paymentSourceId: n } = (function () {
                    let {
                            paymentSourceId: e,
                            setPaymentSourceId: t,
                            orderRecord: n,
                            isOrderSyncing: l,
                            orderSyncError: i,
                        } = (0, h.t4)((e) => ({
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
        [L, k] = i.useState(!1),
        {
            giftCardsEnabled: w,
            giftCardCheckboxProps: D,
            walletCoversSubtotal: U,
            walletCoversTotal: G,
            basePaymentSourceDropdownProps: F,
            isSubscriptionPaidByWallet: B,
            hidePersonalInformation: H,
            isSplitPaymentMode: W,
        } = (function (e) {
            let {
                    paymentSourceId: t,
                    setPaymentSourceId: n,
                    location: l,
                    subscriptionPaymentSourceId: a,
                    pendingGiftCardWalletSelection: s,
                    setPendingGiftCardWalletSelection: c,
                } = e,
                { isCheckoutDataLoading: m, hasCheckoutContextLoaded: p } = (0, h.t4)((e) => ({
                    isCheckoutDataLoading: e.get("isCheckoutDataLoading"),
                    hasCheckoutContextLoaded: e.get("hasCheckoutContextLoaded"),
                })),
                {
                    dropdownPaymentSources: C,
                    giftCardsEnabled: f,
                    dropdownPaymentSourceId: E,
                    handleDropdownPaymentSourceChange: S,
                    giftCardCheckboxProps: g,
                    walletCoversSubtotal: I,
                    walletCoversTotal: A,
                    isSubscriptionPaidByWallet: y,
                    giftCardWallet: x,
                    isGiftCardCreditsChecked: P,
                    isWalletBalanceLoaded: v,
                    handleGiftCardCreditsToggle: _,
                    isSplitPaymentMode: T,
                } = (0, o.Y0)({
                    paymentSourceId: t,
                    setPaymentSourceId: n,
                    location: l ?? "BaseStatefulPaymentSourceSelector",
                    isReady: p,
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
                    m = (0, r.bG)([u.A], () => null != t && u.A.getIsFetching(t.id), [t]),
                    p = i.useRef(!1);
                i.useEffect(() => {
                    if (!c) {
                        p.current = !1;
                        return;
                    }
                    if (null != t) {
                        if (m) {
                            p.current = !0;
                            return;
                        }
                        if (n) {
                            if ((null != s && s !== t.id) || a) return void d(!1);
                            if (l) {
                                (o(!0), d(!1));
                                return;
                            }
                            p.current && d(!1);
                        }
                    }
                }, [c, t, m, n, l, a, s, o, d]);
            })({
                giftCardWallet: x,
                isWalletBalanceLoaded: v,
                walletCoversSubtotal: I,
                isGiftCardCreditsChecked: P,
                subscriptionPaymentSourceId: a,
                handleGiftCardCreditsToggle: _,
                pendingGiftCardWalletSelection: s,
                setPendingGiftCardWalletSelection: c,
            });
            let N = i.useMemo(() => {
                    let e = C.find((e) => e.isDefault);
                    return null != e ? e.id : void 0;
                }, [C]),
                b = (0, r.bG)([d.A], () => d.A.hidePersonalInformation ?? !1);
            return {
                giftCardsEnabled: f,
                giftCardCheckboxProps: g,
                walletCoversSubtotal: I,
                walletCoversTotal: A,
                basePaymentSourceDropdownProps: i.useMemo(
                    () => ({
                        selectedPaymentSourceId: E,
                        paymentSources: C,
                        defaultPaymentSourceId: N,
                        hidePersonalInformation: b,
                        onChange: S,
                        dropdownLoading: m,
                    }),
                    [E, C, N, b, S, m],
                ),
                isSubscriptionPaidByWallet: y,
                hidePersonalInformation: b,
                isSplitPaymentMode: T,
            };
        })({
            paymentSourceId: M,
            setPaymentSourceId: b,
            location: f,
            subscriptionPaymentSourceId: S,
            pendingGiftCardWalletSelection: L,
            setPendingGiftCardWalletSelection: k,
        }),
        {
            priceOptions: V,
            setCurrency: Y,
            expressCheckoutVisibilityState: K,
            isOrderLocked: Z,
            refetchInvoicePreviews: q,
        } = (0, h.t4)((e) => ({
            priceOptions: e.checkoutPriceOptions,
            setCurrency: e.setCheckoutCurrency,
            expressCheckoutVisibilityState: e.getExpressCheckoutVisibilityState(),
            isOrderLocked: e.get("isOrderLocked"),
            refetchInvoicePreviews: e.refetchInvoicePreviews,
        })),
        {
            shouldExpressCheckoutBeVisible: z,
            isExpressCheckoutEnabledForPaymentSelect: $,
            shouldDisablePaymentSelect: Q,
        } = K,
        { dropdownCurrencies: J, displayCurrency: X } = (0, _.Jn)(),
        ee = i.useCallback(() => {
            (k(!0), q());
        }, [q]),
        et = i.useMemo(() => Z || Q || (C ?? !1), [Z, Q, C]),
        { giftCardCheckboxProps: en, disabled: el } = i.useMemo(
            () =>
                null != y
                    ? y({ giftCardCheckboxProps: D, disabled: et }, { isSubscriptionPaidByWallet: B })
                    : { giftCardCheckboxProps: D, disabled: et },
            [et, y, D, B],
        ),
        ei = null != en && !0 === en.locked,
        er = i.useMemo(() => {
            if (null != x)
                return x({
                    isSubscriptionPaidByWallet: B,
                    selectedSource: F.paymentSources.find((e) => e.id === F.selectedPaymentSourceId),
                    hidePersonalInformation: H,
                });
        }, [x, B, F, H]),
        ea = i.useMemo(() => {
            if (!g)
                return {
                    label: A.intl.string(A.t["/AAR02"]),
                    selectedCurrency: V.currency ?? X,
                    currencies: J,
                    onChange: Y,
                    disabled: el,
                };
        }, [g, V.currency, X, J, Y, el]),
        es = i.useMemo(() => ({ ...F, ...p, onPaymentSourceAdd: E }), [F, E, p]),
        eo = null != en && en.checked,
        eu = W || U || ei,
        ec = i.useMemo(() => {
            if (!w || null == en) return null;
            let e = eu ? O.r : O.K,
                t = en.disabled || el;
            return (0, l.jsx)("div", { className: e, children: (0, l.jsx)(T.o, { ...en, disabled: t }) });
        }, [w, en, eu, el]),
        ed = w && eo,
        em = ed && W && G,
        ep = ed && !W && eu,
        eh = null != er,
        eC = em && es.paymentSources.length > 0,
        ef = i.useMemo(() => {
            if (null != er) return er;
            let e = z ? A.intl.string(I.default.BLu9EI) : void 0;
            return (0, l.jsx)(s.Ay, {
                ...es,
                disabled: el || eC,
                addPaymentSourceVariant: em || z ? "secondary" : "primary",
                addPaymentSourceText: e,
            });
        }, [er, el, eC, em, es, z]),
        [eE, eS] = i.useState(!1);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(a.D, {
                label: c,
                children: [
                    $ &&
                        (0, l.jsx)(m.Zr, {
                            stripeExpressCheckoutComponent: (0, l.jsx)(m.E1, {
                                className: R.KV,
                                type: "vault_only",
                                isSubmitting: eE,
                                setIsSubmitting: eS,
                            }),
                            fallbackComponent: null,
                            showDividerBelow: !ep,
                        }),
                    eu && ec,
                    !ep && ef,
                    !eu && ec,
                    !eh && !ed && void 0 !== ea && (0, l.jsx)(j.q, { ...ea }),
                ],
            }),
            w ? (0, l.jsx)(P, { onGiftCardRedeemed: ee }) : null,
            (0, l.jsx)(v, { onPaymentSourceAdd: E }),
            (0, l.jsx)(N.B, {}),
        ],
    });
}
function L(e) {
    let { premiumSubscriptionPaymentSourceId: t, ...n } = e,
        { disableSourceChangeTooltipText: r, hasLockedPaymentSource: a } = i.useMemo(
            () =>
                null != t
                    ? { hasLockedPaymentSource: !0, disableSourceChangeTooltipText: A.intl.string(I.default.UdSuwf) }
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
                return (0, l.jsx)(b.S, { label: d ?? "", icon: u ?? void 0, tooltipText: r });
            },
            [a, r],
        );
    return (0, l.jsx)(M, {
        ...n,
        resolveInternalState: u,
        renderCustomPaymentSourceSelectorContent: d,
        subscriptionPaymentSourceId: t,
    });
}
