n.d(t, { n: () => c });
var l = n(627968),
    i = n(64700),
    s = n(452027),
    r = n(637141),
    a = n(87730),
    o = n(451636),
    u = n(177376);
function c(e) {
    let {
            label: t,
            giftCardsEnabled: n,
            giftCardCheckboxProps: c,
            paymentSourceDropdownProps: d,
            currencySelectProps: m,
            showCheckboxAboveDropdown: h = !1,
            disabled: g,
            customSelectorContent: f,
        } = e,
        x = i.useMemo(
            () => n && null != c && (0, l.jsx)(a.o, { ...c, className: h ? u.r : u.K, disabled: c.disabled || g }),
            [n, c, h, g],
        ),
        p = h && n && c?.checked === !0,
        A = null != f,
        E = i.useMemo(() => (null != f ? f : (0, l.jsx)(r.Ay, { ...d, disabled: g })), [f, g, d]);
    return (0, l.jsxs)(s.D, {
        label: t,
        children: [h && x, !p && E, !h && x, !A && !p && void 0 !== m && (0, l.jsx)(o.q, { ...m })],
    });
}
