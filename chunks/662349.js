t.d(s, { A: () => g, h: () => h });
var i = t(627968),
    l = t(64700),
    n = t(503698),
    a = t.n(n),
    r = t(17928),
    u = t(597770),
    d = t(821609),
    o = t(287809),
    c = t(985018),
    m = t(405276);
function h(e) {
    let { wishlistOwner: s, isOwned: t, hideIcon: i, shortText: n } = e,
        a = (0, r.bG)([o.default], () => o.default.getCurrentUser()),
        d = null == s || s.id === a?.id || t;
    return l.useMemo(
        () =>
            d
                ? {
                      label: n ? c.intl.string(c.t["99GFiS"]) : c.intl.string(c.t.FdGl5A),
                      icon: void 0,
                      isPromptingPurchase: !1,
                  }
                : {
                      label: n ? c.intl.string(c.t["3wFtNJ"]) : c.intl.string(c.t.ilhtIa),
                      icon: i ? void 0 : u.o,
                      isPromptingPurchase: !0,
                  },
        [d, n, i],
    );
}
function f(e) {
    let { spec: s, label: t, icon: n, onClick: r, isHoveringOrFocusing: u, fullWidth: o = !1 } = e,
        c = l.useCallback(
            (e) => {
                e.stopPropagation(), r();
            },
            [r],
        );
    return (0, i.jsx)("div", {
        className: a()(m.L, { [m.K]: u }),
        style: { margin: s.buttonInset },
        children: (0, i.jsx)(d.$, {
            variant: "primary",
            size: "sm",
            iconPosition: "start",
            text: t,
            icon: n,
            onClick: c,
            fullWidth: o,
        }),
    });
}
function g(e) {
    let { spec: s, onClick: t, isHoveringOrFocusing: l, label: n, icon: a } = e;
    return (0, i.jsx)(f, { spec: s, label: n, icon: a, onClick: t, isHoveringOrFocusing: l, fullWidth: !0 });
}
