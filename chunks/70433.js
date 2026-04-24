n.d(t, { n: () => c });
var a = n(627968),
    r = n(64700),
    l = n(452027),
    i = n(637141),
    s = n(87730),
    o = n(883296);
function c(e) {
    let {
            label: t,
            giftCardsEnabled: n,
            giftCardCheckboxProps: c,
            paymentSourceDropdownProps: d,
            showCheckboxAboveDropdown: u = !1,
            disabled: p,
        } = e,
        _ = r.useMemo(
            () => n && null != c && (0, a.jsx)(s.o, { ...c, className: u ? o.r : o.K, disabled: c.disabled || p }),
            [n, c, u, p],
        );
    return (0, a.jsxs)(l.D, {
        label: t,
        children: [u && _, (0, a.jsx)(i.A, { ...d, disabled: p || (n && c?.checked === !0) }), !u && _],
    });
}
