n.d(t, { I: () => a }), n(388685), n(457542);
var r = n(54381),
    l = n(473749),
    i = n(481060),
    o = n(550964);
function a(e) {
    let { node: t } = e,
        { useLabel: n, useTitle: a, useSubtitle: c, useVariant: s, useDisabled: u, onClick: d } = t,
        [f, b] = l.useState(!1),
        p = l.useCallback(() => {
            let e = d();
            e instanceof Promise && (b(!0), e.finally(() => b(!1)));
        }, [d]),
        y = a(),
        j = null == c ? void 0 : c(),
        m = n(),
        v = null == s ? void 0 : s(),
        g = null == u ? void 0 : u();
    return (0, r.jsx)(o.X, {
        children: (0, r.jsx)(i.gNt, {
            label: y,
            description: j,
            disabled: g,
            layout: "horizontal",
            children: (0, r.jsx)(i.Button, {
                onClick: p,
                text: m,
                variant: v,
                disabled: g,
                loading: f,
            }),
        }),
    });
}
