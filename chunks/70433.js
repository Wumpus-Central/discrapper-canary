l.d(t, { n: () => o });
var n = l(477900),
    r = l(582128),
    s = l(452027),
    i = l(637141),
    a = l(87730),
    c = l(451636),
    u = l(986072);
function o(e) {
    let {
            label: t,
            giftCardsEnabled: l,
            giftCardCheckboxProps: o,
            paymentSourceDropdownProps: d,
            currencySelectProps: m,
            showCheckboxAboveDropdown: x = !1,
            disabled: h,
            customSelectorContent: p,
        } = e,
        v = r.useMemo(
            () => l && null != o && (0, n.jsx)(a.o, { ...o, className: x ? u.r : u.K, disabled: o.disabled || h }),
            [l, o, x, h],
        ),
        j = x && l && o?.checked === !0,
        f = null != p,
        g = r.useMemo(() => (null != p ? p : (0, n.jsx)(i.Ay, { ...d, disabled: h })), [p, h, d]);
    return (0, n.jsxs)(s.D, {
        label: t,
        children: [x && v, !j && g, !x && v, !f && !j && void 0 !== m && (0, n.jsx)(c.q, { ...m })],
    });
}
