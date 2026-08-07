n.d(t, { A: () => A, Y0: () => S, iB: () => f });
var l = n(582128),
    i = n(702841),
    r = n(666646),
    a = n(87725),
    s = n(166403),
    o = n(459357),
    u = n(176095),
    c = n(11939),
    d = n(237299),
    p = n(652215),
    m = n(375708),
    C = n(776409);
function h(e) {
    let { giftCardsEnabled: t, checkoutPaymentSources: n } = e,
        s = l.useMemo(() => (0, c.N)(n)?.id, [n]),
        o = (0, r.sw)(),
        d = (0, r.IK)(),
        p = (0, a.t4)((e) => {
            let { fetchRenewalInvoicePreviewRequest: t, renewalInvoicePreview: n, renewalInvoiceError: l } = e;
            return null != t && null == n && null == l;
        }),
        m = E(o),
        C = E(d),
        h = null != m && 0 === m && null != C,
        f = 0 === m && p,
        S = h ? C : m,
        A = h ? (d?.total ?? null) : o?.total,
        y = (0, i.bG)([u.A], () => (t && null != s ? u.A.getBalance(s) : null), [t, s]);
    return t && null != y
        ? {
              walletCoversSubtotal: null != S && y.amount >= S,
              walletCoversTotal: null != A && y.amount >= A,
              walletId: s,
              isWalletBalanceLoaded: null != S && !f,
              isWalletCoverageLoading: f,
          }
        : {
              walletCoversSubtotal: !1,
              walletCoversTotal: !1,
              walletId: s,
              isWalletBalanceLoaded: !1,
              isWalletCoverageLoading: !1,
          };
}
function f(e) {
    let { checkoutPaymentSources: t, paymentSourceId: n, location: l } = e,
        { enabled: i } = (0, o.c)({ location: l }),
        {
            walletCoversTotal: r,
            walletId: a,
            isWalletBalanceLoaded: s,
        } = h({ giftCardsEnabled: i, checkoutPaymentSources: t });
    return s && null != n && n === a && !r;
}
function E(e) {
    return null == e ? null : e.taxInclusive ? e.total : e.total - e.tax;
}
function S(e) {
    let {
            checkoutPaymentSources: t,
            paymentSourceId: n,
            setPaymentSourceId: i,
            location: r,
            isReady: s = !0,
            subscriptionPaymentSourceId: u,
        } = e,
        { enabled: f } = (0, o.c)({ location: r }),
        {
            pendingPaymentSourceId: E,
            hasInitialPaymentSourceSeed: S,
            hasAddedPaymentSourceThisSession: A,
        } = (0, a.t4)((e) => ({
            pendingPaymentSourceId: e.pendingPaymentSourceId,
            hasInitialPaymentSourceSeed: null != e.initialPaymentSourceId,
            hasAddedPaymentSourceThisSession: e.hasAddedPaymentSourceThisSession,
        })),
        { dropdownPaymentSources: y, giftCardWallet: P } = l.useMemo(() => {
            let e = t.filter((e) => e.type !== p.hes.TDS_WALLET);
            return f
                ? { dropdownPaymentSources: e, giftCardWallet: (0, c.N)(t) }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [t, f]),
        [I, g] = l.useState(null),
        v = null != P && n === P.id,
        T = l.useMemo(
            () =>
                null != I
                    ? I
                    : (0, d.ut)({ giftCardWallet: null, dropdownPaymentSources: y, subscriptionPaymentSourceId: u }),
            [y, u, I],
        ),
        _ = l.useMemo(() => (v ? T : (n ?? null)), [T, v, n]),
        x = l.useMemo(
            () => ({
                checkoutPaymentSources: t,
                dropdownPaymentSources: y,
                subscriptionPaymentSourceId: u,
                giftCardWallet: P,
                isReady: s,
                pendingPaymentSourceId: E,
                paymentSourceId: n,
                giftCardsEnabled: f,
                hasInitialPaymentSourceSeed: S,
                hasAddedPaymentSourceThisSession: A,
            }),
            [t, y, u, P, s, E, n, f, S, A],
        );
    (0, d.ws)(i, x);
    let N = l.useCallback(
            (e) => {
                i(null != e ? e.id : null);
            },
            [i],
        ),
        b = l.useCallback(
            (e) => {
                if (e && null != P) {
                    n !== P.id && g(n ?? null), i(P.id);
                    return;
                }
                i(T);
            },
            [i, P, n, T],
        ),
        {
            walletCoversSubtotal: R,
            walletCoversTotal: j,
            isWalletBalanceLoaded: M,
            isWalletCoverageLoading: O,
        } = h({ giftCardsEnabled: f, checkoutPaymentSources: t }),
        L = null != u && null != P && u === P.id;
    l.useEffect(() => {
        !L && M && !R && v && i(T);
    }, [L, M, R, v, i, T]);
    let k = l.useMemo(
        () =>
            null == P
                ? null
                : {
                      giftCardWallet: P,
                      checked: v,
                      onChange: b,
                      loading: O,
                      disabled: !O && !R,
                      disabledTooltip: O || R ? void 0 : m.intl.string(C.default.ccWIdu),
                  },
        [P, v, b, R, O],
    );
    return {
        giftCardsEnabled: f,
        dropdownPaymentSources: y,
        dropdownPaymentSourceId: _,
        giftCardWallet: P,
        isGiftCardCreditsChecked: v,
        isSubscriptionPaidByWallet: L,
        handleGiftCardCreditsToggle: b,
        handleDropdownPaymentSourceChange: N,
        giftCardCheckboxProps: k,
        walletCoversSubtotal: R,
        walletCoversTotal: j,
        isWalletBalanceLoaded: M,
        isWalletCoverageLoading: O,
    };
}
function A(e) {
    let { location: t, message: n } = e,
        r = (0, i.bG)([s.A], () => {
            let e = s.A.getPremiumTypeSubscription();
            return null != e ? e.paymentSourceId : null;
        }),
        u = (0, a.t4)((e) => e.get("checkoutPaymentSources")),
        { enabled: d } = (0, o.c)({ location: t }),
        p = l.useMemo(() => (d ? (0, c.N)(u) : null), [u, d]),
        m = null != r && null != p && r === p.id,
        { walletCoversTotal: C, isWalletBalanceLoaded: f } = h({ giftCardsEnabled: d, checkoutPaymentSources: u });
    return l.useMemo(() => {
        if (m && f && !C) return { type: "warning", key: "wallet-insufficient-balance", message: n };
    }, [m, f, C, n]);
}
