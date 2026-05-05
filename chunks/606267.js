n.d(t, { Y0: () => A, iB: () => m });
var l = n(64700),
    i = n(702841),
    a = n(666646),
    r = n(202613),
    s = n(459357),
    o = n(176095),
    u = n(652215),
    c = n(375708),
    d = n(327105);
function p(e) {
    let { giftCardsEnabled: t, checkoutPaymentSources: n } = e,
        r = l.useMemo(() => h(n)?.id, [n]),
        s = (0, a.sw)(),
        u = s?.subtotal ?? s?.total,
        c = (0, i.bG)([o.A], () => (t && null != r ? o.A.getBalance(r) : null), [t, r]);
    return t && null != c
        ? {
              walletCoversSubtotal: null != u && c.amount >= u,
              walletCoversTotal: null != s && c.amount >= s.total,
              walletId: r,
              isWalletBalanceLoaded: null != u,
          }
        : { walletCoversSubtotal: !1, walletCoversTotal: !1, walletId: r, isWalletBalanceLoaded: !1 };
}
function m(e) {
    let { checkoutPaymentSources: t, paymentSourceId: n, location: l } = e,
        { enabled: i } = (0, s.c)({ location: l }),
        {
            walletCoversTotal: a,
            walletId: r,
            isWalletBalanceLoaded: o,
        } = p({ giftCardsEnabled: i, checkoutPaymentSources: t });
    return o && null != n && n === r && !a;
}
function h(e) {
    return e.find((e) => e.source instanceof r.LQ) ?? null;
}
function C(e) {
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
function A(e) {
    let {
            checkoutPaymentSources: t,
            paymentSourceId: n,
            setPaymentSourceId: i,
            location: a,
            isReady: r = !0,
            subscriptionPaymentSourceId: o,
        } = e,
        { enabled: m } = (0, s.c)({ location: a }),
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
        T = l.useMemo(() => (S ? _ : (n ?? null)), [_, S, n]),
        f = l.useRef(!1);
    l.useEffect(() => {
        if (!r || 0 === t.length || f.current) return;
        f.current = !0;
        let e = C({
            giftCardWallet: E,
            dropdownPaymentSources: A,
            subscriptionPaymentSourceId: o,
            defaultPaymentSourceId: n,
        });
        e !== n && i(e);
    }, [r, t, A, E, n, o, i]),
        l.useEffect(() => {
            r &&
                0 !== t.length &&
                null != n &&
                f.current &&
                (t.some((e) =>
                    ((e) => {
                        let { paymentSource: t, paymentSourceId: n, giftCardsEnabled: l } = e;
                        return (t.type !== u.hes.TDS_WALLET || !!l) && null != n && t.id === n && t.enabled;
                    })({ paymentSource: e, paymentSourceId: n, giftCardsEnabled: m }),
                ) ||
                    i(
                        C({
                            giftCardWallet: E,
                            dropdownPaymentSources: A,
                            subscriptionPaymentSourceId: o,
                            defaultPaymentSourceId: n,
                        }),
                    ));
        }, [r, m, t, A, E, n, o, i]);
    let N = l.useCallback(
            (e) => {
                i(null != e ? e.id : null);
            },
            [i],
        ),
        x = l.useCallback(
            (e) => {
                if (e && null != E) {
                    n !== E.id && P(n ?? null), i(E.id);
                    return;
                }
                i(_);
            },
            [i, E, n, _],
        ),
        {
            walletCoversSubtotal: I,
            walletCoversTotal: g,
            isWalletBalanceLoaded: v,
        } = p({ giftCardsEnabled: m, checkoutPaymentSources: t });
    l.useEffect(() => {
        v && !I && S && i(_);
    }, [v, I, S, i, _]);
    let M = l.useMemo(
        () =>
            null == E
                ? null
                : {
                      giftCardWallet: E,
                      checked: S,
                      onChange: x,
                      disabled: !I,
                      disabledTooltip: I ? void 0 : c.intl.string(d.default.ccWIdu),
                  },
        [E, S, x, I],
    );
    return {
        giftCardsEnabled: m,
        dropdownPaymentSources: A,
        dropdownPaymentSourceId: T,
        giftCardWallet: E,
        isGiftCardCreditsChecked: S,
        handleGiftCardCreditsToggle: x,
        handleDropdownPaymentSourceChange: N,
        giftCardCheckboxProps: M,
        walletCoversSubtotal: I,
        walletCoversTotal: g,
    };
}
