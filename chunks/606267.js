n.d(t, { Y0: () => h, iB: () => d });
var l = n(64700),
    a = n(702841),
    i = n(94420),
    r = n(202613),
    s = n(459357),
    o = n(176095),
    u = n(652215);
function c(e) {
    let { giftCardsEnabled: t, checkoutPaymentSources: n } = e,
        r = l.useMemo(() => p(n)?.id, [n]),
        s = (0, i.sw)(),
        u = s?.subtotal ?? s?.total,
        c = (0, a.bG)([o.A], () => (t && null != r ? o.A.getBalance(r) : null), [t, r]);
    return t && null != c
        ? {
              walletCoversSubtotal: null != u && c.amount >= u,
              walletCoversTotal: null != s && c.amount >= s.total,
              walletId: r,
              isWalletBalanceLoaded: null != u,
          }
        : { walletCoversSubtotal: !1, walletCoversTotal: !1, walletId: r, isWalletBalanceLoaded: !1 };
}
function d(e) {
    let { checkoutPaymentSources: t, paymentSourceId: n, location: l } = e,
        { enabled: a } = (0, s.c)({ location: l }),
        {
            walletCoversTotal: i,
            walletId: r,
            isWalletBalanceLoaded: o,
        } = c({ giftCardsEnabled: a, checkoutPaymentSources: t });
    return o && null != n && n === r && !i;
}
function p(e) {
    return e.find((e) => e.source instanceof r.LQ) ?? null;
}
function m(e) {
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
function h(e) {
    let {
            checkoutPaymentSources: t,
            paymentSourceId: n,
            setPaymentSourceId: a,
            location: i,
            isReady: r = !0,
            subscriptionPaymentSourceId: o,
        } = e,
        { enabled: d } = (0, s.c)({ location: i }),
        { dropdownPaymentSources: h, giftCardWallet: A } = l.useMemo(() => {
            let e = t.filter((e) => e.type !== u.hes.TDS_WALLET);
            return d
                ? { dropdownPaymentSources: e, giftCardWallet: p(t) }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [t, d]),
        [C, _] = l.useState(null),
        E = null != A && n === A.id,
        y = l.useMemo(
            () =>
                null != C ? C : m({ giftCardWallet: null, dropdownPaymentSources: h, subscriptionPaymentSourceId: o }),
            [h, o, C],
        ),
        f = l.useMemo(() => (E ? y : (n ?? null)), [y, E, n]),
        P = l.useRef(!1);
    l.useEffect(() => {
        if (!r || 0 === t.length || P.current) return;
        P.current = !0;
        let e = m({
            giftCardWallet: A,
            dropdownPaymentSources: h,
            subscriptionPaymentSourceId: o,
            defaultPaymentSourceId: n,
        });
        e !== n && a(e);
    }, [r, t, h, A, n, o, a]),
        l.useEffect(() => {
            r &&
                0 !== t.length &&
                null != n &&
                P.current &&
                (t.some((e) =>
                    ((e) => {
                        let { paymentSource: t, paymentSourceId: n, giftCardsEnabled: l } = e;
                        return (t.type !== u.hes.TDS_WALLET || !!l) && null != n && t.id === n && t.enabled;
                    })({ paymentSource: e, paymentSourceId: n, giftCardsEnabled: d }),
                ) ||
                    a(
                        m({
                            giftCardWallet: A,
                            dropdownPaymentSources: h,
                            subscriptionPaymentSourceId: o,
                            defaultPaymentSourceId: n,
                        }),
                    ));
        }, [r, d, t, h, A, n, o, a]);
    let S = l.useCallback(
            (e) => {
                a(null != e ? e.id : null);
            },
            [a],
        ),
        T = l.useCallback(
            (e) => {
                if (e && null != A) {
                    n !== A.id && _(n ?? null), a(A.id);
                    return;
                }
                a(y);
            },
            [a, A, n, y],
        ),
        {
            walletCoversSubtotal: x,
            walletCoversTotal: N,
            isWalletBalanceLoaded: g,
        } = c({ giftCardsEnabled: d, checkoutPaymentSources: t });
    l.useEffect(() => {
        g && !x && E && a(y);
    }, [g, x, E, a, y]);
    let I = l.useMemo(
        () => (null == A ? null : { giftCardWallet: A, checked: E, onChange: T, disabled: !x }),
        [A, E, T, x],
    );
    return {
        giftCardsEnabled: d,
        dropdownPaymentSources: h,
        dropdownPaymentSourceId: f,
        giftCardWallet: A,
        isGiftCardCreditsChecked: E,
        handleGiftCardCreditsToggle: T,
        handleDropdownPaymentSourceChange: S,
        giftCardCheckboxProps: I,
        walletCoversSubtotal: x,
        walletCoversTotal: N,
    };
}
