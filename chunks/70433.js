l.d(t, { n: () => u });
var n = l(627968),
    s = l(64700),
    r = l(452027),
    i = l(637141),
    a = l(87730),
    c = l(451636),
    d = l(883296);
function u(e) {
    let {
            label: t,
            giftCardsEnabled: l,
            giftCardCheckboxProps: u,
            paymentSourceDropdownProps: o,
            currencySelectProps: m,
            showCheckboxAboveDropdown: x = !1,
            disabled: h,
            customSelectorContent: C,
        } = e,
        v = s.useMemo(
            () => l && null != u && (0, n.jsx)(a.o, { ...u, className: x ? d.r : d.K, disabled: u.disabled || h }),
            [l, u, x, h],
        ),
        p = x && l && u?.checked === !0,
        g = null != C,
        j = s.useMemo(() => (null != C ? C : (0, n.jsx)(i.Ay, { ...o, disabled: h })), [C, h, o]);
    return (0, n.jsxs)(r.D, {
        label: t,
        children: [x && v, !p && j, !x && v, !g && !p && void 0 !== m && (0, n.jsx)(c.q, { ...m })],
    });
}
