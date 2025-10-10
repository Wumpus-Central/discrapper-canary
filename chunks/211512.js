n.d(t, { I: () => o });
var r = n(951288),
    l = n(481060);
function o(e) {
    let { node: t } = e,
        { useLabel: n, useTitle: o, useSubtitle: i, useVariant: a, useDisabled: s, onClick: c } = t,
        u = o(),
        d = null == i ? void 0 : i(),
        f = n(),
        b = null == a ? void 0 : a(),
        m = null == s ? void 0 : s();
    return (0, r.jsx)(l.gNt, {
        label: u,
        description: d,
        disabled: m,
        children: (0, r.jsx)(l.zxk, {
            onClick: c,
            text: f,
            variant: b,
            disabled: m,
        }),
    });
}
