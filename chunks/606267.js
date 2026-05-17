n.d(t, { Y0: () => y, iB: () => m });
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
        c = C(s),
        d = C(u),
        p = null != c && 0 === c && null != d,
        m = p ? d : c,
        A = p ? (u?.total ?? null) : s?.total,
        y = (0, a.bG)([o.A], () => (t && null != r ? o.A.getBalance(r) : null), [t, r]);
    return t && null != y
        ? {
              walletCoversSubtotal: null != m && y.amount >= m,
              walletCoversTotal: null != A && y.amount >= A,
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
    return null == e ? null : e.taxInclusive ? e.total : e.total - e.tax;
}
function A(e) {
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
function y(e) {
    let {
            checkoutPaymentSources: t,
            paymentSourceId: n,
            setPaymentSourceId: a,
            location: i,
            isReady: r = !0,
            subscriptionPaymentSourceId: o,
        } = e,
        { enabled: m } = (0, s.c)({ location: i }),
        { dropdownPaymentSources: C, giftCardWallet: y } = l.useMemo(() => {
            let e = t.filter((e) => e.type !== u.hes.TDS_WALLET);
            return m
                ? { dropdownPaymentSources: e, giftCardWallet: h(t) }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [t, m]),
        [E, P] = l.useState(null),
        S = null != y && n === y.id,
        _ = l.useMemo(
            () =>
                null != E ? E : A({ giftCardWallet: null, dropdownPaymentSources: C, subscriptionPaymentSourceId: o }),
            [C, o, E],
        ),
        T = l.useMemo(() => (S ? _ : (n ?? null)), [_, S, n]),
        f = l.useRef(!1);
    l.useEffect(() => {
        if (!r || 0 === t.length || f.current) return;
        f.current = !0;
        let e = A({
            giftCardWallet: y,
            dropdownPaymentSources: C,
            subscriptionPaymentSourceId: o,
            defaultPaymentSourceId: n,
        });
        e !== n && a(e);
    }, [r, t, C, y, n, o, a]),
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
                    a(
                        A({
                            giftCardWallet: y,
                            dropdownPaymentSources: C,
                            subscriptionPaymentSourceId: o,
                            defaultPaymentSourceId: n,
                        }),
                    ));
        }, [r, m, t, C, y, n, o, a]);
    let I = l.useCallback(
            (e) => {
                a(null != e ? e.id : null);
            },
            [a],
        ),
        N = l.useCallback(
            (e) => {
                if (e && null != y) {
                    n !== y.id && P(n ?? null), a(y.id);
                    return;
                }
                a(_);
            },
            [a, y, n, _],
        ),
        {
            walletCoversSubtotal: x,
            walletCoversTotal: g,
            isWalletBalanceLoaded: v,
        } = p({ giftCardsEnabled: m, checkoutPaymentSources: t });
    l.useEffect(() => {
        v && !x && S && a(_);
    }, [v, x, S, a, _]);
    let M = l.useMemo(
        () =>
            null == y
                ? null
                : {
                      giftCardWallet: y,
                      checked: S,
                      onChange: N,
                      disabled: !x,
                      disabledTooltip: x ? void 0 : c.intl.string(d.default.ccWIdu),
                  },
        [y, S, N, x],
    );
    return {
        giftCardsEnabled: m,
        dropdownPaymentSources: C,
        dropdownPaymentSourceId: T,
        giftCardWallet: y,
        isGiftCardCreditsChecked: S,
        handleGiftCardCreditsToggle: N,
        handleDropdownPaymentSourceChange: I,
        giftCardCheckboxProps: M,
        walletCoversSubtotal: x,
        walletCoversTotal: g,
    };
}
