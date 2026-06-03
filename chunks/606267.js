n.d(t, { A: () => P, Y0: () => y, iB: () => A });
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
        d = C(s),
        p = C(o),
        m = null != d && 0 === d && null != p,
        h = m ? p : d,
        A = m ? (o?.total ?? null) : s?.total,
        E = (0, r.bG)([u.A], () => (t && null != i ? u.A.getBalance(i) : null), [t, i]);
    return t && null != E
        ? {
              walletCoversSubtotal: null != h && E.amount >= h,
              walletCoversTotal: null != A && E.amount >= A,
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
function C(e) {
    return null == e ? null : e.taxInclusive ? e.total : e.total - e.tax;
}
function E(e) {
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
        { dropdownPaymentSources: A, giftCardWallet: C } = l.useMemo(() => {
            let e = t.filter((e) => e.type !== d.hes.TDS_WALLET);
            return u
                ? { dropdownPaymentSources: e, giftCardWallet: (0, c.N)(t) }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [t, u]),
        [y, P] = l.useState(null),
        S = null != C && n === C.id,
        _ = l.useMemo(
            () =>
                null != y ? y : E({ giftCardWallet: null, dropdownPaymentSources: A, subscriptionPaymentSourceId: s }),
            [A, s, y],
        ),
        f = l.useMemo(() => (S ? _ : (n ?? null)), [_, S, n]),
        I = l.useRef(!1);
    l.useEffect(() => {
        if (!a || 0 === t.length || I.current) return;
        I.current = !0;
        let e = E({
            giftCardWallet: C,
            dropdownPaymentSources: A,
            subscriptionPaymentSourceId: s,
            defaultPaymentSourceId: n,
        });
        e !== n && r(e);
    }, [a, t, A, C, n, s, r]),
        l.useEffect(() => {
            a &&
                0 !== t.length &&
                null != n &&
                I.current &&
                (t.some((e) =>
                    ((e) => {
                        let { paymentSource: t, paymentSourceId: n, giftCardsEnabled: l } = e;
                        return (t.type !== d.hes.TDS_WALLET || !!l) && null != n && t.id === n && t.enabled;
                    })({ paymentSource: e, paymentSourceId: n, giftCardsEnabled: u }),
                ) ||
                    r(
                        E({
                            giftCardWallet: C,
                            dropdownPaymentSources: A,
                            subscriptionPaymentSourceId: s,
                            defaultPaymentSourceId: n,
                        }),
                    ));
        }, [a, u, t, A, C, n, s, r]);
    let T = l.useCallback(
            (e) => {
                r(null != e ? e.id : null);
            },
            [r],
        ),
        N = l.useCallback(
            (e) => {
                if (e && null != C) {
                    n !== C.id && P(n ?? null), r(C.id);
                    return;
                }
                r(_);
            },
            [r, C, n, _],
        ),
        {
            walletCoversSubtotal: v,
            walletCoversTotal: g,
            isWalletBalanceLoaded: x,
        } = h({ giftCardsEnabled: u, checkoutPaymentSources: t }),
        R = null != s && null != C && s === C.id;
    l.useEffect(() => {
        !R && x && !v && S && r(_);
    }, [R, x, v, S, r, _]);
    let M = l.useMemo(
        () =>
            null == C
                ? null
                : {
                      giftCardWallet: C,
                      checked: S,
                      onChange: N,
                      disabled: !v,
                      disabledTooltip: v ? void 0 : p.intl.string(m.default.ccWIdu),
                  },
        [C, S, N, v],
    );
    return {
        giftCardsEnabled: u,
        dropdownPaymentSources: A,
        dropdownPaymentSourceId: f,
        giftCardWallet: C,
        isGiftCardCreditsChecked: S,
        isSubscriptionPaidByWallet: R,
        handleGiftCardCreditsToggle: N,
        handleDropdownPaymentSourceChange: T,
        giftCardCheckboxProps: M,
        walletCoversSubtotal: v,
        walletCoversTotal: g,
    };
}
function P(e) {
    let { location: t, message: n } = e,
        a = (0, r.bG)([s.A], () => {
            let e = s.A.getPremiumTypeSubscription();
            return null != e ? e.paymentSourceId : null;
        }),
        { checkoutPaymentSources: u } = (0, i.t)(),
        { enabled: d } = (0, o.c)({ location: t }),
        p = l.useMemo(() => (d ? (0, c.N)(u) : null), [u, d]),
        m = null != a && null != p && a === p.id,
        { walletCoversTotal: A, isWalletBalanceLoaded: C } = h({ giftCardsEnabled: d, checkoutPaymentSources: u });
    return l.useMemo(() => {
        if (m && C && !A) return { type: "warning", key: "wallet-insufficient-balance", message: n };
    }, [m, C, A, n]);
}
