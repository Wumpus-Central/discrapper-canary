"use strict";
n.d(t, { n: () => c });
var i = n(627968),
    r = n(64700),
    s = n(452027),
    a = n(637141),
    o = n(87730),
    l = n(451636),
    u = n(883296);
function c(e) {
    let {
            label: t,
            giftCardsEnabled: n,
            giftCardCheckboxProps: c,
            paymentSourceDropdownProps: d,
            currencySelectProps: _,
            showCheckboxAboveDropdown: h = !1,
            disabled: f,
            customSelectorContent: p,
        } = e,
        E = r.useMemo(
            () => n && null != c && (0, i.jsx)(o.o, { ...c, className: h ? u.r : u.K, disabled: c.disabled || f }),
            [n, c, h, f],
        ),
        m = h && n && c?.checked === !0,
        g = null != p,
        A = r.useMemo(() => (null != p ? p : (0, i.jsx)(a.Ay, { ...d, disabled: f })), [p, f, d]);
    return (0, i.jsxs)(s.D, {
        label: t,
        children: [h && E, !m && A, !h && E, !g && !m && void 0 !== _ && (0, i.jsx)(l.q, { ..._ })],
    });
}
