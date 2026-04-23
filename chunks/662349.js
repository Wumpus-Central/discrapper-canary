n.d(t, { A: () => m, h: () => A });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(597770),
    d = n(821609),
    c = n(287809),
    u = n(985018),
    h = n(405276);
function A(e) {
    let { wishlistOwner: t, isOwned: n, hideIcon: i, shortText: s } = e,
        a = (0, r.bG)([c.default], () => c.default.getCurrentUser()),
        d = null == t || t.id === a?.id || n;
    return l.useMemo(
        () =>
            d
                ? {
                      label: s ? u.intl.string(u.t["99GFiS"]) : u.intl.string(u.t.FdGl5A),
                      icon: void 0,
                      isPromptingPurchase: !1,
                  }
                : {
                      label: s ? u.intl.string(u.t["3wFtNJ"]) : u.intl.string(u.t.ilhtIa),
                      icon: i ? void 0 : o.o,
                      isPromptingPurchase: !0,
                  },
        [d, s, i],
    );
}
function _(e) {
    let { spec: t, label: n, icon: s, onClick: r, isHoveringOrFocusing: o, fullWidth: c = !1 } = e,
        u = l.useCallback(
            (e) => {
                e.stopPropagation(), r();
            },
            [r],
        );
    return (0, i.jsx)("div", {
        className: a()(h.L, { [h.K]: o }),
        style: { margin: t.buttonInset },
        children: (0, i.jsx)(d.$, {
            variant: "primary",
            size: "sm",
            iconPosition: "start",
            text: n,
            icon: s,
            onClick: u,
            fullWidth: c,
        }),
    });
}
function m(e) {
    let { spec: t, onClick: n, isHoveringOrFocusing: l, label: s, icon: a } = e;
    return (0, i.jsx)(_, { spec: t, label: s, icon: a, onClick: n, isHoveringOrFocusing: l, fullWidth: !0 });
}
