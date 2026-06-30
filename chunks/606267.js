"use strict";
n.d(t, { A: () => I, Y0: () => A, iB: () => E });
var i = n(64700),
    r = n(702841),
    s = n(364995),
    a = n(666646),
    o = n(46332),
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
            subscriptionPaymentSourceId: o,
        } = e,
        { enabled: l } = (0, u.c)({ location: s }),
        { dropdownPaymentSources: c, giftCardWallet: E } = i.useMemo(() => {
            let e = t.filter((e) => e.type !== _.hes.TDS_WALLET);
            return l
                ? { dropdownPaymentSources: e, giftCardWallet: (0, d.N)(t) }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [t, l]),
        [m, A] = i.useState(null),
        I = null != E && n === E.id,
        T = i.useMemo(
            () =>
                null != m ? m : g({ giftCardWallet: null, dropdownPaymentSources: c, subscriptionPaymentSourceId: o }),
            [c, o, m],
        ),
        S = i.useMemo(() => (I ? T : (n ?? null)), [T, I, n]),
        y = i.useRef(!1);
    i.useEffect(() => {
        if (!a || 0 === t.length || y.current) return;
        y.current = !0;
        let e = g({
            giftCardWallet: E,
            dropdownPaymentSources: c,
            subscriptionPaymentSourceId: o,
            defaultPaymentSourceId: n,
        });
        e !== n && r(e);
    }, [a, t, c, E, n, o, r]),
        i.useEffect(() => {
            a &&
                0 !== t.length &&
                null != n &&
                y.current &&
                (t.some((e) =>
                    (function (e) {
                        let { paymentSource: t, paymentSourceId: n, giftCardsEnabled: i } = e;
                        return (t.type !== _.hes.TDS_WALLET || !!i) && null != n && t.id === n && t.enabled;
                    })({ paymentSource: e, paymentSourceId: n, giftCardsEnabled: l }),
                ) ||
                    r(
                        g({
                            giftCardWallet: E,
                            dropdownPaymentSources: c,
                            subscriptionPaymentSourceId: o,
                            defaultPaymentSourceId: n,
                        }),
                    ));
        }, [a, l, t, c, E, n, o, r]);
    let C = i.useCallback(
            (e) => {
                r(null != e ? e.id : null);
            },
            [r],
        ),
        N = i.useCallback(
            (e) => {
                if (e && null != E) {
                    n !== E.id && A(n ?? null), r(E.id);
                    return;
                }
                r(T);
            },
            [r, E, n, T],
        ),
        {
            walletCoversSubtotal: v,
            walletCoversTotal: R,
            isWalletBalanceLoaded: O,
            isWalletCoverageLoading: b,
        } = p({ giftCardsEnabled: l, checkoutPaymentSources: t }),
        D = null != o && null != E && o === E.id;
    i.useEffect(() => {
        !D && O && !v && I && r(T);
    }, [D, O, v, I, r, T]);
    let L = i.useMemo(
        () =>
            null == E
                ? null
                : {
                      giftCardWallet: E,
                      checked: I,
                      onChange: N,
                      loading: b,
                      disabled: !b && !v,
                      disabledTooltip: b || v ? void 0 : h.intl.string(f.default.ccWIdu),
                  },
        [E, I, N, v, b],
    );
    return {
        giftCardsEnabled: l,
        dropdownPaymentSources: c,
        dropdownPaymentSourceId: S,
        giftCardWallet: E,
        isGiftCardCreditsChecked: I,
        isSubscriptionPaidByWallet: D,
        handleGiftCardCreditsToggle: N,
        handleDropdownPaymentSourceChange: C,
        giftCardCheckboxProps: L,
        walletCoversSubtotal: v,
        walletCoversTotal: R,
        isWalletBalanceLoaded: O,
        isWalletCoverageLoading: b,
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
