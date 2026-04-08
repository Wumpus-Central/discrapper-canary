"use strict";
n.d(t, { n: () => d });
var r = n(627968),
    i = n(64700),
    s = n(158954),
    a = n(417597),
    o = n(637141),
    l = n(176095),
    u = n(87730),
    c = n(344991);
function d(e) {
    let { label: t, giftCardsEnabled: n, giftCardCheckboxProps: d, paymentSourceDropdownProps: _, disabled: f } = e,
        p = (0, a.bG)([l.A], () => {
            if (!n || null == d) return !1;
            let e = l.A.getBalance(d.giftCardWallet.id);
            return null != e && null != d.itemAmount && e.amount >= d.itemAmount;
        }, [n, d]),
        h = i.useMemo(
            () => n && null != d && (0, r.jsx)(u.o, { ...d, className: p ? c.r : c.K, disabled: f }),
            [n, d, p, f],
        );
    return (0, r.jsxs)(s.D0$, {
        label: t,
        children: [p && h, (0, r.jsx)(o.A, { ..._, disabled: f || (n && d?.checked === !0) }), !p && h],
    });
}
