n.d(t, { n: () => d });
var a = n(627968),
    r = n(64700),
    l = n(452027),
    i = n(417597),
    s = n(637141),
    o = n(176095),
    u = n(87730),
    c = n(883296);
function d(e) {
    let { label: t, giftCardsEnabled: n, giftCardCheckboxProps: d, paymentSourceDropdownProps: m, disabled: p } = e,
        _ = (0, i.bG)([o.A], () => {
            if (!n || null == d) return !1;
            let e = o.A.getBalance(d.giftCardWallet.id);
            return null != e && null != d.itemAmount && e.amount >= d.itemAmount;
        }, [n, d]),
        f = r.useMemo(
            () => n && null != d && (0, a.jsx)(u.o, { ...d, className: _ ? c.r : c.K, disabled: p }),
            [n, d, _, p],
        );
    return (0, a.jsxs)(l.D, {
        label: t,
        children: [_ && f, (0, a.jsx)(s.A, { ...m, disabled: p || (n && d?.checked === !0) }), !_ && f],
    });
}
