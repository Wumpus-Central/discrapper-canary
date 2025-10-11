n.d(t, { I: () => i });
var r = n(951288),
    l = n(481060),
    o = n(550964);
function i(e) {
    let { node: t } = e,
        { useLabel: n, useTitle: i, useSubtitle: a, useVariant: s, useDisabled: c, onClick: u } = t,
        d = i(),
        f = null == a ? void 0 : a(),
        m = n(),
        b = null == s ? void 0 : s(),
        p = null == c ? void 0 : c();
    return (0, r.jsx)(o.X, {
        children: (0, r.jsx)(l.gNt, {
            label: d,
            description: f,
            disabled: p,
            layout: "horizontal",
            children: (0, r.jsx)(l.Button, {
                onClick: u,
                text: m,
                variant: b,
                disabled: p,
            }),
        }),
    });
}
