"use strict";
n.d(t, { A: () => I, h: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(525723),
    c = n(871123),
    d = n(287809),
    _ = n(580630),
    f = n(178213),
    p = n(652215),
    h = n(985018),
    m = n(498700);
function E(e) {
    return { margin: e.buttonInset };
}
function g(e) {
    let { sku: t, wishlistOwner: n, isOwned: r, hideIcon: s, shortText: a, location: m } = e,
        E = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        g = (0, f.AZ)(m ?? "User Profile Wishlist Overlay Button"),
        A = (0, u.Xi)(t),
        I = null == n || n.id === E?.id || r;
    return i.useMemo(() => {
        if (g && null != t && !r) {
            if (null != A)
                return {
                    label: h.intl.formatToPlainString(h.t.AYcXGW, { discountOfferAmount: A.amount }),
                    icon: void 0,
                    isPromptingPurchase: !0,
                };
            let e = I ? p.lid.DEFAULT : p.lid.GIFT,
                n = t.productLine === p.EZt.SOCIAL_LAYER_GAME_ITEM ? (0, c.y8)(t, e) : t.getPrice(E?.premiumType);
            if (null != n) return { label: (0, _.$g)(n.amount, n.currency), icon: void 0, isPromptingPurchase: !0 };
        }
        return I
            ? {
                  label: a ? h.intl.string(h.t["99GFiS"]) : h.intl.string(h.t.FdGl5A),
                  icon: void 0,
                  isPromptingPurchase: !1,
              }
            : {
                  label: a ? h.intl.string(h.t["3wFtNJ"]) : h.intl.string(h.t.ilhtIa),
                  icon: s ? void 0 : l.okO,
                  isPromptingPurchase: !0,
              };
    }, [g, t, r, a, s, A, I, E?.premiumType]);
}
function A(e) {
    let { spec: t, label: n, icon: s, onClick: o, isHoveringOrFocusing: u, fullWidth: c = !1 } = e,
        d = i.useCallback(
            (e) => {
                e.stopPropagation(), o();
            },
            [o],
        );
    return (0, r.jsx)("div", {
        className: a()(m.L, { [m.K]: u }),
        style: E(t),
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
function I(e) {
    let { spec: t, onClick: n, isHoveringOrFocusing: i, label: s, icon: a } = e;
    return (0, r.jsx)(A, { spec: t, label: s, icon: a, onClick: n, isHoveringOrFocusing: i, fullWidth: !0 });
}
