n.d(t, { n: () => c });
var i = n(627968),
    l = n(64700),
    s = n(452027),
    r = n(637141),
    a = n(87730),
    o = n(451636),
    d = n(177376);
function c(e) {
    let {
            label: t,
            giftCardsEnabled: n,
            giftCardCheckboxProps: c,
            paymentSourceDropdownProps: u,
            currencySelectProps: h,
            showCheckboxAboveDropdown: m = !1,
            disabled: g,
            customSelectorContent: x,
        } = e,
        f = l.useMemo(
            () => n && null != c && (0, i.jsx)(a.o, { ...c, className: m ? d.r : d.K, disabled: c.disabled || g }),
            [n, c, m, g],
        ),
        p = m && n && c?.checked === !0,
        A = null != x,
        E = l.useMemo(() => (null != x ? x : (0, i.jsx)(r.Ay, { ...u, disabled: g })), [x, g, u]);
    return (0, i.jsxs)(s.D, {
        label: t,
        children: [m && f, !p && E, !m && f, !A && !p && void 0 !== h && (0, i.jsx)(o.q, { ...h })],
    });
}
