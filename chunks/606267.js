"use strict";
n.d(t, { A: () => A, Y0: () => g, iB: () => p });
var i = n(64700),
    r = n(702841),
    s = n(364995),
    a = n(666646),
    o = n(166403),
    l = n(459357),
    u = n(176095),
    c = n(11939),
    d = n(652215),
    _ = n(375708),
    h = n(776409);
function f(e) {
    let { giftCardsEnabled: t, checkoutPaymentSources: n } = e,
        s = i.useMemo(() => (0, c.N)(n)?.id, [n]),
        o = (0, a.sw)(),
        l = (0, a.IK)(),
        d = E(o),
        _ = E(l),
        h = null != d && 0 === d && null != _,
        f = h ? _ : d,
        p = h ? (l?.total ?? null) : o?.total,
        m = (0, r.bG)([u.A], () => (t && null != s ? u.A.getBalance(s) : null), [t, s]);
    return t && null != m
        ? {
              walletCoversSubtotal: null != f && m.amount >= f,
              walletCoversTotal: null != p && m.amount >= p,
              walletId: s,
              isWalletBalanceLoaded: null != f,
          }
        : { walletCoversSubtotal: !1, walletCoversTotal: !1, walletId: s, isWalletBalanceLoaded: !1 };
}
function p(e) {
    let { checkoutPaymentSources: t, paymentSourceId: n, location: i } = e,
        { enabled: r } = (0, l.c)({ location: i }),
        {
            walletCoversTotal: s,
            walletId: a,
            isWalletBalanceLoaded: o,
        } = f({ giftCardsEnabled: r, checkoutPaymentSources: t });
    return o && null != n && n === a && !s;
}
function E(e) {
    return null == e ? null : e.taxInclusive ? e.total : e.total - e.tax;
}
function m(e) {
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
function g(e) {
    let {
            checkoutPaymentSources: t,
            paymentSourceId: n,
            setPaymentSourceId: r,
            location: s,
            isReady: a = !0,
            subscriptionPaymentSourceId: o,
        } = e,
        { enabled: u } = (0, l.c)({ location: s }),
        { dropdownPaymentSources: p, giftCardWallet: E } = i.useMemo(() => {
            let e = t.filter((e) => e.type !== d.hes.TDS_WALLET);
            return u
                ? { dropdownPaymentSources: e, giftCardWallet: (0, c.N)(t) }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [t, u]),
        [g, A] = i.useState(null),
        I = null != E && n === E.id,
        T = i.useMemo(
            () =>
                null != g ? g : m({ giftCardWallet: null, dropdownPaymentSources: p, subscriptionPaymentSourceId: o }),
            [p, o, g],
        ),
        S = i.useMemo(() => (I ? T : (n ?? null)), [T, I, n]),
        y = i.useRef(!1);
    i.useEffect(() => {
        if (!a || 0 === t.length || y.current) return;
        y.current = !0;
        let e = m({
            giftCardWallet: E,
            dropdownPaymentSources: p,
            subscriptionPaymentSourceId: o,
            defaultPaymentSourceId: n,
        });
        e !== n && r(e);
    }, [a, t, p, E, n, o, r]),
        i.useEffect(() => {
            a &&
                0 !== t.length &&
                null != n &&
                y.current &&
                (t.some((e) =>
                    ((e) => {
                        let { paymentSource: t, paymentSourceId: n, giftCardsEnabled: i } = e;
                        return (t.type !== d.hes.TDS_WALLET || !!i) && null != n && t.id === n && t.enabled;
                    })({ paymentSource: e, paymentSourceId: n, giftCardsEnabled: u }),
                ) ||
                    r(
                        m({
                            giftCardWallet: E,
                            dropdownPaymentSources: p,
                            subscriptionPaymentSourceId: o,
                            defaultPaymentSourceId: n,
                        }),
                    ));
        }, [a, u, t, p, E, n, o, r]);
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
        } = f({ giftCardsEnabled: u, checkoutPaymentSources: t }),
        b = null != o && null != E && o === E.id;
    i.useEffect(() => {
        !b && O && !v && I && r(T);
    }, [b, O, v, I, r, T]);
    let D = i.useMemo(
        () =>
            null == E
                ? null
                : {
                      giftCardWallet: E,
                      checked: I,
                      onChange: N,
                      disabled: !v,
                      disabledTooltip: v ? void 0 : _.intl.string(h.default.ccWIdu),
                  },
        [E, I, N, v],
    );
    return {
        giftCardsEnabled: u,
        dropdownPaymentSources: p,
        dropdownPaymentSourceId: S,
        giftCardWallet: E,
        isGiftCardCreditsChecked: I,
        isSubscriptionPaidByWallet: b,
        handleGiftCardCreditsToggle: N,
        handleDropdownPaymentSourceChange: C,
        giftCardCheckboxProps: D,
        walletCoversSubtotal: v,
        walletCoversTotal: R,
    };
}
function A(e) {
    let { location: t, message: n } = e,
        a = (0, r.bG)([o.A], () => {
            let e = o.A.getPremiumTypeSubscription();
            return null != e ? e.paymentSourceId : null;
        }),
        { checkoutPaymentSources: u } = (0, s.t)(),
        { enabled: d } = (0, l.c)({ location: t }),
        _ = i.useMemo(() => (d ? (0, c.N)(u) : null), [u, d]),
        h = null != a && null != _ && a === _.id,
        { walletCoversTotal: p, isWalletBalanceLoaded: E } = f({ giftCardsEnabled: d, checkoutPaymentSources: u });
    return i.useMemo(() => {
        if (h && E && !p) return { type: "warning", key: "wallet-insufficient-balance", message: n };
    }, [h, E, p, n]);
}
