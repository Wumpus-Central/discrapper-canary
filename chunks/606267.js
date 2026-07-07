n.d(t, { A: () => y, Y0: () => S, iB: () => E });
var l = n(64700),
    i = n(702841),
    r = n(364995),
    a = n(666646),
    s = n(6938),
    o = n(166403),
    u = n(459357),
    c = n(176095),
    d = n(11939),
    p = n(652215),
    m = n(375708),
    C = n(776409);
function h(e) {
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
function E(e) {
    let { checkoutPaymentSources: t, paymentSourceId: n, location: l } = e,
        { enabled: i } = (0, u.c)({ location: l }),
        {
            walletCoversTotal: r,
            walletId: a,
            isWalletBalanceLoaded: s,
        } = h({ giftCardsEnabled: i, checkoutPaymentSources: t });
    return s && null != n && n === a && !r;
}
function A(e) {
    return null == e ? null : e.taxInclusive ? e.total : e.total - e.tax;
}
function f(e) {
    let { giftCardWallet: t, dropdownPaymentSources: n, subscriptionPaymentSourceId: l, defaultPaymentSourceId: i } = e;
    if (null != t && (null == l || l === t.id)) return t.id;
    if (null != l) {
        let e = n.find((e) => e.id === l);
        if (null != e && e.enabled) return l;
    }
    if (null != i) {
        let e = n.find((e) => e.id === i);
        if (null != e && e.enabled) return i;
    }
    return n.find((e) => e.enabled)?.id ?? null;
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
        E = (0, s.t4)((e) => e.pendingPaymentSourceId),
        { dropdownPaymentSources: A, giftCardWallet: S } = l.useMemo(() => {
            let e = t.filter((e) => e.type !== p.hes.TDS_WALLET);
            return c
                ? { dropdownPaymentSources: e, giftCardWallet: (0, d.N)(t) }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [t, c]),
        [y, P] = l.useState(null),
        T = null != S && n === S.id,
        I = l.useMemo(
            () =>
                null != y ? y : f({ giftCardWallet: null, dropdownPaymentSources: A, subscriptionPaymentSourceId: o }),
            [A, o, y],
        ),
        _ = l.useMemo(() => (T ? I : (n ?? null)), [I, T, n]),
        g = l.useRef(!1);
    l.useEffect(() => {
        if (!a || 0 === t.length || g.current || (null != E && E === n)) return;
        g.current = !0;
        let e = f({
            giftCardWallet: S,
            dropdownPaymentSources: A,
            subscriptionPaymentSourceId: o,
            defaultPaymentSourceId: n,
        });
        e !== n && i(e);
    }, [a, t, A, S, n, E, o, i]),
        l.useEffect(() => {
            a &&
                0 !== t.length &&
                null != n &&
                g.current &&
                E !== n &&
                (t.some((e) =>
                    (function (e) {
                        let { paymentSource: t, paymentSourceId: n, giftCardsEnabled: l } = e;
                        return (t.type !== p.hes.TDS_WALLET || !!l) && null != n && t.id === n && t.enabled;
                    })({ paymentSource: e, paymentSourceId: n, giftCardsEnabled: c }),
                ) ||
                    i(
                        f({
                            giftCardWallet: S,
                            dropdownPaymentSources: A,
                            subscriptionPaymentSourceId: o,
                            defaultPaymentSourceId: n,
                        }),
                    ));
        }, [a, c, t, A, S, n, E, o, i]);
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
        } = h({ giftCardsEnabled: c, checkoutPaymentSources: t }),
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
                      disabledTooltip: M || N ? void 0 : m.intl.string(C.default.ccWIdu),
                  },
        [S, T, x, N, M],
    );
    return {
        giftCardsEnabled: c,
        dropdownPaymentSources: A,
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
        { walletCoversTotal: C, isWalletBalanceLoaded: E } = h({ giftCardsEnabled: c, checkoutPaymentSources: s });
    return l.useMemo(() => {
        if (m && E && !C) return { type: "warning", key: "wallet-insufficient-balance", message: n };
    }, [m, E, C, n]);
}
