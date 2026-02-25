"use strict";
n.d(t, { AJ: () => E, hB: () => h, lQ: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(525723),
    u = n(580630),
    c = n(519421),
    d = n(818348),
    _ = n(985018),
    f = n(433107);
function p(e) {
    return { margin: e.buttonInset };
}
function h(e) {
    let { sku: t, wishlistOwner: n, currentUser: r, isOwned: s, hideIcon: a, location: d } = e,
        f = (0, c.A)(d ?? "User Profile Wishlist Overlay Button"),
        p = (0, l.Xi)(t);
    return i.useMemo(() => {
        if (f && null != t) {
            if (null != p)
                return {
                    label: _.intl.formatToPlainString(_.t.AYcXGW, { discountOfferAmount: p.amount }),
                    icon: void 0,
                };
            let e = t.getPrice();
            if (null != e) return { label: (0, u.$g)(e.amount, e.currency), icon: void 0 };
        }
        return null == n || n.id === r?.id || s
            ? { label: _.intl.string(_.t.FdGl5A), icon: void 0 }
            : { label: _.intl.string(_.t.ilhtIa), icon: a ? void 0 : o.okO };
    }, [t, n, r, s, a, f, p]);
}
function m(e) {
    let { spec: t, label: n, icon: s, onClick: l, isHoveringOrFocusing: u, fullWidth: c = !1 } = e,
        d = i.useCallback(
            (e) => {
                e.stopPropagation(), l();
            },
            [l],
        );
    return (0, r.jsx)("div", {
        className: a()(f.L, { [f.K]: u }),
        style: p(t),
        children: (0, r.jsx)(o.Button, {
            variant: "primary",
            size: "sm",
            iconPosition: "start",
            text: n,
            icon: s,
            onClick: d,
            fullWidth: c,
        }),
    });
}
function E(e) {
    let { spec: t, onClick: n, isHoveringOrFocusing: i, label: s, icon: a } = e;
    return (0, r.jsx)(m, { spec: t, label: s, icon: a, onClick: n, isHoveringOrFocusing: i, fullWidth: !0 });
}
function g(e) {
    let { sku: t, spec: n, onClick: s, isHoveringOrFocusing: a } = e,
        o = i.useMemo(() => (0, u.$g)(t.price?.amount ?? 0, t.price?.currency ?? d.Yr.USD), [t]);
    return (0, r.jsx)(m, { spec: n, label: o, icon: void 0, onClick: s, isHoveringOrFocusing: a, fullWidth: !0 });
}
