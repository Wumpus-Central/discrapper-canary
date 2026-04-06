n.d(t, { D: () => m });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(933297),
    r = n(791498),
    o = n(244242);
function d(e) {
    let { trailingContent: t } = e;
    return (0, i.jsx)(t.StronglyDiscouragedCustomComponent, {});
}
function c(e) {
    let { trailingContent: t } = e,
        n = t.useText();
    return (0, i.jsx)(l.Text, { variant: "text-md/medium", children: n });
}
function u(e) {
    let { trailingContent: t } = e;
    switch (t.type) {
        case a._1.TEXT:
            return (0, i.jsx)(c, { trailingContent: t });
        case a._1.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, i.jsx)(d, { trailingContent: t });
    }
}
function m(e) {
    let { node: t } = e,
        {
            useLabel: n,
            useTitle: a,
            useAriaLabel: d,
            useSubtitle: c,
            useVariant: m,
            useDisabled: g,
            useTrailingContent: _,
            onClick: x,
        } = t,
        [A, h] = s.useState(!1),
        p = (0, r.q)(t),
        T = a(),
        f = c?.(),
        S = n(),
        E = d?.(),
        b = m?.(),
        C = g?.(),
        N = _?.();
    return (0, i.jsx)(o.L, {
        children: (0, i.jsx)(l.D0$, {
            label: T,
            description: f,
            disabled: C,
            layout: "horizontal",
            children: (0, i.jsxs)(l.BJc, {
                direction: "horizontal",
                align: "center",
                justify: "end",
                gap: "md",
                children: [
                    null != N && (0, i.jsx)(u, { trailingContent: N }),
                    (0, i.jsx)(l.Button, {
                        onClick: () => {
                            p();
                            let e = x();
                            e instanceof Promise && (h(!0), e.finally(() => h(!1)));
                        },
                        text: S,
                        "aria-label": E,
                        variant: b,
                        disabled: C,
                        loading: A,
                    }),
                ],
            }),
        }),
    });
}
