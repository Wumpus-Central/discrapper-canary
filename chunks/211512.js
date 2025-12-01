n.d(t, { I: () => a }), n(388685), n(457542);
var r = n(54381),
    l = n(473749),
    i = n(481060),
    o = n(550964);
function a(e) {
    let { node: t } = e,
        { useLabel: n, useTitle: a, useSubtitle: s, useVariant: c, useDisabled: u, onClick: d } = t,
        [f, p] = l.useState(!1),
        b = l.useCallback(() => {
            let e = d();
            e instanceof Promise && (p(!0), e.finally(() => p(!1)));
        }, [d]),
        y = a(),
        g = null == s ? void 0 : s(),
        v = n(),
        m = null == c ? void 0 : c(),
        h = null == u ? void 0 : u();
    return (0, r.jsx)(o.X, {
        children: (0, r.jsx)(i.gNt, {
            label: y,
            description: g,
            disabled: h,
            layout: "horizontal",
            children: (0, r.jsx)(i.Button, {
                onClick: b,
                text: v,
                variant: m,
                disabled: h,
                loading: f,
            }),
        }),
    });
}
