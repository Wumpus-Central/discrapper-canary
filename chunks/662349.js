n.d(t, {
    A: () => p,
    l: () => _,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(397927),
    l = n(580630),
    c = n(818348),
    u = n(985018),
    d = n(333245);

function f(e) {
    let { label: t, icon: n, onClick: a, isHoveringOrFocusing: l } = e,
        c = i.useCallback(
            (e) => {
                e.stopPropagation(), a();
            },
            [a],
        );
    return (0, r.jsx)("div", {
        className: o()(d.L, {
            [d.K]: l,
        }),
        children: (0, r.jsx)(s.Button, {
            variant: "primary",
            size: "sm",
            iconPosition: "start",
            text: t,
            icon: n,
            onClick: c,
        }),
    });
}

function p(e) {
    let { onClick: t, isHoveringOrFocusing: n, currentUser: a, wishlistOwner: o, isOwned: l } = e,
        { label: c, icon: d } = i.useMemo(
            () =>
                null == o || o.id === (null == a ? void 0 : a.id) || l
                    ? {
                          label: u.intl.string(u.t.FdGl5A),
                          icon: void 0,
                      }
                    : {
                          label: u.intl.string(u.t.ilhtIa),
                          icon: s.okO,
                      },
            [l, o, a],
        );
    return (0, r.jsx)(f, {
        label: c,
        icon: d,
        onClick: t,
        isHoveringOrFocusing: n,
    });
}

function _(e) {
    let { sku: t, onClick: n, isHoveringOrFocusing: a } = e,
        o = i.useMemo(() => {
            var e, n, r, i;
            return (0, l.$g)(
                null != (e = null == (r = t.price) ? void 0 : r.amount) ? e : 0,
                null != (n = null == (i = t.price) ? void 0 : i.currency) ? n : c.Yr.USD,
            );
        }, [t]);
    return (0, r.jsx)(f, {
        label: o,
        icon: void 0,
        onClick: n,
        isHoveringOrFocusing: a,
    });
}
