n.d(t, { A: () => S, Y0: () => P, iB: () => C });
var l = n(64700),
    a = n(702841),
    i = n(364995),
    r = n(666646),
    s = n(202613),
    o = n(166403),
    u = n(459357),
    c = n(176095),
    d = n(652215),
    p = n(375708),
    m = n(776409);
function h(e) {
    let { giftCardsEnabled: t, checkoutPaymentSources: n } = e,
        i = l.useMemo(() => A(n)?.id, [n]),
        s = (0, r.sw)(),
        o = (0, r.IK)(),
        u = y(s),
        d = y(o),
        p = null != u && 0 === u && null != d,
        m = p ? d : u,
        h = p ? (o?.total ?? null) : s?.total,
        C = (0, a.bG)([c.A], () => (t && null != i ? c.A.getBalance(i) : null), [t, i]);
    return t && null != C
        ? {
              walletCoversSubtotal: null != m && C.amount >= m,
              walletCoversTotal: null != h && C.amount >= h,
              walletId: i,
              isWalletBalanceLoaded: null != m,
          }
        : { walletCoversSubtotal: !1, walletCoversTotal: !1, walletId: i, isWalletBalanceLoaded: !1 };
}
function C(e) {
    let { checkoutPaymentSources: t, paymentSourceId: n, location: l } = e,
        { enabled: a } = (0, u.c)({ location: l }),
        {
            walletCoversTotal: i,
            walletId: r,
            isWalletBalanceLoaded: s,
        } = h({ giftCardsEnabled: a, checkoutPaymentSources: t });
    return s && null != n && n === r && !i;
}
function A(e) {
    return e.find((e) => e.source instanceof s.LQ) ?? null;
}
function y(e) {
    return null == e ? null : e.taxInclusive ? e.total : e.total - e.tax;
}
function E(e) {
    let { giftCardWallet: t, dropdownPaymentSources: n, subscriptionPaymentSourceId: l, defaultPaymentSourceId: a } = e;
    if (null != t && (null == l || l === t.id)) return t.id;
    if (null != l) {
        let e = n.find((e) => e.id === l);
        if (null != e && e.enabled) return l;
    }
    if (null != a) {
        let e = n.find((e) => e.id === a);
        if (null != e && e.enabled) return a;
    }
    return n.find((e) => e.enabled)?.id ?? null;
}
function P(e) {
    let {
            checkoutPaymentSources: t,
            paymentSourceId: n,
            setPaymentSourceId: a,
            location: i,
            isReady: r = !0,
            subscriptionPaymentSourceId: s,
        } = e,
        { enabled: o } = (0, u.c)({ location: i }),
        { dropdownPaymentSources: c, giftCardWallet: C } = l.useMemo(() => {
            let e = t.filter((e) => e.type !== d.hes.TDS_WALLET);
            return o
                ? { dropdownPaymentSources: e, giftCardWallet: A(t) }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [t, o]),
        [y, P] = l.useState(null),
        S = null != C && n === C.id,
        _ = l.useMemo(
            () =>
                null != y ? y : E({ giftCardWallet: null, dropdownPaymentSources: c, subscriptionPaymentSourceId: s }),
            [c, s, y],
        ),
        T = l.useMemo(() => (S ? _ : (n ?? null)), [_, S, n]),
        f = l.useRef(!1);
    l.useEffect(() => {
        if (!r || 0 === t.length || f.current) return;
        f.current = !0;
        let e = E({
            giftCardWallet: C,
            dropdownPaymentSources: c,
            subscriptionPaymentSourceId: s,
            defaultPaymentSourceId: n,
        });
        e !== n && a(e);
    }, [r, t, c, C, n, s, a]),
        l.useEffect(() => {
            r &&
                0 !== t.length &&
                null != n &&
                f.current &&
                (t.some((e) =>
                    ((e) => {
                        let { paymentSource: t, paymentSourceId: n, giftCardsEnabled: l } = e;
                        return (t.type !== d.hes.TDS_WALLET || !!l) && null != n && t.id === n && t.enabled;
                    })({ paymentSource: e, paymentSourceId: n, giftCardsEnabled: o }),
                ) ||
                    a(
                        E({
                            giftCardWallet: C,
                            dropdownPaymentSources: c,
                            subscriptionPaymentSourceId: s,
                            defaultPaymentSourceId: n,
                        }),
                    ));
        }, [r, o, t, c, C, n, s, a]);
    let I = l.useCallback(
            (e) => {
                a(null != e ? e.id : null);
            },
            [a],
        ),
        N = l.useCallback(
            (e) => {
                if (e && null != C) {
                    n !== C.id && P(n ?? null), a(C.id);
                    return;
                }
                a(_);
            },
            [a, C, n, _],
        ),
        {
            walletCoversSubtotal: x,
            walletCoversTotal: g,
            isWalletBalanceLoaded: v,
        } = h({ giftCardsEnabled: o, checkoutPaymentSources: t }),
        M = null != s && null != C && s === C.id;
    l.useEffect(() => {
        !M && v && !x && S && a(_);
    }, [M, v, x, S, a, _]);
    let b = l.useMemo(
        () =>
            null == C
                ? null
                : {
                      giftCardWallet: C,
                      checked: S,
                      onChange: N,
                      disabled: !x,
                      disabledTooltip: x ? void 0 : p.intl.string(m.default.ccWIdu),
                  },
        [C, S, N, x],
    );
    return {
        giftCardsEnabled: o,
        dropdownPaymentSources: c,
        dropdownPaymentSourceId: T,
        giftCardWallet: C,
        isGiftCardCreditsChecked: S,
        isSubscriptionPaidByWallet: M,
        handleGiftCardCreditsToggle: N,
        handleDropdownPaymentSourceChange: I,
        giftCardCheckboxProps: b,
        walletCoversSubtotal: x,
        walletCoversTotal: g,
    };
}
function S(e) {
    let { location: t, message: n } = e,
        r = (0, a.bG)([o.A], () => {
            let e = o.A.getPremiumTypeSubscription();
            return null != e ? e.paymentSourceId : null;
        }),
        { checkoutPaymentSources: s } = (0, i.t)(),
        { enabled: c } = (0, u.c)({ location: t }),
        d = l.useMemo(() => (c ? A(s) : null), [s, c]),
        p = null != r && null != d && r === d.id,
        { walletCoversTotal: m, isWalletBalanceLoaded: C } = h({ giftCardsEnabled: c, checkoutPaymentSources: s });
    return l.useMemo(() => {
        if (p && C && !m) return { type: "warning", key: "wallet-insufficient-balance", message: n };
    }, [p, C, m, n]);
}
