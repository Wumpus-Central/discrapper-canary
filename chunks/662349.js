n.d(t, {
    A: () => d,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(397927),
    s = n(985018),
    c = n(333245);

function u(e) {
    let { label: t, icon: n, onClick: i, isHoveringOrFocusing: s } = e,
        u = l.useCallback(
            (e) => {
                e.stopPropagation(), i();
            },
            [i],
        );
    return (0, r.jsx)("div", {
        className: a()(c.L, {
            [c.K]: s,
        }),
        children: (0, r.jsx)(o.Button, {
            variant: "primary",
            size: "sm",
            iconPosition: "start",
            text: t,
            icon: n,
            onClick: u,
        }),
    });
}

function d(e) {
    let { onClick: t, isHoveringOrFocusing: n, currentUser: i, wishlistOwner: a, isOwned: c } = e,
        { label: d, icon: f } = l.useMemo(
            () =>
                null == a || a.id === (null == i ? void 0 : i.id) || c
                    ? {
                          label: s.intl.string(s.t.FdGl5A),
                          icon: void 0,
                      }
                    : {
                          label: s.intl.string(s.t.ilhtIa),
                          icon: o.okO,
                      },
            [c, a, i],
        );
    return (0, r.jsx)(u, {
        label: d,
        icon: f,
        onClick: t,
        isHoveringOrFocusing: n,
    });
}
