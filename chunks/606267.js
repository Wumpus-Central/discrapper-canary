n.d(t, { A: () => y, Y0: () => S, iB: () => f });
var l = n(582128),
    i = n(702841),
    r = n(364995),
    a = n(666646),
    s = n(316915),
    o = n(166403),
    u = n(459357),
    c = n(176095),
    d = n(11939),
    p = n(237299),
    m = n(652215),
    C = n(375708),
    h = n(776409);
function E(e) {
    let { giftCardsEnabled: t, checkoutPaymentSources: n } = e,
        r = l.useMemo(() => (0, d.N)(n)?.id, [n]),
        o = (0, a.sw)(),
        u = (0, a.IK)(),
        p = (0, s.t4)((e) => {
            let { fetchRenewalInvoicePreviewRequest: t, renewalInvoicePreview: n, renewalInvoiceError: l } = e;
            return null != t && null == n && null == l;
        }),
        m = A(o),
        C = A(u),
        h = null != m && 0 === m && null != C,
        E = 0 === m && p,
        f = h ? C : m,
        S = h ? (u?.total ?? null) : o?.total,
        y = (0, i.bG)([c.A], () => (t && null != r ? c.A.getBalance(r) : null), [t, r]);
    return t && null != y
        ? {
              walletCoversSubtotal: null != f && y.amount >= f,
              walletCoversTotal: null != S && y.amount >= S,
              walletId: r,
              isWalletBalanceLoaded: null != f && !E,
              isWalletCoverageLoading: E,
          }
        : {
              walletCoversSubtotal: !1,
              walletCoversTotal: !1,
              walletId: r,
              isWalletBalanceLoaded: !1,
              isWalletCoverageLoading: !1,
          };
}
function f(e) {
    let { checkoutPaymentSources: t, paymentSourceId: n, location: l } = e,
        { enabled: i } = (0, u.c)({ location: l }),
        {
            walletCoversTotal: r,
            walletId: a,
            isWalletBalanceLoaded: s,
        } = E({ giftCardsEnabled: i, checkoutPaymentSources: t });
    return s && null != n && n === a && !r;
}
function A(e) {
    return null == e ? null : e.taxInclusive ? e.total : e.total - e.tax;
}
function S(e) {
    let {
            checkoutPaymentSources: t,
            paymentSourceId: n,
            setPaymentSourceId: i,
            location: r,
            isReady: a = !0,
            subscriptionPaymentSourceId: o,
        } = e,
        { enabled: c } = (0, u.c)({ location: r }),
        f = (0, s.t4)((e) => e.pendingPaymentSourceId),
        A = (0, s.t4)((e) => null != e.initialPaymentSourceId),
        S = (0, s.t4)((e) => e.hasAddedPaymentSourceThisSession),
        { dropdownPaymentSources: y, giftCardWallet: P } = l.useMemo(() => {
            let e = t.filter((e) => e.type !== m.hes.TDS_WALLET);
            return c
                ? { dropdownPaymentSources: e, giftCardWallet: (0, d.N)(t) }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [t, c]),
        [I, _] = l.useState(null),
        T = null != P && n === P.id,
        g = l.useMemo(
            () =>
                null != I
                    ? I
                    : (0, p.ut)({ giftCardWallet: null, dropdownPaymentSources: y, subscriptionPaymentSourceId: o }),
            [y, o, I],
        ),
        v = l.useMemo(() => (T ? g : (n ?? null)), [g, T, n]),
        x = l.useMemo(
            () => ({
                checkoutPaymentSources: t,
                dropdownPaymentSources: y,
                subscriptionPaymentSourceId: o,
                giftCardWallet: P,
                isReady: a,
                pendingPaymentSourceId: f,
                paymentSourceId: n,
                giftCardsEnabled: c,
                hasInitialPaymentSourceSeed: A,
                hasAddedPaymentSourceThisSession: S,
            }),
            [t, y, o, P, a, f, n, c, A, S],
        );
    (0, p.ws)(i, x);
    let N = l.useCallback(
            (e) => {
                i(null != e ? e.id : null);
            },
            [i],
        ),
        R = l.useCallback(
            (e) => {
                if (e && null != P) {
                    n !== P.id && _(n ?? null), i(P.id);
                    return;
                }
                i(g);
            },
            [i, P, n, g],
        ),
        {
            walletCoversSubtotal: b,
            walletCoversTotal: M,
            isWalletBalanceLoaded: j,
            isWalletCoverageLoading: O,
        } = E({ giftCardsEnabled: c, checkoutPaymentSources: t }),
        L = null != o && null != P && o === P.id;
    l.useEffect(() => {
        !L && j && !b && T && i(g);
    }, [L, j, b, T, i, g]);
    let w = l.useMemo(
        () =>
            null == P
                ? null
                : {
                      giftCardWallet: P,
                      checked: T,
                      onChange: R,
                      loading: O,
                      disabled: !O && !b,
                      disabledTooltip: O || b ? void 0 : C.intl.string(h.default.ccWIdu),
                  },
        [P, T, R, b, O],
    );
    return {
        giftCardsEnabled: c,
        dropdownPaymentSources: y,
        dropdownPaymentSourceId: v,
        giftCardWallet: P,
        isGiftCardCreditsChecked: T,
        isSubscriptionPaidByWallet: L,
        handleGiftCardCreditsToggle: R,
        handleDropdownPaymentSourceChange: N,
        giftCardCheckboxProps: w,
        walletCoversSubtotal: b,
        walletCoversTotal: M,
        isWalletBalanceLoaded: j,
        isWalletCoverageLoading: O,
    };
}
function y(e) {
    let { location: t, message: n } = e,
        a = (0, i.bG)([o.A], () => {
            let e = o.A.getPremiumTypeSubscription();
            return null != e ? e.paymentSourceId : null;
        }),
        { checkoutPaymentSources: s } = (0, r.t)(),
        { enabled: c } = (0, u.c)({ location: t }),
        p = l.useMemo(() => (c ? (0, d.N)(s) : null), [s, c]),
        m = null != a && null != p && a === p.id,
        { walletCoversTotal: C, isWalletBalanceLoaded: h } = E({ giftCardsEnabled: c, checkoutPaymentSources: s });
    return l.useMemo(() => {
        if (m && h && !C) return { type: "warning", key: "wallet-insufficient-balance", message: n };
    }, [m, h, C, n]);
}
