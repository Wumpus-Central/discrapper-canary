"use strict";
n.d(t, { A: () => y, h: () => T });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(525723),
    c = n(993046),
    d = n(287809),
    _ = n(97352),
    f = n(927578),
    p = n(580630),
    h = n(178213),
    m = n(652215),
    E = n(788868),
    g = n(985018),
    A = n(498700);
function I(e) {
    return { margin: e.buttonInset };
}
function T(e) {
    let { sku: t, wishlistOwner: n, isOwned: r, hideIcon: s, shortText: a, location: A } = e,
        I = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        T = (0, h.A)(A ?? "User Profile Wishlist Overlay Button"),
        S = (0, u.Xi)(t),
        y = null == n || n.id === I?.id || r,
        { normalPrice: v, discountedPrice: N } = (0, c.ou)({
            sku: t,
            priceSetAssignmentPurchaseType: y ? m.lid.DEFAULT : m.lid.GIFT,
        }),
        C = (0, o.bG)(
            [_.A],
            () => (t?.productLine !== m.EZt.PREMIUM ? null : _.A.getForSkuAndInterval(t.id, E.WT.MONTH, 1)),
            [t],
        );
    return i.useMemo(() => {
        if (T && null != t && !r) {
            if (null != S)
                return {
                    label: g.intl.formatToPlainString(g.t.AYcXGW, { discountOfferAmount: S.amount }),
                    icon: void 0,
                    isPromptingPurchase: !0,
                };
            let e = N ?? v;
            if (null != e) return { label: e, icon: void 0, isPromptingPurchase: !0 };
            if (null != C)
                try {
                    let e = (0, f.JM)(C.id, !1, !y);
                    return { label: (0, p.$g)(e.amount, e.currency), icon: void 0, isPromptingPurchase: !0 };
                } catch {}
        }
        return y
            ? {
                  label: a ? g.intl.string(g.t["99GFiS"]) : g.intl.string(g.t.FdGl5A),
                  icon: void 0,
                  isPromptingPurchase: !1,
              }
            : {
                  label: a ? g.intl.string(g.t["3wFtNJ"]) : g.intl.string(g.t.ilhtIa),
                  icon: s ? void 0 : l.okO,
                  isPromptingPurchase: !0,
              };
    }, [T, t, r, a, s, S, y, v, N, C]);
}
function S(e) {
    let { spec: t, label: n, icon: s, onClick: o, isHoveringOrFocusing: u, fullWidth: c = !1 } = e,
        d = i.useCallback(
            (e) => {
                e.stopPropagation(), o();
            },
            [o],
        );
    return (0, r.jsx)("div", {
        className: a()(A.L, { [A.K]: u }),
        style: I(t),
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
function y(e) {
    let { spec: t, onClick: n, isHoveringOrFocusing: i, label: s, icon: a } = e;
    return (0, r.jsx)(S, { spec: t, label: s, icon: a, onClick: n, isHoveringOrFocusing: i, fullWidth: !0 });
}
