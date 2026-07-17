n.d(t, { A: () => y, Y0: () => S, iB: () => f });
var l = n(64700),
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
    h = n(375708),
    C = n(776409);
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
        h = A(u),
        C = null != m && 0 === m && null != h,
        E = 0 === m && p,
        f = C ? h : m,
        S = C ? (u?.total ?? null) : o?.total,
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
        { dropdownPaymentSources: A, giftCardWallet: S } = l.useMemo(() => {
            let e = t.filter((e) => e.type !== m.hes.TDS_WALLET);
            return c
                ? { dropdownPaymentSources: e, giftCardWallet: (0, d.N)(t) }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [t, c]),
        [y, P] = l.useState(null),
        I = null != S && n === S.id,
        _ = l.useMemo(
            () =>
                null != y
                    ? y
                    : (0, p.ut)({ giftCardWallet: null, dropdownPaymentSources: A, subscriptionPaymentSourceId: o }),
            [A, o, y],
        ),
        T = l.useMemo(() => (I ? _ : (n ?? null)), [_, I, n]),
        g = l.useMemo(
            () => ({
                checkoutPaymentSources: t,
                dropdownPaymentSources: A,
                subscriptionPaymentSourceId: o,
                giftCardWallet: S,
                isReady: a,
                pendingPaymentSourceId: f,
                paymentSourceId: n,
                giftCardsEnabled: c,
            }),
            [t, A, o, S, a, f, n, c],
        );
    (0, p.ws)(i, g);
    let x = l.useCallback(
            (e) => {
                i(null != e ? e.id : null);
            },
            [i],
        ),
        v = l.useCallback(
            (e) => {
                if (e && null != S) {
                    n !== S.id && P(n ?? null), i(S.id);
                    return;
                }
                i(_);
            },
            [i, S, n, _],
        ),
        {
            walletCoversSubtotal: N,
            walletCoversTotal: M,
            isWalletBalanceLoaded: R,
            isWalletCoverageLoading: b,
        } = E({ giftCardsEnabled: c, checkoutPaymentSources: t }),
        j = null != o && null != S && o === S.id;
    l.useEffect(() => {
        !j && R && !N && I && i(_);
    }, [j, R, N, I, i, _]);
    let O = l.useMemo(
        () =>
            null == S
                ? null
                : {
                      giftCardWallet: S,
                      checked: I,
                      onChange: v,
                      loading: b,
                      disabled: !b && !N,
                      disabledTooltip: b || N ? void 0 : h.intl.string(C.default.ccWIdu),
                  },
        [S, I, v, N, b],
    );
    return {
        giftCardsEnabled: c,
        dropdownPaymentSources: A,
        dropdownPaymentSourceId: T,
        giftCardWallet: S,
        isGiftCardCreditsChecked: I,
        isSubscriptionPaidByWallet: j,
        handleGiftCardCreditsToggle: v,
        handleDropdownPaymentSourceChange: x,
        giftCardCheckboxProps: O,
        walletCoversSubtotal: N,
        walletCoversTotal: M,
        isWalletBalanceLoaded: R,
        isWalletCoverageLoading: b,
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
        { walletCoversTotal: h, isWalletBalanceLoaded: C } = E({ giftCardsEnabled: c, checkoutPaymentSources: s });
    return l.useMemo(() => {
        if (m && C && !h) return { type: "warning", key: "wallet-insufficient-balance", message: n };
    }, [m, C, h, n]);
}
