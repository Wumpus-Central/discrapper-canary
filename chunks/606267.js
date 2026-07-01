"use strict";
n.d(t, { A: () => I, Y0: () => A, iB: () => E });
var i = n(64700),
    r = n(702841),
    s = n(364995),
    a = n(666646),
    o = n(650170),
    l = n(166403),
    u = n(459357),
    c = n(176095),
    d = n(234320),
    _ = n(652215),
    h = n(375708),
    f = n(776409);
function p(e) {
    let { giftCardsEnabled: t, checkoutPaymentSources: n } = e,
        s = i.useMemo(() => (0, d.N)(n)?.id, [n]),
        l = (0, a.sw)(),
        u = (0, a.IK)(),
        _ = (0, o.t4)((e) => {
            let { fetchRenewalInvoicePreviewRequest: t, renewalInvoicePreview: n, renewalInvoiceError: i } = e;
            return null != t && null == n && null == i;
        }),
        h = m(l),
        f = m(u),
        p = null != h && 0 === h && null != f,
        E = 0 === h && _,
        g = p ? f : h,
        A = p ? (u?.total ?? null) : l?.total,
        I = (0, r.bG)([c.A], () => (t && null != s ? c.A.getBalance(s) : null), [t, s]);
    return t && null != I
        ? {
              walletCoversSubtotal: null != g && I.amount >= g,
              walletCoversTotal: null != A && I.amount >= A,
              walletId: s,
              isWalletBalanceLoaded: null != g && !E,
              isWalletCoverageLoading: E,
          }
        : {
              walletCoversSubtotal: !1,
              walletCoversTotal: !1,
              walletId: s,
              isWalletBalanceLoaded: !1,
              isWalletCoverageLoading: !1,
          };
}
function E(e) {
    let { checkoutPaymentSources: t, paymentSourceId: n, location: i } = e,
        { enabled: r } = (0, u.c)({ location: i }),
        {
            walletCoversTotal: s,
            walletId: a,
            isWalletBalanceLoaded: o,
        } = p({ giftCardsEnabled: r, checkoutPaymentSources: t });
    return o && null != n && n === a && !s;
}
function m(e) {
    return null == e ? null : e.taxInclusive ? e.total : e.total - e.tax;
}
function g(e) {
    let { giftCardWallet: t, dropdownPaymentSources: n, subscriptionPaymentSourceId: i, defaultPaymentSourceId: r } = e;
    if (null != t && (null == i || i === t.id)) return t.id;
    if (null != i) {
        let e = n.find((e) => e.id === i);
        if (null != e && e.enabled) return i;
    }
    if (null != r) {
        let e = n.find((e) => e.id === r);
        if (null != e && e.enabled) return r;
    }
    return n.find((e) => e.enabled)?.id ?? null;
}
function A(e) {
    let {
            checkoutPaymentSources: t,
            paymentSourceId: n,
            setPaymentSourceId: r,
            location: s,
            isReady: a = !0,
            subscriptionPaymentSourceId: l,
        } = e,
        { enabled: c } = (0, u.c)({ location: s }),
        E = (0, o.t4)((e) => e.pendingPaymentSourceId),
        { dropdownPaymentSources: m, giftCardWallet: A } = i.useMemo(() => {
            let e = t.filter((e) => e.type !== _.hes.TDS_WALLET);
            return c
                ? { dropdownPaymentSources: e, giftCardWallet: (0, d.N)(t) }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [t, c]),
        [I, T] = i.useState(null),
        S = null != A && n === A.id,
        y = i.useMemo(
            () =>
                null != I ? I : g({ giftCardWallet: null, dropdownPaymentSources: m, subscriptionPaymentSourceId: l }),
            [m, l, I],
        ),
        C = i.useMemo(() => (S ? y : (n ?? null)), [y, S, n]),
        N = i.useRef(!1);
    i.useEffect(() => {
        if (!a || 0 === t.length || N.current || (null != E && E === n)) return;
        N.current = !0;
        let e = g({
            giftCardWallet: A,
            dropdownPaymentSources: m,
            subscriptionPaymentSourceId: l,
            defaultPaymentSourceId: n,
        });
        e !== n && r(e);
    }, [a, t, m, A, n, E, l, r]),
        i.useEffect(() => {
            a &&
                0 !== t.length &&
                null != n &&
                N.current &&
                E !== n &&
                (t.some((e) =>
                    (function (e) {
                        let { paymentSource: t, paymentSourceId: n, giftCardsEnabled: i } = e;
                        return (t.type !== _.hes.TDS_WALLET || !!i) && null != n && t.id === n && t.enabled;
                    })({ paymentSource: e, paymentSourceId: n, giftCardsEnabled: c }),
                ) ||
                    r(
                        g({
                            giftCardWallet: A,
                            dropdownPaymentSources: m,
                            subscriptionPaymentSourceId: l,
                            defaultPaymentSourceId: n,
                        }),
                    ));
        }, [a, c, t, m, A, n, E, l, r]);
    let v = i.useCallback(
            (e) => {
                r(null != e ? e.id : null);
            },
            [r],
        ),
        R = i.useCallback(
            (e) => {
                if (e && null != A) {
                    n !== A.id && T(n ?? null), r(A.id);
                    return;
                }
                r(y);
            },
            [r, A, n, y],
        ),
        {
            walletCoversSubtotal: O,
            walletCoversTotal: b,
            isWalletBalanceLoaded: D,
            isWalletCoverageLoading: L,
        } = p({ giftCardsEnabled: c, checkoutPaymentSources: t }),
        w = null != l && null != A && l === A.id;
    i.useEffect(() => {
        !w && D && !O && S && r(y);
    }, [w, D, O, S, r, y]);
    let M = i.useMemo(
        () =>
            null == A
                ? null
                : {
                      giftCardWallet: A,
                      checked: S,
                      onChange: R,
                      loading: L,
                      disabled: !L && !O,
                      disabledTooltip: L || O ? void 0 : h.intl.string(f.default.ccWIdu),
                  },
        [A, S, R, O, L],
    );
    return {
        giftCardsEnabled: c,
        dropdownPaymentSources: m,
        dropdownPaymentSourceId: C,
        giftCardWallet: A,
        isGiftCardCreditsChecked: S,
        isSubscriptionPaidByWallet: w,
        handleGiftCardCreditsToggle: R,
        handleDropdownPaymentSourceChange: v,
        giftCardCheckboxProps: M,
        walletCoversSubtotal: O,
        walletCoversTotal: b,
        isWalletBalanceLoaded: D,
        isWalletCoverageLoading: L,
    };
}
function I(e) {
    let { location: t, message: n } = e,
        a = (0, r.bG)([l.A], () => {
            let e = l.A.getPremiumTypeSubscription();
            return null != e ? e.paymentSourceId : null;
        }),
        { checkoutPaymentSources: o } = (0, s.t)(),
        { enabled: c } = (0, u.c)({ location: t }),
        _ = i.useMemo(() => (c ? (0, d.N)(o) : null), [o, c]),
        h = null != a && null != _ && a === _.id,
        { walletCoversTotal: f, isWalletBalanceLoaded: E } = p({ giftCardsEnabled: c, checkoutPaymentSources: o });
    return i.useMemo(() => {
        if (h && E && !f) return { type: "warning", key: "wallet-insufficient-balance", message: n };
    }, [h, E, f, n]);
}
