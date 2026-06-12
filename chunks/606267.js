n.d(t, { A: () => _, Y0: () => y, iB: () => A });
var l = n(64700),
    r = n(702841),
    i = n(364995),
    a = n(666646),
    s = n(166403),
    o = n(459357),
    u = n(176095),
    c = n(11939),
    d = n(652215),
    p = n(375708),
    m = n(776409);
function h(e) {
    let { giftCardsEnabled: t, checkoutPaymentSources: n } = e,
        i = l.useMemo(() => (0, c.N)(n)?.id, [n]),
        s = (0, a.sw)(),
        o = (0, a.IK)(),
        d = E(s),
        p = E(o),
        m = null != d && 0 === d && null != p,
        h = m ? p : d,
        A = m ? (o?.total ?? null) : s?.total,
        C = (0, r.bG)([u.A], () => (t && null != i ? u.A.getBalance(i) : null), [t, i]);
    return t && null != C
        ? {
              walletCoversSubtotal: null != h && C.amount >= h,
              walletCoversTotal: null != A && C.amount >= A,
              walletId: i,
              isWalletBalanceLoaded: null != h,
          }
        : { walletCoversSubtotal: !1, walletCoversTotal: !1, walletId: i, isWalletBalanceLoaded: !1 };
}
function A(e) {
    let { checkoutPaymentSources: t, paymentSourceId: n, location: l } = e,
        { enabled: r } = (0, o.c)({ location: l }),
        {
            walletCoversTotal: i,
            walletId: a,
            isWalletBalanceLoaded: s,
        } = h({ giftCardsEnabled: r, checkoutPaymentSources: t });
    return s && null != n && n === a && !i;
}
function E(e) {
    return null == e ? null : e.taxInclusive ? e.total : e.total - e.tax;
}
function C(e) {
    let { giftCardWallet: t, dropdownPaymentSources: n, subscriptionPaymentSourceId: l, defaultPaymentSourceId: r } = e;
    if (null != t && (null == l || l === t.id)) return t.id;
    if (null != l) {
        let e = n.find((e) => e.id === l);
        if (null != e && e.enabled) return l;
    }
    if (null != r) {
        let e = n.find((e) => e.id === r);
        if (null != e && e.enabled) return r;
    }
    return n.find((e) => e.enabled)?.id ?? null;
}
function y(e) {
    let {
            checkoutPaymentSources: t,
            paymentSourceId: n,
            setPaymentSourceId: r,
            location: i,
            isReady: a = !0,
            subscriptionPaymentSourceId: s,
        } = e,
        { enabled: u } = (0, o.c)({ location: i }),
        { dropdownPaymentSources: A, giftCardWallet: E } = l.useMemo(() => {
            let e = t.filter((e) => e.type !== d.hes.TDS_WALLET);
            return u
                ? { dropdownPaymentSources: e, giftCardWallet: (0, c.N)(t) }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [t, u]),
        [y, _] = l.useState(null),
        S = null != E && n === E.id,
        P = l.useMemo(
            () =>
                null != y ? y : C({ giftCardWallet: null, dropdownPaymentSources: A, subscriptionPaymentSourceId: s }),
            [A, s, y],
        ),
        I = l.useMemo(() => (S ? P : (n ?? null)), [P, S, n]),
        f = l.useRef(!1);
    l.useEffect(() => {
        if (!a || 0 === t.length || f.current) return;
        f.current = !0;
        let e = C({
            giftCardWallet: E,
            dropdownPaymentSources: A,
            subscriptionPaymentSourceId: s,
            defaultPaymentSourceId: n,
        });
        e !== n && r(e);
    }, [a, t, A, E, n, s, r]),
        l.useEffect(() => {
            a &&
                0 !== t.length &&
                null != n &&
                f.current &&
                (t.some((e) =>
                    ((e) => {
                        let { paymentSource: t, paymentSourceId: n, giftCardsEnabled: l } = e;
                        return (t.type !== d.hes.TDS_WALLET || !!l) && null != n && t.id === n && t.enabled;
                    })({ paymentSource: e, paymentSourceId: n, giftCardsEnabled: u }),
                ) ||
                    r(
                        C({
                            giftCardWallet: E,
                            dropdownPaymentSources: A,
                            subscriptionPaymentSourceId: s,
                            defaultPaymentSourceId: n,
                        }),
                    ));
        }, [a, u, t, A, E, n, s, r]);
    let T = l.useCallback(
            (e) => {
                r(null != e ? e.id : null);
            },
            [r],
        ),
        N = l.useCallback(
            (e) => {
                if (e && null != E) {
                    n !== E.id && _(n ?? null), r(E.id);
                    return;
                }
                r(P);
            },
            [r, E, n, P],
        ),
        {
            walletCoversSubtotal: g,
            walletCoversTotal: v,
            isWalletBalanceLoaded: x,
        } = h({ giftCardsEnabled: u, checkoutPaymentSources: t }),
        R = null != s && null != E && s === E.id;
    l.useEffect(() => {
        !R && x && !g && S && r(P);
    }, [R, x, g, S, r, P]);
    let M = l.useMemo(
        () =>
            null == E
                ? null
                : {
                      giftCardWallet: E,
                      checked: S,
                      onChange: N,
                      disabled: !g,
                      disabledTooltip: g ? void 0 : p.intl.string(m.default.ccWIdu),
                  },
        [E, S, N, g],
    );
    return {
        giftCardsEnabled: u,
        dropdownPaymentSources: A,
        dropdownPaymentSourceId: I,
        giftCardWallet: E,
        isGiftCardCreditsChecked: S,
        isSubscriptionPaidByWallet: R,
        handleGiftCardCreditsToggle: N,
        handleDropdownPaymentSourceChange: T,
        giftCardCheckboxProps: M,
        walletCoversSubtotal: g,
        walletCoversTotal: v,
    };
}
function _(e) {
    let { location: t, message: n } = e,
        a = (0, r.bG)([s.A], () => {
            let e = s.A.getPremiumTypeSubscription();
            return null != e ? e.paymentSourceId : null;
        }),
        { checkoutPaymentSources: u } = (0, i.t)(),
        { enabled: d } = (0, o.c)({ location: t }),
        p = l.useMemo(() => (d ? (0, c.N)(u) : null), [u, d]),
        m = null != a && null != p && a === p.id,
        { walletCoversTotal: A, isWalletBalanceLoaded: E } = h({ giftCardsEnabled: d, checkoutPaymentSources: u });
    return l.useMemo(() => {
        if (m && E && !A) return { type: "warning", key: "wallet-insufficient-balance", message: n };
    }, [m, E, A, n]);
}
