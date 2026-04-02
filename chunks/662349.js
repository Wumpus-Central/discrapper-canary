"use strict";
n.d(t, { A: () => A, h: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(525723),
    c = n(993046),
    d = n(287809),
    _ = n(178213),
    f = n(652215),
    p = n(985018),
    h = n(498700);
function m(e) {
    return { margin: e.buttonInset };
}
function E(e) {
    let { sku: t, wishlistOwner: n, isOwned: r, hideIcon: s, shortText: a, location: h } = e,
        m = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        E = (0, _.AZ)(h ?? "User Profile Wishlist Overlay Button"),
        g = (0, u.Xi)(t),
        A = null == n || n.id === m?.id || r,
        { normalPrice: I, discountedPrice: T } = (0, c.o)({
            sku: t,
            priceSetAssignmentPurchaseType: A ? f.lid.DEFAULT : f.lid.GIFT,
        });
    return i.useMemo(() => {
        if (E && null != t && !r) {
            if (null != g)
                return {
                    label: p.intl.formatToPlainString(p.t.AYcXGW, { discountOfferAmount: g.amount }),
                    icon: void 0,
                    isPromptingPurchase: !0,
                };
            let e = T ?? I;
            if (e?.length > 0) return { label: e, icon: void 0, isPromptingPurchase: !0 };
        }
        return A
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
    }, [E, t, r, a, s, g, A, I, T]);
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
