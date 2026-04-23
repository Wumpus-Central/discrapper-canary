"use strict";
n.d(t, { Y0: () => h, iB: () => u });
var i = n(64700),
    r = n(702841),
    s = n(94420),
    a = n(202613),
    o = n(459357),
    l = n(176095),
    d = n(652215);
function _(e) {
    let { giftCardsEnabled: t, checkoutPaymentSources: n } = e,
        a = i.useMemo(() => c(n)?.id, [n]),
        o = (0, s.sw)(),
        d = o?.subtotal ?? o?.total,
        _ = (0, r.bG)([l.A], () => (t && null != a ? l.A.getBalance(a) : null), [t, a]);
    return t && null != _
        ? {
              walletCoversSubtotal: null != d && _.amount >= d,
              walletCoversTotal: null != o && _.amount >= o.total,
              walletId: a,
              isWalletBalanceLoaded: null != d,
          }
        : { walletCoversSubtotal: !1, walletCoversTotal: !1, walletId: a, isWalletBalanceLoaded: !1 };
}
function u(e) {
    let { checkoutPaymentSources: t, paymentSourceId: n, location: i } = e,
        { enabled: r } = (0, o.c)({ location: i }),
        {
            walletCoversTotal: s,
            walletId: a,
            isWalletBalanceLoaded: l,
        } = _({ giftCardsEnabled: r, checkoutPaymentSources: t });
    return l && null != n && n === a && !s;
}
function c(e) {
    return e.find((e) => e.source instanceof a.LQ) ?? null;
}
function E(e) {
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
function h(e) {
    let {
            checkoutPaymentSources: t,
            paymentSourceId: n,
            setPaymentSourceId: r,
            location: s,
            isReady: a = !0,
            subscriptionPaymentSourceId: l,
        } = e,
        { enabled: u } = (0, o.c)({ location: s }),
        { dropdownPaymentSources: h, giftCardWallet: m } = i.useMemo(() => {
            let e = t.filter((e) => e.type !== d.hes.TDS_WALLET);
            return u
                ? { dropdownPaymentSources: e, giftCardWallet: c(t) }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [t, u]),
        [f, g] = i.useState(null),
        p = null != m && n === m.id,
        A = i.useMemo(
            () =>
                null != f ? f : E({ giftCardWallet: null, dropdownPaymentSources: h, subscriptionPaymentSourceId: l }),
            [h, l, f],
        ),
        I = i.useMemo(() => (p ? A : (n ?? null)), [A, p, n]),
        T = i.useRef(!1);
    i.useEffect(() => {
        if (!a || 0 === t.length || T.current) return;
        T.current = !0;
        let e = E({
            giftCardWallet: m,
            dropdownPaymentSources: h,
            subscriptionPaymentSourceId: l,
            defaultPaymentSourceId: n,
        });
        e !== n && r(e);
    }, [a, t, h, m, n, l, r]),
        i.useEffect(() => {
            a &&
                0 !== t.length &&
                null != n &&
                T.current &&
                (t.some((e) =>
                    ((e) => {
                        let { paymentSource: t, paymentSourceId: n, giftCardsEnabled: i } = e;
                        return (t.type !== d.hes.TDS_WALLET || !!i) && null != n && t.id === n && t.enabled;
                    })({ paymentSource: e, paymentSourceId: n, giftCardsEnabled: u }),
                ) ||
                    r(
                        E({
                            giftCardWallet: m,
                            dropdownPaymentSources: h,
                            subscriptionPaymentSourceId: l,
                            defaultPaymentSourceId: n,
                        }),
                    ));
        }, [a, u, t, h, m, n, l, r]);
    let S = i.useCallback(
            (e) => {
                r(null != e ? e.id : null);
            },
            [r],
        ),
        N = i.useCallback(
            (e) => {
                if (e && null != m) {
                    n !== m.id && g(n ?? null), r(m.id);
                    return;
                }
                r(A);
            },
            [r, m, n, A],
        ),
        {
            walletCoversSubtotal: C,
            walletCoversTotal: R,
            isWalletBalanceLoaded: O,
        } = _({ giftCardsEnabled: u, checkoutPaymentSources: t });
    i.useEffect(() => {
        O && !C && p && r(A);
    }, [O, C, p, r, A]);
    let y = i.useMemo(
        () => (null == m ? null : { giftCardWallet: m, checked: p, onChange: N, disabled: !C }),
        [m, p, N, C],
    );
    return {
        giftCardsEnabled: u,
        dropdownPaymentSources: h,
        dropdownPaymentSourceId: I,
        giftCardWallet: m,
        isGiftCardCreditsChecked: p,
        handleGiftCardCreditsToggle: N,
        handleDropdownPaymentSourceChange: S,
        giftCardCheckboxProps: y,
        walletCoversSubtotal: C,
        walletCoversTotal: R,
    };
}
