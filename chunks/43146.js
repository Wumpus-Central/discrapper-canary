n.d(t, { v: () => r });
var i = n(627968),
    s = n(397927),
    a = n(791498),
    l = n(244242);
function r(e) {
    let { node: t } = e,
        {
            useValue: n,
            setValue: r,
            useTitle: o,
            useSubtitle: c,
            useDisabled: d,
            useDisabledMessage: u,
            useBadge: _,
            hasIcon: m,
        } = t,
        A = o(),
        g = c?.(),
        h = n(),
        x = d?.() ?? !1,
        p = u?.(),
        E = _?.(),
        C = (0, a.q)(t);
    return (0, i.jsxs)(l.L, {
        children: [
            (0, i.jsx)(s.dOG, {
                label: A,
                description: g,
                badge: E,
                checked: h,
                hasIcon: m,
                onChange: (e) => {
                    C(), r(e);
                },
                disabled: x,
            }),
            x && null != p ? (0, i.jsx)(s.po8, { messageType: s.YCn.WARNING, children: p }) : null,
        ],
    });
}
