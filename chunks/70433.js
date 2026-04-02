"use strict";
n.d(t, { n: () => l });
var r = n(627968);
n(64700);
var i = n(158954),
    s = n(637141),
    a = n(87730),
    o = n(630512);
function l(e) {
    let { label: t, giftCardsEnabled: n, giftCardCheckboxProps: l, paymentSourceDropdownProps: u, disabled: c } = e;
    return (0, r.jsxs)(i.D0$, {
        label: t,
        children: [
            n && null != l && (0, r.jsx)(a.o, { ...l, className: o.k, disabled: c }),
            (0, r.jsx)(s.A, { ...u, disabled: c || (n && l?.checked === !0) }),
        ],
    });
}
