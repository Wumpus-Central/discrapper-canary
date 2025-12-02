n.d(t, { I: () => s }), n(388685), n(457542);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(550964);
function s(e) {
    let { node: t } = e,
        { useLabel: n, useTitle: s, useSubtitle: l, useVariant: c, useDisabled: u, onClick: d } = t,
        [f, p] = i.useState(!1),
        _ = i.useCallback(() => {
            let e = d();
            e instanceof Promise && (p(!0), e.finally(() => p(!1)));
        }, [d]),
        m = s(),
        h = null == l ? void 0 : l(),
        g = n(),
        E = null == c ? void 0 : c(),
        b = null == u ? void 0 : u();
    return (0, r.jsx)(o.X, {
        children: (0, r.jsx)(a.gNt, {
            label: m,
            description: h,
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
