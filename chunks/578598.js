t.d(n, { D: () => m });
var l = t(627968),
    r = t(64700),
    i = t(834730),
    s = t(452027),
    a = t(331322),
    o = t(821609),
    c = t(933297),
    d = t(791498),
    u = t(244242);
function x(e) {
    let { trailingContent: n } = e;
    return (0, l.jsx)(n.StronglyDiscouragedCustomComponent, {});
}
function j(e) {
    let { trailingContent: n } = e,
        t = n.useText();
    return (0, l.jsx)(i.E, { variant: "text-md/medium", children: t });
}
function h(e) {
    let { trailingContent: n } = e;
    switch (n.type) {
        case c._1.TEXT:
            return (0, l.jsx)(j, { trailingContent: n });
        case c._1.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, l.jsx)(x, { trailingContent: n });
    }
}
function m(e) {
    let { node: n } = e,
        {
            useLabel: t,
            useTitle: i,
            useAriaLabel: c,
            useSubtitle: x,
            useVariant: j,
            useDisabled: m,
            useTrailingContent: f,
            onClick: p,
        } = n,
        [y, g] = r.useState(!1),
        v = (0, d.q)(n),
        A = i(),
        N = x?.(),
        b = t(),
        k = c?.(),
        E = j?.(),
        T = m?.(),
        S = f?.();
    return (0, l.jsx)(u.L, {
        children: (0, l.jsx)(s.D, {
            label: A,
            description: N,
            disabled: T,
            layout: "horizontal",
            children: (0, l.jsxs)(a.B, {
                direction: "horizontal",
                align: "center",
                justify: "end",
                gap: "md",
                children: [
                    null != S && (0, l.jsx)(h, { trailingContent: S }),
                    (0, l.jsx)(o.$, {
                        onClick: () => {
                            v();
                            let e = p();
                            e instanceof Promise && (g(!0), e.finally(() => g(!1)));
                        },
                        text: b,
                        "aria-label": k,
                        variant: E,
                        disabled: T,
                        loading: y,
                    }),
                ],
            }),
        }),
    });
}
