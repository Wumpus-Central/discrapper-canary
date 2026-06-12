l.d(t, { n: () => u });
var s = l(627968),
    a = l(64700),
    n = l(452027),
    i = l(637141),
    r = l(87730),
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
            disabled: h,
            customSelectorContent: j,
        } = e,
        v = a.useMemo(
            () => l && null != u && (0, s.jsx)(r.o, { ...u, className: x ? c.r : c.K, disabled: u.disabled || h }),
            [l, u, x, h],
        ),
        p = x && l && u?.checked === !0,
        g = null != j,
        f = a.useMemo(() => (null != j ? j : (0, s.jsx)(i.Ay, { ...o, disabled: h })), [j, h, o]);
    return (0, s.jsxs)(n.D, {
        label: t,
        children: [x && v, !p && f, !x && v, !g && !p && void 0 !== m && (0, s.jsx)(d.q, { ...m })],
    });
}
