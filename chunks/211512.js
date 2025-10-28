n.d(t, { I: () => i });
var r = n(951288),
    o = n(481060),
    l = n(550964);
function i(e) {
    let { node: t } = e,
        { useLabel: n, useTitle: i, useSubtitle: a, useVariant: c, useDisabled: s, onClick: u } = t,
        d = i(),
        f = null == a ? void 0 : a(),
        b = n(),
        p = null == c ? void 0 : c(),
        y = null == s ? void 0 : s();
    return (0, r.jsx)(l.X, {
        children: (0, r.jsx)(o.gNt, {
            label: d,
            description: f,
            disabled: y,
            layout: "horizontal",
            children: (0, r.jsx)(o.Button, {
                onClick: u,
                text: b,
                variant: p,
                disabled: y,
            }),
        }),
    });
}
