t.d(e, { A: () => f, h: () => p });
var n = t(477900),
    s = t(582128),
    l = t(503698),
    r = t.n(l),
    a = t(17928),
    c = t(597770),
    o = t(821609),
    u = t(287809),
    d = t(105292),
    h = t(164463);
function p(i) {
    let { wishlistOwner: e, isOwned: t, hideIcon: n, shortText: l } = i,
        r = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        o = null == e || e.id === r?.id || t;
    return s.useMemo(
        () =>
            o
                ? {
                      label: l ? d.intl.string(d.t["99GFiS"]) : d.intl.string(d.t.FdGl5A),
                      icon: void 0,
                      isPromptingPurchase: !1,
                  }
                : {
                      label: l ? d.intl.string(d.t["3wFtNJ"]) : d.intl.string(d.t.ilhtIa),
                      icon: n ? void 0 : c.GiftIcon,
                      isPromptingPurchase: !0,
                  },
        [o, l, n],
    );
}
function x(i) {
    let { spec: e, label: t, icon: l, onClick: a, isHoveringOrFocusing: c, fullWidth: u = !1 } = i,
        d = s.useCallback(
            (i) => {
                (i.stopPropagation(), a());
            },
            [a],
        );
    return (0, n.jsx)("div", {
        className: r()(h.L, { [h.K]: c }),
        style: { margin: e.buttonInset },
        children: (0, n.jsx)(o.$, {
            variant: "primary",
            size: "sm",
            iconPosition: "start",
            text: t,
            icon: l,
            onClick: d,
            fullWidth: u,
        }),
    });
}
function f(i) {
    let { spec: e, onClick: t, isHoveringOrFocusing: s, label: l, icon: r } = i;
    return (0, n.jsx)(x, { spec: e, label: l, icon: r, onClick: t, isHoveringOrFocusing: s, fullWidth: !0 });
}
