n.d(t, {
    D: () => o,
}),
    n(896048),
    n(492834);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(244242);

function o(e) {
    let { node: t } = e,
        { useLabel: n, useTitle: o, useSubtitle: l, useVariant: c, useDisabled: u, onClick: d } = t,
        [f, p] = i.useState(!1),
        _ = i.useCallback(() => {
            let e = d();
            e instanceof Promise && (p(!0), e.finally(() => p(!1)));
        }, [d]),
        h = o(),
        m = null == l ? void 0 : l(),
        g = n(),
        E = null == c ? void 0 : c(),
        b = null == u ? void 0 : u();
    return (0, r.jsx)(s.L, {
        children: (0, r.jsx)(a.D0$, {
            label: h,
            description: m,
            disabled: b,
            layout: "horizontal",
            children: (0, r.jsx)(a.Button, {
                onClick: _,
                text: g,
                variant: E,
                disabled: b,
                loading: f,
            }),
        }),
    });
}
