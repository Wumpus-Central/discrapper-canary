t.d(s, { A: () => x, h: () => g });
var i = t(477900),
    n = t(582128),
    l = t(503698),
    r = t.n(l),
    a = t(17928),
    c = t(597770),
    u = t(821609),
    d = t(287809),
    o = t(375708),
    h = t(164463);
function g(e) {
    let { wishlistOwner: s, isOwned: t, hideIcon: i, shortText: l } = e,
        r = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
        u = null == s || s.id === r?.id || t;
    return n.useMemo(
        () =>
            u
                ? {
                      label: l ? o.intl.string(o.t["99GFiS"]) : o.intl.string(o.t.FdGl5A),
                      icon: void 0,
                      isPromptingPurchase: !1,
                  }
                : {
                      label: l ? o.intl.string(o.t["3wFtNJ"]) : o.intl.string(o.t.ilhtIa),
                      icon: i ? void 0 : c.GiftIcon,
                      isPromptingPurchase: !0,
                  },
        [u, l, i],
    );
}
function m(e) {
    let { spec: s, label: t, icon: l, onClick: a, isHoveringOrFocusing: c, fullWidth: d = !1 } = e,
        o = n.useCallback(
            (e) => {
                e.stopPropagation(), a();
            },
            [a],
        );
    return (0, i.jsx)("div", {
        className: r()(h.L, { [h.K]: c }),
        style: { margin: s.buttonInset },
        children: (0, i.jsx)(u.$, {
            variant: "primary",
            size: "sm",
            iconPosition: "start",
            text: t,
            icon: l,
            onClick: o,
            fullWidth: d,
        }),
    });
}
function x(e) {
    let { spec: s, onClick: t, isHoveringOrFocusing: n, label: l, icon: r } = e;
    return (0, i.jsx)(m, { spec: s, label: l, icon: r, onClick: t, isHoveringOrFocusing: n, fullWidth: !0 });
}
