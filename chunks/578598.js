n.d(t, { D: () => l });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(244242);
function l(e) {
    let { node: t } = e,
        { useLabel: n, useTitle: l, useSubtitle: o, useVariant: c, useDisabled: d, onClick: u } = t,
        [_, m] = s.useState(!1),
        A = s.useCallback(() => {
            let e = u();
            e instanceof Promise && (m(!0), e.finally(() => m(!1)));
        }, [u]),
        g = l(),
        E = o?.(),
        h = n(),
        p = c?.(),
        C = d?.();
    return (0, i.jsx)(a.L, {
        children: (0, i.jsx)(r.D0$, {
            label: g,
            description: E,
            disabled: C,
            layout: "horizontal",
            children: (0, i.jsx)(r.Button, { onClick: A, text: h, variant: p, disabled: C, loading: _ }),
        }),
    });
}
