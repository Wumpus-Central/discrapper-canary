n.d(t, { v: () => s });
var r = n(627968),
    i = n(397927),
    a = n(244242);
function s(e) {
    var t;
    let { node: n } = e,
        {
            useValue: s,
            setValue: o,
            useTitle: l,
            useSubtitle: c,
            useDisabled: u,
            useDisabledMessage: d,
            useBadge: f,
            hasIcon: p,
        } = n,
        _ = l(),
        h = null == c ? void 0 : c(),
        m = s(),
        g = null != (t = null == u ? void 0 : u()) && t,
        E = null == d ? void 0 : d(),
        b = null == f ? void 0 : f();
    return (0, r.jsxs)(a.L, {
        children: [
            (0, r.jsx)(i.dOG, {
                label: _,
                description: h,
                badge: b,
                checked: m,
                hasIcon: p,
                onChange: (e) => o(e),
                disabled: g,
            }),
            g && null != E
                ? (0, r.jsx)(i.po8, {
                      messageType: i.YCn.WARNING,
                      children: E,
                  })
                : null,
        ],
    });
}
