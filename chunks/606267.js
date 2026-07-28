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
        { dropdownPaymentSources: S, giftCardWallet: y } = l.useMemo(() => {
            let e = t.filter((e) => e.type !== m.hes.TDS_WALLET);
            return c
                ? { dropdownPaymentSources: e, giftCardWallet: (0, d.N)(t) }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [t, c]),
        [P, I] = l.useState(null),
        _ = null != y && n === y.id,
        T = l.useMemo(
            () =>
                null != P
                    ? P
                    : (0, p.ut)({ giftCardWallet: null, dropdownPaymentSources: S, subscriptionPaymentSourceId: o }),
            [S, o, P],
        ),
        g = l.useMemo(() => (_ ? T : (n ?? null)), [T, _, n]),
        v = l.useMemo(
            () => ({
                checkoutPaymentSources: t,
                dropdownPaymentSources: S,
                subscriptionPaymentSourceId: o,
                giftCardWallet: y,
                isReady: a,
                pendingPaymentSourceId: f,
                paymentSourceId: n,
                giftCardsEnabled: c,
                hasInitialPaymentSourceSeed: A,
            }),
            [t, S, o, y, a, f, n, c, A],
        );
    (0, p.ws)(i, v);
    let x = l.useCallback(
            (e) => {
                i(null != e ? e.id : null);
            },
            [i],
        ),
        N = l.useCallback(
            (e) => {
                if (e && null != y) {
                    n !== y.id && I(n ?? null), i(y.id);
                    return;
                }
                i(T);
            },
            [i, y, n, T],
        ),
        {
            walletCoversSubtotal: R,
            walletCoversTotal: b,
            isWalletBalanceLoaded: M,
            isWalletCoverageLoading: j,
        } = E({ giftCardsEnabled: c, checkoutPaymentSources: t }),
        O = null != o && null != y && o === y.id;
    l.useEffect(() => {
        !O && M && !R && _ && i(T);
    }, [O, M, R, _, i, T]);
    let L = l.useMemo(
        () =>
            null == y
                ? null
                : {
                      giftCardWallet: y,
                      checked: _,
                      onChange: N,
                      loading: j,
                      disabled: !j && !R,
                      disabledTooltip: j || R ? void 0 : C.intl.string(h.default.ccWIdu),
                  },
        [y, _, N, R, j],
    );
    return {
        giftCardsEnabled: c,
        dropdownPaymentSources: S,
        dropdownPaymentSourceId: g,
        giftCardWallet: y,
        isGiftCardCreditsChecked: _,
        isSubscriptionPaidByWallet: O,
        handleGiftCardCreditsToggle: N,
        handleDropdownPaymentSourceChange: x,
        giftCardCheckboxProps: L,
        walletCoversSubtotal: R,
        walletCoversTotal: b,
        isWalletBalanceLoaded: M,
        isWalletCoverageLoading: j,
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
