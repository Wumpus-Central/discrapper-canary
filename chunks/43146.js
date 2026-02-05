n.d(t, { v: () => a });
var i = n(627968),
    s = n(397927),
    r = n(244242);
function a(e) {
    let { node: t } = e,
        {
            useValue: n,
            setValue: a,
            useTitle: l,
            useSubtitle: o,
            useDisabled: c,
            useDisabledMessage: d,
            useBadge: u,
            hasIcon: _,
        } = t,
        m = l(),
        A = o?.(),
        g = n(),
        E = c?.() ?? !1,
        h = d?.(),
        p = u?.();
    return (0, i.jsxs)(r.L, {
        children: [
            (0, i.jsx)(s.dOG, {
                label: m,
                description: A,
                badge: p,
                checked: g,
                hasIcon: _,
                onChange: (e) => a(e),
                disabled: E,
            }),
            E && null != h ? (0, i.jsx)(s.po8, { messageType: s.YCn.WARNING, children: h }) : null,
        ],
    });
}
