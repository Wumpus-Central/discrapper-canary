n.d(t, { A: () => y, Y0: () => S, iB: () => A });
var l = n(64700),
    i = n(702841),
    r = n(364995),
    a = n(666646),
    s = n(6938),
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
        m = f(o),
        C = f(u),
        h = null != m && 0 === m && null != C,
        E = 0 === m && p,
        A = h ? C : m,
        S = h ? (u?.total ?? null) : o?.total,
        y = (0, i.bG)([c.A], () => (t && null != r ? c.A.getBalance(r) : null), [t, r]);
    return t && null != y
        ? {
              walletCoversSubtotal: null != A && y.amount >= A,
              walletCoversTotal: null != S && y.amount >= S,
              walletId: r,
              isWalletBalanceLoaded: null != A && !E,
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
function A(e) {
    let { checkoutPaymentSources: t, paymentSourceId: n, location: l } = e,
        { enabled: i } = (0, u.c)({ location: l }),
        {
            walletCoversTotal: r,
            walletId: a,
            isWalletBalanceLoaded: s,
        } = E({ giftCardsEnabled: i, checkoutPaymentSources: t });
    return s && null != n && n === a && !r;
}
function f(e) {
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
        A = (0, s.t4)((e) => e.pendingPaymentSourceId),
        { dropdownPaymentSources: f, giftCardWallet: S } = l.useMemo(() => {
            let e = t.filter((e) => e.type !== m.hes.TDS_WALLET);
            return c
                ? { dropdownPaymentSources: e, giftCardWallet: (0, d.N)(t) }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [t, c]),
        [y, P] = l.useState(null),
        T = null != S && n === S.id,
        I = l.useMemo(
            () =>
                null != y
                    ? y
                    : (0, p.ut)({ giftCardWallet: null, dropdownPaymentSources: f, subscriptionPaymentSourceId: o }),
            [f, o, y],
        ),
        _ = l.useMemo(() => (T ? I : (n ?? null)), [I, T, n]),
        g = l.useMemo(
            () => ({
                checkoutPaymentSources: t,
                dropdownPaymentSources: f,
                subscriptionPaymentSourceId: o,
                giftCardWallet: S,
                isReady: a,
                pendingPaymentSourceId: A,
                paymentSourceId: n,
                giftCardsEnabled: c,
            }),
            [t, f, o, S, a, A, n, c],
        );
    (0, p.ws)(i, g);
    let v = l.useCallback(
            (e) => {
                i(null != e ? e.id : null);
            },
            [i],
        ),
        x = l.useCallback(
            (e) => {
                if (e && null != S) {
                    n !== S.id && P(n ?? null), i(S.id);
                    return;
                }
                i(I);
            },
            [i, S, n, I],
        ),
        {
            walletCoversSubtotal: N,
            walletCoversTotal: R,
            isWalletBalanceLoaded: b,
            isWalletCoverageLoading: M,
        } = E({ giftCardsEnabled: c, checkoutPaymentSources: t }),
        O = null != o && null != S && o === S.id;
    l.useEffect(() => {
        !O && b && !N && T && i(I);
    }, [O, b, N, T, i, I]);
    let j = l.useMemo(
        () =>
            null == S
                ? null
                : {
                      giftCardWallet: S,
                      checked: T,
                      onChange: x,
                      loading: M,
                      disabled: !M && !N,
                      disabledTooltip: M || N ? void 0 : C.intl.string(h.default.ccWIdu),
                  },
        [S, T, x, N, M],
    );
    return {
        giftCardsEnabled: c,
        dropdownPaymentSources: f,
        dropdownPaymentSourceId: _,
        giftCardWallet: S,
        isGiftCardCreditsChecked: T,
        isSubscriptionPaidByWallet: O,
        handleGiftCardCreditsToggle: x,
        handleDropdownPaymentSourceChange: v,
        giftCardCheckboxProps: j,
        walletCoversSubtotal: N,
        walletCoversTotal: R,
        isWalletBalanceLoaded: b,
        isWalletCoverageLoading: M,
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
