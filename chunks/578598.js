n.d(t, { D: () => o });
var i = n(627968),
    s = n(64700),
    a = n(397927),
    l = n(791498),
    r = n(244242);
function o(e) {
    let { node: t } = e,
        { useLabel: n, useTitle: o, useSubtitle: c, useVariant: d, useDisabled: u, onClick: _ } = t,
        [m, A] = s.useState(!1),
        g = (0, l.q)(t),
        h = o(),
        x = c?.(),
        p = n(),
        E = d?.(),
        C = u?.();
    return (0, i.jsx)(r.L, {
        children: (0, i.jsx)(a.D0$, {
            label: h,
            description: x,
            disabled: C,
            layout: "horizontal",
            children: (0, i.jsx)(a.Button, {
                onClick: () => {
                    g();
                    let e = _();
                    e instanceof Promise && (A(!0), e.finally(() => A(!1)));
                },
                text: p,
                variant: E,
                disabled: C,
                loading: m,
            }),
        }),
    });
}
