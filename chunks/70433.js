l.d(t, { n: () => c });
var n = l(627968),
    r = l(64700),
    a = l(452027),
    i = l(637141),
    s = l(87730),
    u = l(451636),
    o = l(883296);
function c(e) {
    let {
            label: t,
            giftCardsEnabled: l,
            giftCardCheckboxProps: c,
            paymentSourceDropdownProps: d,
            currencySelectProps: m,
            showCheckboxAboveDropdown: x = !1,
            disabled: f,
        } = e,
        h = r.useMemo(
            () => l && null != c && (0, n.jsx)(s.o, { ...c, className: x ? o.r : o.K, disabled: c.disabled || f }),
            [l, c, x, f],
        ),
        p = l && c?.checked === !0;
    return (0, n.jsxs)(a.D, {
        label: t,
        children: [
            x && h,
            !p && (0, n.jsx)(i.A, { ...d, disabled: f }),
            !x && h,
            !p && void 0 !== m && (0, n.jsx)(u.q, { ...m }),
        ],
    });
}
