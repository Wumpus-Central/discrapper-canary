n.d(t, { Y0: () => A, iB: () => m });
var l = n(64700),
    a = n(702841),
    i = n(666646),
    r = n(202613),
    s = n(459357),
    o = n(176095),
    u = n(652215),
    c = n(375708),
    d = n(776409);
function p(e) {
    let { giftCardsEnabled: t, checkoutPaymentSources: n } = e,
        r = l.useMemo(() => h(n)?.id, [n]),
        s = (0, i.sw)(),
        u = (0, i.IK)(),
        c = s?.subtotal ?? s?.total,
        d = null != c && 0 === c,
        p = u?.subtotal ?? u?.total,
        m = d ? (p ?? null) : c,
        C = d ? (u?.total ?? null) : s?.total,
        A = (0, a.bG)([o.A], () => (t && null != r ? o.A.getBalance(r) : null), [t, r]);
    return t && null != A
        ? {
              walletCoversSubtotal: null != m && A.amount >= m,
              walletCoversTotal: null != C && A.amount >= C,
              walletId: r,
              isWalletBalanceLoaded: null != m,
          }
        : { walletCoversSubtotal: !1, walletCoversTotal: !1, walletId: r, isWalletBalanceLoaded: !1 };
}
function m(e) {
    let { checkoutPaymentSources: t, paymentSourceId: n, location: l } = e,
        { enabled: a } = (0, s.c)({ location: l }),
        {
            walletCoversTotal: i,
            walletId: r,
            isWalletBalanceLoaded: o,
        } = p({ giftCardsEnabled: a, checkoutPaymentSources: t });
    return o && null != n && n === r && !i;
}
function h(e) {
    return e.find((e) => e.source instanceof r.LQ) ?? null;
}
function C(e) {
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
function A(e) {
    let {
            checkoutPaymentSources: t,
            paymentSourceId: n,
            setPaymentSourceId: a,
            location: i,
            isReady: r = !0,
            subscriptionPaymentSourceId: o,
        } = e,
        { enabled: m } = (0, s.c)({ location: i }),
        { dropdownPaymentSources: A, giftCardWallet: E } = l.useMemo(() => {
            let e = t.filter((e) => e.type !== u.hes.TDS_WALLET);
            return m
                ? { dropdownPaymentSources: e, giftCardWallet: h(t) }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [t, m]),
        [y, P] = l.useState(null),
        S = null != E && n === E.id,
        _ = l.useMemo(
            () =>
                null != y ? y : C({ giftCardWallet: null, dropdownPaymentSources: A, subscriptionPaymentSourceId: o }),
            [A, o, y],
        ),
        f = l.useMemo(() => (S ? _ : (n ?? null)), [_, S, n]),
        T = l.useRef(!1);
    l.useEffect(() => {
        if (!r || 0 === t.length || T.current) return;
        T.current = !0;
        let e = C({
            giftCardWallet: E,
            dropdownPaymentSources: A,
            subscriptionPaymentSourceId: o,
            defaultPaymentSourceId: n,
        });
        e !== n && a(e);
    }, [r, t, A, E, n, o, a]),
        l.useEffect(() => {
            r &&
                0 !== t.length &&
                null != n &&
                T.current &&
                (t.some((e) =>
                    ((e) => {
                        let { paymentSource: t, paymentSourceId: n, giftCardsEnabled: l } = e;
                        return (t.type !== u.hes.TDS_WALLET || !!l) && null != n && t.id === n && t.enabled;
                    })({ paymentSource: e, paymentSourceId: n, giftCardsEnabled: m }),
                ) ||
                    a(
                        C({
                            giftCardWallet: E,
                            dropdownPaymentSources: A,
                            subscriptionPaymentSourceId: o,
                            defaultPaymentSourceId: n,
                        }),
                    ));
        }, [r, m, t, A, E, n, o, a]);
    let x = l.useCallback(
            (e) => {
                a(null != e ? e.id : null);
            },
            [a],
        ),
        N = l.useCallback(
            (e) => {
                if (e && null != E) {
                    n !== E.id && P(n ?? null), a(E.id);
                    return;
                }
                a(_);
            },
            [a, E, n, _],
        ),
        {
            walletCoversSubtotal: I,
            walletCoversTotal: g,
            isWalletBalanceLoaded: v,
        } = p({ giftCardsEnabled: m, checkoutPaymentSources: t });
    l.useEffect(() => {
        v && !I && S && a(_);
    }, [v, I, S, a, _]);
    let M = l.useMemo(
        () =>
            null == E
                ? null
                : {
                      giftCardWallet: E,
                      checked: S,
                      onChange: N,
                      disabled: !I,
                      disabledTooltip: I ? void 0 : c.intl.string(d.default.ccWIdu),
                  },
        [E, S, N, I],
    );
    return {
        giftCardsEnabled: m,
        dropdownPaymentSources: A,
        dropdownPaymentSourceId: f,
        giftCardWallet: E,
        isGiftCardCreditsChecked: S,
        handleGiftCardCreditsToggle: N,
        handleDropdownPaymentSourceChange: x,
        giftCardCheckboxProps: M,
        walletCoversSubtotal: I,
        walletCoversTotal: g,
    };
}
