"use strict";
n.d(t, { n: () => d });
var i = n(627968),
    r = n(64700),
    s = n(452027),
    a = n(637141),
    o = n(87730),
    l = n(883296);
function d(e) {
    let {
            label: t,
            giftCardsEnabled: n,
            giftCardCheckboxProps: d,
            paymentSourceDropdownProps: _,
            showCheckboxAboveDropdown: u = !1,
            disabled: c,
        } = e,
        E = r.useMemo(
            () => n && null != d && (0, i.jsx)(o.o, { ...d, className: u ? l.r : l.K, disabled: d.disabled || c }),
            [n, d, u, c],
        );
    return (0, i.jsxs)(s.D, {
        label: t,
        children: [u && E, (0, i.jsx)(a.A, { ..._, disabled: c || (n && d?.checked === !0) }), !u && E],
    });
}
