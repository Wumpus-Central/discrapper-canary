n.d(t, { n: () => o });
var l = n(627968),
    a = n(64700),
    r = n(452027),
    i = n(637141),
    s = n(87730),
    u = n(883296);
function o(e) {
    let {
            label: t,
            giftCardsEnabled: n,
            giftCardCheckboxProps: o,
            paymentSourceDropdownProps: c,
            showCheckboxAboveDropdown: d = !1,
            disabled: m,
        } = e,
        x = a.useMemo(
            () => n && null != o && (0, l.jsx)(s.o, { ...o, className: d ? u.r : u.K, disabled: o.disabled || m }),
            [n, o, d, m],
        ),
        f = n && o?.checked === !0;
    return (0, l.jsxs)(r.D, { label: t, children: [d && x, !f && (0, l.jsx)(i.A, { ...c, disabled: m }), !d && x] });
}
