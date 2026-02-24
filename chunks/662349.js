"use strict";
n.d(t, { AJ: () => m, hB: () => p, lQ: () => E });
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
    f = n(333245);
function p(e) {
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
function h(e) {
    let { label: t, icon: n, onClick: s, isHoveringOrFocusing: l, fullWidth: u = !1 } = e,
        c = i.useCallback(
            (e) => {
                e.stopPropagation(), s();
            },
            [s],
        );
    return (0, r.jsx)("div", {
        className: a()(f.L, { [f.K]: l }),
        children: (0, r.jsx)(o.Button, {
            variant: "primary",
            size: "sm",
            iconPosition: "start",
            text: t,
            icon: n,
            onClick: c,
            fullWidth: u,
        }),
    });
}
function m(e) {
    let { onClick: t, isHoveringOrFocusing: n, label: i, icon: s } = e;
    return (0, r.jsx)(h, { label: i, icon: s, onClick: t, isHoveringOrFocusing: n, fullWidth: !0 });
}
function E(e) {
    let { sku: t, onClick: n, isHoveringOrFocusing: s } = e,
        a = i.useMemo(() => (0, u.$g)(t.price?.amount ?? 0, t.price?.currency ?? d.Yr.USD), [t]);
    return (0, r.jsx)(h, { label: a, icon: void 0, onClick: n, isHoveringOrFocusing: s });
}
