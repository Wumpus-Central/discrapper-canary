n.d(t, { I: () => a }), n(388685), n(457542);
var r = n(951288),
    l = n(647438),
    o = n(481060),
    i = n(550964);
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
        x = null == u ? void 0 : u();
    return (0, r.jsx)(i.X, {
        children: (0, r.jsx)(o.gNt, {
            label: y,
            description: j,
            disabled: x,
            layout: "horizontal",
            children: (0, r.jsx)(o.Button, {
                onClick: p,
                text: m,
                variant: v,
                disabled: x,
                loading: f,
            }),
        }),
    });
}
