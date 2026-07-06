l.d(t, { n: () => u });
var s = l(627968),
    n = l(64700),
    a = l(452027),
    r = l(637141),
    i = l(87730),
    d = l(451636),
    c = l(883296);
function u(e) {
    let {
            label: t,
            giftCardsEnabled: l,
            giftCardCheckboxProps: u,
            paymentSourceDropdownProps: o,
            currencySelectProps: m,
            showCheckboxAboveDropdown: x = !1,
            disabled: j,
            customSelectorContent: h,
        } = e,
        v = n.useMemo(
            () => l && null != u && (0, s.jsx)(i.o, { ...u, className: x ? c.r : c.K, disabled: u.disabled || j }),
            [l, u, x, j],
        ),
        g = x && l && u?.checked === !0,
        p = null != h,
        f = n.useMemo(() => (null != h ? h : (0, s.jsx)(r.Ay, { ...o, disabled: j })), [h, j, o]);
    return (0, s.jsxs)(a.D, {
        label: t,
        children: [x && v, !g && f, !x && v, !p && !g && void 0 !== m && (0, s.jsx)(d.q, { ...m })],
    });
}
