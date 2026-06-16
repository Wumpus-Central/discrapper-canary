n.d(t, { n: () => d });
var i = n(627968),
    l = n(64700),
    s = n(452027),
    r = n(637141),
    a = n(87730),
    o = n(451636),
    c = n(883296);
function d(e) {
    let {
            label: t,
            giftCardsEnabled: n,
            giftCardCheckboxProps: d,
            paymentSourceDropdownProps: u,
            currencySelectProps: m,
            showCheckboxAboveDropdown: h = !1,
            disabled: g,
            customSelectorContent: x,
        } = e,
        f = l.useMemo(
            () => n && null != d && (0, i.jsx)(a.o, { ...d, className: h ? c.r : c.K, disabled: d.disabled || g }),
            [n, d, h, g],
        ),
        p = h && n && d?.checked === !0,
        A = null != x,
        E = l.useMemo(() => (null != x ? x : (0, i.jsx)(r.Ay, { ...u, disabled: g })), [x, g, u]);
    return (0, i.jsxs)(s.D, {
        label: t,
        children: [h && f, !p && E, !h && f, !A && !p && void 0 !== m && (0, i.jsx)(o.q, { ...m })],
    });
}
