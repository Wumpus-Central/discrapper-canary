"use strict";
n.d(t, { AJ: () => A, hB: () => E, lQ: () => I });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(525723),
    c = n(287809),
    d = n(580630),
    _ = n(178213),
    f = n(818348),
    p = n(985018),
    h = n(333245);
function m(e) {
    return { margin: e.buttonInset };
}
function E(e) {
    let { sku: t, wishlistOwner: n, isOwned: r, hideIcon: s, shortText: a, location: f } = e,
        h = (0, o.bG)([c.default], () => c.default.getCurrentUser()),
        m = (0, _.AZ)(f ?? "User Profile Wishlist Overlay Button"),
        E = (0, u.Xi)(t);
    return i.useMemo(() => {
        if (m && null != t && !r) {
            if (null != E)
                return {
                    label: p.intl.formatToPlainString(p.t.AYcXGW, { discountOfferAmount: E.amount }),
                    icon: void 0,
                    isPromptingPurchase: !0,
                };
            let e = t.getPrice(h?.premiumType);
            if (null != e) return { label: (0, d.$g)(e.amount, e.currency), icon: void 0, isPromptingPurchase: !0 };
        }
        return null == n || n.id === h?.id || r
            ? {
                  label: a ? p.intl.string(p.t["99GFiS"]) : p.intl.string(p.t.FdGl5A),
                  icon: void 0,
                  isPromptingPurchase: !1,
              }
            : {
                  label: a ? p.intl.string(p.t["3wFtNJ"]) : p.intl.string(p.t.ilhtIa),
                  icon: s ? void 0 : l.okO,
                  isPromptingPurchase: !0,
              };
    }, [m, t, r, n, h?.id, h?.premiumType, a, s, E]);
}
function g(e) {
    let { spec: t, label: n, icon: s, onClick: o, isHoveringOrFocusing: u, fullWidth: c = !1 } = e,
        d = i.useCallback(
            (e) => {
                e.stopPropagation(), o();
            },
            [o],
        );
    return (0, r.jsx)("div", {
        className: a()(h.L, { [h.K]: u }),
        style: m(t),
        children: (0, r.jsx)(l.Button, {
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
function A(e) {
    let { spec: t, onClick: n, isHoveringOrFocusing: i, label: s, icon: a } = e;
    return (0, r.jsx)(g, { spec: t, label: s, icon: a, onClick: n, isHoveringOrFocusing: i, fullWidth: !0 });
}
function I(e) {
    let { sku: t, spec: n, onClick: s, isHoveringOrFocusing: a } = e,
        o = i.useMemo(() => (0, d.$g)(t.price?.amount ?? 0, t.price?.currency ?? f.Yr.USD), [t]);
    return (0, r.jsx)(g, { spec: n, label: o, icon: void 0, onClick: s, isHoveringOrFocusing: a, fullWidth: !0 });
}
